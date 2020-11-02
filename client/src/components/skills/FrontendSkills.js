import React from 'react'

function FrontendSkills() {
  return (
    <div className="mySkillSectionHolder">
      <div className="mySkillSectionIcon">
        <img src="/images/frontend.svg" alt=""/>
      </div>

      <h4 className="mySkillSectionTitle">FrontEND</h4>
      <ul className="mySkillSectionSkills">
        <li>
          <img src="/images/skills/html5.svg" alt=""/>
          HTML5
        </li>
        <li>
          <img src="/images/skills/css3.svg" alt=""/>
          CSS3
        </li>
        <li>
          <img src="/images/skills/javascript.svg" alt=""/>
          JavaScript
        </li>
        {/* <li>
          <img src="/images/skills/typescript.svg" alt=""/>
          TypeScript
        </li> */}
        <li>
          <img src="/images/skills/react.svg" alt=""/>
          React
        </li>
        {/* <li>
          <img src="/images/skills/redux.svg" alt=""/>
          Redux
        </li> */}
        <li>
          <img src="/images/skills/sass.svg" alt=""/>
          SASS
        </li>
        <li>
          <img src="/images/skills/framermotion.png" alt=""/>
          Framer Motion
        </li>
        <li>
          <img src="/images/skills/materialize.svg" alt=""/>
          Materialize
        </li>



      </ul>
    </div>
  )
}

export default FrontendSkills
