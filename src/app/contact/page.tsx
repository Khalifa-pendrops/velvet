"use client";

import React, { useState } from "react";


interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const MESSAGE_LIMIT = 1000;

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState<Partial<FormData>>({});
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  // Validate all fields and return error if need be
  const validateForm = (data: FormData) => {
    const newErrors: Partial<FormData> = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!data.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!data.message.trim()) {
      newErrors.message = "Message is required";
    } else if (data.message.length > MESSAGE_LIMIT) {
      newErrors.message = `Message cannot exceed ${MESSAGE_LIMIT} characters`;
    }

    return newErrors;
  };

  // validation on input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    const newErrors = validateForm(updatedData);
    setError(newErrors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateForm(formData);
    setError(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setFormStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      //fix domain SMTP and uncomment this part

      // if (!res.ok) throw new Error("Failed to submit form");
      // console.log(res);

      const data = await res.json();
      console.log("submitted form to backend:", data);

      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setFormStatus("idle"), 3000);
    } catch (err) {
      console.error("error submitting form:", err);
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  return (
    <section
      id="contact"
      className=" w-full h-screen mx-auto flex flex-col md:flex-row items-center justify-center gap-6 pt-8 px-4 bg-[#3b9393] "
    >
      <div className=" items-center text-center  flex flex-col justify-center gap-6 w-full md:w-1/2 mt-8">
        <h1 className="text-2xl sm:text-2xl lg:text-4xl font-bold text-[#112133]">
          Contact Me
        </h1>
        <p className="w-[100%] text-sm md:text-xl text-[#483959]">
          We would be delighted to schedule a meeting at your earliest
          convenience to discuss your specific administrative needs in more
          detail and present a customized service plan. You can reach us on
        </p>
      </div>
      <div className=" shadow shadow-gray-600 rounded-lg w-full md:w-[691px] min-h-[auto] flex flex-col gap- items-center md:items-start p-4 md:px-6 justify-center  ">
        {formStatus === "success" && (
          <div className="mb-4 p-3 rounded bg-green-500 text-white text-center">
            Form submitted successfully! 🎉
          </div>
        )}
        {formStatus === "error" && (
          <div className="mb-4 p-3 rounded bg-red-500 text-white text-center">
            Please check the form for errors. 🥺
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className=" w-full max-w-[100%] flex flex-col gap-4 justify-center  "
        >
          <label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="border border-gray-500 hover:border-[#e8bf31] w-full h-12 px-3 rounded-sm"
            />
          </label>
          {error.name && <p className="text-sm text-red-500">{error.name}</p>}

          <label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="border border-gray-500 hover:border-[#e8bf31] w-full h-12 px-3 rounded-sm"
            />
          </label>
          {error.email && <p className="text-sm text-red-500">{error.email}</p>}

          <label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className="border border-gray-500 hover:border-[#e8bf31] w-full h-12 px-3 rounded-sm"
            />
          </label>
          {error.subject && (
            <p className="text-sm text-red-500">{error.subject}</p>
          )}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Message"
            className="border border-gray-500 hover:border-[#e8bf31] w-full min-h-[139px] px-3 py-2 rounded-sm"
          ></textarea>

          <div className="flex justify-between text-sm mt-1">
            {error.message && (
              <p className="text-sm text-red-500">{error.message}</p>
            )}
            <span className="text-contact-btn font-bold">
              {formData.message.length} / {MESSAGE_LIMIT}
            </span>
          </div>

          <button
            type="submit"
            className="rounded px-4 py-2 font-bold text-base text-white bg-[#401a6d] hover:bg-[#401a6d]/60 transition-colors duration-300 hover:border hover:border-[#e8bf31] w-[10rem] cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
