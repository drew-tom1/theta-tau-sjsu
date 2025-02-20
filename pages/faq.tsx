import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faP } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Script from "next/script";
import Navbar from "../components/Navbar";

export default function faq() {
  return (
    <>
      {/* Head Section */}
      <Head>
        <title>FAQ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
      </Head>

      {/* Navbar */}
      <Navbar />

      <section className="faq">
        <div className="container-small">
          <h3 className="text-xl light-color">Frequently Asked Questions</h3>

          <ul className="faq-menu">
            <li className="active">All</li>
            <li>Getting Started</li>
            <li>Pricing</li>
          </ul>

          <div className="faq-content">
            <div className="faq-group">
              <div className="faq-group-header text-m">
                <h4>Question</h4>
                <FontAwesomeIcon className="fa fa-minus" icon={faMinus} />
              </div>
              <div className="faq-group-body open text-s">
                <h4>Anwser</h4>
              </div>
            </div>

            <div className="faq-group">
              <div className="faq-group-header text-m">
                <h4>Question</h4>
                <FontAwesomeIcon className="fa fa-plus" icon={faPlus} />
              </div>
              <div className="faq-group-body text-s">
                <h4>Anwser</h4>
              </div>
            </div>

            <div className="faq-group">
              <div className="faq-group-header text-m">
                <h4>Question</h4>
                <FontAwesomeIcon className="fa fa-plus" icon={faPlus} />
              </div>
              <div className="faq-group-body text-s">
                <h4>Anwser</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Load External JS */}
      <Script src="../public/js/main.js" strategy="lazyOnload" />
    </>
  );
}
