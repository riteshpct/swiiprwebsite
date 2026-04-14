import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LogoCarousel from "./components/LogoCarousel";
import SolutionsSection from "./components/SolutionsSection";
import HowItWorks from "./components/HowItWorks";
import FeaturesSection from "./components/FeaturesSection";
import BottomSections from "./components/BottomSections";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <LogoCarousel />
      <SolutionsSection />
      <HowItWorks />
      <FeaturesSection />
      <BottomSections />
      <Footer />
    </div>
  );
}

export default App;
