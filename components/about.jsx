"use client";

import { motion } from "framer-motion";
import { Image } from "react-bootstrap";

export default function About() {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-4 sm:px-8"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl w-full text-center">
        <div>
          <Image
            src="/images/hii.jpg"
            width={85}
            height={85}
            className="rounded-full shadow-lg mx-auto mb-6 transition-transform duration-300 hover:scale-105"
          />
        </div>
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Chuluudai Lkhagva-Ochir
        </h1>
        <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed rounded-2xl p-4 hover:bg-emerald-950 transition-colors duration-200">
          Hello, I’m Chuluudai, a senior at UEIS. I have played varsity
          volleyball since 8th grade (at my previous school) and have coded
          since 9th grade—primarily in Python, with JavaScript as my secondary
          language.
        </p>
      </div>
    </motion.section>
  );
}
