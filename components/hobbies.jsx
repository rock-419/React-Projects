"use client";

import { motion } from "framer-motion";

export default function Hobbies() {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-4 sm:px-8 bg-black"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl w-full">
        <h1 className="text-white text-3xl sm:text-4xl font-semibold mb-10 text-center">
          Hobbies
        </h1>
        <ul className="space-y-6">
          <li className="p-5 rounded-xl hover:bg-emerald-950 transition-colors duration-200">
            <h2 className="text-white font-medium text-lg sm:text-xl">
              Coding
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-200 leading-relaxed">
              My journey in programming began in the ninth grade, inspired by a
              friend's invitation to join a coding club. Since then, I have
              developed a strong passion for mastering new programming languages
              and creating innovative projects. At present, my primary focus is
              on web development, particularly utilizing JavaScript and React to
              build dynamic and responsive applications.
            </p>
          </li>

          <li className="p-5 rounded-xl hover:bg-emerald-950 transition-colors duration-200">
            <h2 className="text-white font-medium text-lg sm:text-xl">
              Volleyball
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-200 leading-relaxed">
              I began playing volleyball in late 2022. Through consistent
              practice and dedication, I quickly earned a position as a starting
              player and have maintained my place on the team ever since.
              Volleyball has taught me the value of teamwork, perseverance, and
              continuous improvement.
            </p>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
