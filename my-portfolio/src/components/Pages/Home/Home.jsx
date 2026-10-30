import { About } from "../../sections/About";
import { Contact } from "../../sections/Contact";
import { Experience } from "../../sections/Experience";
import { Hero } from "../../sections/Hero";
import { Projects } from "../../sections/Projects";

export function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
