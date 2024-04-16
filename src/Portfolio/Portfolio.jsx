import React from 'react'
import './PortfolioStyle.css'
import Project1 from './../assets/img/project-1.png' 
import Project2 from './../assets/img/Project2.png'
import Project3 from './../assets/img/Project3.png'
import Project4 from './../assets/img/project-4.png'
import Project5 from './../assets/img/project-5.png'
import { Link } from 'react-router-dom';
const Portfolio = () => {
    return (
    <div id='Section3'>
        <h1 className='Title'>
            Portfolio
        </h1>
        <div className='Portfolio'>
            <div className='Project'>
                <Link to="/new-page1">
                <img  src={Project1} alt="Image 1" />
                </Link>
            </div>
            <div className='Project'>
                <Link to="/new-page2">
                <img src={Project3} alt="Image 2" />
                </Link>
            </div>
            <div className='Project'>
                <Link to="/new-page3">
                <img src={Project2} alt="Image 2" />
                </Link>
            </div>
            <div className='Project'>
                <Link to="/new-page4">
                <img src={Project4} alt="Image 2" />
                </Link>
            </div>
            <div className='Project'>
                <Link to="/new-page5">
                <img src={Project5} alt="Image 2" />
                </Link>
            </div>
            </div>
        </div>
    )
}

export default Portfolio