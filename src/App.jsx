import './App.css';
import {Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import HomePage from './Pages/HomePage/HomePage';
import NewPage1 from './Pages/PageProject1/PageProject1';
import NewPage2 from './Pages/PageProject2/PageProject2';
import NewPage3 from './Pages/PageProject3/PageProject3';
import NewPage4 from './Pages/PageProject4/PageProject4';
import NewPage5 from './Pages/PageProject5/PagesProject5'
import Footer from './Footer/Footer'
import MenuBtn from './assets/img/Menu.svg'
import CloseBtn from './assets/img/fi-bs-cross.svg'
import { useEffect, useState } from 'react';
import { ThemeContext } from './contexts/theme';


function getInitialTheme () {
  const theme =localStorage.getItem('theme')
  return theme ? JSON.parse(theme) :'light' 
}
function App() {
  const [theme , setTheme]=useState(getInitialTheme());
  useEffect (()=>{
    localStorage.setItem('theme' ,JSON.stringify(theme))
  },[theme])
  return (
    <>
    <ThemeContext.Provider value={theme}>
    <div className="App">
    <NavBar ChangeValue={ ()=> {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
      MenuBtn={MenuBtn} CloseBtn={CloseBtn}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-page1" element={<NewPage1 />} />
        <Route path="/new-page2" element={<NewPage2 />} />
        <Route path="/new-page3" element={<NewPage3 />} />
        <Route path="/new-page4" element={<NewPage4 />} />
        <Route path="/new-page5" element={<NewPage5 />} />
        </Routes>
      <Footer/>
    </div>
    </ThemeContext.Provider> 
    </>
  );
}

export default App;



