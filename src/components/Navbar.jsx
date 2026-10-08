function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>GDG</span>
        <span>RBU</span>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#events">Events</a>
        <a href="#team">Team</a>
        <a href="#faq">FAQs</a>
      </div>

      <button className="join-button">Join Us</button>
    </nav>
  );
}

export default Navbar;