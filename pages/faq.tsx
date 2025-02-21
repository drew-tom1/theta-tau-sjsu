import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faP } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Script from "next/script";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

export default function faq() {
  // FAQ Typescript

  useEffect(() => {
    const faqContainer = document.querySelector(".faq-content");

    const handleClick = (e: MouseEvent) => {
      const groupHeader = e.target.closest(".faq-group-header") as HTMLElement;

      if (!groupHeader) return;

      const group = groupHeader.parentElement;
      const groupBody = group?.querySelector(".faq-group-body");
      const icon = groupHeader.querySelector("svg");

      // FAQ answer visibility
      if (groupBody) {
        groupBody.classList.toggle("open");
      }

      // Close other OPEN faq Body
      const otherGroups = faqContainer?.querySelectorAll(".faq-group");

      otherGroups?.forEach((otherGroups) => {
        if (otherGroups !== group) {
          const otherGroupBody = otherGroups.querySelector(".faq-group-body");
          const otherIcon = otherGroups.querySelector(".faq-group-header svg");

          otherGroupBody?.classList.remove("open");
          otherIcon?.classList.remove('fa-minus');
          otherIcon?.classList.add('fa-plus');
        }
      });

      // Icon Toggle (its high key low key not workinggggg ;-; ;-; ;-; ;-; ;-; 

      if (icon) {
        if (icon.classList.contains("fa-plus")) {
          icon.classList.remove("fa-plus");
          icon.classList.add("fa-minus");
        } else {
          icon.classList.remove("fa-minus");
          icon.classList.add("fa-plus");
        }
      }
      
    };

    if (faqContainer) {
      faqContainer.addEventListener("click", handleClick);
    }

    return () => {
      if (faqContainer) {
        faqContainer.removeEventListener("click", handleClick);
      }
    };
  }, []);

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
          

          {/* FAQ Menu Not 100% if we need to implement tbh */}
          {/* <ul className="faq-menu">
            <li className="active">Rush</li>
            <li>Events</li>
            <li>Time</li>
          </ul> */}

          <div className="faq-content">
            <div className="faq-group">
              <div className="faq-group-header text-m">
                <h4>How much are dues?</h4>
                <FontAwesomeIcon icon={faMinus} className="fa fa-minus" />
              </div>
              <div className="faq-group-body open text-s text-thin">
                <p>$200</p>
              </div>
            </div>

            <div className="faq-group">
              <div className="faq-group-header text-m">
                <h4>Is there any hazing?</h4>
                <FontAwesomeIcon icon={faMinus} className="fa fa-minus" />
              </div>
              <div className="faq-group-body text-s text-thin">
                <p>No.</p>
              </div>
            </div>

            <div className="faq-group">
              <div className="faq-group-header text-m">
                <h4>What are the benifits?</h4>
                <FontAwesomeIcon icon={faMinus} className="fa fa-minus" />
              </div>
              <div className="faq-group-body text-s text-thin">
                <p>You can get to meet friends and people.</p>
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
