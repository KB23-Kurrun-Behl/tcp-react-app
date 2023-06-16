import React from "react";
// import signUpBG from "../components/images/signup-bg.jpg";

function Subscribe() {

  return (
    <form action="/subscribe" className="form-sign-in" method="post">
    <h1 className="h3 sign-up-title mb-3 font-weight-normal">_ SUBSCRIBE</h1>
    <p className="sign-up-overview mb-3 text-muted">SIGN UP TO RECEIVE NEWS ON THE CALLISTO PROTOCOL</p>
    <input name="email" type="email" className="form-control top" placeholder="EMAIL" required></input>
    <br />
    <input name="firstName" type="text" className="form-control middle" placeholder="FIRST NAME" required></input>
    <br />
    <input name="lastName" type="text" className="form-control bottom" placeholder="LAST NAME" required></input>
    <br /><br />
    <button className="btn subscribe-btn btn-lg btn-primary btn-block" type="submit">SUBSCRIBE</button>
    </form>
);
}

export default Subscribe;