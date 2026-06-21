import React, { useState } from "react";
import { Crown, Send, Menu, X } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onContactClick: () => void;
}

export default function Header({ activeTab, setActiveTab, onContactClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { id: "main", label: "Главная" },
    { id: "about", label: "Обо мне" },
    { id: "games", label: "Игры" },
    { id: "team", label: "Команда" },
    { id: "partners", label: "Партнеры" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 py-5">
        <div class="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => setActiveTab("main")}
            className="flex items-center gap-3 group text-left cursor-pointer"
            id="logo-btn"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 gold-bg-shine rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/20 group-hover:scale-105 transition duration-300">
              <Crown className="text-black w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
            </div>
            <span className="font-display text-2xl md:text-3xl font-bold tracking-wide">
              Сайт<span className="gold-gradient">Сотика</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`nav-link text-xs md:text-sm font-semibold tracking-widest uppercase transition-colors cursor-pointer ${
                  activeTab === item.id ? "active text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={onContactClick}
              className="btn-gold gold-bg-gradient text-black px-5 md:px-7 py-2.5 md:py-3 rounded-xl font-bold text-xs md:text-sm tracking-wider uppercase flex items-center gap-2 cursor-pointer shadow-lg shadow-yellow-500/10"
            >
              <Send className="w-3.5 h-3.5 md:w-4 md:h-4 text-black" />
              <span className="hidden sm:inline">Связаться</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-yellow-500/10 space-y-2 animate-fadeIn">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-semibold tracking-wider uppercase transition-colors ${
                  activeTab === item.id
                    ? "bg-gradient-to-r from-yellow-600/20 to-transparent border-l-2 border-yellow-500 text-yellow-500 font-bold"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
