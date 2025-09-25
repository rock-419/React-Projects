"use client";

export default function Contact() {
  return (
    <div className="bg-black text-white py-12 px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
        <p className="text-gray-400 mb-8">
          Connect with me on social platforms or reach out directly.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.instagram.com/sxum.ml/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-950 hover:bg-emerald-800 px-6 py-3 rounded-lg font-semibold text-white transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/chuluudai.lkhagva/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-950 hover:bg-emerald-800 px-6 py-3 rounded-lg font-semibold text-white transition-colors duration-300"
          >
            Facebook
          </a>
          <a
            href="https://www.youtube.com/@std100lftm"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-950 hover:bg-emerald-800 px-6 py-3 rounded-lg font-semibold text-white transition-colors duration-300"
          >
            YouTube
          </a>
          <button>976+ 94225442</button>
        </div>
      </div>
    </div>
  );
}
