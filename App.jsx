import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Heros from "./components/Heros/Heros";
import Background from "./components/Background/Background";
import "./App.css";
import About from "./components/About";
import PromotionSection from "./components/PromotionSection";
import TeamSection from "./components/TeamSection";
import QuoteSection from "./components/QuoteSection";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import { useEffect, useState } from "react";
import Pricing from "./components/Pricing";
import DietPrograms from "./components/DietPrograms";

function App() {
  const heroData = [
    { text1: "Fitness is the power", text2: "Lorem" },
    { text1: "Fitness is the key", text2: "1." },
    { text1: "Fitness is all we want", text2: "Yes, true" },
  ];

  const [HeroCount, setHerocount] = useState(0);
  const [PlayStatus, setPlaystatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHerocount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 4000);
  }, []);

  return (
    <div className="app-container ">
      <div className=" bg-cover w-full h-full">
        <Background PlayStatus={PlayStatus} HeroCount={HeroCount} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Background />} />
          <Route path="/about" element={<About />} />
          <Route path="/TeamSection" element={<TeamSection />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* <Route path="/contact" element={< />} /> */}
        </Routes>
        <Heros
          setPlaystatus={setPlaystatus}
          HeroCount={HeroCount}
          heroData={heroData[HeroCount]}
          setHerocount={setHerocount}
          PlayStatus={PlayStatus}
        />
      </div>
      <About />
      <PromotionSection />
      <DietPrograms className="m-9" />
      <Pricing />
      <TeamSection />
      <QuoteSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
