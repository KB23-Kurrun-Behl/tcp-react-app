import React from 'react';

function PreOrder() {
  return (
      <section id="pre-order">
      <div className="row">
        <div className="col-lg-12 col-md-12">

          <h1 className="pre-order-title">PRE-ORDER</h1>
          <p className="pre-order-overview">THE HORROR IS ABOUT TO BE UNLEASHED.
            <br /> BE THE FIRST TO WITNESS THIS TERRIFYING EXPERIENCE.
          </p>

          <video className="pre-order-video" width="100%" loop autoPlay muted>
            <source src={require('../components/images/pre-order-video.mp4')} type="video/mp4"></source>
          </video>
          <p className="select-platform-title">SELECT YOUR PLATFORM</p>
          <div className="platform-buttons-container">
            <a href="https://www.amazon.ca/Callisto-Protocol-Day-One-PlayStation/dp/B0B3RHXV67/ref=sr_1_1?crid=3F0Y5EO3B99RE&keywords=the%2Bcallisto%2Bprotocol&qid=1662755325&sprefix=the%2Bcallist%2Caps%2C196&sr=8-1&th=1">
              <button className="btn platform-btn btn-outline-primary btn-md text-center">
                XBOX ONE
              </button>
            </a>
            <a href="https://www.amazon.ca/Callisto-Protocol-Day-One-PlayStation/dp/B0B3RHS5C2/ref=sr_1_1?crid=3F0Y5EO3B99RE&keywords=the%2Bcallisto%2Bprotocol&qid=1662755325&sprefix=the%2Bcallist%2Caps%2C196&sr=8-1&th=1">
              <button className="btn platform-btn btn-outline-primary btn-md text-center">
                XBOX SERIES X/S
              </button>
            </a>
            <a href="https://www.amazon.ca/Callisto-Protocol-Day-One-PlayStation/dp/B0B3RHBPJP/ref=sr_1_1?crid=3F0Y5EO3B99RE&keywords=the%2Bcallisto%2Bprotocol&qid=1662755325&sprefix=the%2Bcallist%2Caps%2C196&sr=8-1&th=1">
              <button className="btn platform-btn btn-outline-primary btn-md text-center">
                PS4
              </button>
            </a>
            <a href="https://www.amazon.ca/Callisto-Protocol-Day-One-PlayStation/dp/B0B3RHBPJP/ref=sr_1_1?crid=3F0Y5EO3B99RE&keywords=the%2Bcallisto%2Bprotocol&qid=1662755325&sprefix=the%2Bcallist%2Caps%2C196&sr=8-1&th=1">
              <button className="btn platform-btn btn-outline-primary btn-md text-center">
                PS5
              </button>
            </a>
            <a href="https://store.steampowered.com/app/1544020/The_Callisto_Protocol/">
              <button className="btn platform-btn btn-outline-primary btn-md text-center">
                PC
              </button>
            </a>
          </div>
        </div>
      </div>
      </section>
  );
}

export default PreOrder