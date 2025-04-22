import Head from "next/head";
// import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      {/* Head Section */}
      <Head>
        <title>About Us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
      </Head>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <h1 className="about-heading text-xl">
              The Premier Professional Engineering Fraternity
            </h1>

            <div className="about-description">
              <div className="about-subtitle-text">
                <h2 className="about-subheading">WHO ARE WE?</h2>
                <p className="description-text">
                  Theta Tau is a co-ed professional engineering fraternity at
                  SJSU, built on fostering strong bonds among members. We strive
                  to support professional growth while making a positive impact
                  on our community.
                </p>
              </div>
              <Image
                src="/images/group2.png"
                alt="Group Photo version 2"
                width={700}
                height={500}
                className="description-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="values">
        <div className="container">
          <div className="values-content">
            <h1 className="values-heading text-xl">Our Values</h1>

            <div className="values-labels">
              <div className="card">
                <p className="card-number">01.</p>
                <p className="card-name">Brotherhood</p>
                <p className="card-text">
                  We forge lifelong friendships and a network of professional
                  relationships.
                </p>
              </div>

              <div className="card">
                <p className="card-number">02.</p>
                <p className="card-name">Community Service</p>
                <p className="card-text">
                  We develop and nurture engineers with strong communication,
                  problem-solving, and leadership skills.
                </p>
              </div>

              <div className="card">
                <p className="card-number">03.</p>
                <p className="card-name">Professionalism</p>
                <p className="card-text">
                  Our service projects create an environment for learning and
                  personal growth for our members.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="alumni-network">
        <div className="container">
          <div className="alumni-network-content">
            <h1 className="alumni-network-heading text-xl">Our Alumni Network</h1>

            <p className="alumni-network-text">
              Theta Tau is a co-ed professional engineering fraternity here at
              SJSU. We are a close knit brotherhood that encourages our members
              to excel professionally and give back to the surrounding
              community.
            </p>

            <div className="alumni-network-companies">

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
