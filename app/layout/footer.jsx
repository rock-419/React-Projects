"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-gray-950 text-white py-12 px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
        <p className="text-gray-400 mb-8">
          Connect with me on social platforms or reach out directly.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold"
          >
            Facebook
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold"
          >
            YouTube
          </a>
          <button>976+ 94225442</button>
        </div>

        <p className="text-gray-500 text-sm mt-10">© 2025 Chuluudai.</p>
      </div>
    </div>
  );
}
