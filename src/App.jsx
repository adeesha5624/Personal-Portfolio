import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Combined view for single-page scrolling
function FullScrollPortfolio() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          {/* Default view: full scrollable portfolio */}
          <Route path="/" element={<FullScrollPortfolio />} />

          {/* Individual page routes */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="footer">
        <a href="https://github.com/adeesha5624" target="_blank" rel="noreferrer" style={{ marginRight: '1rem' }}>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/uvindu-adeesha-454815334" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <div style={{ marginTop: '0.5rem' }}>Designed & Built with React</div>
      </footer>
    </div>
  );
}

export default App;