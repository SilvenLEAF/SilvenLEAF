import '../../styles/MobileContact.scss';

import React from 'react'
import MobileContactCollectionItem from './MobileContactCollectionItem';





function MobileContact() {
  return (
    <div id="myMobileContact" className="container scrollspy hide-on-med-and-up" >
      <ul className="collection">


        <MobileContactCollectionItem 
          mainIcon="fa fa-google" 
          title="Gmail"
          link="mailto:silvenleaf@gmail.com?subject=Contact&body=Hi+SilvenLEAF"
          linkText="SilvenLEAF@gmail.com"  
        />





        <MobileContactCollectionItem 
          mainIcon="fa fa-linkedin" 
          title="Linked In"
          link="#"
          linkText="No account yet"  
        />







        
        <MobileContactCollectionItem 
          mainIcon="fa fa-github" 
          title="Github"
          link="https://github.com/SilvenLEAF"
          linkText="github.com/SilvenLEAF"  
        />







        
        
        <MobileContactCollectionItem 
          mainIcon="fa fa-twitter" 
          title="Twitter (@SilvenLEAF)"
          link="https://twitter.com/SilvenLEAF?s=20"
          linkText="twitter.com/SilvenLEAF?s=20"  
        />


      </ul>


      
    </div>
  )
}

export default MobileContact
