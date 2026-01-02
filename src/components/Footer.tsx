"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Footer() {
  const socialIcons: { name: string; svg: ReactNode; url: string }[] = [
    {
      name: "Facebook",
      url: "https://facebook.com",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691V11.41h3.129V8.797c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.098 2.795.142v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.296h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.17.054 1.97.24 2.428.403a4.92 4.92 0 011.675 1.093 4.92 4.92 0 011.093 1.675c.163.459.35 1.258.403 2.428.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.054 1.17-.24 1.97-.403 2.428a4.92 4.92 0 01-1.093 1.675 4.92 4.92 0 01-1.675 1.093c-.459.163-1.258.35-2.428.403-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.054-1.97-.24-2.428-.403a4.92 4.92 0 01-1.675-1.093 4.92 4.92 0 01-1.093-1.675c-.163-.459-.35-1.258-.403-2.428C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.054-1.17.24-1.97.403-2.428a4.92 4.92 0 011.093-1.675 4.92 4.92 0 011.675-1.093c.459-.163 1.258-.35 2.428-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.78.13 4.823.328 4.052.659a7.072 7.072 0 00-2.556 1.642A7.072 7.072 0 00.659 4.857c-.331.771-.529 1.728-.587 3C.013 8.332 0 8.741 0 12s.013 3.668.072 4.948c.058 1.272.256 2.229.587 3a7.072 7.072 0 001.642 2.556 7.072 7.072 0 002.556 1.642c.771.331 1.728.529 3 .587C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.272-.058 2.229-.256 3-.587a7.072 7.072 0 002.556-1.642 7.072 7.072 0 001.642-2.556c.331-.771.529-1.728.587-3C23.987 15.668 24 15.259 24 12s-.013-3.668-.072-4.948c-.058-1.272-.256-2.229-.587-3a7.072 7.072 0 00-1.642-2.556A7.072 7.072 0 0019.948.659c-.771-.331-1.728-.529-3-.587C15.668.013 15.259 0 12 0z" />
          <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z" />
          <circle cx="18.406" cy="5.594" r="1.44" />
        </svg>
      ),
    },
    {
      name: "Tripadvisor",
      url: "https://tripadvisor.com",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path d="M12 2.04c-5.507 0-9.96 4.452-9.96 9.96s4.453 9.96 9.96 9.96 9.96-4.452 9.96-9.96-4.453-9.96-9.96-9.96zm0 17.894a7.934 7.934 0 01-7.933-7.934A7.933 7.933 0 0112 4.066a7.933 7.933 0 017.933 7.934A7.934 7.934 0 0112 19.934zm0-13.38a5.446 5.446 0 100 10.893 5.446 5.446 0 000-10.893zm0 8.89a3.446 3.446 0 110-6.893 3.446 3.446 0 010 6.893z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#0B3C5D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">NAVA B&B Mirissa</h2>
          <p className="text-sm text-white/80 leading-relaxed">
            Experience peaceful beachfront living in Mirissa. Comfort, nature, and unforgettable memories await you.
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
            <li>✉️ info@navabandbmirissa.com</li>
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
            {socialIcons.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E6C27A] hover:text-black transition"
                aria-label={s.name}
              >
                {s.svg}
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
