import "./About.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaFigma,
  FaGitAlt,
  FaGithub
} from 'react-icons/fa';

// import { SiVisualstudioCode } from 'react-icons/si';
import { SiAdobephotoshop } from 'react-icons/si';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";





function About() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section className="about">
      <div className="about-content">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h1>About Me</h1>
          <p>
            Hi! I’m <strong>Taiwo Ahmad</strong>, a creative and detail-driven Front-End Developer and UI/UX Designer based in Nigeria. I specialize in building clean, responsive, and accessible web interfaces using HTML, CSS, JavaScript, and React. With a solid foundation in design and development, I bring ideas to life through intuitive user experiences and pixel-perfect implementations. I'm passionate about crafting interfaces that not only look great but also feel seamless and meaningful to users. Beyond the screen, I’m deeply interested in digital communication, product thinking, and how design influences human behavior. Whether it’s coding, designing, or learning new things, I’m always eager to grow and make an impact through thoughtful digital experiences.
          </p>
          <div className="skills">
            <h2>
              Skills & Tools
            </h2>
            <div className="skills-list">
              <div className="skill-item"><FaHtml5 /> <span>HTML</span></div>
              <div className="skill-item"><FaCss3Alt /> <span>CSS</span></div>
              <div className="skill-item"><FaJsSquare /> <span>JavaScript</span></div>
              <div className="skill-item"><FaReact /> <span>React</span></div>
              <div className="skill-item"><FaFigma /> <span>Figma</span></div>
              <div className="skill-item"><SiAdobephotoshop /> <span>Photoshop</span></div>
              <div className="skill-item"><FaGitAlt /> <span>Git</span></div>
              {/* <div className="skill-item"><SiVisualstudioCode /> <span>VS Code</span></div> */}
              <div className="skill-item"><FaGithub /> <span>GitHub</span></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
