import styles from "./Hero.module.scss";
import { motion } from "framer-motion";
import { useContext } from "react";
import { MouseContext } from "../../contexts/MouseContextProvider";

const Hero = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroTyping}>
          {" "}
          <motion.a
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
            whileHover={{
              scale: 3,
            }}
            transition={{ delay: 0.1 }}
          >
            test
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
