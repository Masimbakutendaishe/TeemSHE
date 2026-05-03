'use client';

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="relative min-h-screen bg-[#f4f7fb] text-gray-800 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-green-300 blur-[120px] opacity-40 rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-blue-300 blur-[120px] opacity-40 rounded-full"></div>

      {/* HERO */}
      <section className="relative text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
        >
          Contact Us
        </motion.h1>

        <p className="mt-4 text-gray-600 text-lg">
          Reach out to Teemshe for solutions training and support
        </p>
      </section>

      {/* CONTACT CARDS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

        {/* EMAIL */}
        <motion.div
          whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
          className="p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl text-center"
        >
          <h3 className="text-xl font-semibold text-green-600">Email Us</h3>
          <p className="mt-3 text-gray-600">info@teemshe.co.za</p>
        </motion.div>

        {/* PHONE */}
        <motion.div
          whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
          className="p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl text-center"
        >
          <h3 className="text-xl font-semibold text-blue-600">Call Us</h3>
          <p className="mt-3 text-gray-600">+263782000510</p>
        </motion.div>

        {/* ADDRESS */}
        <motion.div
          whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
          className="p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl text-center"
        >
          <h3 className="text-xl font-semibold text-green-600">Visit Us</h3>
          <p className="mt-3 text-gray-600">South Africa</p>
        </motion.div>

      </section>

      {/* EMAIL FORM */}
      <section className="max-w-3xl mx-auto mt-20 px-6">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-2xl space-y-6"
        >
          <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Send Email
          </h3>

          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold shadow-lg hover:scale-105 transition"
          >
            Send Message
          </button>
        </motion.form>
      </section>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-6 rounded-2xl shadow-2xl text-center"
          >
            <h4 className="text-xl font-semibold text-green-600">
              Email sent successfully
            </h4>
            <p className="text-gray-600 mt-2">
              We will get back to you
            </p>
          </motion.div>
        </div>
      )}

    </div>
  );
}
