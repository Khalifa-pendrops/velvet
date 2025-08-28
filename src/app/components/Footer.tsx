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
      className=" w-full bg-[#800080] md:h-[40vh] flex flex-col justify-center gap-[3rem] md:px-[7rem] p-4 mt-[5rem] md:mt-0"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center md:gap-0 gap-6">
        <Link href="#" className="flex items-center gap-4 ">
          {/* <div className="flex justify-center items-center border-none w-[40px] h-[40px] rounded-full bg-amber-600">
            <Image
              src="/twevlogo.png"
              alt="hero image"
              width={500}
              height={500}
              className="w-[40px] h-[40px] rounded-full "
            />
          </div> */}
          <h2 className="text-white font-bold md:text-xl">
            Twelvet Educational Development Services
          </h2>
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
          <p className="text-white text-sm md:text-lg ">
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
              className="w-[5rem] hover:border-none hover:bg-[#fff] rounded-full px-8 py-2 md:py-0 border border-[#FF7F50] font-extrabold text-[#fff] hover:text-[#800080] cursor-pointer "
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </form>
      <p className="text-center text-white ">
        &copy; {new Date().getFullYear()}
        <span className=" "> Velvet Educational </span> Development Services.
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
