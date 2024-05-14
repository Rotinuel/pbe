import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { People } from "./components/People";
import { Business } from "./components/Business";
import { Portfolio } from "./components/Portfolio";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <People />
      <Business />
      <Portfolio />
      <Footer />
    </>
  );
}
