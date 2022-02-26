import Cursor from "../components/Misc/Cursor";
import MouseContextProvider from "../contexts/MouseContextProvider";
import "../styles/global.scss";

function Portfolio({ Component, pageProps }) {
  return (
    <>
      <MouseContextProvider>
        <Cursor />
        <Component {...pageProps} />
      </MouseContextProvider>
    </>
  );
}

export default Portfolio;
