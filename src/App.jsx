// AFTER
import Home from "./pages/Home"; // Assuming you have a Home.jsx
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
      <footer className="footer">
        <p>© 2025 Taiwo Ahmad. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;