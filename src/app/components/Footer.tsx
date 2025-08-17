"use client";

import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaDiscord, FaWhatsapp } from "react-icons/fa";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      console.log("Submitted newsletter to backend: ", data);

      // if (!res.ok) throw new Error(data.error || "Something went wrong");

      setStatus("success");
      setMessage(
        "You have subscribed successfully to Velvet Educational Services newsletter!"
      );
      setEmail("");
    } catch (err) {
      console.error("Error subscribing to newsletter:", err);
      setStatus("error");
      setMessage("Error subscribing to newsletter");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };
  return (
    <footer
      id="footer"
      className=" w-full bg-[#401a6d] md:h-[20rem] flex flex-col justify-center gap-[3rem] md:px-[7rem] p-4"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center md:gap-0 gap-6">
        <Link href="#" className="flex items-center gap-4 ">
          <div className="flex justify-center items-center border-none w-[30px] h-[30px] rounded-full bg-amber-600 ">
            <span className="w-[20px] h-[20px] rounded-full bg-[#401a6d]/80 "></span>
          </div>
          <h2 className="text-white ">Twelvet</h2>
        </Link>
        <div className="flex items-center md:justify-center gap-2 ">
          <a
            href="https://wa.me/qr/RZTVAG3BG4RIM1"
            className="hover:text-green-500 transition-colors "
          >
            <FaWhatsapp
              size={32}
              className="text-white hover:text-green-500 transition-colors "
            />
          </a>
          <a
            href="https://www.facebook.com/share/1ANSA2tN6Y/"
            className="hover:text-blue-600 transition-colors "
          >
            <FaFacebook
              size={32}
              className="text-white hover:text-blue-700 transition-colors "
            />
          </a>
          <a href="https://www.instagram.com">
            <FaInstagram
              size={32}
              className="text-white hover:text-pink-500 transition-colors"
            />
          </a>
          <a href="https://www.discord.com">
            <FaDiscord
              size={32}
              className="text-white hover:text-black transition-colors "
            />
          </a>
        </div>
      </div>
      <form onSubmit={handleSubscribe} className=" flex flex-col gap-4 ">
        {/* {status === "success" && (
          <div className="mb-4 p-3 rounded bg-green-500 text-white text-center">
            Velvet newsletter subscription was successfully! 🎉
          </div>
        )}
        {status === "error" && (
          <div className="mb-4 p-3 rounded bg-red-500 text-white text-center">
            Oooops! Something went wrong with your subscription 🥺
          </div>
        )} */}

        {status !== "idle" && (
          <div
            className={`mb-4 p-2 rounded text-white text-center ${
              status === "success"
                ? "bg-green-500"
                : status === "error"
                ? "bg-red-500"
                : ""
            }`}
          >
            {message}
          </div>
        )}

        <div className="flex flex-col gap-4">
          {" "}
          <p className="text-white text-base md:text-xl ">
            Subscribe to our newsletter
          </p>
          <div className=" md:w-1/2 flex gap-4 flex-col md:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className=" px-4 py-2 rounded-lg md:rounded-full bg-white w-full  md:w-1/2 "
              placeholder="Enter your email "
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="hover:border hover:bg-[#401a6d] hover:text-white rounded-md px-6 py-2 md:py-0 bg-white w-[4rem] md:w- font-extrabold "
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </form>
      <p className="text-center text-white ">
        &copy; {new Date().getFullYear()}
        <span className="text-amber-600 "> Velvet Educational</span> Services.
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
