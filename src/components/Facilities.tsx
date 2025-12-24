"use client";

import { motion } from "framer-motion";
import {
  FaUmbrellaBeach,
  FaWifi,
  FaBus,
  FaParking,
  FaUtensils,
  FaSmokingBan,
  FaGlassCheers,
  FaCoffee,
} from "react-icons/fa";


const facilities = [
  { icon: FaUmbrellaBeach, label: "Beachfront" },
  { icon: FaWifi, label: "Free Wi-Fi" },
{ icon: FaBus, label: "Airport Shuttle" },
  { icon: FaParking, label: "Free Parking" },
  { icon: FaUtensils, label: "Restaurant" },
  { icon: FaSmokingBan, label: "Non-Smoking Rooms" },
  { icon: FaGlassCheers, label: "Bar" },
  { icon: FaCoffee, label: "Wonderful Breakfast" },
];

export default function Facilities() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#E6C27A] uppercase tracking-widest text-sm font-semibold mb-3">
            Guest Favorites
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D]">
            Most Popular Facilities
          </h2>
        </motion.div>

        {/* Facilities list */}
        <div className="flex flex-wrap justify-center gap-x-14 gap-y-10">
          {facilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="flex items-center space-x-4 cursor-default"
              >
                <div className="text-[#E6C27A] text-2xl">
                  <Icon />
                </div>
                <span className="text-[#0B3C5D] font-medium text-lg">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
