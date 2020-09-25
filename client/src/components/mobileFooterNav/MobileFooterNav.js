import '../../styles/MobileFooterNav.scss'

import React from 'react'
import { Link } from 'react-router-dom'







function MobileFooterNav() {
  return (
    <div id="myMobileFooterNav" className="container hide-on-large-only">




      
      <div>
        <div className="myFooterIcons">
          <a href="#mySkills">
          <i className="fa fa-cogs"></i> Skills
          </a>
        </div>          
      </div>
      
    


      <div>
        <div className="myFooterIcons">
          <a href="#myProjects">
          <i className="fa fa-paint-brush"></i> Works
          </a>
        </div>          
      </div>



      <div className="hide-on-small-only" >
        <div className="myFooterIcons">
          <a href="#myContact">
          <i className="fa fa-envelope"></i> Contact
          </a>
        </div>          
      </div>





      <div className="hide-on-med-and-up" >
        <div className="myFooterIcons">
          <a href="#myMobileContact">
          <i className="fa fa-envelope"></i> Contact
          </a>
        </div>          
      </div>




      

    
  






    </div>
  )
}

export default MobileFooterNav
