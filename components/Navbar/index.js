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
          <motion.div
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
            whileHover={{
              scale: 1.3,
            }}
            transition={{ delay: 0.1 }}
            className={styles.navLogo}
          >
            <Link href={"/about"}>
              <Image src={logo} alt="Logo" />
            </Link>
          </motion.div>
          <div className={styles.navItems}>
            <ul>
              <motion.li
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
                whileHover={{
                  scale: 1.2,
                }}
                transition={{ delay: 0.1 }}
              >
                <a>WORKS</a>
              </motion.li>
              <motion.li
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
                whileHover={{
                  scale: 1.2,
                }}
                transition={{ delay: 0.1 }}
              >
                <a>CONTACT</a>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
