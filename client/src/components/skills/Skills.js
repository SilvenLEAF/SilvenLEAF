
import '../../styles/Skills.scss'

import React from 'react'
import FrontendSkills from './FrontendSkills';
import BackendSkills from './BackendSkills';
import OtherSkills from './OtherSkills';

function Skills() {


  return (
    <div id="mySkills" className="scrollspy container" >
      <div className="row">
        <div className="col s12 m4">
          <FrontendSkills/>
        </div>
        <div className="col s12 m4">
          <BackendSkills/>
        </div>
        <div className="col s12 m4">
          <OtherSkills/>
        </div>
      </div>
    </div>
  )
}

export default Skills
