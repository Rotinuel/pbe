import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Portfolio } from "./components/page";

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
