import React from 'react';
import {VscChevronRight} from 'react-icons/vsc';
import resume from '../../assets/resume.pdf';

export default function Resume() {
    return (
      <div>
        <h1>View My Resume</h1>
        <a href={resume} >
          <VscChevronRight /> Updated - 08.09.2023
        </a>
      </div>
    );
  }