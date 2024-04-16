import React from 'react';
import './PageProject3Style.css'
import project2 from '../../assets/img/Project2.png' 
import sec1 from '../../assets/img/sec1-3.png'
import sec2 from '../../assets/img/sec3-3.png'
import sec3 from '../../assets/img/sec4-3.png'
import {useContext } from 'react';
import { ThemeContext } from './../../contexts/theme';
const PageProject3 = () => {
  const theme = useContext(ThemeContext) 
  return (
    <div className={`PageProject1 ${theme}`}>
      <h1 className='Title'>Project-3</h1>
      <div className='SectorProject'>
        <div className='Project1'>
          <img src={project2} alt="Header"/>
          <img src={sec1} alt="sec1"/>
        </div>
        <div className='Project1'>
          <img src={sec2} alt="sec2"/>
          <img src={sec3} alt="sec3"/>
        </div>
      </div>
      <h1 className='Title'>
        Techniques
      </h1>
      <div className='SecSkills'>
      <div className='Circle'>HTML</div>
      <div className='Circle'>CSS</div>
      <div className='Circle'>BootStrap</div>
      </div>
      <h1 className='Title'>Description</h1>
      <div className='TextDescription'>
        <p>A website built using HTML, CSS, and utilizing the Bootstrap library, featuring multiple pages and responsive to all screen sizes.A responsive multi-page project that adapts to all screen sizes.</p>
      </div>
      <h1 className='Title'>
        GitHub
      </h1>
      <div className='github'>
      <a href=" https://ragahad-najjar.github.io/project-team-5/" target='_blank'> https://ragahad-najjar.github.io/project-team-5/ </a>
      </div>
    </div>
  );
}

export default PageProject3;