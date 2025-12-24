"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import {
  FaBed,
  FaRulerCombined,
  FaWifi,
  FaSnowflake,
  FaBath,
  FaSmokingBan,
  FaTripadvisor,
  FaBook,
} from "react-icons/fa";

/* =======================
   ROOM IMAGES (require)
======================= */

// Double Room with Balcony
const db1: StaticImageData = require("../resource/1211.jpg");
const db2: StaticImageData = require("../resource/1211.jpg");
const db3: StaticImageData = require("../resource/1211.jpg");

// Double Room with Sea View
const ds1: StaticImageData = require("../resource/1201.jpg");
const ds2: StaticImageData = require("../resource/1211.jpg");
const ds3: StaticImageData = require("../resource/1201.jpg");

// Deluxe Triple Room
const ts1: StaticImageData = require("../resource/1211.jpg");
const ts2: StaticImageData = require("../resource/1211.jpg");
const ts3: StaticImageData = require("../resource/1211.jpg");

/* =======================
   TYPES
======================= */

type Room = {
  title: string;
  size: string;
  beds: string;
  rating: string;
  description: string;
  facilities: string[];
  images: StaticImageData[];
};

/* =======================
   DATA
======================= */

const rooms: Room[] = [
  {
    title: "Double Room with Balcony",
    size: "16 m²",
    beds: "1 King Bed",
    rating: "8.6 / 10 (200 reviews)",
    description:
      "Air-conditioned room with private entrance, balcony with sea and garden views, soundproofing, and private bathroom with shower.",
    facilities: [
      "Balcony",
      "Sea view",
      "Garden view",
      "Air conditioning",
      "Private bathroom",
      "Soundproof",
      "Free WiFi",
      "Refrigerator",
      "Electric kettle",
      "Wardrobe",
      "No smoking",
    ],
    images: [db1, db2, db3],
  },
  {
    title: "Double Room with Sea View",
    size: "18 m²",
    beds: "1 King Bed",
    rating: "8.6 / 10 (200 reviews)",
    description:
      "Spacious double room offering a balcony with panoramic sea views, private entrance, and modern private bathroom.",
    facilities: [
      "Balcony",
      "Sea view",
      "Garden view",
      "Air conditioning",
      "Private bathroom",
      "Soundproof",
      "Free WiFi",
      "Refrigerator",
      "Electric kettle",
      "Wardrobe",
      "No smoking",
    ],
    images: [ds1, ds2, ds3],
  },
  {
    title: "Deluxe Triple Room with Sea View",
    size: "20 m²",
    beds: "1 Full Bed & 1 King Bed",
    rating: "8.6 / 10 (200 reviews)",
    description:
      "Large triple room with balcony, sea views, private entrance, and comfortable bedding ideal for families.",
    facilities: [
      "Balcony",
      "Sea view",
      "Garden view",
      "Air conditioning",
      "Private bathroom",
      "Soundproof",
      "Free WiFi",
      "Refrigerator",
      "Electric kettle",
      "Wardrobe",
      "No smoking",
    ],
    images: [ts1, ts2, ts3],
  },
];

/* =======================
   IMAGE CAROUSEL
======================= */

function RoomGallery({ images }: { images: StaticImageData[] }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative h-[260px] md:h-[340px] rounded-2xl overflow-hidden mb-6">
      <Image
        src={images[index]}
        alt="Room image"
        fill
        className="object-cover transition-all duration-500"
        priority
      />

      {/* Prev */}
      <button
        onClick={() =>
          setIndex((index - 1 + images.length) % images.length)
        }
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full"
      >
        ‹
      </button>

      {/* Next */}
      <button
        onClick={() => setIndex((index + 1) % images.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* =======================
   MAIN COMPONENT
======================= */

export default function Rooms() {
  return (
    <section id="rooms" className="py-28 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center text-[#0B3C5D] mb-20"
        >
          Our Rooms
        </motion.h2>

        <div className="space-y-24">
          {rooms.map((room, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl shadow-xl p-6 md:p-10"
            >
              <RoomGallery images={room.images} />

              <h3 className="text-3xl font-semibold mb-2 text-[#0B3C5D]">
                {room.title}
              </h3>

              <p className="text-gray-500 mb-4">{room.rating}</p>

              <div className="flex flex-wrap gap-6 mb-6 text-gray-600">
                <span className="flex items-center gap-2">
                  <FaRulerCombined /> {room.size}
                </span>
                <span className="flex items-center gap-2">
                  <FaBed /> {room.beds}
                </span>
                <span className="flex items-center gap-2">
                  <FaWifi /> Free WiFi
                </span>
                <span className="flex items-center gap-2">
                  <FaSnowflake /> Air Conditioning
                </span>
                <span className="flex items-center gap-2">
                  <FaBath /> Private Bathroom
                </span>
                <span className="flex items-center gap-2">
                  <FaSmokingBan /> No Smoking
                </span>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {room.description}
              </p>

              {/* Facilities */}
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-600 mb-8">
                {room.facilities.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>

              {/* Booking Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.booking.com"
                  target="_blank"
                  className="flex items-center gap-2 bg-[#003580] text-white px-6 py-3 rounded-full hover:opacity-90"
                >
                  <FaBook /> Booking.com
                </a>

                <a
                  href="https://www.tripadvisor.com"
                  target="_blank"
                  className="flex items-center gap-2 bg-[#34E0A1] text-black px-6 py-3 rounded-full hover:opacity-90"
                >
                  <FaTripadvisor /> Tripadvisor
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
