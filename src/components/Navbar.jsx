import { NavLink } from "react-router-dom";
import { useState } from 'react';
import "./Navbar.css"; // Import your CSS styles for the Navbar


const Navbar= () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-header">
        <h1 className="logo">Taiwo.</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </button>

      </div>
      <ul className={`nav-links ${isOpen ? "show" : ""}`}>
        <li>
          <NavLink to="/"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
