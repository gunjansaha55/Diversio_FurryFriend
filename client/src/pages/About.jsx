import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";

export const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}

             <h1>Why Choose Us? </h1>
              <p>
              Seek treatment: Search for nearby veterinary clinics or animal shelters through our shelter directory. 
              </p>
              <p>
              Schedule an appointment: Utilize the FurryFriends treatment portal to connect with a veterinarian directly within the app. Personal information for both Luna and Alex is secured with MongoDB encryption.
              </p>
              <p>
              Donate for care: Contribute to Luna's treatment through our secure donation portal, ensuring her speedy recovery.
              </p>
              <p>
              Report cruelty: Witness animal neglect? Use the complaint section to report the incident and trigger swift action from authorities anonymously.
              </p>
              <p>
                Reliability: Count on us to be there when you need us. We're available 24/7.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};
