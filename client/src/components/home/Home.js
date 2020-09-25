import M from 'materialize-css'
import '../../styles/Home.scss';


import React, { useEffect } from 'react'


import Landing from '../landing/Landing';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import Contact from '../contact/Contact';
import About from '../about/About';
import MobileLanding from '../mobileLanding/MobileLanding';
import MobileContact from '../contact/MobileContact';





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
      <MobileLanding/>
      
      
      <div className="container myHomeSectionTitleHolder">        
        <div className="myHomeSectionTitle">Skills</div>
      </div>
      <Skills/>






      <div className="container myHomeSectionTitleHolder">        
        <div className="myHomeSectionTitle">My Works</div>
      </div>
      <Projects/>

      
      
      
      <div className="container myHomeSectionTitleHolder myContactMeTitleHolder">        
        <div className="myHomeSectionTitle">Contact Me</div>
      </div>
      <Contact/>
      <MobileContact/>





      <div className="container myHomeSectionTitleHolder">        
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
