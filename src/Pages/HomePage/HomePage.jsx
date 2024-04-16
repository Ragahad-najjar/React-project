import React from 'react'
import './HomePageStyle.css'
import Hero from '../../Hero/Hero'
import SecAboutMe from '../../SecAboutMe/SecAboutMe'
import SecSkills from '../../SecSkills/SecSkills'
import Portfolio from '../../Portfolio/Portfolio' 
import Contact from '../../Contact/Contact' 
import AchievementsCertificates from '../../AchievementsCertificates/AchievementsCertificates'
import {useContext } from 'react';
import { ThemeContext } from './../../contexts/theme';
const HomePage = () => {
  const theme = useContext(ThemeContext) 
  return (
    <div className={`HomePage ${theme}`}>
    <Hero  />
    <SecAboutMe/>  
      <SecSkills/>
      <AchievementsCertificates/>
      <Portfolio/>
      <Contact/>  
      </div>
  )
}

export default HomePage
