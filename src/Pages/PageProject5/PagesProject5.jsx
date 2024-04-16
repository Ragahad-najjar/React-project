import React from 'react';
import './PageProject5Style.css'
import project5 from './../../assets/img/project-5.png'
import sec1 from './../../assets/img/book2.png'
import sec2 from './../../assets/img/book.png'
import sec3 from './../../assets/img/map.png'
import {useContext } from 'react';
import { ThemeContext } from './../../contexts/theme';
const PageProject1 = () => {
const theme = useContext(ThemeContext) 

return (
    <div className={`PageProject1 ${theme}`}>
        <h1 className='Title'>Project-5</h1>
        <div className='SectorProject'>
        <div className='Project1'>
            <img src={project5} alt="Header"/>
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
        <div className='Circle'>React</div>
        </div>
        <h1 className='Title'>Description</h1>
        <div className='TextDescription'>
        <p>A website built using React Webpack, 
            with multiple pages and responsive to all screen sizes, supporting dark mode and light mode</p>
        </div>
        <h1 className='Title'>
        GitHub
        </h1>
        <div className='github'>
        <a href=" " target='_blank'>  </a>
    </div>
    </div>
);
}

export default PageProject1;