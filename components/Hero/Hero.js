import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroTyping}>testing</div>
      </div>
    </div>
  );
};

export default Hero;
