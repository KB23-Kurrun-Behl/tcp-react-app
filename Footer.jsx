import React from "react";

function Footer() {
  return (
    <footer id="footer">
    <div className="footer-container">
      <a href="https://sds.com"><img className="sds-logo" src={require('../components/images/logo-sds.png')} alt="striking-distance-logo"></img></a>
      <a href="https://krafton.com/en/"><img className="krafton-logo" src={require('../components/images/logo-k.png')} alt="krafton-logo"></img></a>

      <div className="footer-social-media">
        <a href="https://www.facebook.com/Callistothegame"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="https://twitter.com/callistothegame"><i className="fa-brands fa-twitter"></i></a>
        <a href="https://www.instagram.com/Callistothegame/"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://www.youtube.com/c/strikingdistance"><i className="fa-brands fa-youtube"></i></a>
      </div>

      <br />

      <p className="footer-link">PRIVACY POLICY</p>
      <p className="footer-link">TERMS OF SERVICE</p>
      <p className="footer-link">PRESS CONTACT</p>
    </div>

    <p className="footer-copyright">© 2022 Striking Distance Studios, Inc. ALL
      RIGHTS RESERVED. STRIKING DISTANCE STUDIOS and THE CALLISTO PROTOCOL <br />
      are trademarks or service marks of Striking Distance Studios, Inc. KRAFTON
      is a registered trademark or service mark of KRAFTON, Inc.</p>
  </footer>

  );
}

export default Footer;
