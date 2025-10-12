"use client";

export default function Works() {
  const projects = [
    {
      title: "Portfolio",
      link: "https://react-projects-zywm.vercel.app/",
    },
    {
      title: "Ecommerce",
      link: "https://react-projects-one-xi.vercel.app/",
    },
    {
      title: "Test Ecommerce",
      link: "https://erxes-test.vercel.app/",
    },
    {
      title: "Music App",
      link: "https://sound-bar-7qj8.vercel.app/",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
          My Works
        </h1>
        <p className="text-gray-400 text-lg">
          A collection of my latest web projects -- built using Next js , React, Tailwind css.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-[0_0_25px_-10px_#10b981] hover:shadow-[0_0_35px_-5px_#10b981] transition-all duration-300"
          >
            <img
              src={`https://api.microlink.io/?url=${encodeURIComponent(
                p.link
              )}&screenshot=true&meta=false&embed=screenshot.url`}
              alt={p.title}
              className="w-full h-64 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold mb-4 text-emerald-400">
                {p.title}
              </h2>
              <span className="px-5 py-2 border border-emerald-500 text-emerald-300 rounded-full text-sm hover:bg-emerald-500 hover:text-black transition-colors duration-300">
                View Project
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
