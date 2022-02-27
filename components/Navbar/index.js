import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import logo from "../../public/Ash.png";
import { MouseContext } from "../../contexts/MouseContextProvider";

const Navbar = () => {
  const { cursorChangeHandler } = useContext(MouseContext);

  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.navWrapper}>
          <div className={styles.navLogoWrapper}>
            <motion.div
              onMouseEnter={() => cursorChangeHandler("hovered")}
              onMouseLeave={() => cursorChangeHandler("")}
              onMouseDown={() => cursorChangeHandler("clicked")}
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
            <ul>
              <motion.li
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseDown={() => cursorChangeHandler("clicked")}
                onMouseLeave={() => cursorChangeHandler("")}
                whileHover={{
                  scale: 1.15,
                }}
                transition={{ delay: 0.1 }}
              >
                <a>projects</a>
              </motion.li>
              <motion.li
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseDown={() => cursorChangeHandler("clicked")}
                onMouseLeave={() => cursorChangeHandler("")}
                whileHover={{
                  scale: 1.15,
                }}
                transition={{ delay: 0.1 }}
              >
                <Link href={"/about"}>contact</Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
