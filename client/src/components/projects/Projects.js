import '../../styles/Projects.scss';

import ProjectsList from './ProjectsData'


import React from 'react'
import ImageLeft from './ImageLeft';
import ImageRight from './ImageRight';




function Projects() {




  return (
     <div id="myProjects" className="scrollspy" >
        <div id="myAllProjectsHolder">
          

          {
            ProjectsList[0] && ProjectsList.map((item, index) =>{
              return (index%2===0) ? (
                
                <ImageLeft key={index} title={ item.title }  links={ item.links } images={ item.images } technology={ item.technology } description={ item.description } />

              ) : (
                
                <ImageRight key={index} title={ item.title }  links={ item.links } images={ item.images } technology={ item.technology } description={ item.description } />

              );
            })
          }


        </div>
     </div>
  )
}

export default Projects
