import React from "react";
import Image from "next/image";

const Clientele = () => {
  return (
    <section
      id="clientele"
      className=" flex flex-col-reverse md:flex-row-reverse items-center justify-center md:justify-between gap-6 w-full mx-auto md:px-[4rem] my-[3rem]"
    >
      <div className="items-center text-center  flex flex-col justify-center gap-4 w-full md:w-1/2  ">
        <div className="flex flex-col items-center gap-4 p-4 w-full">
          <div className="flex items-center gap-2 flex-col md:flex-row flex-1 w-full ">
            <div className=" flex flex-col justify-center items-start text-center px-4 py-2 w-full bg-[#112133] rounded-md ">
              <Image
                src="/profile.svg"
                alt="globe icon"
                width={50}
                height={50}
                className="w-[50px]"
              />
              <div className="py-2 flex flex-col justify-center gap-1 ">
                <h6 className="text-[9px] md:text-[10px] text-[#f0f1f2] font-bold text-start">
                  Rich Learners Academy
                </h6>
                <div className="flex items-center gap-1 ">
                  <Image
                    src="/globe.svg"
                    alt="globe icon"
                    width={15}
                    height={15}
                  />
                  <span className="text-[6px] md:text-[8px] text-[#f0f1f2] ">
                    Omoku Rivers State
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-start text-start px-4 py-2 w-full bg-[#112133] rounded-md ">
              <Image
                src="/profile.svg"
                alt="globe icon"
                width={100}
                height={100}
                className="w-[50px]"
              />
              <div className="py-2 flex flex-col justify-center gap-1  ">
                <h6 className="text-[9px] md:text-[10px] text-[#f0f1f2] text-start font-bold ">
                  Teko School
                </h6>
                <div className="flex items-center gap-1 ">
                  <Image
                    src="/globe.svg"
                    alt="globe icon"
                    width={15}
                    height={15}
                  />
                  <span className="text-[6px] md:text-[8px] text-[#f0f1f2] ">
                    Port-Harcourt
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-start text-start px-4 py-2 w-full bg-[#112133] rounded-md ">
              <Image
                src="/profile.svg"
                alt="globe icon"
                width={100}
                height={100}
                className="w-[50px]"
              />
              <div className="py-2 flex flex-col justify-center gap-1 ">
                <h6 className="text-[9px] md:text-[10px] text-[#f0f1f2] font-bold">
                  Golden Citadel School
                </h6>
                <div className="flex items-center gap-1">
                  <Image
                    src="/globe.svg"
                    alt="globe icon"
                    width={15}
                    height={15}
                  />
                  <span className="text-[6px] md:text-[8px] text-[#f0f1f2] ">
                    Port-Harcourt
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-col md:flex-row flex-1 w-full ">
            <div className=" flex flex-col justify-center items-start text-center px-4 py-2 w-full bg-[#112133] rounded-md">
              <Image
                src="/profile.svg"
                alt="globe icon"
                width={100}
                height={100}
                className="w-[50px]"
              />
              <div className="py-2 flex flex-col justify-center gap-1 ">
                <h6 className="text-[9px] md:text-[10px] text-[#f0f1f2] text-start ">
                  Association for Formidable Educational Development
                </h6>
                {/* <div className="flex items-center gap-2">
                    <Image
                      src="/globe.svg"
                      alt="globe icon"
                      width={20}
                      height={20}
                    />
                    <span className="text-[.8rem] md:text-[12px] text-[#f0f1f2] ">
                      Omoku Rivers State
                    </span>
                  </div> */}
              </div>
            </div>
            <div className=" flex flex-col justify-center items-start text-center px-4 py-2 w-full bg-[#112133] rounded-md ">
              <Image
                src="/profile.svg"
                alt="globe icon"
                width={100}
                height={100}
                className="w-[50px]"
              />
              <div className="py-2 flex flex-col justify-center gap-1 ">
                <h6 className="text-[9px] md:text-[10px] text-[#f0f1f2] text-start font-bold ">
                  Irisfield School
                </h6>
                <div className="flex items-center gap-2">
                  <Image
                    src="/globe.svg"
                    alt="globe icon"
                    width={15}
                    height={15}
                  />
                  <span className="text-[6px] md:text-[8px] text-[#f0f1f2] ">
                    Port-Harcourt
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-start text-center px-4 py-2 w-full bg-[#112133] rounded-md ">
              <Image
                src="/profile.svg"
                alt="globe icon"
                width={100}
                height={100}
                className="w-[50px]"
              />
              <div className="py-2 flex flex-col justify-center gap-1 ">
                <h6 className="text-[9px] md:text-[10px] text-[#f0f1f2] font-bold text-start ">
                  Francis-Leon Academy
                </h6>
                <div className="flex items-center gap-2">
                  <Image
                    src="/globe.svg"
                    alt="globe icon"
                    width={15}
                    height={15}
                  />
                  <span className="text-[6px] md:text-[8px] text-[#f0f1f2] text-start ">
                    Amawbia Anambra State
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-col md:flex-row flex-1 w-full ">
            {/* CHANGE THE WIDTH OF THID DIV WHEN OTHER CLIENTELE IS ADDED */}
            <div className=" flex flex-col justify-center items-start text-center px-4 py-2 w-full bg-[#112133] rounded-md md:w-[12rem]">
              <Image
                src="/profile.svg"
                alt="globe icon"
                width={100}
                height={100}
                className="w-[50px]"
              />
              <div className="py-2 flex flex-col justify-center gap-1 ">
                <h6 className="text-[9px] md:text-[10px] text-[#f0f1f2] text-start font-bold ">
                  Ofe'Oma Ventures
                </h6>
                <div className="flex items-center gap-2">
                  <Image
                    src="/globe.svg"
                    alt="globe icon"
                    width={15}
                    height={15}
                  />
                  <span className="text-[6px] md:text-[8px] text-[#f0f1f2] ">
                    Omoku Rivers State
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-4 text-center ">
        <h1 className="text-2xl sm:text-2xl lg:text-4xl font-bold text-[#112133]">
          Our Clientele
        </h1>
        <p className="w-full px-4 text-sm md:text-base text-[#483959]">
          We provide high-quality administrative solutions to a diverse range of
          clients, including schools and small businesses. Our clients are often
          successful entrepreneurs or professionals who hold senior positions in
          multinational corporations, or have thriving businesses both
          domestically and internationally. This variety in our clientele means
          we have experience supporting a wide array of industries. Twelvet
          helps these clients remain profitable by offering competitive
          administrative solutions that meet their specific needs.
        </p>
      </div>
    </section>
  );
};

export default Clientele;
