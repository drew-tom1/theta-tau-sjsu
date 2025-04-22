import Head from "next/head";
// import Link from "next/link";
// import Image from "next/image";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* Head Section */}
      <Head>
        <title>SJSU Theta Tau</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
      </Head>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-heading text-xxl">
              <span>THETA</span>
              <span>TAU</span>
            </h1>
            <p className="hero-text">
              <span>
                Premier Professional{" "}
                <span className="hero-coed-text">CO-ED</span> Engineering
              </span>
              <span>Fraternity at San Jose State</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />

      {/* Load External JS */}
      <Script src="/js/main.js" strategy="lazyOnload" />
    </>
  );
}
