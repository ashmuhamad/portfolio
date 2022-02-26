import styles from "./Hero.module.scss";
import { motion } from "framer-motion";
import { useContext } from "react";
import { MouseContext } from "../../contexts/MouseContextProvider";
import Typewriter from "typewriter-effect";

const Hero = () => {

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroTyping}>
          <Typewriter
          options={ {loop: true,     autoStart: true} }
            onInit={(typewriter) => {
              typewriter
              .typeString('Hi my name is <strong>Ash</strong>!')
              .pauseFor(1200)
              .typeString(' I am a <strong><span style="color: #27ae60;">UI/UX Designer</span></strong>')
              .pauseFor(750)
              .deleteChars(14)
              .typeString('<strong><span style="color: #27ae60;">Game Developer</span></strong>')
              .pauseFor(750)
              .deleteChars(15)
              .typeString('<strong><span style="color: #27ae60;">Content Creator</span></strong>')
              .start();
              
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
