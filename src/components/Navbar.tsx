"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/resource/logopic1.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      animate={{
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.95)"
          : "rgba(255,255,255,0)",
        boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.08)" : "none",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-20 md:h-24">
        {/* Logo */}
        <motion.div
          animate={{ scale: scrolled ? 0.95 : 1 }}
          transition={{ duration: 0.3 }}
          className="relative w-36 h-12 md:w-48 md:h-14"
        >
          <Image
            src={logo}
            alt="Shanora Beach Logo"
            fill
            priority
            className="object-contain"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div
          className={`hidden md:flex space-x-10 text-base font-semibold transition-colors duration-300 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <a href="#about" className="hover:text-[#E6C27A]">
            Attractions
          </a>
          <a href="#attractions" className="hover:text-[#E6C27A]">
            Rooms
          </a>
          <a href="#gallery" className="hover:text-[#E6C27A]">
            Gallery
          </a>
          <a href="#contact" className="hover:text-[#E6C27A]">
            Contact
          </a>
        </div>

        {/* Mobile Burger Button */}
        {/* Mobile Burger/X Button - fixed at top-right */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden fixed top-5 right-5 z-50 w-10 h-10 flex items-center justify-center focus:outline-none"
>
  {!menuOpen ? (
    // Burger Icon
    <div className="flex flex-col justify-between w-6 h-6">
      <span className="block w-full h-0.5 bg-current rounded"></span>
      <span className="block w-full h-0.5 bg-current rounded"></span>
      <span className="block w-full h-0.5 bg-current rounded"></span>
    </div>
  ) : (
    // X Icon using spans
    <div className="relative w-6 h-6">
      <motion.span
        initial={{ rotate: 0 }}
        animate={{ rotate: 45 }}
        className="absolute w-full h-0.5 bg-current rounded top-1/2 left-0 -translate-y-1/2"
      />
      <motion.span
        initial={{ rotate: 0 }}
        animate={{ rotate: -45 }}
        className="absolute w-full h-0.5 bg-current rounded top-1/2 left-0 -translate-y-1/2"
      />
    </div>
  )}
</button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed top-20 left-0 w-full bg-white shadow-lg z-40 flex flex-col items-center py-6 space-y-6 text-gray-800 font-semibold rounded-b-2xl"
          >
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#E6C27A] text-lg"
            >
              Attractions
            </a>
            <a
              href="#attractions"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#E6C27A] text-lg"
            >
              Rooms
            </a>
            <a
              href="#gallery"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#E6C27A] text-lg"
            >
              Gallery
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#E6C27A] text-lg"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
