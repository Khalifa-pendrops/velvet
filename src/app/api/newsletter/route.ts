import { NextResponse } from "next/server";
import clientPromise from "../../../../lib/mongodb";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    //validate email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_URI);

    // Check if already subscribed
    const existing = await db.collection("subscribers").findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: "Email already subscribed" },
        { status: 400 }
      );
    }

    await db.collection("subscribers").insertOne({
      email,
      subscribedAt: new Date(),
    });

    // Send Email Notification to admin
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Velvet Newsletter" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Newsletter Subscription",
      text: `New subscriber: ${email}`,
      html: `<p><strong>New subscriber:</strong> ${email}</p>`,
    });

    return NextResponse.json({
      success: true,
      message: "Subscribed successfully!",
    });
  } catch (error) {
    console.error("Newsletter Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
