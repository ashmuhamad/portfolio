import styles from "./Hero.module.scss";
import { useContext } from "react";
import { MouseContext } from "../../contexts/MouseContextProvider";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroTyping}>
          <div
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
            onmousedown={() => cursorChangeHandler("clicked")}
          >
            Ash Muhamad
          </div>
          <div className={styles.subheading}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Welcome to my portfolio")
                  .pauseFor(2500)
                  .start();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
