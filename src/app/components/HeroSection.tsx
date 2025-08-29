import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const HeroSection = () => {

    const animationPropsRight = useScrollAnimation({
      direction: "right",
      distance: 150,
      duration: 1.2,
      easing: "linear",
      once: false,
    });
  
      const animationPropsLeft = useScrollAnimation({
        direction: "left",
        distance: 150,
        duration: 1.2,
        easing: "ease-out",
        once: false,
      });
  
  
  return (
    <section
      id="home"
      className="relative bg-[#800080] h-full md:h-[90vh] w-full mt-[5rem] md:mt-0"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 w-full h-[100vh] mx-auto   ">
        <div
          {...animationPropsRight}
          className=" items-center text-center md:text-start md:items-start  flex flex-col justify-center gap-6 w-full md:w-1/2  py-10 md:ml-[2rem] "
        >
          <h1 className="text-2xl sm:text-2xl lg:text-4xl font-bold text-[#ffffff]  ">
            Welcome to Twelvet
          </h1>
          <p className="w-[90%] text-sm md:text-xl text-[#ffffff]/70 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            tenetur laborum mollitia dolorem officia possimus debitis deleniti
            distinctio perferendis pariatur quos velit repellendus natus
            officiis maiores magni deserunt, dolor voluptatem?
          </p>
          <Link href="/contact">
            {" "}
            <button className="bg-[#800080] text-white px-4 md:px-6 py-2 rounded-full hover:bg-white hover:text-[#401a6d] border  border-[#FF7F50] hover:border-none  font-bold  ">
              Get in Touch
            </button>
          </Link>
        </div>
        <div
          {...animationPropsLeft}
          className=" w-[100%] md:w-[600px] h-[60%] mx-auto flex items-center justify-center mt-[5rem] "
        >
          <Image
            src="/celebrate.png"
            alt="hero image"
            width={500}
            height={300}
            
            className="w-full md:w-[90%] h-[100%] shadow-2xl rounded-2xl"
          />
        </div>
      </div>

      {/* Curved SVG at bottom */}
      <div className="absolute bottom-[-240px] left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(200%+1.3px)] h-[250px] "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1850 100"
          preserveAspectRatio="none"
        >
          <path
            d="M-20,0 C850,150 1200,-170 2000,00 L2000,00 L0,0 Z"
            className="fill-[#800080] "
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
