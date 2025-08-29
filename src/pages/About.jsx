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
import { SiTypescript, SiTailwindcss, SiBootstrap } from "react-icons/si"
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
            Hi! I’m <strong>Taiwo Ahmad</strong>, a Front-End Developer from Nigeria. I create clean, responsive, and user-friendly web interfaces using HTML, CSS, JavaScript, and React. Recently, I’ve been expanding my skills with Tailwind CSS and building more advanced projects that combine good design with solid functionality. With a strong background in UI/UX, I pay close attention to detail, ensuring every project feels intuitive and engaging. I’m passionate about solving problems through design and code, continuously learning, and building digital experiences that are both functional and visually appealing. Right now, I’m focused on growing as a developer, contributing to real-world projects, and bringing creative ideas to life on the web.
          </p>
          <div className="skills">
            <h2>
              Skills & Tools
            </h2>
            <div className="skills-list">
              <div className="skill-item"><FaHtml5 /> <span>HTML</span></div>
              <div className="skill-item"><FaCss3Alt /> <span>CSS</span></div>
              <div className="skill-item"><FaJsSquare /> <span>JavaScript</span></div>
              <div className="skill-item"><SiTailwindcss /> <span>Tailwind CSS</span></div>
              <div className="skill-item"><SiTypescript /> <span>TypeScript</span></div>
              <div className="skill-item"><SiBootstrap /> <span>Bootstrap</span></div>
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
