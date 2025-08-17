"use client";
import About from "./components/About";
import Clientele from "./components/Clientele";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center px-[0rem] bg-[#3b9393]">
      <HeroSection />
      <About />
      <Clientele />
      <Contact />
      <Footer />
    </div>
  );
}
