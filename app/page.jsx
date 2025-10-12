import About from "@/components/about";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Hobbies from "@/components/hobbies";
import Works from "@/components/works";

export default function Home() {
  return (
    <div className="bg-black">
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="hobbies">
        <Hobbies />
      </section>
      <section id="works">
        <Works/>
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
