import "./Hero.css";
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          GOOGLE DEVELOPER
          <br />
          GROUPS, RBU
        </h1>

        <p>
          Empowering students with cutting-edge tech skills,
          community and resources for a future in technology
        </p>

        <div className="hero-buttons">
          <button>Explore Events</button>
          <button>Join Us</button>
        </div>
      </div>

      <div className="hero-graphic">
        <div className="graphic-box"></div>
      </div>
    </section>
  );
}

export default Hero;