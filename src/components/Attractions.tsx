"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

// Local images
import pic1 from "@/resource/pic1.avif";
import pic2 from "@/resource/pic2.jpg";
import pic3 from "@/resource/pic3.avif";
import pic4 from "@/resource/1201.jpg";
import pic5 from "@/resource/1211.jpg";



type Attraction = {
  title: string;
  description: string;
  image: string | StaticImageData;
  imageLeft: boolean;
};

const attractions: Attraction[] = [
  {
    title: "Mirissa Beach",
    description:
      "Mirissa Beach is one of Sri Lanka’s most beautiful coastal destinations, known for its golden sand, calm turquoise waters, and stunning sunsets. It’s perfect for swimming, relaxing, and whale watching.",
    image: pic2,
    imageLeft: true,
  },
  {
    title: "Coconut Tree Hill",
    description:
      "Coconut Tree Hill offers a breathtaking panoramic view of the Indian Ocean, lined with tall coconut palms. It is a popular spot for sunrise and sunset photography near Mirissa.",
    image: pic1,
    imageLeft: false,
  },
  {
    title: "Parrot Rock",
    description:
      "Parrot Rock is a small rocky island accessible during low tide. From the top, visitors can enjoy stunning views of Mirissa Beach and the surrounding coastline.",
    image: pic3,
    imageLeft: true,
  },
  {
    title: "Weligama Surfing Beach",
    description:
      "Weligama Beach is famous for its gentle waves, making it one of the best surfing spots in Sri Lanka for beginners and professionals alike. The long sandy bay is ideal for surf lessons, beach walks, and sunset views.",
    image: pic4,
    imageLeft: false,
  },
  {
    title: "Galle Fort",
    description:
      "Galle Fort is a UNESCO World Heritage Site showcasing colonial architecture, charming streets, museums, and ocean views. It’s a perfect blend of history, culture, shopping, and seaside dining.",
    image: pic5,
    imageLeft: true,
  },
];

export default function Attractions() {
  return (
    <section id="attractions" className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#0B3C5D] mb-24 text-center"
        >
          Nearby Attractions
        </motion.h2>

        <div className="space-y-32">
          {attractions.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-12"
            >
              {/* Image */}
              <div
                className={`w-full flex justify-center md:justify-end order-1 ${
                  item.imageLeft ? "md:order-1" : "md:order-3"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-2xl shadow-xl w-full max-w-[520px]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={520}
                    height={340}
                    className="w-full h-[320px] object-cover transition-transform duration-700 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
              </div>

              {/* Divider (desktop only) */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: 260 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="hidden md:block w-px bg-gray-400/50 md:order-2"
              />

              {/* Content */}
              <div
                className={`w-full flex justify-center md:justify-start order-2 ${
                  item.imageLeft ? "md:order-3" : "md:order-1"
                }`}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    x: item.imageLeft ? 40 : -40,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="max-w-xl text-center md:text-left"
                >
                  <h3 className="text-2xl font-semibold text-[#0B3C5D] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
