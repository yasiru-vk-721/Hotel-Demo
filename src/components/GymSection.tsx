"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaDumbbell, FaClock } from "react-icons/fa";

import gym1 from "@/resource/navagym2.jpg";
import gym2 from "@/resource/navagym3.jpg";
import gym3 from "@/resource/navagym4.jpg";

const images = [gym1, gym2, gym3,gym1, gym3, gym2];

export default function GymSection() {
  return (
    <section className="bg-[#F9F7F3] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <div className="mb-12">
          <p className="text-[#E6C27A] uppercase tracking-widest text-sm font-semibold mb-2">
            Wellness & Fitness
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D]">
            Modern Gym & Fitness Center
          </h2>
        </div>

        {/* Animated Carousel */}
        <div className="flex justify-center items-center space-x-6 overflow-x-auto py-6 scrollbar-hide">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="relative w-[280px] h-[200px] md:w-[320px] md:h-[220px] rounded-xl shadow-xl flex-shrink-0 cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6, type: "spring" }}
            >
              <Image
                src={img}
                alt={`Gym ${i + 1}`}
                fill
                className="object-cover"
                priority
              />
              {/* Optional overlay */}
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
              >
                <p className="text-white font-semibold text-lg">
                  Gym {i + 1}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <motion.p
          className="mt-10 text-gray-600 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Stay active while enjoying your beachside escape. Our fully equipped,
          air-conditioned gym features modern fitness equipment designed to
          support your daily workout routine in a comfortable environment.
        </motion.p>

        {/* Features */}
        <div className="mt-8 space-y-4 max-w-md mx-auto">
          <motion.div
            className="flex items-center space-x-4 justify-center"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <FaDumbbell className="text-[#E6C27A] text-xl" />
            <span className="text-[#0B3C5D] font-medium">
              Professional Strength & Cardio Equipment
            </span>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4 justify-center"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <FaClock className="text-[#E6C27A] text-xl" />
            <span className="text-[#0B3C5D] font-medium">
              Open Daily for Guest Convenience
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
