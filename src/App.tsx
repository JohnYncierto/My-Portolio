import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar /> 
      <main>

        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        
      </main>
      <footer className="text-center py-6 text-sm text-white/30 border-t border-white/5">
        Designed & built by John Herbert Yncierto — {new Date().getFullYear()}
      </footer>
    </>
  );
}