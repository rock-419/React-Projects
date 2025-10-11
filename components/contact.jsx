"use client";

import { IoCall } from "react-icons/io5";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-black text-white py-20 px-6 sm:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-400 mb-12 text-base sm:text-lg">
          Connect with me on social platforms or reach out directly.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://www.instagram.com/sxum.ml/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-900/30 hover:bg-emerald-700/40 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          >
            <FaInstagram className="text-3xl text-emerald-400" />
          </a>

          <a
            href="https://www.facebook.com/chuluudai.lkhagva/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-900/30 hover:bg-emerald-700/40 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          >
            <FaFacebookF className="text-3xl text-emerald-400" />
          </a>

          <a
            href="https://www.youtube.com/@std100lftm"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-900/30 hover:bg-emerald-700/40 p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          >
            <FaYoutube className="text-3xl text-emerald-400" />
          </a>

          <a
            href="tel:+97694225442"
            className="bg-emerald-900/30 hover:bg-emerald-700/40 px-6 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
          >
            <IoCall className="text-2xl text-emerald-400" />
            <span className="text-lg font-medium">+976 94225442</span>
          </a>
        </div>
      </div>
    </section>
  );
}
