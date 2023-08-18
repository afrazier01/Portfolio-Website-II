import React from 'react';


const projects = [
  {
    title: 'Social Network API',
    imageUrl: '/src/assets/challenge-18.png',
    description:'',
    link: 'https://github.com/afrazier01/Social-Network-API',
  },
  {
    title: 'File Parsing Script',
    imageUrl: '/src/assets/python.png',
    link: 'https://github.com/afrazier01/File-Parsing',
  },
  {
    title: 'E-Commerce Back-End',
    imageUrl: '/src/assets/challenge-13.png',
    link: 'https://github.com/afrazier01/E-Commerce-Back-End',
  },
  {
    title: 'Employee Content Management System',
    imageUrl: '/src/assets/challenge-12.png',
    link: 'https://github.com/afrazier01/Employee-Tracker',
  },
  {
    title: 'Weather Dashboard',
    imageUrl: '/src/assets/challenge-6.png',
    description:'',
    link: 'https://github.com/afrazier01/Weather-Dashboard',
  },
  {
    title: 'Password Generator',
    imageUrl: '/src/assets/challenge-3.png',
    link: 'https://github.com/afrazier01/Password-Generator',
  },
  {
    title: 'Coding Quiz',
    imageUrl: '/src/assets/challenge-4.png',
    link: 'https://github.com/afrazier01/Timed-Quiz',
  },
  {
    title: 'README Generator',
    imageUrl: '/src/assets/challenge-9.png',
    link: 'https://github.com/afrazier01/README-Generator',
  },
  {
    title: 'SVG Generator',
    imageUrl: '/src/assets/challenge-10.png',
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