import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App( ) {
  return (
    <div>
      <Navbar />
      <About title="About me" id ="about" dark={true}/>
      <Skills title="My skills" id="skills" dark={false} />
      <Portfolio title="My projects" id="portfolio" dark={true} />
      <Contact title="Contact me" id="contact" dark={false} />
    </div>
  );
}
export default App;
