import "./Newsletter.css";
function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-header">
        <div className="gdg-logo">
            <div className="gdg-logo">
                <span className="logo-shape red"></span>
                <span className="logo-shape blue"></span>
                <span className="logo-shape green"></span>
                <span className="logo-shape yellow"></span>
            </div>
        </div>

        <h2>Google Developer Groups</h2>

        <p>On Campus • Ramdeobaba University</p>
      </div>

      <div className="newsletter-divider"></div>

      <div className="newsletter-content">
        <div className="contact-info">
          <div className="contact-card address-card">
            <span className="contact-icon">⌾</span>

            <div>
              <strong>Ramdeobaba University</strong>
              <p>
                Ramdeo Tekdi, Gititkhandan, Katol Road,
                Nagpur-440013
              </p>
            </div>
          </div>

          <div className="contact-card email-card">
            <span className="contact-icon">✉</span>

            <strong>gdsc@rknec.edu</strong>
          </div>
        </div>

        <div className="social-card">
          <h3>Follow Us:</h3>

          <div className="social-links">
            <a href="#" aria-label="Instagram">
              IG
            </a>

            <a href="#" aria-label="LinkedIn">
              in
            </a>

            <a href="#" aria-label="X">
              X
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;