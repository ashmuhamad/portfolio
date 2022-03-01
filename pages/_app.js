import { AnimatePresence } from "framer-motion";
import { Cursorv2 } from "../components/Misc/Cursorv2";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import MouseContextProvider from "../contexts/MouseContextProvider";
import "../styles/global.scss";

function Portfolio({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Navbar />
      <Cursorv2 />
      <AnimatePresence>
        <MouseContextProvider>
          <Component {...pageProps} />
        </MouseContextProvider>
      </AnimatePresence>
    </>
  );
}

export default Portfolio;
