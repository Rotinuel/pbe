import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Portfolio } from "./components/Portfolio";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Portfolio />
      <Footer />
    </>
  );
}
