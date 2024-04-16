import React from 'react';
import project3 from './../../assets/img/Project3.png'
import sec1 from '../../assets/img/sec2-2.png'
import sec2 from '../../assets/img/sec3-2.png'
import sec3 from '../../assets/img/sec4-2.png'
import {useContext } from 'react';
import { ThemeContext } from './../../contexts/theme';
const PageProject2 = () => {
  const theme = useContext(ThemeContext) 
    return (
      <div className={`PageProject1 ${theme}`}>
        <h1 className='Title'>Project-2</h1>
        <div className='SectorProject'>
          <div className='Project1'>
            <img src={project3} alt="Header"/>
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
        </div>
        <h1 className='Title'>Description</h1>
      <div className='TextDescription'>
        <p>A website built using HTML and CSS, responsive to all screen sizes.</p>
      </div>
        <h1 className='Title'>
          GitHub
        </h1>
        <div className='github'>
        <a href="  https://ragahad-najjar.github.io/Project-2/" target='_blank'>  https://ragahad-najjar.github.io/Project-2/ </a>
        </div>
      </div>
    );
}

export default PageProject2;