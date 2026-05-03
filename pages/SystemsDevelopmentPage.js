'use client';

import { motion } from "framer-motion";

export default function SystemsDevelopmentPage() {
  return (
    <div className="relative min-h-screen bg-[#f4f7fb] text-gray-800 overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-green-300 blur-[130px] opacity-40 rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-blue-300 blur-[130px] opacity-40 rounded-full"></div>

      {/* HERO */}
      <section className="relative text-center py-24 px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
        >
          Systems Development
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          We design and build intelligent systems that power modern organisations through engineering digital transformation and energy efficiency.
        </motion.p>

      </section>

      {/* SERVICES GRID */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-24">

        {[
          {
            title: "Engineering",
            desc: "Robust system architecture development and integration of smart technologies for scalable solutions."
          },
          {
            title: "Digital Transformation",
            desc: "Upgrade business processes with modern digital platforms automation and data driven systems."
          },
          {
            title: "Energy Efficiency",
            desc: "Smart systems that optimise energy usage reduce costs and support sustainable operations."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
            className="p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-green-600">
              {item.title}
            </h3>
            <p className="mt-4 text-gray-600 text-lg">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </section>

      {/* PROCESS SECTION */}
      <section className="max-w-5xl mx-auto px-6 pb-24 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"
        >
          How We Deliver Systems
        </motion.h2>

        <p className="mt-6 text-gray-600 text-lg">
          Our approach combines strategic planning system design development and deployment to ensure high performance reliable and scalable solutions.
        </p>

      </section>

      {/* CTA */}
      <section className="pb-24 text-center">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold shadow-xl cursor-pointer"
        >
          Start Your Project With Us
        </motion.div>

      </section>

    </div>
  );
}