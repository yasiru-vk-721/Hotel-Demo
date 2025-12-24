"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-ocean mb-6">
          About the Hotel
        </h2>
        <p className="max-w-3xl text-gray-600">
          Shanora Beach Hotel is located just steps from Mirissa Beach,
          offering ocean views, comfortable rooms, and easy access to
          surfing, whale watching, and sunset spots.
        </p>
      </motion.div>
    </section>
  );
}
