import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import Script from "next/script";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

export default function faq() {
  // FAQ Typescript
useEffect(() => {
  const faqContainer = document.querySelector(".faq-content");


  const handleClick = (e: Event) => {
    const target = e.target as HTMLElement | null;

    if (!target) return;

    const groupHeader = target.closest(
      ".faq-group-header"
    ) as HTMLElement | null;

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group?.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("svg");

    // Toggle the FAQ answer visibility
    if (groupBody) {
      groupBody.classList.toggle("open");
    }


    const otherGroups = faqContainer?.querySelectorAll(".faq-group");
    otherGroups?.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherIcon = otherGroup.querySelector(".faq-group-header svg");

        otherGroupBody?.classList.remove("open");
        otherIcon?.classList.remove("fa-minus");
        otherIcon?.classList.add("fa-plus");
      }
    });


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
    faqContainer.addEventListener("click", handleClick as EventListener);
  }

  return () => {
    if (faqContainer) {
      faqContainer.removeEventListener("click", handleClick as EventListener);
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
          <h3 className="text-xl light-color ">
            Frequently Asked Questions
          </h3>

          {/* FAQ Menu Not 100% if we need to implement tbh */}
          {/* <ul className="faq-menu">
            <li className="active">Rush</li>
            <li>Events</li>
            <li>Time</li>
          </ul> */}

          <div className="faq-content">
            <div className="faq-group">
              <div className="faq-group-header text-m">
                <h4>What is a professional fraternity?</h4>
                <FontAwesomeIcon icon={faMinus} className="fa fa-minus" />
              </div>
              <div className="faq-group-body open text-s text-thin">
                <p>
                  A professional fraternity is a brotherhood consisting chiefly
                  of individuals in a specific field of education, promoting
                  professional development in addition to strengthening
                  brotherly ties.
                </p>
              </div>
            </div>

            <div className="faq-group">
              <div className="faq-group-header text-m">
                <h4>What is rush?</h4>
                <FontAwesomeIcon icon={faMinus} className="fa fa-minus" />
              </div>
              <div className="faq-group-body text-s text-thin">
                <p>
                  Rush is an opportunity for you to learn more about Theta Tau
                  by meeting both our active and graduated brothers. Rush
                  consists of multiple events that will give you a taste of what
                  our fraternity stands for, whether you are a good fit for us,
                  and whether we are a good fit for you. At the end of rush, we
                  extend a limited number of interviews and bids. Those who
                  receive bids can then decide whether or not they would like to
                  pledge. Rushing is completely free of charge and there are no
                  obligations.
                </p>
              </div>
            </div>

            <div className="faq-group">
              <div className="faq-group-header text-m">
                <h4>Who can rush?</h4>
                <FontAwesomeIcon icon={faMinus} className="fa fa-minus" />
              </div>
              <div className="faq-group-body text-s text-thin">
                <p>
                  Students must be full-time students and be in good academic
                  standing with the university (above 2.0 GPA). Students
                  studying that are studying Masters are also encouraged to
                  rush.
                </p>
              </div>
            </div>

            <div className="faq-group">
              <div className="faq-group-header text-m">
                <h4>What is a bid?</h4>
                <FontAwesomeIcon icon={faMinus} className="fa fa-minus" />
              </div>
              <div className="faq-group-body text-s text-thin">
                <p>
                  A bid is a formal invitation to begin pledging, the process of
                  becoming a brother.
                </p>
              </div>
            </div>

            <div className="faq-group">
              <div className="faq-group-header text-m">
                <h4>How do you choose who receives a bid?</h4>
                <FontAwesomeIcon icon={faMinus} className="fa fa-minus" />
              </div>
              <div className="faq-group-body text-s text-thin">
                <p>
                  Theta Tau searches for engineers who have a strong foundation
                  in its three pillars: Brotherhood, Professionalism, and
                  Service. We review each applicant as a whole (grades,
                  personality, professionalism, resume, etc.) to determine
                  whether we are the right fit for you.
                </p>
              </div>
            </div>

            <div className="faq-group">
              <div className="faq-group-header text-m">
                <h4>Do you only accept engineering majors?</h4>
                <FontAwesomeIcon icon={faMinus} className="fa fa-minus" />
              </div>
              <div className="faq-group-body text-s text-thin">
                <p>
                  No, we have accepted students of related majors in the past
                  such as Computer Science, Applied Math, Packaging, and
                  Cognitive Science.
                </p>
              </div>
            </div>

            <div className="faq-group">
              <div className="faq-group-header text-m">
                <h4>What is pledging?</h4>
                <FontAwesomeIcon icon={faMinus} className="fa fa-minus" />
              </div>
              <div className="faq-group-body text-s text-thin">
                <p>
                  Pledging is the process by which individuals integrate
                  themselves into the brotherhood. It is led by pledge
                  instructors, who assist the pledges in developing their
                  professional skills, aiding the community, and most important
                  of all, getting to know their future brothers.
                </p>
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
