import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Body() {
  return (
    <div className='body'>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Body;
