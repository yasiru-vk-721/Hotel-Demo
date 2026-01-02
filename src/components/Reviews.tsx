"use client";

import { motion } from "framer-motion";

type Review = {
  name: string;
  role: string;
  date: string;
  rating: number;
  text: string;
};

// New 5-star reviews for the hotel
const reviews: Review[] = [
  {
    name: "Mishanur Khan",
    role: "Local Guide",
    date: "a week ago",
    rating: 5,
    text: "This is one of the best places we have stayed in Mirissa. The rooms are very big, the washrooms are spacious and everything is very clean. The staff were very nice, especially Nethmi. She was extremely friendly, from making our stay comfortable to guiding us about many things in Mirissa. The breakfast was really good and very tasty. There is a gym right next to the building which was a big bonus for us. Really loved staying here and we will definitely stay here again.",
  },
  {
    name: "Matthew Moorhouse",
    role: "Local Guide",
    date: "2 weeks ago",
    rating: 5,
    text: "Lovely Hotel! Very spacious, very clean & lovely lady that runs the place. We stayed here for 4 nights - it was perfect, very close to the beach and right next door to the gym! Really great breakfast cooked fresh with various options - would really recommend staying here if you’re in the area.",
  },
  {
    name: "Laura González",
    role: "Local Guide",
    date: "3 weeks ago",
    rating: 5,
    text: "This is the best place to stay in Mirissa for sure, don’t doubt it and book this accommodation. The rooms are perfectly clean and comfortable, the views and location are wonderful and they provide help anytime. The breakfast is very complete and delicious. Loved it here :) We will never forget our stay.",
  },
  {
    name: "Mika Borgmeyer",
    role: "Local Guide",
    date: "a month ago",
    rating: 5,
    text: "Amazing people, big room, nice view of the sea. If you want they can clean your room every day. We wanted to use our laptop here so they even put a stronger WiFi router for us (for free!). Would recommend it to anyone!",
  },
  {
    name: "Benoit Saintemarie FILMS",
    role: "Local Guide",
    date: "a month ago",
    rating: 5,
    text: "Perfect accommodation for a stay in Mirissa. Nihan, the owner, and the staff are lovely and very professional. The location couldn’t be better; all the restaurants and tourist attractions are within walking distance. Everything is designed with great style and taste. From the perfectly cooked eggs at breakfast to the bathroom lighting, every detail has been thoughtfully considered.",
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
