import Header from "../components/Header";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Porfolio() {
  return (
    <>
      <Header />
      <div className="bodyContainer">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
