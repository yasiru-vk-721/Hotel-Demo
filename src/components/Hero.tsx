"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb2100d",
    title: "Shanora Beach Hotel",
    subtitle: "Oceanfront comfort in the heart of Mirissa",
  },
  {
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    title: "Wake Up to the Ocean",
    subtitle: "Luxury rooms with breathtaking sea views",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    title: "Relax. Explore. Enjoy.",
    subtitle: "Your perfect coastal getaway",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
        />
      </AnimatePresence>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-white max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {slides[index].title}
          </h1>
          <p className="text-lg md:text-xl mb-8">
            {slides[index].subtitle}
          </p>

          <a
            href="#contact"
            className="inline-block bg-[#E6C27A] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
