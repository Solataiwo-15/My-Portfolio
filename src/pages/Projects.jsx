// src/pages/Projects.jsx

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css';
import lumo from '/images/lumo-preview.png';
import tenzies from '/images/Tenzies-preview.png';
import todo from '/images/todo-list-preview.png';
import assembly from '/images/assembly-endgame.png';
import porftolio from '/images/portfolio-preview.png';
import qrCode from '/images/qrCode-preview.png';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const projectList = [
    {
      title: 'Assembly End-game',
      description: 'A React-based mini game experience with engaging transitions, interactive elements, and a futuristic vibe.',
      // tech: ['React', 'CSS'],
      live: 'https://assemble-endgame.vercel.app/',
      // github: 'https://github.com/Solataiwo-15/assembly-endgame',
      image: assembly,
    },
    {
      title: 'Portfolio Website',
      description: 'A clean, interactive, and responsive portfolio built with React — showcasing sleek UI/UX, smooth animations, and real-world projects that highlight creativity, functionality, and front-end precision.',
      // tech: ['HTML', 'CSS'],
      live: 'https://lumo-landing-page-24dn.vercel.app/',
      // github: 'https://github.com/Solataiwo-15/lumo-landing-page',
      image: porftolio,
    },
    {
      title: 'Lumo Landing Page',
      description: 'A clean and modern landing page designed for a fictional product, showcasing its features, benefits, and call-to-action with a visually appealing layout and responsive design.',
      tech: ['HTML', 'CSS'],
      live: 'https://lumo-landing-page-24dn.vercel.app/',
      // github: 'https://github.com/Solataiwo-15/lumo-landing-page',
      image: lumo,
    },
    {
      title: 'QR Code Generator',
      description: 'A sleek and responsive QR Code Generator web app that allows users to easily create QR codes from text or URLs, featuring a simple interface, smooth user experience, and modern design aesthetics.',
      // tech: ['HTML', 'CSS'],
      live: 'https://qr-code-generator-ten-liart.vercel.app/',
      // github: '',
      image: qrCode,
    },
    {
      title: 'To-Do List Web App',
      description: 'A minimalist and intuitive to-do list web app designed for task management, enabling users to add, check off, and delete tasks with ease, all within a clean and responsive user interface.',
      // tech: ['HTML', 'CSS', 'JavaScript'],
      live: 'https://simple-to-do-list-web-app-pi.vercel.app/',
      // github: '',
      image: todo,
    },
    {
      title: 'Tenzies Game',
      description: 'A fun and interactive dice game built for the web, where users roll dice and strategically hold matching values to win. Features engaging animations and responsive gameplay for an enjoyable experience..',
      // tech: ['HTML', 'CSS', 'JavaScript'],
      live: 'https://tenzies-game-kappa-neon.vercel.app/',
      // github: '',
      image: tenzies,
    },
    // Add more projects as you build them
  ];

  return (
    <div className="projects-page">
      <h1 data-aos="fade-up">My Projects</h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="project-image"
              />
            </a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {/* <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div> */}
            {/* <div className="project-links">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                Live
              </a>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
