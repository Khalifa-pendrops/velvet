"use client";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Web Development",
    desc: "Build fast, modern websites with Next.js & React.",
  },
  { title: "UI/UX Design", desc: "Craft beautiful, user-friendly interfaces." },
  {
    title: "SEO Optimization",
    desc: "Improve visibility and rank higher on search engines.",
  },
  {
    title: "Mobile Apps",
    desc: "Develop cross-platform apps with great performance.",
  },
  {
    title: "Digital Marketing",
    desc: "Reach more customers through targeted campaigns.",
  },
  {
    title: "Hosting & Maintenance",
    desc: "Secure, reliable, and hassle-free hosting.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              {card.title}
            </h2>
            <p className="text-gray-600">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
