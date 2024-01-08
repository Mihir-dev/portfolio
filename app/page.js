import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Introtwo from "@/components/Introtwo";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Introtwo />
      <SectionDivider />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
