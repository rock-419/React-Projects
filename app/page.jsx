import About from "@/components/about";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="bg-black">
      <secton id="about">
        <About />
      </secton>
      <secton id="skills">
        <Skills />
      </secton>
      <section id="contact">
        <Contact/>
      </section>
    </div>
  );
}
