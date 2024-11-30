import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "./styles/main.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <Services />
      <Footer />
    </div>
  );
};

export default App;

