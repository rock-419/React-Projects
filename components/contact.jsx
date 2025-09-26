"use client";

export default function Contact() {
  return (
    <section className="bg-black text-white py-12 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Get in Touch</h1>
        <p className="text-gray-400 mb-8 text-sm sm:text-base">
          Connect with me on social platforms or reach out directly.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
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
          <a
            href="tel:+97694225442"
            className="bg-emerald-950 hover:bg-emerald-800 px-6 py-3 rounded-lg font-semibold text-white transition-colors duration-300"
          >
            976+ 94225442
          </a>
        </div>
      </div>
    </section>
  );
}
