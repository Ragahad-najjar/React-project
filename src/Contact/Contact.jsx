import React from 'react'
import './ContactStyle.css'
import { useContext } from 'react'
import {ThemeContext} from '../contexts/theme'
import email from '../assets/img/email.svg'
const Contact = () => {
    const theme = useContext(ThemeContext);
    return (
    <div  id="Section4">
    <h1 className='Title'> Contact</h1>
    <div className='Contact'  >
        <div className='Email'>
            <img src={email} alt="e-mail"/><b className='Text'>E-mail</b>
            <p className='adress'>raghad.abdnajjar2001@gmail.com</p>
        </div>
        <div className='Telephone'>
        {theme === 'dark' ?(<i  className="fa-solid fa-phone"></i> ):(<i  className="fa-light fa-phone"></i> )}
            <b className='Text'>Telephone number</b>
            <p className='Phon'>+963937396257</p>
        </div>
        <div className='SocialMedia'>
            <img alt='S'/><b className='Text'>Social Media</b>
            <a href='https://www.facebook.com/raghad.najjar.73?mibextid=ZbWKwL' target="_blank">
                <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/raghad.najjar.73" target="_blank">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://t.me/Raghad_Najjar" target="_blank">
                <i className='fa-brands fa-telegram'></i>
            </a>
            <a href="https://github.com/Ragahad-najjar" target="_blank">
                <i className="fa-brands fa-github"></i>
            </a>
        </div>
        </div>
    </div>
    )
}

export default Contact