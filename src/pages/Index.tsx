
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Certifications from "@/components/Certifications";

const Index = () => {
  // Set dark mode by default when the component mounts
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Portfolio />
        <Certifications />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
