import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const LOCATION_URL = "https://goo.gl/maps/QHGAUrWnVhq8rquk8";
// Replace this with the accommodation's WhatsApp number, including country code, digits only.
// Example Kenya format: 2547XXXXXXXX
const WHATSAPP_NUMBER = "254715875715";

function BrandMark() {
  return (
    <div className="brand-mark" aria-label="Royalty Haven">
      <span className="brand-script">RH</span>
      <span className="brand-door">
        <i />
      </span>
    </div>
  );
}

function App() {
  const [page, setPage] = useState(
    window.location.hash === "#guidelines" ? "guidelines" : "home",
  );

  useEffect(() => {
    const onHash = () =>
      setPage(window.location.hash === "#guidelines" ? "guidelines" : "home");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = (next) => {
    window.location.hash = next === "guidelines" ? "guidelines" : "home";
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Royalty Haven, I would like to make an enquiry.")}`
    : "https://wa.me/+254715875715?text=Hello%20Royalty%20Haven%2C%20I%20would%20like%20to%20make%20an%20enquiry.";

  return (
    <main
      className={`site-shell ${page === "guidelines" ? "guidelines-page" : "home-page"}`}
    >
      <div className="photo-backdrop" />
      {page === "home" && (
        <header className="top-brand">
          <BrandMark />
        </header>
      )}

      {page === "home" ? (
        <section className="hero" aria-label="Welcome to Royalty Haven">
          <div className="welcome-copy">
            <p className="welcome">welcome to</p>
            <h1>Royalty Haven</h1>
            <p className="subheading">Accommodations</p>
          </div>
          <button
            className="primary-button explore-button"
            onClick={() => navigate("guidelines")}
          >
            Book Your Stay
            <span aria-hidden="true">›</span>
            <span className="button-mark">
              <BrandMark />
            </span>
          </button>
        </section>
      ) : (
        <section className="guidelines-wrap">
          <article className="guidelines-card">
            <button
              type="button"
              className="close-button"
              aria-label="Back to home"
              onClick={() => {
                window.history.replaceState(
                  null,
                  "",
                  window.location.pathname + window.location.search,
                );
                setPage("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              ×
            </button>
            {/* <button className="close-button" aria-label="Back to home" onClick={() => navigate('home')}>×</button> */}
            
            <div className="guidelines-content">
              <p className="intro">
                Before confirming your booking, kindly note our house
                guidelines:
              </p>

              <section className="rule">
                <h2>✝️ 1. Christian Values</h2>
                <p>
                  We welcome guests who respect Christian faith, values, and
                  principles. We uphold the sanctity of marriage (male and
                  female) and do not permit adultery or the use of our property
                  for extramarital affairs.
                </p>
              </section>

              <section className="rule">
                <h2>🛏️ 2. Room Bookings &amp; Shared Spaces</h2>
                <p>
                  The property has three ensuite bedrooms, a living room, and a
                  kitchen. Guests booking fewer than all three bedrooms should
                  note that the living room and kitchen will be shared with
                  other guests occupying the remaining rooms. Families and
                  groups are encouraged to book all three bedrooms for exclusive
                  use of the shared spaces.
                </p>
              </section>

              <section className="rule">
                <h2>🕒 3. Check-in &amp; Check-out</h2>
                <p>
                  <strong>Check-in:</strong> From 2:00 PM.
                </p>
                <p className="important">*PAYMENT IS STRICTLY UPON CHECK IN*</p>
                <p>
                  <strong>Check-out:</strong> By 10:00 AM the following day.
                </p>
                <p>
                  <strong>Late check-out:</strong> Departures after 10:00 AM
                  mean the room is reserved for you for the next night and must
                  therefore be paid for before or by 10:00 AM.
                </p>
                <p>
                  Please communicate any special arrival or departure requests
                  ahead of time.
                </p>
              </section>

              <section className="rule">
                <h2>🚭 4. No Smoking, Alcohol or Drugs</h2>
                <p>
                  Smoking, alcohol consumption, and the use or possession of
                  illegal drugs are strictly prohibited anywhere on the
                  property. We are committed to maintaining a clean, healthy,
                  and peaceful environment for all guests.
                </p>
              </section>

              <section className="rule">
                <h2>🤝 5. Respect &amp; Cleanliness</h2>
                <p>
                  All guests are expected to maintain cleanliness, respect other
                  guests' privacy, keep noise at reasonable levels, and handle
                  the property and its furnishings responsibly. Any damages to
                  property will be surcharged at the current cost of the
                  property plus its transportation, if necessary.
                </p>
              </section>

              <section className="rule">
                <h2>🙏 6. Booking Confirmation</h2>
                <p>
                  Please note that your booking confirms that you have read and
                  agreed to these rules.
                </p>
              </section>

              <section className="rule">
                <h2>🔇 7. Noise Levels &amp; Quiet Hours</h2>
                <p>
                  To maintain a peaceful, family-friendly environment, all
                  guests are expected to keep noise at considerate levels,
                  particularly when other guests are occupying the property.
                </p>
                <p>
                  <strong>Quiet hours:</strong> 10:00 PM – 7:00 AM.
                </p>
                <p>
                  <strong>Noise limits:</strong> Noise should generally remain
                  below 55 dB during the day and 45 dB during quiet hours,
                  especially in shared spaces and near bedrooms.
                </p>
                <p>
                  Loud music, general rowdiness, shouting, parties, and
                  disruptive gatherings are not permitted.
                </p>
                <p>
                  Guests should respect neighbours and other occupants at all
                  times.
                </p>
              </section>

              <p className="checkin-note">
                We request you to fill in a check-in form with your details to
                help us comply with Kenyan hospitality business rules.
              </p>
              <p className="closing">
                We look forward to hosting you and your loved ones in a serene,
                peaceful, comfortable, and refreshing home.
              </p>
              <p className="thank-you">
                Welcome and thank you for choosing to stay at Royalty Haven.
              </p>

              <a
                className="location-link"
                href={LOCATION_URL}
                target="_blank"
                rel="noreferrer"
              >
                <span aria-hidden="true">📍</span> OUR LOCATION{" "}
                <span className="location-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <a
                className="location-link whatsapp-button"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us <span>↗</span>
              </a>
              <a
              className="floating-booking-button"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              PROCEED TO BOOKING <span>›</span>
            </a>
            </div>
          </article>
        </section>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
