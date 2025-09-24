import About from "@/components/about";
import Skills from "@/components/skills";

export default function Home (){
  return(
    <div>
      <secton id="about"><About/></secton>
      <secton id="skills"><Skills/></secton>
    </div>
  );
}