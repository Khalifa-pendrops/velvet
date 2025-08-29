import React, { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const About = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
      id="about"
      className="flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-6 h-full md:h-screen mt-[8rem] md:mt-[6rem]  "
    >
      <div
        {...animationPropsLeft}
        className="items-center md:items-start text-center  flex flex-col justify-center gap-6 w-full md:w-1/2 "
      >
        <h1 className="text-2xl sm:text-2xl lg:text-4xl font-bold text-[#212635]">
          About Twelvet
        </h1>
        <p className="w-[90%] text-sm md:text-base  text-[#65677e] md:text-start ">
          At Twelvet Educational Development Services, we believe that effective
          administration is the bedrock of a thriving school. Since our founding
          in 2021, we&apos;ve proudly supported schools and small businesses in
          managing their administrative complexities, freeing up valuable time
          and resources. Our vision is clear: to support your school with our
          best practice administrative leadership, hands-on supervision, robust
          training programs, responsive HR support and solutions and Igbo
          language tutoring and curriculum support that directly addresses your
          school&apos;s unique needs. <br />
          We recognize the dedication required to lead a successful school, and
          our customized solutions are built to make a significant, positive
          impact on your daily operations.
        </p>
        {/* <button
          onClick={() => setIsOpen(true)}
          className="bg-[#401a6d] text-white px-4 md:px-6 py-2 rounded-full hover:bg-white hover:text-[#401a6d]  hover:border font-bold  "
        >
          Read More
        </button> */}
      </div>
      <div
        {...animationPropsRight}
        className="w-[100%] md:w-[600px] h-[60%] mx-auto flex items-center justify-center "
      >
        <Image
          className="w-full md:w-[90%] h-[100%] shadow-2xl rounded-2xl "
          src="/cleanup.png"
          width={500}
          height={300}
          alt="about image"
        />
      </div>
    </section>
  );
};

export default About;
