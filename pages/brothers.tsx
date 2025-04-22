import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";


export default function BrothersPage() {
    return (
      <>
        <Head>
          <title>Brothers of Omega Epsilon Chapter</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="shortcut icon" href="/images/logo.png" type="image/x-icon" />
        </Head>
  
        <Navbar />
  
        <section className="about">
          <div className="container">
            <div className="about-content">
              <h2 className="about-heading text-xl">
                The Brothers
              </h2>
              <h1 className="about-heading">
                of the Omega Epsilon Chapter
              </h1>
              <hr />
            </div>
          </div>
        </section>
        <div className="categories flex flex-row items-center justify-center">
          <h1 className="category text-center font-extrabold cursor-pointer">
            Leadership
          </h1>
          <h1 className="category active text-center font-extrabold cursor-pointer">
            Actives
          </h1>
          <h1 className="category text-center font-extrabold cursor-pointer">
            Alumni
          </h1>
        </div>
      </>
    );
  }
  