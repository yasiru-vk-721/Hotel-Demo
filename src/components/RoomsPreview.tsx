"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import room1 from "@/resource/1201.jpg";
import room2 from "@/resource/1211.jpg";
import room3 from "@/resource/1201.jpg";

export default function RoomsPreview() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-[#E6F0FA] to-white overflow-hidden">
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
                ocean views. Whether you’re traveling as a couple or with family,
                every stay promises relaxation and tranquility.
            </p>

            <ul className="space-y-3 text-gray-700 mb-10">
                <li>✔ Private balconies with sea views</li>
                <li>✔ Air-conditioned, soundproof rooms</li>
                <li>✔ Comfortable king-size beds</li>
                <li>✔ Free Wi-Fi & modern amenities</li>
            </ul>

            <Link
                href="/rooms"
                className="inline-block bg-[#0B3C5D] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#092F49] transition"
            >
                Explore Our Rooms →
            </Link>
            </motion.div>

            {/* RIGHT IMAGES */}
            <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[420px]"
            >
            <div className="absolute top-0 left-0 w-[80%] h-[70%] rounded-3xl overflow-hidden shadow-xl z-10">
                <Image src={room1} alt="Luxury room" fill className="object-cover" />
            </div>

            <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-xl"
            >
                <Image src={room2} alt="Sea view room" fill className="object-cover" />
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-16 right-16 w-[40%] h-[40%] rounded-3xl overflow-hidden shadow-lg"
            >
                <Image src={room3} alt="Balcony room" fill className="object-cover" />
            </motion.div>
            </motion.div>
        </div>
    </section>

  );
}
