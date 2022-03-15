import { useContext, useEffect } from "react";
import { MouseContext } from "../../contexts/MouseContextProvider";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const Cursorv2 = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const springConfig = { damping: 50, stiffness: 700 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const springRX = useSpring(ringX, springConfig);
  const springRY = useSpring(ringY, springConfig);

  const { cursorType } = useContext(MouseContext);

  useEffect(() => {
    const moveCursor = (e) => {
      x.set(e.clientX - 4);
      y.set(e.clientY - 4);
    };

    const moveRing = (e) => {
      ringX.set(e.clientX - 20);
      ringY.set(e.clientY - 20);
    };


    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", moveRing);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", moveRing);
    };
  }, []);

  return (
    <>
      <motion.div
        className={`dot ${cursorType}`}
        style={{
          translateX: springX,
          translateY: springY,
        }}
      />
      <motion.div
        className={`ring ${cursorType}`}
        style={{
          translateX: springRX,
          translateY: springRY,
        }}
      />
    </>
  );
};
