'use client';

import { motion } from "framer-motion";

export default function KidsTechnologyPage() {
  return (
    <div className="relative min-h-screen bg-[#f4f7fb] text-gray-800 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-green-300 blur-[130px] opacity-40 rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-blue-300 blur-[130px] opacity-40 rounded-full"></div>

      {/* FLOATING SHAPES */}
      <div className="absolute inset-0 overflow-hidden">
        {[0,1,2,3,4].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -25, 0], rotate: [0, 180, 360] }}
            transition={{ repeat: Infinity, duration: 6 + i }}
            className="absolute w-14 h-14 rounded-2xl bg-gradient-to-r from-green-300 to-blue-300 opacity-50 blur-lg"
            style={{
              top: `${10 + i * 18}%`,
              left: `${5 + i * 18}%`
            }}
          />
        ))}
      </div>

      {/* HERO */}
      <section className="relative text-center py-24 px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"
        >
          Technology for Kids
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Fun interactive and creative technology learning experiences designed to inspire young minds through play exploration and hands on discovery.
        </motion.p>

      </section>

      {/* PROGRAM TYPES */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-24">

        {[
          {
            title: "In Person",
            desc: "Hands on classes where kids build simple robots explore electronics and learn through guided physical interaction and group activities."
          },
          {
            title: "Online",
            desc: "Interactive digital learning sessions that allow kids to explore coding robotics and technology from home in a safe engaging environment."
          },
          {
            title: "Live Demos",
            desc: "Exciting live demonstrations showing robots smart devices and real world technology concepts in action to inspire curiosity and learning."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, rotateX: 6, rotateY: 6 }}
            className="relative group p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-green-200/40 to-blue-200/40 blur-xl"></div>

            <div className="relative">
              <h3 className="text-2xl font-bold text-green-600">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-600 text-lg">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}

      </section>

      {/* FUN LEARNING SECTION */}
      <section className="max-w-5xl mx-auto px-6 pb-24 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"
        >
          Learning Through Fun and Creativity
        </motion.h2>

        <p className="mt-6 text-gray-600 text-lg">
          Children learn best when they are engaged. Our programmes combine play based learning with real technology experiences that build curiosity and confidence.
        </p>

      </section>

      {/* CTA */}
      <section className="pb-24 text-center">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold shadow-xl cursor-pointer"
        >
          Join The Kids Tech Experience
        </motion.div>

      </section>

    </div>
  );
}