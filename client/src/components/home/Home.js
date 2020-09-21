import M from 'materialize-css'
import '../../styles/Home.scss';


import React, { useEffect } from 'react'


import Landing from '../landing/Landing';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import Contact from '../contact/Contact';
import About from '../about/About';





function Home() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      const myBackToTopButton = document.getElementById('myBackToTopButton');
  
      if(window.pageYOffset > 300) {
        myBackToTopButton.style.display = "flex";
      } else {
        myBackToTopButton.style.display = "none";
      }
  
    })
  })

  return (
    <>
      <Landing />
      
      
      <div className="container myHomeSectionTitleHolder">
        <div className="myWaterColorEffect">Skills</div>
        <div className="myHomeSectionTitle">Skills</div>
      </div>
      <Skills/>






      <div className="container myHomeSectionTitleHolder">
        <div className="myWaterColorEffect">My Works</div>
        <div className="myHomeSectionTitle">My Works</div>
      </div>
      <Projects/>

      
      
      
      <div className="container myHomeSectionTitleHolder">
        <div className="myWaterColorEffect">Contact Me</div>
        <div className="myHomeSectionTitle">Contact Me</div>
      </div>
      <Contact/>






      <div className="container myHomeSectionTitleHolder">
        <div className="myWaterColorEffect">About Me</div>
        <div className="myHomeSectionTitle">About Me</div>
      </div>
      <About/>


      <a href="#myNavbar" id="myBackToTopButton">
        <i className="fa fa-arrow-up"></i>
      </a>
    </>
  )
}

export default Home
