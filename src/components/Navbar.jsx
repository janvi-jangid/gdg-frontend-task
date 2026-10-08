import "./Navbar.css";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">

      {/* GDG Logo */}
      <div className="gdg-logo">
        <span className="logo-shape red"></span>
        <span className="logo-shape blue"></span>
        <span className="logo-shape green"></span>
        <span className="logo-shape yellow"></span>
      </div>

      <div className="nav-links">
        <a href="#home" className="nav-home">Home</a>
        <a href="#team" className="nav-team">Team</a>
        <a href="#events" className="nav-events">Events</a>
        <a href="#gallery" className="nav-gallery">Gallery</a>
        <a href="#portfolio" className="nav-portfolio">Portfolio</a>
        <a href="#more" className="nav-more">More</a>

        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

    </nav>
  );
}

export default Navbar;