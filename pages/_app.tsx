import Navbar from "@/components/Navbar";
import "../styles/global.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
