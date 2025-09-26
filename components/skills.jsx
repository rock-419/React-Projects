"use client";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-4 sm:px-8"
      initial={{ opacity: 0, y: 90 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-white text-3xl sm:text-4xl font-bold mb-8">
          Skills
        </h1>
        <ul className="space-y-6 text-gray-200 text-left sm:text-left">
          <li>
            <h2 className="font-semibold text-lg sm:text-xl">Coding</h2>
            <p className="mt-1 text-sm sm:text-base">
              My coding life started with Python as my primary language along
              with pseudocode in 9th grade. Now, about 3 years later, I study
              Next.js and JavaScript in Erxes Academy. As of now, I can create a
              fully functioning website along with elite problem-solving skills,
              notably from Spoj.com.
            </p>
          </li>

          <li>
            <h2 className="font-semibold text-lg sm:text-xl">Volleyball</h2>
            <p className="mt-1 text-sm sm:text-base">
              I started playing volleyball in late 2022 influenced by an anime.
              Ever since then, I maintained my role as a regular starter. I
              improved my skills through district championship tournaments, most
              notably placing 5th among 30+ schools.
            </p>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
