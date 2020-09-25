import '../../styles/Contact.scss';

import React from 'react'





function Contact() {
  return (
    <div id="myContact" className="container scrollspy hide-on-small-only" >
      
        <div className="row">

          <div className="col m5 myContactSection">
            <div className="fa fa-google myContactSectionIcon"></div>


            <div className="myContactLink">
              <a target="_blank" href="mailto:silvenleaf@gmail.com?subject=Contact&body=Hi+SilvenLEAF">
                SilvenLEAF@gmail.com
              </a>
            </div>

            <div className="myContactButtonHolder">
              <a target="_blank" href="mailto:silvenleaf@gmail.com?subject=Contact&body=Hi SilvenLEAF" className="myContactButton">
                Open LINK
              </a>
            </div>
          </div>

          <div className="col m5 offset-m2 myContactSection">
            <div className="fa fa-linkedin myContactSectionIcon"></div>


            <div className="myContactLink">
              <a target="_blank" href="#">
                LINKED IN
              </a>
            </div>

            <div className="myContactButtonHolder">
              <a target="_blank" href="#" className="myContactButton">
                Open LINK
              </a>
            </div>
          </div>


        </div>

        <div className="row">

          <div className="col m5 myContactSection">
            <div className="fa fa-github myContactSectionIcon"></div>


            <div className="myContactLink">
              <a target="_blank" href="https://github.com/SilvenLEAF">
                GITHUB
              </a>
            </div>

            <div className="myContactButtonHolder">
              <a target="_blank" href="https://github.com/SilvenLEAF" className="myContactButton">
                Open LINK
              </a>
            </div>
          </div>

          <div className="col m5 offset-m2 myContactSection">
            <div className="fa fa-twitter myContactSectionIcon"></div>


            <div className="myContactLink">
              <a target="_blank" href="https://twitter.com/SilvenLEAF?s=20">
                TWITTER
              </a>
            </div>

            <div className="myContactButtonHolder">
              <a target="_blank" href="https://twitter.com/SilvenLEAF?s=20#" className="myContactButton">
                Open LINK
              </a>
            </div>
          </div>


          </div>


    </div>
  )
}

export default Contact
