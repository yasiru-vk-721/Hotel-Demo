"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* =========================
   TYPES
========================= */

type Room = {
  title: string;
  size: string;
  bed: string;
  rating: string;
  description: string;
  views: string[];
  highlights: string[];
  bathroom: string[];
  facilities: string[];
  smoking: string;
  images: StaticImageData[];
};

/* =========================
   ROOM DATA (require syntax)
========================= */

const rooms: Room[] = [
  {
    title: "Double Room with Balcony",
    size: "16 m²",
    bed: "1 Extra-large Double Bed",
    rating: "Comfy beds · 8.6 (200 reviews)",
    description:
      "The double room features air conditioning, a private entrance, a balcony with sea views as well as a private bathroom boasting a shower.",
    views: ["Sea view", "Garden view"],
    highlights: [
      "Balcony",
      "Air conditioning",
      "Soundproofing",
      "Free WiFi",
      "Private bathroom",
    ],
    bathroom: ["Free toiletries", "Shower", "Toilet", "Towels", "Toilet paper"],
    facilities: [
      "Socket near the bed",
      "Tile / marble floor",
      "Private entrance",
      "Refrigerator",
      "Electric kettle",
      "Wardrobe or closet",
      "Clothes rack",
      "Ironing facilities",
      "Hand sanitiser",
    ],
    smoking: "No smoking",
    images: [
      require("../resource/1201.jpg") as StaticImageData,
      require("../resource/1211.jpg") as StaticImageData,
    ],
  },
  {
    title: "Double Room with Sea View",
    size: "18 m²",
    bed: "1 Extra-large Double Bed",
    rating: "Comfy beds · 8.6 (200 reviews)",
    description:
      "The double room offers air conditioning, a private entrance, a balcony with sea views as well as a private bathroom featuring a shower.",
    views: ["Sea view", "Garden view"],
    highlights: ["Balcony", "Sea view", "Air conditioning", "Soundproofing", "Free WiFi"],
    bathroom: ["Free toiletries", "Shower", "Toilet", "Towels", "Toilet paper"],
    facilities: [
      "Socket near the bed",
      "Tile / marble floor",
      "Private entrance",
      "Refrigerator",
      "Electric kettle",
      "Wardrobe or closet",
      "Clothes rack",
      "Ironing facilities",
      "Hand sanitiser",
    ],
    smoking: "No smoking",
    images: [
      require("../resource/1211.jpg") as StaticImageData,
      require("../resource/1201.jpg") as StaticImageData,
    ],
  },
  {
    title: "Deluxe Triple Room with Sea View",
    size: "20 m²",
    bed: "1 Double Bed + 1 Extra-large Double Bed",
    rating: "Comfy beds · 8.6 (200 reviews)",
    description:
      "The triple room offers air conditioning, a private entrance, a balcony with sea views as well as a private bathroom featuring a shower.",
    views: ["Sea view", "Garden view"],
    highlights: ["Balcony", "Sea view", "Air conditioning", "Soundproofing", "Free WiFi"],
    bathroom: ["Free toiletries", "Shower", "Toilet", "Towels", "Toilet paper"],
    facilities: [
      "Socket near the bed",
      "Tile / marble floor",
      "Private entrance",
      "Refrigerator",
      "Electric kettle",
      "Wardrobe or closet",
      "Clothes rack",
      "Ironing facilities",
      "Hand sanitiser",
    ],
    smoking: "No smoking",
    images: [
      require("../resource/1201.jpg") as StaticImageData,
      require("../resource/1211.jpg") as StaticImageData,
    ],
  },
];

/* =========================
   IMAGE GALLERY
========================= */

function Gallery({ images }: { images: StaticImageData[] }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative h-[420px] md:h-[500px] overflow-hidden rounded-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt="Room image"
            fill
            priority
            className="object-cover rounded-xl"
          />
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={() => setIndex((index - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={() => setIndex((index + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full"
      >
        ›
      </button>
    </div>
  );
}

/* =========================
   COLLAPSIBLE COMPONENT
========================= */

function Collapsible({ title, items }: { title: string; items: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-2 bg-gray-100 font-semibold flex justify-between items-center"
      >
        {title}
        <span>{open ? "▲" : "▼"}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 py-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700"
          >
            {items.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================
   MAIN COMPONENT
========================= */

export default function Rooms() {
  return (
    <section className="py-28 px-6 bg-[#F9FAFB] text-gray-800">
      <div className="max-w-7xl mx-auto space-y-32">
        <h2 className="text-4xl font-bold text-center text-[#0B3C5D]">
          Our Rooms
        </h2>

        {rooms.map((room, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-16 items-start"
          >
            {/* LEFT: Gallery */}
            <Gallery images={room.images} />

            {/* RIGHT: Details */}
            <div className="space-y-6 md:pt-6">

              {/* Title + Rating */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#0B3C5D]">
                  {room.title}
                </h3>
                <p className="text-gray-700 mt-1">{room.rating}</p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                <span className="bg-[#E6C27A] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {room.size}
                </span>
                <span className="bg-[#0B3C5D] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {room.bed}
                </span>
                {room.views.map((v, i) => (
                  <span
                    key={i}
                    className="bg-[#34E0A1] text-black px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {v}
                  </span>
                ))}
              </div>

              {/* Description Card */}
              <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-[#0B3C5D]">
                <p className="text-gray-700 leading-relaxed">{room.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="font-semibold mb-3 text-[#0B3C5D]">Room Highlights</h4>
                <div className="flex flex-wrap gap-3">
                  {room.highlights.map((item, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 bg-[#F9FAFB] border border-gray-300 px-3 py-1 rounded-full text-sm font-medium text-gray-700"
                    >
                      ✔ {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Collapsibles */}
              <div className="space-y-4">
                <Collapsible title="Private Bathroom" items={room.bathroom} />
                <Collapsible title="Room Facilities" items={room.facilities} />
              </div>

              {/* Smoking */}
              <p className="text-sm text-gray-700">🚭 {room.smoking}</p>

              {/* CTA */}
              <a
                href="https://www.booking.com"
                target="_blank"
                className="inline-block bg-[#0B3C5D] text-white px-10 py-4 rounded-full hover:bg-[#092f48]"
              >
                Check Availability
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
