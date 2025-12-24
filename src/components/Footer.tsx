"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0B3C5D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">
            Shanora Beach Hotel
          </h2>
          <p className="text-sm text-white/80 leading-relaxed">
            Experience peaceful beachfront living in Mirissa.
            Comfort, nature, and unforgettable memories await you.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#about" className="hover:text-[#E6C27A]">Attractions</a></li>
            <li><a href="#attractions" className="hover:text-[#E6C27A]">Rooms</a></li>
            <li><a href="#gallery" className="hover:text-[#E6C27A]">Gallery</a></li>
            <li><a href="#contact" className="hover:text-[#E6C27A]">Contact</a></li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-white/80">
            <li>📍 Mirissa, Sri Lanka</li>
            <li>📞 +94 77 123 4567</li>
            <li>✉️ info@shanorabeach.com</li>
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {["Facebook", "Instagram", "Tripadvisor"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E6C27A] hover:text-black transition"
                aria-label={s}
              >
                {s[0]}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Shanora Beach Hotel. All rights reserved.
      </div>
    </footer>
  );
}
