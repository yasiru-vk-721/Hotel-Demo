"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-ocean mb-6"
      >
        Contact Us
      </motion.h2>
      <p className="mb-6 text-gray-600">
        For enquiries, please contact us directly.
      </p>
      <a
        href="tel:+94700000000"
        className="bg-sand px-8 py-3 rounded-full font-medium"
      >
        Call Now
      </a>
    </section>
  );
}
