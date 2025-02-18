import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Combine from "./components/Combine";
import Footer from "./components/Footer";

const App = () => {
  // Create refs for each section
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const reviewsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to the selected section
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-full bg-neutral-800 opacity-70">
      <Navbar
        scrollToSection={scrollToSection}
        sections={{ heroRef, aboutRef, servicesRef, reviewsRef, contactRef }}
      />

      <section ref={heroRef}>
        <Hero />
      </section>

      <section ref={aboutRef}>
        <About />
      </section>

      <section ref={servicesRef}>
        <Services />
      </section>

      <section ref={reviewsRef}>
        <Reviews />
      </section>

      <section ref={contactRef}>
        <Combine />
      </section>

      <Footer />
    </div>
  );
};

export default App;
