"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isSticky ? "bg-gray-950 shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-center space-x-8 py-4">
        <button
          onClick={() => scrollToSection("about")}
          className="hover:text-gray-400"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="hover:text-gray-400" 
        >
          Skills
        </button>
      </nav>
    </header>
  );
}
