import React from 'react';

function Explore() {
    return (
        <section id="explore-container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
    
              <h1 className="explore-title">_ WELCOME TO CALLISTO</h1>
    
              <div className="explore-overview-container">
                <p className="explore-overview">SURVIVE THE HORRORS LOCKED INSIDE THE
                  WALLS OF BLACK IRON PRISON IN THIS IMMERSIVE, NEXT GENERATION GAME
                  BROUGHT TO YOU BY THE CREATOR OF DEAD SPACE. <br /><br /> YOUR ONLY
                  OPTIONS ARE TO FIGHT OR DIE.</p>
    
                <a href="https://www.amazon.ca/Callisto-Protocol-Day-One-PlayStation/dp/B0B3RHTS8F/ref=sr_1_1?crid=1WLSYATT8U1J4&keywords=The+Callisto+Protocol&qid=1662755176&sprefix=the+callisto+protocol%2Caps%2C82&sr=8-1">
                  <button className="pre-order-btn btn-outline-primary text-center">PRE-ORDER</button>
                </a>
              </div>
            </div>
    
            <div className="explore-video col-lg-6 col-md-12">
              <video width="100%" loop autoPlay muted>
                <source src={require('../components/images/explore-video.mp4')} type="video/mp4"></source>
              </video>
            </div>
          </div>
      </section>
    );
}

export default Explore