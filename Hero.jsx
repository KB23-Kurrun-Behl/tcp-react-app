import React from 'react';

function Hero() {
    return (
      <div>
      <video class="hero-video" src={require('../components/images/hero-video.mp4')} width="100%" autoPlay playsinline muted loop></video>

      <div class="container-fluid">
        <nav class="navbar navbar-customclass navbar-expand-lg navbar-dark fixed-top">
          <a class="navbar-brand" href="/"><img class="logo" src={require('../components/images/tcp-logo.png')} alt="tcp-logo"></img></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item"><a class="nav-link" href="/"><span><u>H</u>OME</span></a></li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item"><a class="nav-link" href="about.html"><span><u>A</u>BOUT</span></a></li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item"><a class="nav-link" href="media.html"><span><u>M</u>EDIA</span></a></li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item"><a class="nav-link" href="signup.html"><span><u>S</u>UBSCRIBE</span></a></li>
            </ul>
          </div>
        </nav>
  
        <img class="title-logo" src={require('../components/images/tcp-titlelogo.png')} alt="tcplogo"></img>
        <p class="hero-overview">EXPLORE THE DEPTHS OF FEAR IN THE ALL-NEW <br />
          HORROR GAME FROM GLEN SCHOFIELD.</p>
      </div>
      </div>
  );
}

export default Hero