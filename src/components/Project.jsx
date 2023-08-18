import React from 'react';
import chl18 from '../assets/challenge-18.png';
import python from '../assets/python.png';
import chl13 from '../assets/challenge-13.png'
import chl12 from '../assets/challenge-12.png'
import chl6 from '../assets/challenge-6.png'
import chl3 from '../assets/challenge-3.png'
import chl4 from '../assets/challenge-4.png'
import chl9 from '../assets/challenge-9.png'
import chl10 from '../assets/challenge-10.png'

const projects = [
  {
    title: 'Social Network API',
    imageUrl: chl18,
    link: 'https://github.com/afrazier01/Social-Network-API',
  },
  {
    title: 'File Parsing Script',
    imageUrl: python,
    link: 'https://github.com/afrazier01/File-Parsing',
  },
  {
    title: 'E-Commerce Back-End',
    imageUrl: chl13,
    link: 'https://github.com/afrazier01/E-Commerce-Back-End',
  },
  {
    title: 'Employee Content Management System',
    imageUrl: chl12,
    link: 'https://github.com/afrazier01/Employee-Tracker',
  },
  {
    title: 'Weather Dashboard',
    imageUrl: chl6,
    link: 'https://github.com/afrazier01/Weather-Dashboard',
  },
  {
    title: 'Password Generator',
    imageUrl: chl3,
    link: 'https://github.com/afrazier01/Password-Generator',
  },
  {
    title: 'Coding Quiz',
    imageUrl: chl4,
    link: 'https://github.com/afrazier01/Timed-Quiz',
  },
  {
    title: 'README Generator',
    imageUrl: chl9,
    link: 'https://github.com/afrazier01/README-Generator',
  },
  {
    title: 'SVG Generator',
    imageUrl: chl10,
    link: 'https://github.com/afrazier01/Logo-Maker',
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a key={index} href={project.link} className="project-link">
            <img src={project.imageUrl} className='headshot' alt={project.title} />
            <div className="project-title">{project.title}</div> 
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;