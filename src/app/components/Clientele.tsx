import React from "react";
import Image from "next/image";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const Clientele = () => {
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
      id="clientele"
      className=" flex flex-col-reverse md:flex-row-reverse items-center justify-center md:justify-between gap-6 w-full mx-auto h-full md:h-screen md:px-[4rem] bg-[#ffdcd8] mt-[5rem] md:mt-0 pt-6 "
    >
      <div
        {...animationPropsLeft}
        className="w-[100%] md:w-[600px] h-[60%] mx-auto flex items-center justify-center "
      >
        <Image
          className="w-full md:w-[90%] h-[100%] shadow-2xl md:rounded-2xl "
          src="/cleanup.png"
          width={500}
          height={300}
          alt="about image"
        />
      </div>

      <div
        {...animationPropsRight}
        className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-6 text-center "
      >
        <h1 className="text-2xl sm:text-2xl lg:text-4xl font-bold text-[#112133]">
          Clientele
        </h1>
        <p className="w-full  text-sm md:text-base text-[#483959] md:text-start self-start px-2 md:px-0 ">
          We provide high-quality administrative solutions to a diverse range of
          clients, including schools and small businesses. Our clients are often
          successful entrepreneurs or professionals who hold senior positions in
          multinational corporations, or have thriving businesses both
          domestically and internationally. This variety in our clientele means
          we have experience supporting a wide array of industries.
        </p>
        <div className="flex flex-col items-center md:items-start justify-center gap-6 w-full px-2 md:px-0">
          <p className="text-start md:text-base text-[#483959] px-2 md:px-0 ">
            Twelvet helps these clients remain profitable by offering
            competitive administrative solutions that meet their specific needs.
          </p>
          <div className="flex flex-col justify-center items-center gap-4 w-full ">
            <div className="flex items-center justify-cente gap-2  w-full  ">
              <span className="text-xl text-yellow-400  w-10 h-10 rounded-full flex items-center justify-center bg-[#fff] ">
                {"\u2B50"}
              </span>
              <p className="text-[14px] md:text-base text-[#121e30] ">
                Rich Learners Academy, Omoku Rivers State
              </p>
            </div>
            <div className="flex items-center justify-cente gap-2  w-full  ">
              <span className="text-xl text-yellow-400  w-10 h-10 rounded-full flex items-center justify-center bg-[#fff] ">
                {"\u2B50"}
              </span>
              <p className="text-[14px] md:text-base text-[#121e30] ">
                Teko School, Port-Harcourt
              </p>
            </div>
            <div className="flex items-center justify-cente gap-2  w-full  ">
              <span className="text-xl text-yellow-400  w-10 h-10 rounded-full flex items-center justify-center bg-[#fff] ">
                {"\u2B50"}
              </span>
              <p className="text-[14px] md:text-base text-[#121e30] ">
                Golden Citadel School, Port-Harcourt
              </p>
            </div>
            <div className="flex items-center justify-cente gap-2  w-full  ">
              <span className="text-xl text-yellow-400  w-10 h-10 rounded-full flex items-center justify-center bg-[#fff] ">
                {"\u2B50"}
              </span>
              <p className="text-[14px] md:text-base text-[#121e30] text-start ">
                Association for Formidable Educational Development
              </p>
            </div>
            <div className="flex items-center justify-cente gap-2  w-full  ">
              <span className="text-xl text-yellow-400  w-10 h-10 rounded-full flex items-center justify-center bg-[#fff] ">
                {"\u2B50"}
              </span>
              <p className="text-[14px] md:text-base text-[#121e30] ">
                Irisfield School, Port-Harcourt
              </p>
            </div>
            <div className="flex items-center justify-cente gap-2  w-full  ">
              <span className="text-xl text-yellow-400  w-10 h-10 rounded-full flex items-center justify-center bg-[#fff] ">
                {"\u2B50"}
              </span>
              <p className="text-[14px] md:text-base text-[#121e30] ">
                Francis-Leon Academy, Amawbia Anambra State
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clientele;
