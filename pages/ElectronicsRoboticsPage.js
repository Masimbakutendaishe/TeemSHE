'use client';

import { motion } from "framer-motion";

export default function ElectronicsRoboticsPage() {
  return (
    <div className="relative min-h-screen bg-[#eef5f9] text-gray-800 overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#d1d5db_1px,transparent_1px),linear-gradient(90deg,#d1d5db_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* GLOW LIGHTS */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-green-300 blur-[120px] opacity-40 rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-blue-300 blur-[120px] opacity-40 rounded-full"></div>

      {/* HERO */}
      <section className="relative text-center py-24 px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"
        >
          Electronics and Robotics
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Practical robotics and electronics programmes designed for all levels from young learners to advanced industry applications using real tools and systems.
        </motion.p>

      </section>

      {/* FLOATING TECH ELEMENTS */}
      <div className="relative h-[200px] max-w-5xl mx-auto">
        {[0,1,2,3].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3 + i }}
            className="absolute w-16 h-16 rounded-xl bg-gradient-to-r from-green-300 to-blue-300 opacity-60 blur-lg"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`
            }}
          />
        ))}
      </div>

      {/* CORE SECTIONS */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 pb-24">

        {[
          {
            title: "Tech Centres",
            desc: "Hands on learning environments where students build robots explore electronics and develop real projects from basic kits to advanced systems."
          },
          {
            title: "Industry Standards",
            desc: "Training aligned with real industry practices including system design automation electronics integration and robotics engineering workflows."
          },
          {
            title: "Global Certs",
            desc: "Programmes designed to prepare learners for recognised certifications and global skills in robotics electronics and automation technologies."
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

      {/* PROGRAM LEVELS */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 pb-24">

        {[
          {
            title: "Kids Robotics",
            desc: "Fun and engaging robotics learning for young learners using simple kits sensors and creative building activities to develop problem solving skills."
          },
          {
            title: "Advanced Projects",
            desc: "Hands on development using Arduino and electronic systems to build automation solutions smart devices and intelligent robotics applications."
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

      {/* CTA */}
      <section className="pb-24 text-center">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold shadow-xl cursor-pointer"
        >
          Start Your Robotics Journey
        </motion.div>

      </section>

    </div>
  );
}