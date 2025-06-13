import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" 
              element={<Home />} 
            />
            <Route path="/about" 
              element={<About />} 
            />
            <Route path="/projects" 
              element={<Projects />} 
            />
            <Route path="/contact" 
              element={<Contact />} 
            />
          </Routes>
        </div>
        <footer className="footer">
          <p>© 2025 Taiwo Ahmad. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
