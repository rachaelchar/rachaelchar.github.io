import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-secondary/50">
        <Navigation />
        {/* Mobile-only centered icons row under nav, before main content */}
        <div className="sm:hidden flex justify-start gap-x-2 p-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary"
            href="/files/resume.pdf"
          >
            <img src="/images/cv-icon.png" className="max-w-6" alt="Resume" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary"
            href="https://www.linkedin.com/in/rachaelcharewicz"
          >
            <img
              src="/images/circle-linkedin-512.webp"
              className="max-w-6"
              alt="LinkedIn"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary"
            href="https://github.com/rachaelchar"
          >
            <img
              src="/images/github-mark.png"
              className="max-w-6"
              alt="GitHub"
            />
          </a>
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
