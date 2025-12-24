"use client";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-ocean mb-10">Gallery</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="h-60 bg-gray-300 rounded-xl" />
        ))}
      </div>
    </section>
  );
}
