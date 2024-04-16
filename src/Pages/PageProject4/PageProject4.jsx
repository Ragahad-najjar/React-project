import React from 'react';
import {useContext } from 'react';
import { ThemeContext } from './../../contexts/theme';
import sec1 from '../../assets/img/img-1-4.png'
import sec2 from '../../assets/img/img-2-4.png'
import sec3 from '../../assets/img/img-3-4.png'
import sec4 from '../../assets/img/img-4-4.png'

const PageProject4 = () => {
  const theme = useContext(ThemeContext) 
  return (
    <div className={`PageProject1 ${theme}`}>
      <h1 className='Title'>Project-4</h1>
      <div className='SectorProject'>
        <div className='Project1'>
          <img src={sec1} alt="sec1"/>
          <img src={sec2} alt="sec2"/>
        </div>
        <div className='Project1'>
          <img src={sec3} alt="sec3"/>
          <img src={sec4} alt="sec4"/>
        </div>
      </div>
      <h1 className='Title'>
        Techniques
      </h1>
      <div className='SecSkills'>
      <div className='Circle'>HTML</div>
      <div className='Circle'>CSS</div>
      <div className='Circle'>React</div>
      </div>
      <h1 className='Title'>Description</h1>
      <div className='TextDescription'>
        <p>A website built using React Webpack, with multiple pages and responsive to all screen sizes..</p>
      </div>
      <h1 className='Title'>
        GitHub
      </h1>
      <div className='github'>
      <a href="https://blog.x7md.net/project_React/" target='_blank'> https://blog.x7md.net/project_React/ </a>
      </div>
    </div>
  );
}

export default PageProject4;