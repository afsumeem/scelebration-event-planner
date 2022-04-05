import React from "react";
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <>
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


        {/* TODO: import <Footer/> component here */}

      </main>
    </>
  );
}

export default App;
