import { AnimatePresence } from "framer-motion";
import MouseContextProvider from "../contexts/MouseContextProvider";
import "../styles/global.scss";

function Portfolio({ Component, pageProps }) {
  return (
    <>
      <AnimatePresence>
        <MouseContextProvider>
          <Component {...pageProps} />
        </MouseContextProvider>
      </AnimatePresence>
    </>
  );
}

export default Portfolio;
