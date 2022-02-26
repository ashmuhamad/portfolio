import Header from "../components/Header";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Cursorv2 } from "../components/Misc/Cursorv2";

export default function Porfolio() {
  return (
    <>
      <Cursorv2 />
      <Header />
      <div className="bodyContainer">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
