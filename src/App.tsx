import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-secondary/50">
        <Navigation />
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
