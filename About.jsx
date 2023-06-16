import React from "react";

function About() {

  // const bgStyle = {
  //   backgroundImage: 'url("../components/images/about-bg.jpg")',
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   paddingBottom: "30px"
  // };

  return (
    <div className="col-lg-12 col-md-12">
    {/* <section id="hero-container">
    <div className="about-container col-lg-12 col-md-12" style={{bgStyle}}>
    <div className="about-text-container">
    <h1 className="about-title">_ WELCOME TO BLACK IRON</h1>
      <p className="about-overview">SET ON JUPITERS MOON "CALLISTO" IN THE YEAR
        2320, THE CALLISTO PROTOCOL <br /> IS A NEXT GENERATION TAKE ON SURVIVAL
        HORROR. THE GAME CHALLENGES <br /> PLAYERSTO ESCAPE THE MAXIMUM SECURITY
        BLACK IRON PRISON AND UNCOVER <br /> THE TERRIFYING SECRETS.
      </p>
    </div>
    </div> */}
    <section id="features-container">
    <h1 className="about-title">_ ABOUT</h1>
    <div className="row">

    <div className="col-lg-6 col-md-12">
        <img className="game-feature-img" src={require('../components/images/feature-img-one.jpg')} alt="feature-img"></img>
      </div>

      <div className="game-feature-container col-lg-6 col-md-12">
        <div className="game-feature-title">
          <li>HORROR ENGINEERING</li>
        </div>
        <div className="game-feature-overview-container">
          <p className="game-feature-overview">BLENDING ATMOSPHERE, TENSION, AND
            BRUTALITY WITH TERRIFYING MOMENTS OF HELPLESSNESS AND HUMANITY. THE
            CALLISTO PROTOCOL IMMERSES PLAYERS IN A PULSE-POUNDING STORY WHERE
            UNSPEAKABLE HORRORS LURK AROUND EVERY CORNER.</p>
        </div>

        <div className="game-feature-title">
          <li>STRATEGIC COMBAT</li>
        </div>
        <div className="game-feature-overview-container">
          <p className="game-feature-overview">THE CALLISTO PROTOCOL CHALLENGES
            PLAYERS TO MASTER A THRILLING BLEND OF MELEE AND RANGED COMBAT.
            PLAYERS WILL BE FORCED TO GET UP CLOSE AND PERSONAL WITH THEIR
            GROTESQUE OPPONENTS, HACKING OFF LIMBS, BLASTING OFF LEGS, AND
            GETTING CREATIVE WITH WHATEVER IS AT THEIR DISPOSAL.</p>
        </div>
      </div>
    </div>

    <div className="row">

      <div className="game-feature-container-two col-lg-6 col-md-12">
        <div className="game-feature-title">
          <li>UNCOVER THE SECRETS OF CALLISTO</li>
        </div>
        <div className="game-feature-overview-container">
          <p className="game-feature-overview">WHEN A MYSTERIOUS OUTBREAK
            THROWS THE MOON INTO CHAOS, JACOB LEE MUST FACE HIS DARKEST FEARS
            TO DEFEAT THE BLOODTHIRSTY CREATURES THAT STALK HIM AS HE UNRAVELS
            THE DARK MYSTERIES AT THE HEART OF THE UNITED JUPITER COMPANY.</p>
        </div>

        <div className="game-feature-title">
          <li>THE ISOLATION OF THE DEAD MOON</li>
        </div>
        <div className="game-feature-overview-container">
          <p className="game-feature-overview">ONE OF THE MOST HOSTILE, ISOLATED
            ENVIRONMENTS IN THE UNIVERSE, THE DEAD MOON LOOMS LARGE OVER JACOBS
            DESPERATE STRUGGLE TO SURVIVE.</p>
        </div>
      </div>

      <div className="col-lg-6 col-md-12">
        <img className="game-feature-img-two" src={require('../components/images/feature-img-two.jpg')} alt="feature-img"></img>
      </div>
      
    </div>
    </section>
    {/* </section> */}
    </div>
  );
}

export default About;