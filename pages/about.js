import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Cursorv2 } from "../components/Misc/Cursorv2";

export default function About() {
  return (
    <>
      <Cursorv2 />
      <Header />
      <div className="bodyContainer">
        <Navbar />
        <div>about</div>
      </div>
    </>
  );
}
