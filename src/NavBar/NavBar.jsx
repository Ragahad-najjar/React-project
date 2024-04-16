import React from 'react';
import './NavBarStyle.css';
import { useState ,useContext } from 'react';
import IconMoon from './../assets/img/moon-01.svg';
import IconSun from './../assets/img/sun.svg' ;
import Logo from './../assets/img/Logo.png'
import {ThemeContext} from '../contexts/theme'
const NavBar =({ChangeValue ,MenuBtn , CloseBtn }) => {
  const theme = useContext(ThemeContext);
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  let List =[{title:"Home" , path:'/'},
            { title:"About me" },
            {title:"My skills"} ,
            {title:"Portfolio"},
            {title:"Contact"}]
  return (
    <nav className={`navbar `}>
    <img src={Logo} className='Logo'/>
    <div  className={`navElements ${showNavbar && 'active'}`} >
      <div className='listMenu' >
        <ul>
          <li> 
            <a href='/'>Home</a></li>
          <li><a href='#Section1'> 
            About me</a></li>
          <li><a href='#Section2'> 
            My skills</a></li>
          <li><a href='#Section3'> 
            Portfolio</a></li>
          <li><a href='#Section4'> 
            Contact</a></li>
        </ul>
        </div>
        <div className='IconMode'>
        <button className='BtnMode'  onClick={ChangeValue}  >
        {theme === 'dark' ?(<img src={IconMoon}/>):(<img src={IconSun}/>)}
      </button>
    </div>
      <img src={CloseBtn} className='close ' onClick={handleShowNavbar} /> 
      <button className='Btn' onClick={ChangeValue}>
      {theme === 'dark' ?(<img src={IconMoon}/>):(<img src={IconSun}/>)}
      </button>
      </div>
    <div className="menu-icon">
          <img src={MenuBtn} className='Menu' onClick={handleShowNavbar}/>
        </div> 
    </nav>
  )

}
export default NavBar;

