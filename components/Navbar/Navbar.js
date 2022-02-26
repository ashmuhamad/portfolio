import styles from "./Navbar.module.scss";
import Image from "next/image";
import logo from "../../public/Ash.png";

const Navbar = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.navWrapper}>
          <div className={styles.navLogo}>
            <Image src={logo} alt="Logo" />
          </div>
          <div className={styles.navItems}>
            <ul>
              <li>
                <a>WORKS</a>
              </li>
              <li>
                <a>CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
