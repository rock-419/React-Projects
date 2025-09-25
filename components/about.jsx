"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-8"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-2xl text-center">
        <h1 className="text-white font-bold mb-4">Chuluudai Lkhagva-Ochir</h1>
        <p className="text-gray-200">
          Hello, I’m Chuluudai, a senior at UEIS. I have played varsity
          volleyball since 8th grade (at my previous school) and have coded
          since 9th grade—primarily in Python, with javascript as my seconday
          language."
        </p>
      </div>
    </motion.div>
  );
}
