import React from 'react'
import './HeroStyle.css'
import ImgHero from '../assets/img/imgHero.png'
const Hero = () => {
  return (
    <div className='Hero'>
      <div className='HeroRight'>
        <p> Hi There! My name is </p>
        <h2> Raghad Najjar</h2>
        <p>and I am a </p>
        <h2>front-end developer</h2>
        <button className='btn'> Download Cv</button>
      </div>
      <div className='HeroLeft'>
        <img src={ImgHero} className='ImgHero'/>
      </div> 
    </div>
  )
}

export default Hero