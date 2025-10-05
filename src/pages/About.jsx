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

import { SiTypescript, SiTailwindcss, SiBootstrap, SiAdobephotoshop, SiChakraui, SiNextdotjs } from "react-icons/si"
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function About() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section className="about" id="about">
      <div className="about-content">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h1>About Me</h1>
          <p>
            Hi! I’m <strong>Ahmad Taiwo</strong>, a Front-End Developer from Nigeria. I build clean, responsive, and user-friendly web interfaces using React, Next.js, TypeScript, and JavaScript. I also work with modern styling tools like Chakra UI and Tailwind CSS to create sleek, accessible, and visually consistent designs. With a solid background in UI/UX design, I pay close attention to detail, ensuring every project feels intuitive and engaging. I’m passionate about solving problems through design and code, continuously learning, and building digital experiences that balance functionality with great design. Right now, I’m focused on growing as a developer, contributing to real-world projects, and bringing creative ideas to life on the web.
          </p>
          <div className="skills">
            <h2>
              Skills & Tools
            </h2>
            <div className="skills-list">
              <div className="skill-item"><FaHtml5 /> <span>HTML</span></div>
              <div className="skill-item"><FaCss3Alt /> <span>CSS</span></div>
              <div className="skill-item"><FaJsSquare /> <span>JavaScript</span></div>
              <div className="skill-item"><SiTypescript /> <span>TypeScript</span></div>

              <div className="skill-item"><FaReact /> <span>React</span></div>
              <div className="skill-item"><SiNextdotjs /> <span>Next.js</span></div>
              <div className="skill-item"><SiTailwindcss /> <span>Tailwind CSS</span></div>
              <div className="skill-item"><SiChakraui /> <span>Chakra UI</span></div>
              <div className="skill-item"><SiBootstrap /> <span>Bootstrap</span></div>

              <div className="skill-item"><FaFigma /> <span>Figma</span></div>
              <div className="skill-item"><SiAdobephotoshop /> <span>Photoshop</span></div>

              <div className="skill-item"><FaGitAlt /> <span>Git</span></div>
              <div className="skill-item"><FaGithub /> <span>GitHub</span></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
