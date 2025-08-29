"use client";

import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

interface CardProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

const cards: CardProps[] = [
  {
    id: 1,
    title: "Leadership Experience",
    description:
      "With over a  decade in  school administration, Twelvet brings a wealth of practical knowledge regarding the strategic landscape of education. Our administrative perspective offers targeted insights and robust support.",
    image: "/fr1.jpg",
  },
  {
    id: 2,
    title: "School Set-up",
    description:
      "Building a new school is a monumental task, and the process can be overwhelming. From creating engaging classroom environments to setting up efficient administrative offices that support seamless school operations, every detail matters. We specialize in providing comprehensive school setup solutions, handling everything from the initial design to the final touches. Our goal is to create functional, inspiring, and safe learning spaces that empower both students and staff. Let us handle the complexities of setting up your new school so you can focus on what you do best: educating the next generation.",
    image: "/fr2.jpg",
  },
  {
    id: 3,
    title: "Supervision",
    description:
      "Overseeing administrative operations and providing HR assistance.",
    image: "/cleanup.png",
  },
  {
    id: 4,
    title: "Training Focuses",
    description:
      "Enhancing customer service, fostering positive culture, strengthening stakeholder engagement, and improving family-school relationships.Building digital presence for schools.Compliance standards, guidelines, and policies.",
    image: "/fr5.jpg",
  },
  {
    id: 5,
    title: "The Path to Automation",
    description:
      "Optimizing Operations with Google Workspace Tools, Invoicing Solutions, and More.",
    image: "/fr6.jpg",
  },
  {
    id: 6,
    title: "Event and Meeting Coordination",
    description:
      "Assisting with the planning and execution of school events (e.g., parent-teacher conferences, assemblies, graduations).",
    image: "/fr7.jpg",
  },
  {
    id: 7,
    title: "Communication and Outreach",
    description:
      "Assisting with internal and external communication efforts. Helping to prepare website updates,  newsletters, announcements, and notices.",
    image: "/cleanup.png",
  },
  {
    id: 8,
    title: "Brainstorming Sessions",
    description:
      "Our brainstorming sessions are designed to unlock the full potential of your school community. We provide a structured yet dynamic environment where teachers, administrators, and students can collaborate to generate fresh, innovative solutions.Through guided exercises and a focus on open communication, we help teams tackle challenges, develop new programs, and refine existing strategies. The result is a vibrant culture of collaboration that leads to actionable ideas and lasting positive change.",
    image: "/f3.jpg",
  },
  {
    id: 9,
    title: "Igbo language tutoring and curriculum support",
    description:
      "We offer comprehensive Igbo language and curriculum support for both schools and individuals. Our services are designed to help students, educators, and learners of all ages master the Igbo language, culture, and history.",
    image: "/fr4.jpg",
  },
];

const Services: React.FC = () => {
  const [showAll, setShowAll] = useState<{ [key: number]: boolean }>({});
  const [needsButton, setNeedsButton] = useState<{ [key: number]: boolean }>(
    {}
  );

  const animationProps = useScrollAnimation({
    direction: "up",
    distance: 150,
    duration: 1.2,
    easing: "linear",
    once: false,
  });

  const animationPropsHead = useScrollAnimation({
    direction: "left",
    distance: 150,
    duration: 1.2,
    easing: "linear",
    once: false,
  });

  //use useEffect hook to detect which card needs button
  useEffect(() => {
    cards.forEach((card) => {
      const el = document.getElementById(`desc-${card.id}`);
      if (el) {
        setNeedsButton((prev) => ({
          ...prev,
          [card.id]: el.scrollHeight > 40,
        }));
      }
    });
  }, []);

  const expansionToggle = (id: number) => {
    setShowAll((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="services"
      className="bg-[#dbe8ff] w-full h-full  mt-[6rem] md:mt-0 flex flex-col justify-center items-start gap-4 py-8 "
    >
      <h1
        {...animationPropsHead}
        className="text-2xl sm:text-2xl lg:text-4xl font-bold text-[#212635] ml-4"
      >
        Our Services
      </h1>
      <div {...animationProps}>
        <div className="flex flex-col items-center justify-center gap-2 w-full h-full  mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {cards.map((card) => {
              const isExpanded = showAll[card.id] || false;
              const showButton = needsButton[card.id] || false;

              return (
                <div
                  key={card.id}
                  className="relative bg-white shadow-lg rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer  "
                >
                  <div className="relative w-[100%] h-100 mx-auto ">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover rounded-md "
                      priority
                    />
                  </div>
                  <div className=" w-full p-2 ">
                    <h3 className="text-lg font-semibold my-2 ">
                      {card.title}
                    </h3>

                    <div
                      className={`relative overflow-hidden transition-all duration-300 ${
                        isExpanded ? "max-h-[400px]" : "max-h-[80px]"
                      }`}
                    >
                      <p
                        id={`desc-${card.id}`}
                        className="text-gray-600 text-sm leading-relaxed"
                      >
                        {card.description}
                      </p>

                      {!isExpanded && showButton && (
                        <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                      )}
                    </div>
                    {showButton && (
                      <button
                        onClick={() => expansionToggle(card.id)}
                        className="mt-2 text-gray-500 hover:text-gray-700 text-sm font-medium focus:outline-none cursor-pointer "
                      >
                        {isExpanded ? "See Less" : "See More"}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
