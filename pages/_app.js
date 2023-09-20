import "@/styles/globals.css";
import Navbar from "./Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Navbar />
    </>
  );
}