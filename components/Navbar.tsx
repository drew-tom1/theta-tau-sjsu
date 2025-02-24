import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo one"
              width={50}
              height={50}
            />
          </Link>
          <div className="emblem">
            <Link href="/" className="text-effect">
              THETA TAU
            </Link>
            <Link href="/" className="emblem-sm">
              Omega Epsilon
            </Link>
          </div>
        </div>

        {/* Main Menu for Desktop */}
        <div className="main-menu">
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="#">Brothers</Link>
            </li>
            <li>
              <Link href="#">Rush</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="#" className="btn btn-dark">
                Sign In
              </Link>
            </li>
            <li>
              <Link href="#" className="btn btn-light">
                Apply
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          id="hamburger-button"
          onClick={toggleMenu}
          className="hamburger-button"
          aria-label="Toggle mobile menu"
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="#">Brothers</Link>
            </li>
            <li>
              <Link href="#">Rush</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="#" className="btn btn-dark">
                Sign In
              </Link>
            </li>
            <li>
              <Link href="#" className="btn btn-light">
                Apply
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
