import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import logo from "../../public/images/logo.png";
import { MouseContext } from "../../contexts/MouseContextProvider";

const Navbar = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  const variants = {
    initial: {
      y: 30,
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
      },
    },
  };

  const stagger = { animate: { transition: { staggerChildren: 0.2 } } };

  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.navWrapper} id="unselectable">
          <div className={styles.navLogoWrapper}>
            <motion.div
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              onMouseDown={() => cursorChangeHandler("clicked")}
              onClick={() => cursorChangeHandler("hovered")}
              whileHover={{
                scale: 1.5,
              }}
              transition={{ delay: 0.1 }}
              className={styles.navLogo}
            >
              <Link href={"/"}>
                <Image src={logo} alt="Logo" />
              </Link>
            </motion.div>
          </div>
          <div className={styles.navItems}>
            <motion.ul variants={stagger} initial="initial" animate="animate">
              <motion.li
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseDown={() => cursorChangeHandler("clicked")}
                onMouseLeave={() => cursorChangeHandler("")}
                onClick={() => cursorChangeHandler("hovered")}
                variants={variants}
                whileHover={{
                  scale: 1.15,
                }}
              >
                <Link href={"/projects"}>projects</Link>
              </motion.li>
              <motion.li
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseDown={() => cursorChangeHandler("clicked")}
                onMouseLeave={() => cursorChangeHandler("")}
                onClick={() => cursorChangeHandler("hovered")}
                variants={variants}
                whileHover={{
                  scale: 1.15,
                }}
              >
                <Link href={"/about"}>about</Link>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
