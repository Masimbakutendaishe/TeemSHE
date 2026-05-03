'use client';

import { motion } from "framer-motion";

export default function SecurityEnergyPage() {
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
          Security and Energy Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          We design and deliver smart security and energy systems including solar solutions CCTV monitoring access control and intelligent infrastructure for modern organisations.
        </motion.p>

      </section>

      {/* CORE SOLUTIONS */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-24">

        {[
          {
            title: "Solar Energy Systems",
            desc: "Reliable solar power solutions designed to reduce energy costs and support sustainable operations."
          },
          {
            title: "CCTV Monitoring",
            desc: "Advanced surveillance systems with real time monitoring recording and intelligent alerts."
          },
          {
            title: "Access Control",
            desc: "Secure entry systems using smart authentication to protect people assets and facilities."
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

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 pb-24">

        {[
          {
            title: "Remote Support",
            desc: "Continuous monitoring and remote system management to ensure performance security and uptime."
          },
          {
            title: "Field Services",
            desc: "On site installation maintenance and technical support for all deployed systems and infrastructure."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
            className="p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-blue-600">
              {item.title}
            </h3>
            <p className="mt-4 text-gray-600 text-lg">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </section>

      {/* WHY SECTION */}
      <section className="max-w-5xl mx-auto px-6 pb-24 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"
        >
          Reliable Secure and Energy Smart
        </motion.h2>

        <p className="mt-6 text-gray-600 text-lg">
          Our solutions combine energy efficiency and advanced security technologies to protect operations reduce costs and ensure continuous performance.
        </p>

      </section>

      {/* CTA */}
      <section className="pb-24 text-center">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold shadow-xl cursor-pointer"
        >
          Upgrade Your Security and Energy Systems
        </motion.div>

      </section>

    </div>
  );
}