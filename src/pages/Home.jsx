import "./Home.css";
import { FaDownload, FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import CV from "../assets/TaiwoAhmad.pdf";
import { motion } from "framer-motion";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Hi, I'm <span className="highlight">Taiwo Ahmad</span>.</h1>
          <h2>Front-End Developer | UI/UX Designer</h2>
          <p>I craft visually appealing, responsive, and user-focused web experiences using modern technologies.</p>
          <div className="home-cta-wrapper">
            <a
              href= {CV} 
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              <FaDownload style={{ marginRight: "8px" }} />
              Download CV
            </a>

            <div className="home-socials">
              <a href="https://github.com/Solataiwo-15" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ahmad-taiwo" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.behance.net/ahmadtaiwo15" target="_blank" rel="noopener noreferrer">
                <FaBehance />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
