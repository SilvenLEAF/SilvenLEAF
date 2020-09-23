
import '../../styles/Skills.scss'

import React from 'react'
import FrontendSkills from './FrontendSkills';
import BackendSkills from './BackendSkills';
import OtherSkills from './OtherSkills';

function Skills() {


  return (
    <div id="mySkills" className="scrollspy" >
    
      <div>
        <FrontendSkills/>
      </div>
      <div>
        <BackendSkills/>
      </div>
      <div>
        <OtherSkills/>
      </div>
    
    </div>
  )
}

export default Skills
