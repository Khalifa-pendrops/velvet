import React, { useState } from "react";
import Image from "next/image";

const About = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section
      id="about"
      className="flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-6 h-full md:h-screen mt-[6rem]  "
    >
      <div className="items-center md:items-start text-center  flex flex-col justify-center gap-6 w-full md:w-1/2 ">
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
      <div className="w-[100%] md:w-[600px] h-[60%] mx-auto flex items-center justify-center ">
        <Image
          className="w-full md:w-[90%] h-[100%] shadow-2xl rounded-2xl "
          src="/cleanup.png"
          width={500}
          height={300}
          alt="about image"
        />
      </div>

      {isOpen && (
        <div className="fixed inset-0  flex flex-col justify-center items-center bg-black/60 z-50 w-full ">
          <div className="relative bg-white rounded shadow-lg max-w-[100vw] h-[600px] max-h-[80vh] sm:h-[500px] xs:h-[400px] w-[90%] md:w-[60%] p-8  overflow-y-auto ">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-1 right-3 text-[2rem] hover:text-black text-gray-500 "
            >
              &times;
            </button>

            <h3 className="text-2xl mb-2 text-[#401a6d] md:text-3xl font-bold relative inline-block after:content-[''] after:block after:w-20 after:h-[2px] after:bg-[#401a6d]  ">
              Solutions
            </h3>

            <ul className="list-none list-outside text-gray-700 space-y-3 p-0 m-0 ">
              <li className="text-decoration-none ">
                <span className="font-bold text-base ">
                  Leadership Experience:{" "}
                </span>
                With over a decade in school administration, Twelvet brings a
                wealth of practical knowledge regarding the strategic landscape
                of education. Our administrative perspective offers targeted
                insights and robust support.
              </li>
              <li className="text-decoration-none ">
                <span className="font-bold text-base  ">School Set-up: </span>
                Building a new school is a monumental task, and the process can
                be overwhelming. From creating engaging classroom environments
                to setting up efficient administrative offices that support
                seamless school operations, every detail matters. We specialize
                in providing comprehensive school setup solutions, handling
                everything from the initial design to the final touches. Our
                goal is to create functional, inspiring, and safe learning
                spaces that empower both students and staff.Let us handle the
                complexities of setting up your new school so you can focus on
                what you do best: educating the next generation.
              </li>
              <li className="text-decoration-none ">
                <span className="font-bold text-base mr-1">Supervision:</span>
                Overseeing administrative operations and providing HR
                assistance.
              </li>
              <li className="text-decoration-none ">
                <span className="font-bold text-base mr-1">
                  Training Focuses:
                </span>
                Enhancing customer service, fostering positive culture,
                strengthening stakeholder engagement, and improving
                family-school relationships.Building digital presence for
                schools.Compliance standards, guidelines, and policies.
              </li>

              <li className="text-decoration-none ">
                <span className="font-bold text-base mr-1">
                  The Path to Automation:
                </span>
                Optimizing Operations with Google Workspace Tools, Invoicing
                Solutions, and More.
              </li>

              <li className="text-decoration-none ">
                <span className="font-bold text-base mr-1">
                  Event and Meeting Cordination:
                </span>
                Assisting with the planning and execution of school events
                (e.g., parent-teacher conferences, assemblies, graduations).
              </li>

              <li className="text-decoration-none ">
                <span className="font-bold text-base mr-1">
                  Communication and Outreach:
                </span>
                Assisting with internal and external communication efforts.
                Helping to prepare website updates, newsletters, announcements,
                and notices.
              </li>

              <li className="text-decoration-none ">
                <span className="font-bold text-base mr-1">
                  Brainstorming Sessions:
                </span>
                Our brainstorming sessions are designed to unlock the full
                potential of your school community. We provide a structured yet
                dynamic environment where teachers, administrators, and students
                can collaborate to generate fresh, innovative solutions.Through
                guided exercises and a focus on open communication, we help
                teams tackle challenges, develop new programs, and refine
                existing strategies. The result is a vibrant culture of
                collaboration that leads to actionable ideas and lasting
                positive change.
              </li>

              <li className="text-decoration-none ">
                <span className="font-bold text-base mr-1">
                  Igbo Language Tutoring and Curriculum Support:
                </span>
                We offer comprehensive Igbo language and curriculum support for
                both schools and individuals. Our services are designed to help
                students, educators, and learners of all ages master the Igbo
                language, culture, and history.
              </li>
            </ul>
            <h4 className="font-bold mt-4 text-base md:text-xl">For Schools</h4>
            <p>
              <span className="font-bold ">Curriculum Development:</span> We
              partner with schools to create and implement engaging Igbo
              language curricula that align with national and regional
              educational standards. <br />
              <span className="font-bold ">Teacher Training:</span> We provide
              professional development for educators, equipping them with the
              resources and pedagogical skills needed to effectively teach the
              Igbo language. <br />
              <span className="font-bold ">Classroom Support:</span> Our
              specialists offer in-class support, workshops, and resources to
              enrich the learning experience for students.
            </p>
            <h4 className="font-bold mt-4 text-base md:text-xl">
              For Individuals
            </h4>
            <p>
              <span className="font-bold">Tutoring:</span> We provide one-on-one
              and small group tutoring sessions tailored to meet the unique
              learning goals of each student, from beginners to advanced
              learners. <br />
              <span className="font-bold">Cultural Immersion:</span> Beyond just
              language, we offer insights into Igbo proverbs, folklore, and
              traditions to foster a deeper appreciation and understanding of
              the culture.
            </p>
            <p>
              Our goal is to make learning the Igbo language accessible, fun,
              and impactful, preserving this rich heritage for future
              generations. <br />
              Our services are highly adaptable. You can choose to engage us
              termly, utilize our support for one-off needs, or secure our
              expertise with a full academic year retainership. We&apos;ll
              tailor our approach to integrate effortlessly with your
              school&apos;s current systems, ensuring it&apos;s simple and
              understandable for every member of your team, regardless of their
              skill and technical proficiency. <br />
              Please be assured of our professionalism and that the job will be
              executed excellently. We are happy to answer any questions you may
              have. <br /> <br />
              Sincerely, <br />
              Chinenye Kalu Chima <br />
              Chief Executive Officer
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
