import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              
              <h1>Welcome to FurryFriends</h1>
              <p>
              "FurryWaleFriends, a compassionate platform, utilizes MongoDB for a secure treatment portal addressing injured animals. The adoption and donation sections offer second chances to strays, while the user-friendly interface facilitates shelter exploration and swift reporting of animal cruelty."
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <Analytics />

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
             Treatment Portal: Securely connect with veterinarians, manage appointments, and ensure data privacy for injured or ill animals.
 Adoption Section: Find loving homes for stray animals and connect adopters with shelters and rescue organizations.
 Donation Portal: Contribute to the care and well-being of needy animals through secure and transparent donations.
 Shelter Directory: Explore various shelter options for different animal needs, including adoption services and government facilities.
 Complaint Section: Report instances of animal cruelty or distress anonymously, triggering swift action from relevant authorities.

            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
