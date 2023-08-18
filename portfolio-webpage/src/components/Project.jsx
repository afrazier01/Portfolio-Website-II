import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';

const projects = [
    {
      title: 'Sunset Sunrise Times',
      imageUrl: '/src/assets/project1.jpeg',
      link: 'https://github.com/garciajv86/SunsetSunriseTimes',
    },
    {
      title: 'Nifty Thrifty',
      imageUrl: '/src/assets/project2.jpeg',
      link: 'https://github.com/IvySMac/Project-2',
    },
    // Add more projects...
  ];

const Project = () => {
  return (
    <div className="project">
      <div className="projects">
        <a href="https://github.com/Kdubb219">
          <FaGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/kyla-wise-b450b1104/">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://www.instagram.com/kwise219">
          <FaInstagram /> Instagram
        </a>
      </div>
      <p>&copy; 2023 Kyla's Developer Portfolio</p>
    </div>
  );
};

export default Project;