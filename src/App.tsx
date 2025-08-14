import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Page principale : toutes les sections */}
        <Route
          path="/"
          element={
            <div>
              <div className="p-5 md:px-[15%]">
                <Navbar />
                <Home />
              </div>

              <About />

              <div className="p-5 md:px-[15%]">
                <Experiences />
                <Projects />
              </div>

              <Footer />
            </div>
          }
        />

        {/* Page détails projet */}
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}
