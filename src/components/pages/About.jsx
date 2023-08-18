import React from 'react';
import headshot from '../../assets/harvard.jpg';

export default function About() {
  return (
    <div>
      <h1 >Welcome to my Portfolio Webpage!</h1>
      <h4 >About Me</h4>
      <p className='about'>
        I am a senior at the University of Kansas, pursuing a Bachelor of Science in Information Systems, 
        with a robust background in coding from a MERN full stack bootcamp, and I hold the PCEP - Entry-Level 
        Python Programmer certification. I am passionate about software design, data analysis, and compliance, and eager 
        to leverage my skills in a government role focused on driving impactful results and process efficiency!
      </p>
      <img src={headshot} className="headshot" alt="Tae smiling in suit" />
    </div>
  );
}
