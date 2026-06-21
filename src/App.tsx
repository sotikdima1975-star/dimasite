import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import GamesView from "./components/GamesView";
import TeamView from "./components/TeamView";
import PartnersView from "./components/PartnersView";
import Footer from "./components/Footer";
import { AnimatePresence, motion } from "motion/react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("main");

  // Handle CTA "Contact" scrolling down to standard footer contacts
  const handleContactClick = () => {
    const contactElement = document.getElementById("contact") || document.querySelector("footer");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Sync scroll on tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [activeTab]);

  const renderView = () => {
    switch (activeTab) {
      case "main":
        return <HomeView setActiveTab={setActiveTab} onContactClick={handleContactClick} />;
      case "about":
        return <AboutView />;
      case "games":
        return <GamesView />;
      case "team":
        return <TeamView />;
      case "partners":
        return <PartnersView />;
      default:
        return <HomeView setActiveTab={setActiveTab} onContactClick={handleContactClick} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0A0A0A] text-white">
      {/* Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onContactClick={handleContactClick} 
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer 
        setActiveTab={setActiveTab} 
        onContactClick={handleContactClick} 
      />
    </div>
  );
}
