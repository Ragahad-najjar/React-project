import React from 'react'
import './SecAboutMeStyle.css'
import ImgPersonal from './../assets/img/raghad.png'
const SecAboutMe = () => {
  return (
    <div  id='Section1'>
    <h1 className='Title'>About Me</h1>
    <div className='AboutMe'>
      <div className='PersonalImg'>
        <img src={ImgPersonal}/> 
      </div>
      <div className='TextAboutMe'>
            <h2>I’am Raghad Najjar</h2> 
        <h3>An engineer and  <span>Front-end Developer</span></h3>
        <p>I Study Electronics and Communications Engineering. </p>
        <p>Iam intersted in the Web field,especially front-end development. </p>
        <p>I aspire to become on the best programmers.</p>
        </div> 
    </div>
    </div>
  )
}

export default SecAboutMe