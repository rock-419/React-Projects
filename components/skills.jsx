"use client";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-4 sm:px-8"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-white text-3xl sm:text-4xl font-bold mb-8">
          Skills
        </h1>
        <ul className="space-y-6 text-gray-200 text-left sm:text-left">
          <li>
            <h2 className="font-semibold text-lg sm:text-xl">Coding</h2>
            <ul>
              <li>3 Years of experience</li>
              <li>Python</li>
              <li>JS</li>
              <li>Pseudocode</li>
              <li>Next JS</li>
              <li>Over 500 solved problems on Spoj.com</li>
            </ul>
          </li>
          <li>
            <h2 className="font-semibold text-lg sm:text-xl">Volleyball</h2>
            <ul>
              <li>4 Years of experience</li>
              <li>Played club volleyball for a year</li>
              <li>
                Maintained the starter position throughout all of highschool
              </li>
              <li>4 time top 5 in district championships</li>
              <li>1st and 3rd place in Empathy cup</li>
              <li>One time district championship leading scorer</li>
              <li>One time district champion</li>
            </ul>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
