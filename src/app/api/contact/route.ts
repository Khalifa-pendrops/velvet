import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    console.log("Incoming request...");

    const body = await req.json();
    const { name, email, subject, message } = body;

    console.log("Body received: ", body);

    // Validation
    if (
      !name?.trim() ||
      !email?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }
    if (message.length > 1000) {
      return NextResponse.json(
        { error: "Message cannot exceed 1000 characters" },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const existing = await db.collection("messages").findOne({ email });
    
    if (existing) {
      return NextResponse.json(
        { error: "Email already exist!" },
        { status: 400 }
      );
    }
    await db.collection("messages").insertOne({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
    });

    console.log("Saved to MongoDB successfully");

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Velvet Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `New Contact Form Submission: ${subject}`,
        text: `
          Name: ${name}
          Email: ${email}
          Subject: ${subject}
          Message: ${message}
        `,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Subject:</b> ${subject}</p>
          <p><b>Message:</b> ${message}</p>
        `,
      });

      console.log("Email sent successfully");
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Continue anyway — user will still get a success response
      //we will use domain SMTP to get this working
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been saved. We will get back to you soon!",
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
