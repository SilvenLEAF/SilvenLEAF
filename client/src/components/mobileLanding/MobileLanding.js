import '../../styles/MobileLanding.scss';



import React from 'react'
import Carousal from './Slider';

function MobileLanding() {
  return (
    <div id="myMobileLanding" className="hide-on-large-only" >

      <div id="myMobileLandingTitleHolder">
        <div id="myMobileLandingIcon" ></div>

        <h5>I turn your</h5>
        <h1>DREAMS into REALITY</h1>
        <h3>Fullstack Developer</h3>
      </div>


      <div id="myLandingCarousalHolder" className="container" >
        <div id="myMobileLandingButtonHolder" className="container" >
          <a href="#myProjects" id="myMobileLandingButton">
            <i className="fa fa-eye"></i> Click here to see all my Works
          </a>
        </div>
        <Carousal/>
      </div>
    </div>
  )
}

export default MobileLanding
