import styles from "./Hero.module.scss";
import { useContext } from "react";
import { MouseContext } from "../../contexts/MouseContextProvider";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const variants = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
      },
    },
  };

  const stagger = { animate: { transition: { staggerChildren: 0.2 } } };

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroWrapper} id="unselectable">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className={styles.heroTyping}
        >
          <motion.div
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
            onMouseDown={() => cursorChangeHandler("clicked")}
            onClick={() => cursorChangeHandler("hovered")}
            variants={variants}
          >
            Ash Muhamad
          </motion.div>
          <motion.div className={styles.subheading} variants={variants}>
            <Typewriter 
              onInit={(typewriter) => {
                typewriter
                  .typeString("Welcome to my portfolio")
                  .pauseFor(2500)
                  .start();
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
