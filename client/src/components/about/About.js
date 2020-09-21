import '../../styles/About.scss';


import React from 'react'

function About() {
  return (
    <div id="myAbout" className="container scrollspy">
      
      <div className="myAboutInfoHolder">
        <div className="myAboutQA">
          <div className="myAboutTitle">Real Name</div>
          <div className="myAboutAnswer">Manash Sarma</div>
        </div>



        <div className="myAboutQA">
          <div className="myAboutTitle">From</div>
          <div className="myAboutAnswer">Kameswar, Dharmanagar, (North) Tripura, (NorthEast) India</div>
        </div>




        <div className="myAboutQA">
          <div className="myAboutTitle">Born on</div>
          <div className="myAboutAnswer">31st December 2001</div>
        </div>





        <div className="myAboutQA">
          <div className="myAboutTitle">Age</div>
          <div className="myAboutAnswer">19</div>
        </div>




        <div className="myAboutQA">
          <div className="myAboutTitle">Gender</div>
          <div className="myAboutAnswer">Male</div>
        </div>

      </div>
    </div>
  )
}

export default About
