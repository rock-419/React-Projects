"use client";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-8"
      initial={{ opacity: 0, y: 90 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">Skills</h1>
        <ul className="space-y-2 text-gray-400">
          <li>- Coding</li>
          <p>
            First started with python when I was in 9th grade. Solved over 300
            problems inside RGB7. Now Im learning javascript along with next js.
          </p>
          <li>- Volleyball</li>
          <p>
            Played volleyball ever since late 2020. Played varsity volleyball
            since 8th grade and is a regular now. 3 time district top 8 and lead
            the team in scoring once.
          </p>
          <li>- </li>
        </ul>
      </div>
    </motion.div>
  );
}
