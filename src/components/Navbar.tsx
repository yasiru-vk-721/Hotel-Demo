"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/resource/logopic1.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const showLightNavbar = isHome ? scrolled : true; // always solid on other pages

  useEffect(() => {
    if (!isHome) {
      setScrolled(true); // force solid on non-home pages
      return;
    }

    const handleScroll = () => setScrolled(window.scrollY > 50);

    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <motion.nav
      animate={{
        backgroundColor: showLightNavbar
          ? "rgba(255,255,255,0.95)"
          : "rgba(255,255,255,0)",
        boxShadow: showLightNavbar
          ? "0 10px 30px rgba(0,0,0,0.08)"
          : "none",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-20 md:h-24">
        {/* Logo */}
        <div className="relative w-36 h-12 md:w-48 md:h-14">
          <Image src={logo} alt="Shanora Beach Logo" fill priority />
        </div>

        {/* Desktop Nav */}
        <div
          className={`hidden md:flex space-x-10 text-base font-semibold transition-colors duration-300 ${
            showLightNavbar ? "text-gray-800" : "text-white"
          }`}
        >
          <a href="/" className="hover:text-[#E6C27A]">Home</a>
          <a href="/rooms" className="hover:text-[#E6C27A]">Rooms</a>
          <a href="#gallery" className="hover:text-[#E6C27A]">Gallery</a>
          <a href="/contact" className="hover:text-[#E6C27A]">Contact</a>
        </div>

        {/* Mobile Burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden fixed top-5 right-5 z-50 w-10 h-10 flex items-center justify-center ${
            showLightNavbar ? "text-gray-800" : "text-white"
          }`}
        >
          {!menuOpen ? (
            <div className="flex flex-col justify-between w-6 h-6">
              <span className="block w-full h-0.5 bg-current rounded"></span>
              <span className="block w-full h-0.5 bg-current rounded"></span>
              <span className="block w-full h-0.5 bg-current rounded"></span>
            </div>
          ) : (
            <div className="relative w-6 h-6">
              <motion.span
                animate={{ rotate: 45 }}
                className="absolute w-full h-0.5 bg-current rounded top-1/2 -translate-y-1/2"
              />
              <motion.span
                animate={{ rotate: -45 }}
                className="absolute w-full h-0.5 bg-current rounded top-1/2 -translate-y-1/2"
              />
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-20 left-0 w-full bg-white shadow-lg z-40 flex flex-col items-center py-6 space-y-6 font-semibold rounded-b-2xl text-gray-800"
          >
            <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="/rooms" onClick={() => setMenuOpen(false)}>Rooms</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
            <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
