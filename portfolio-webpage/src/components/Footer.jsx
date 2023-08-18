import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa';
import {SiSubstack} from 'react-icons/si'

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-links">
        <a href="https://github.com/afrazier01">
          <FaGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/afrazier01">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://www.instagram.com/amfrazier_34">
          <FaInstagram /> Instagram
        </a>
        <a href="https://aveontae.substack.com/">
          <SiSubstack /> Substack
        </a>
        <a href="https://www.youtube.com/channel/UCTjTzDuqusAzVv_Go49QUsA">
          <FaYoutube /> Youtube
        </a>
      </div>
      <p>&copy; 2023 Tae's Developer Portfolio</p>
    </div>
  );
};

export default Footer;