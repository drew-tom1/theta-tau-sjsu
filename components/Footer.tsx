// import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";



export default function Footer() {
  return (
    <nav className="footer bk-light">
      <div className="container ">
        <div className="footer-grid">
          <div>
            <a href="index.tsx">
              <img src="/images/logo.png" className="footer-logo" alt="logo one" />
            </a>
            <div className="card">
              <h4>Subscribe to Newsletter</h4>
              <p className="text-sm">
                Subscribe now to receive more updates about Theta Tau SJSU!
              </p>
              <form>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email here"
                />
              </form>
              <button type="submit" className="btn btn-primiary btn-block">
                Subscribe
              </button>
            </div>
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </div>

          <div className="">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="#">Our Process</a>
              </li>
              <li>
                <a href="#">Join Our Team</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Research</a>
              </li>
              <li>
                <a href="#">Recent Projects</a>
              </li>
            </ul>
          </div>

          <div className="contact-card">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="#">sjsuthetatau@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
