import "./Events.css";
function Events() {
  return (
    <section className="events" id="events">
      <h2 className="events-title">Upcoming Event</h2>

      <div className="event-layout">
        {/* Main Event */}
        <div className="main-event">
          <div className="event-top">
            <p>GDG ORIENTATION</p>
            <span>UPCOMING</span>
          </div>

          <div className="main-event-content">
            <h3>GDG ORIENTATION</h3>

            <p>
              Google Developer Groups (GDG) – Student Chapter is a
              community of students passionate about technology,
              innovation, and learning. We bring students together to
              learn, build, and grow through technical workshops,
              hands-on sessions, hackathons, projects, and networking...
            </p>

            <button className="event-arrow">↗</button>
          </div>
        </div>

        {/* New Event */}
        <div className="new-event">
          <h3>
            New
            <br />
            Event
          </h3>

          <div className="event-divider"></div>

          <div className="event-info">
            <span>DATE & TIME</span>
            <strong>
              Nov 15, 2026
              <br />
              3:00 PM
            </strong>
          </div>

          <button className="register-button">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Events;