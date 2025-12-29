"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import room1 from "@/resource/330490273.jpg";
import room2 from "@/resource/330490293.jpg";
import room3 from "@/resource/330490309.jpg";

const images = [room1, room2, room3];

export default function RoomsPreview() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 2000); // ⏱️ change every 3.5s

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#E6F0FA] to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B3C5D] mb-6">
            Rest in Comfort,
            <br /> Wake Up to the Sea 🌊
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Our rooms are designed to blend comfort, privacy, and breathtaking
            ocean views.
          </p>

          <Link
            href="/rooms"
            className="inline-block bg-[#0B3C5D] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#092F49] transition"
          >
            Explore Our Rooms →
          </Link>
        </motion.div>

        {/* RIGHT IMAGE COLLAGE */}
        <div className="relative h-[460px]">

          {images.map((img, i) => {
            const isActive = i === active;

            return (
              <motion.div
                key={i}
                animate={{
                  opacity: isActive ? 1 : 0.45,
                  scale: isActive ? 1 : 0.94,
                  y: isActive ? -10 : 0,
                }}
                transition={{ duration: 0.8 }}
                className={`absolute rounded-3xl overflow-hidden shadow-2xl
                  ${i === 0 ? "top-0 left-0" : ""}
                  ${i === 1 ? "top-20 left-20" : ""}
                  ${i === 2 ? "top-40 left-40" : ""}
                `}
                style={{
                  zIndex: isActive ? 30 : i + 10,
                  width: "75%",
                  aspectRatio: "16 / 10",
                }}
              >
                <Image
                  src={img}
                  alt={`Room ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
