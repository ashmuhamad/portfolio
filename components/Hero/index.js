import styles from "./Hero.module.scss";
import { motion } from "framer-motion";
import { useContext } from "react";
import { MouseContext } from "../../contexts/MouseContextProvider";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroTyping}>
          <p
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            Ash Muhamad
          </p>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello World!")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
