import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Import your CSS styles for the Navbar


const Navbar= () => {

  return (
    <nav className="navbar">
      <h1 className="logo">Taiwo.</h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
