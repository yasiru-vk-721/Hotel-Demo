"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
// import { FaStar } from "react-icons/fa"; // optional, can use emoji

type Review = {
  name: string;
  role: string;
  date: string;
  rating: number;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Julis Catista",
    role: "Local Guide · 22 reviews",
    date: "a week ago",
    rating: 5,
    text: "Shanora Beach works well if you want a relaxed, beach‑front stay in Mirissa with sea views and easy access to the beach...",
  },
  {
    name: "Shannon A",
    role: "4 reviews · 5 photos",
    date: "11 months ago",
    rating: 5,
    text: "We had an amazing 5 night stay at Shanora Beach. The location is unbeatable, right on the water...",
  },
  {
    name: "Tamara Abbadi",
    role: "Local Guide · 143 reviews · 60 photos",
    date: "10 months ago",
    rating: 5,
    text: "What a lovely family place to stay at, location is superb, breakfast is delicious...",
  },
  {
    name: "Saheli Deb",
    role: "8 reviews · 4 photos",
    date: "a year ago",
    rating: 5,
    text: "Amazing service and best hotel in Mirissa I have come across. We went there for our first marriage anniversary...",
  },
  {
    name: "Kris H",
    role: "Local Guide · 27 reviews · 14 photos",
    date: "a year ago",
    rating: 5,
    text: "I loved this hotel which has a dreamy location on the beach. The hosts were so nice and the place had a real family feel to it...",
  },
];

export default function ReviewsCarousel() {
  return (
    <section id="reviews" className="bg-[#F8FAFC] py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#0B3C5D] mb-16 text-center">
          Guest Reviews
        </h2>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg min-w-[300px] max-w-sm flex-shrink-0"
              >
                <div className="flex flex-col mb-4">
                  <h3 className="text-xl font-semibold text-[#0B3C5D]">
                    {review.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                  <div className="flex space-x-1 mt-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  {review.text}
                </p>
                <p className="text-gray-400 text-xs">{review.date}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
