"use client";

import { motion } from "framer-motion";

const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.373122034343!2d80.46042497397126!3d5.943206529636791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13fd32ebcf399%3A0x4fd7167b72c8e00c!2sNAVA%20b%26b%20(Formerly%20Banana%20Garden%20Mirissa)!5e0!3m2!1sen!2slk!4v1767333875095!5m2!1sen!2slk";

export default function FindUsMap() {
  return (
    <section className="bg-white py-32 px-6 relative">
      <div className="max-w-7xl mx-auto text-center">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[#E6C27A] uppercase tracking-widest text-sm font-semibold mb-2">
            Location & Directions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D]">
            Find Us on the Map
          </h2>
        </motion.div>

        {/* Map Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl shadow-2xl max-w-5xl mx-auto"
        >
          <iframe
            src={mapSrc}
            width="100%"
            height="480"
            className="rounded-3xl border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Floating Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md shadow-lg rounded-xl px-6 py-4 max-w-md text-center"
          >
            <h3 className="text-xl font-semibold text-[#0B3C5D] mb-1">
              NAVA b&b Mirissa
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Formerly Banana Garden, Mirissa, Sri Lanka
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=NAVA+b%26b+Mirissa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0B3C5D] text-white px-6 py-2 rounded-full font-medium hover:bg-[#092F49] transition"
            >
              Get Directions
            </a>
          </motion.div>
        </motion.div>

        {/* Optional Divider */}
        <div className="mt-16 border-t border-gray-200/50" />
      </div>
    </section>
  );
}
