import React from 'react';

function LatestNews() {
    return (
      <section id="latest-news">
        <h1 className="latest-news-title">_ LATEST NEWS</h1>
  
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="card">
              <div className="card-header">
                <a href="https://www.youtube.com/watch?v=pihqx8XQ3r4"><img className="card-img" src={require('../components/images/news-three.jpg')} alt="tcp-card-img"></img></a>
              </div>
              <div className="card-body">
                <a href="https://www.youtube.com/watch?v=pihqx8XQ3r4">
                  <h3 className="card-title">GAMEPLAY REVEAL</h3>
                </a>
                <p className="card-overview">THE FIRST GAMEPLAY REVEAL FOR THE CALLISTO PROTOCOL SHOWCASING THE BRUTAL MADNESS.</p>
              </div>
            </div>
          </div>
  
          <div className="col-lg-4 col-md-12">
            <div className="card">
              <div className="card-header">
                <a href="https://www.gameinformer.com/callistoprotocol"><img className="card-img" src={require('../components/images/news-two.jpg')}  alt="tcp-card-img"></img></a>
              </div>
              <div className="card-body">
                <a href="https://www.gameinformer.com/callistoprotocol">
                  <h3 className="card-title">GAME INFORMER</h3>
                </a>
                <p className="card-overview">GAME INFORMER SAT DOWN WITH STRIKING DISTANCE STUDIOS TO DISCUSS
                  THE CALLISTO PROTOCOL.</p>
              </div>
            </div>
          </div>
  
          <div className="col-lg-4 col-md-12">
            <div className="card">
              <div className="card-header">
                <a href="https://www.youtube.com/watch?v=nAbTpXiHVI8"><img className="card-img" src={require('../components/images/news-one.jpg')}  alt="tcp-card-img"></img></a>
              </div>
              <div className="card-body">
                <a href="https://www.youtube.com/watch?v=nAbTpXiHVI8">
                  <h3 className="card-title">OFFICIAL TRAILER</h3>
                </a>
                <p className="card-overview">THE OFFICIAL TRAILER FOR THE CALLISTO PROTOCOL FROM THE MIND OF GLEN SCHOFIELD.</p>
              </div>
            </div>
          </div>
        </div>
  </section>
  );
}

export default LatestNews