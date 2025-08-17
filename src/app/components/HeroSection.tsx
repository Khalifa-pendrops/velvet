import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => { 
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 w-full mx-auto  mt-22 "
    >
      <div className=" items-center text-center  flex flex-col justify-center gap-6 w-full md:w-1/2 ">
        <h1 className="text-2xl sm:text-2xl lg:text-4xl font-bold text-[#112133]">
          Welcome to Velvet
        </h1>
        <p className="w-[90%] text-sm md:text-xl text-[#483959]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          tenetur laborum mollitia dolorem officia possimus debitis deleniti
          distinctio perferendis pariatur quos velit repellendus natus officiis
          maiores magni deserunt, dolor voluptatem?
        </p>
        <Link href="/contact">
          {" "}
          <button className="bg-[#401a6d] text-white px-4 md:px-6 py-2 rounded-full hover:bg-white hover:text-[#401a6d]  hover:border font-bold  ">
            Get in Touch
          </button>
        </Link>
      </div>
      <div className=" w-[100%] md:w-[600px] mx-auto flex items-center justify-center ">
        <Image
          src="/velvetHero.jpg"
          alt="hero image"
          width={500}
          height={300}
          className="w-full md:w-[90%] "
        />
      </div>
    </section>
  );
};

export default HeroSection;
