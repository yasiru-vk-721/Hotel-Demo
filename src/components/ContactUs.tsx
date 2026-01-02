"use client";

import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <section className="py-28 px-6 bg-[#F9FAFB] text-gray-800">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B3C5D] leading-tight">
            Get in Touch
          </h2>
          <p className="text-gray-600 mt-4 text-lg md:text-xl">
            We’d love to hear from you! Whether it’s questions about our rooms, bookings, or anything else.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-md rounded-xl p-8 grid gap-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B3C5D]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B3C5D]"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B3C5D]"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B3C5D] resize-none"
          />
          <button
            type="submit"
            className="bg-[#0B3C5D] text-white px-6 py-3 rounded-full hover:opacity-90 transition font-semibold w-full md:w-auto"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-3 gap-8 text-center md:text-left"
        >
          <div className="space-y-2">
            <h4 className="font-semibold text-[#0B3C5D] text-lg">Address</h4>
            <p className="text-gray-600">123 Ocean Drive, Colombo, Sri Lanka</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-[#0B3C5D] text-lg">Email</h4>
            <p className="text-gray-600">info@luxuryhotel.com</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-[#0B3C5D] text-lg">Phone</h4>
            <p className="text-gray-600">+94 77 123 4567</p>
          </div>
        </motion.div>

        {/* Optional Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full h-[400px] rounded-xl overflow-hidden shadow-md"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.373122034343!2d80.46042497397126!3d5.943206529636791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13fd32ebcf399%3A0x4fd7167b72c8e00c!2sNAVA%20b%26b%20(Formerly%20Banana%20Garden%20Mirissa)!5e0!3m2!1sen!2slk!4v1767333875095!5m2!1sen!2slk"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
