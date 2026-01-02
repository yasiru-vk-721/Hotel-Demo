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
   ROOM DATA
========================= */
const rooms: Room[] = [
  {
    title: "Twin Room with Balcony",
    size: "17 m²",
    bed: "2 Single Beds",
    rating: "Comfy beds · 9 (130 reviews)",
    description:
      "The twin room features air conditioning, a private entrance, a balcony with garden views as well as a private bathroom boasting a shower. The unit has 2 beds.",
    views: ["Garden view"],
    highlights: ["Balcony", "Air conditioning", "Private bathroom", "Free WiFi"],
    bathroom: ["Bidet", "Toilet", "Bath or shower", "Towels", "Hairdryer", "Toilet paper"],
    facilities: [
      "Balcony",
      "Air conditioning",
      "Sofa",
      "Linen",
      "Socket near the bed",
      "Private entrance",
      "Refrigerator",
      "Electric kettle",
      "Wardrobe or closet",
      "Drying rack for clothing",
    ],
    smoking: "No smoking",
    images: [
      require("../resource/t1.jpg") as StaticImageData,
      require("../resource/t2.jpg") as StaticImageData,
      require("../resource/t3.jpg") as StaticImageData,

    ],
  },
  {
    title: "Double Room with Balcony",
    size: "25 m²",
    bed: "1 Large Double Bed",
    rating: "Comfy beds · 9 (130 reviews)",
    description:
      "The double room provides air conditioning, a private entrance, a balcony with garden views as well as a private bathroom featuring a shower. The unit offers 1 bed.",
    views: ["Garden view"],
    highlights: ["Balcony", "Air conditioning", "Private bathroom", "Free WiFi"],
    bathroom: ["Bidet", "Toilet", "Bath or shower", "Towels", "Hairdryer", "Toilet paper"],
    facilities: [
      "Balcony",
      "Air conditioning",
      "Sofa",
      "Linen",
      "Socket near the bed",
      "Desk",
      "Private entrance",
      "Refrigerator",
      "Electric kettle",
      "Wardrobe or closet",
      "Drying rack for clothing",
    ],
    smoking: "No smoking",
    images: [
      require("../resource/d1.jpg") as StaticImageData,
      require("../resource/d2.jpg") as StaticImageData,
      require("../resource/d3.jpg") as StaticImageData,
      require("../resource/d4.jpg") as StaticImageData,
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
          transition={{ duration: 0.15 }}
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

      {/* White Symmetrical Controls */}
      <button
        onClick={() => setIndex((index - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white text-[#0B3C5D] hover:text-black rounded-full shadow-lg flex items-center justify-center text-lg"
      >
        ‹
      </button>
      <button
        onClick={() => setIndex((index + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white text-[#0B3C5D] hover:text-black rounded-full shadow-lg flex items-center justify-center text-lg"
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
    <section className="pt-28 pb-16 px-6 bg-[#F9FAFB] text-gray-800">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3C5D] leading-tight">
            Discover Our Exclusive Rooms
          </h2>
          <p className="text-gray-600 mt-4 text-lg md:text-xl">
            Comfortable, stylish, and designed for your perfect stay.
          </p>
        </motion.div>

        {/* Rooms */}
        <div className="space-y-32">
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

                {/* CTA / Booking Links */}
                <div className="flex flex-wrap gap-4 mt-6">
                  <a
                    href="https://www.booking.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#003580] text-white px-6 py-3 rounded-full hover:opacity-90 transition"
                  >
                    Booking.com
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
