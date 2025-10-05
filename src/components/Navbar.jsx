import { Link } from "react-scroll"; 
import { useState } from 'react';
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

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
          <Link
            to="home" spy={true} smooth={true} offset={-180} duration={500} className="nav-link" activeClass="active" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={-180} duration={500} className="nav-link" activeClass="active" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} offset={-180} duration={500} className="nav-link" activeClass="active" onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} offset={-180} duration={500} className="nav-link" activeClass="active" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;