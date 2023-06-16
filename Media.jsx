import React from "react";

function Media() {

  return (
  <section id="videos-container">
  <h1 className="media-title">_ MEDIA</h1>
  <div className="row">
  <div className="col-lg-6 col-md-12">
    <div className="bg-image ripple" data-mdb-ripple-color="light">
  
      <a href="https://www.youtube.com/watch?v=UW-r_7d-bhI">
     
        <img className="card-img" src={require('../components/images/video-one.jpg')} alt="tcp-card-img"></img>
        <div className="mask" style={{backgroundColor:'rgba(33, 225, 225)'}}>
      
          <div className="d-flex align-items-right h-100">
            <p className="card-title text mb-0 justify-content-left">GAMESCOM DEMO <i className="fa fa-play"></i></p>
          </div>
        </div>
      </a>
    </div>
  </div>


  <div className="col-lg-6 col-md-12">
    <div className="bg-image ripple" data-mdb-ripple-color="light">
  
      <a href="https://www.youtube.com/watch?v=UW-r_7d-bhI">
     
        <img className="card-img" src={require('../components/images/video-two.jpg')} alt="tcp-card-img"></img>
        <div className="mask" style={{backgroundColor:'rgba(33, 225, 225)'}}>
      
          <div className="d-flex align-items-right h-100">
            <p className="card-title text mb-0 justify-content-left">GAMEPLAY TRAILER <i className="fa fa-play"></i></p>
          </div>
        </div>
      </a>
    </div>
  </div>


  <div className="col-lg-6 col-md-12">
    <div className="bg-image ripple" data-mdb-ripple-color="light">

      <a href="https://www.youtube.com/watch?v=nAbTpXiHVI8">
      
        <img className="card-img" src={require('../components/images/video-three.jpg')} alt="tcp-card-img"></img>
        <div className="mask" style={{backgroundColor:'rgba(33, 225, 225)'}}>
     
          <div className="d-flex align-items-right h-100">
            <p className="card-title text mb-0 justify-content-left">OFFICIAL TRAILER <i className="fa fa-play"></i></p>
          </div>
        </div>
      </a>
    </div>
  </div>

  <div className="col-lg-6 col-md-12">
    <div className="bg-image ripple" data-mdb-ripple-color="light">

      <a href="https://www.youtube.com/watch?v=pihqx8XQ3r4">
    
        <img className="card-img" src={require('../components/images/video-four.jpg')} alt="tcp-card-img"></img>
        <div className="mask" style={{backgroundColor: 'rgba(33, 225, 225)'}}>

          <div className="d-flex align-items-right h-100">
            <p className="card-title text mb-0 justify-content-left">EXTENDED TRAILER <i className="fa fa-play"></i></p>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>

<section id="screenshots-container">
<div className="row">

    <img className="screenshot" src={require('../components/images/screenshot-one.jpg')} alt="tcp-screenshot" onclick="expandImage(this)"></img>

    <img className="screenshot" src={require('../components/images/screenshot-two.jpg')} alt="tcp-screenshot" onclick="expandImage(this)"></img>

    <img  className="screenshot" src={require('../components/images/screenshot-three.jpg')} alt="tcp-screenshot" onclick="expandImage(this)"></img>

    <img className="screenshot" src={require('../components/images/screenshot-four.jpg')} alt="tcp-screenshot" onclick="expandImage(this)"></img>

    <img className="screenshot" src={require('../components/images/screenshot-five.jpg')} alt="tcp-screenshot" onclick="expandImage(this)"></img>

    <img className="screenshot" src={require('../components/images/screenshot-six.jpg')} alt="tcp-screenshot" onclick="expandImage(this)"></img>
</div>
</section>
</section>
);
}

export default Media;