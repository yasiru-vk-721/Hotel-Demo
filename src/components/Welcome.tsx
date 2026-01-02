"use client";

import { motion } from "framer-motion";

const features = [
  {
    label: "Beachfront",
    text: "Direct access to golden sands with uninterrupted views of the Indian Ocean.",
  },
  {
    label: "Rooms",
    text: "Air-conditioned rooms with private balconies, designed for comfort and rest.",
  },
  {
    label: "Dining",
    text: "Freshly prepared meals, a relaxed bar, and peaceful terrace seating by the sea.",
  },
  {
    label: "Location",
    text: "Just minutes from Mirissa Beach and nearby attractions, loved for its calm setting.",
  },
];

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="bg-[#F8FAFC] py-28 md:py-36 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <p className="text-[#E6C27A] uppercase tracking-widest text-2xl font-semibold mb-5">
            Welcome to NAVA B&B
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-[#0B3C5D] mb-8 leading-tight">
            A Beachfront Retreat Shaped by the Ocean
          </h2>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            NAVA B&B is a peaceful coastal escape in Mirissa where
            simplicity, comfort, and warm Sri Lankan hospitality come together.
            Wake up to the sound of the ocean, step onto soft golden sand, and
            enjoy a stay designed for unhurried moments and genuine relaxation.
          </p>
        </motion.div>

        {/* Feature Strip */}
        <div className="grid md:grid-cols-4 gap-y-16 gap-x-12">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-10 left-0 text-6xl font-bold text-[#E6C27A]/20"
            >
              0{index + 1}
            </motion.span>


              <h3 className="text-lg font-semibold text-[#0B3C5D] mb-3">
                {item.label}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
