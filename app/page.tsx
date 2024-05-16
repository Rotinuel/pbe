import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { People } from "./components/People";
import { Portfolio } from "./components/Portfolio";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <People />
      <Portfolio />
      <Footer />
    </>
  );
}
