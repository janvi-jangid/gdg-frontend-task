import teamImage from "../assets/team.jpg";
import "./Team.css";
function Team() {
  return (
    <section className="team" id="team">
      <div className="team-content">
        <h2>
          Meet the
          <br />
          Google
          <br />
          Developer
          <br />
          Group Team
        </h2>

        <p className="team-description">
          Google Developer Groups (GDG) are open and volunteer-run
          communities for developers interested in Google technologies.
          Our team focuses on learning, networking, and collaboration
          through events and hands-on sessions.
        </p>

        <div className="team-feature">
          <div className="check-icon">✓</div>

          <div>
            <h3>Passionate Community Leaders</h3>

            <p>
              Our organizers build an inclusive environment where
              developers can connect, share knowledge, and grow
              together.
            </p>
          </div>
        </div>

        <div className="team-feature">
          <div className="check-icon">✓</div>

          <div>
            <h3>Empowering Developers</h3>

            <p>
              We host meetups and codelabs to help developers stay
              current with modern tools and best practices.
            </p>
          </div>
        </div>
      </div>

      <div className="team-image">
        <img src={teamImage} alt="GDG RBU Team" />
      </div>
    </section>
  );
}

export default Team;