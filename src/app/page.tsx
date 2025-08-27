"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Clientele from "./components/Clientele";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
// import MotionWrapper from "./components/MotionWrapper";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // animation duration (ms)
      easing: "ease-in-out", // default easing
      once: true, // whether animation should happen only once
    });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center px-[0rem] bg-[#fffff] ">
      {/* <section data-aos="fade-up" adat-aos-delay=''>
        {" "}
        <HeroSection />
      </section>
      <section data-aos="fade-up">
        <About />
      </section>
      <section data-aos="fade-up" data-aos-delay="200">
        <Clientele />
      </section>
      <section data-aos="fade-up" data-aos-delay="400">
        <Contact />
      </section>
      <section data-aos="fade-up" data-aos-delay="600" className="w-full ">
        <Footer />
      </section> */}

      {/* <MotionWrapper>
      <HeroSection data-aos="zoom-in" />
      </MotionWrapper> 
      <MotionWrapper>
        <About />
      </MotionWrapper>
      <MotionWrapper>
        <Clientele />
      </MotionWrapper>
      <MotionWrapper>
        <Contact />
      </MotionWrapper>  */}
      {/* <MotionWrapper>
        <Footer />
      </MotionWrapper> */}
      <HeroSection />
      <About />
      <Services />
      <Clientele />
      <Contact />
      <Footer />
    </div>
  );
}
