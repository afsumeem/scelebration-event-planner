import React from "react";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={15}
        outerSize={10}
      />
      {/* Navigation Bar */}
      <Navbar />
      <main>
        {/* TODO: import <Hero/> component here */}
        <Hero />

        {/* TODO: import <Services/> component here */}
        <Services />

        {/* TODO: import <AboutUs/> component here */}
        <AboutUs />

        {/* TODO: create a <Gallery/> component in src/components and import it here (OPTIONAL) */}
        <Gallery />

        {/* TODO: import <Testimonial/> component here */}
        <Testimonial />

        {/* TODO: import <Footer/> component here */}
        <Footer />

      </main>
    </>
  );
}

export default App;
