import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={50} height={50} />
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
              <Link href="#" className="btn btn-dark">
                <i className="fas fa-user">Sign In</i>
              </Link>
            </li>
            <li>
              <Link href="#" className="btn btn-light">
                <i className="fas fa-user apply">Apply</i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
