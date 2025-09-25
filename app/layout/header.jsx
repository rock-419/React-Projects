"use client";
import "../globals.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-400 ${
        isSticky ? "bg-emerald-950 shadow-2xl" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-center gap-5 py-4">
        <button
          onClick={() => scrollToSection("about")}
          className="text-white text-lg font-bold transition-all duration-300 hover:text-white hover:text-shadow-[0_0_16px_rgba(0,255,150,0.5),0_0_32px_rgba(0,255,120,0.3)]"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="text-white text-lg font-bold transition-all duration-300 hover:text-white hover:text-shadow-[0_0_16px_rgba(0,255,150,0.5),0_0_32px_rgba(0,255,120,0.3)]"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="text-white text-lg font-bold transition-all duration-300 hover:text-white hover:text-shadow-[0_0_16px_rgba(0,255,150,0.5),0_0_32px_rgba(0,255,120,0.3)]"
        >
          Contact
        </button>
      </nav>
    </header>
  );
}
