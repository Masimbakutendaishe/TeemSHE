'use client';

import { motion } from "framer-motion";

export default function AITrainingPage() {
  return (
    <div className="relative min-h-screen bg-[#eef5f9] text-gray-800 overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#d1d5db_1px,transparent_1px),linear-gradient(90deg,#d1d5db_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* GLOW LIGHTS */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-300 blur-[120px] opacity-40 rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-300 blur-[120px] opacity-40 rounded-full"></div>

      {/* HERO */}
      <section className="relative grid md:grid-cols-2 items-center gap-10 px-6 py-24 max-w-7xl mx-auto">

        {/* TEXT SIDE */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"
          >
            Data Science and AI Training
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-600"
          >
            Learn data science and artificial intelligence through structured programmes designed for real world application and career growth.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-8 inline-block px-8 py-4 rounded-full bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold shadow-xl cursor-pointer"
          >
            Start Learning Today
          </motion.div>
        </div>

        {/* FLOATING CARDS SIDE */}
        <div className="relative h-[400px]">

          {[
            { top: "0%", left: "10%", color: "from-green-300 to-blue-300" },
            { top: "40%", left: "40%", color: "from-blue-300 to-green-300" },
            { top: "70%", left: "0%", color: "from-green-200 to-blue-200" }
          ].map((item, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4 + i }}
              className={`absolute w-[140px] h-[140px] rounded-2xl bg-gradient-to-r ${item.color} opacity-60 blur-xl`}
              style={{ top: item.top, left: item.left }}
            />
          ))}

          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="absolute inset-0 m-auto w-[200px] h-[200px] rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-2xl"
          />
        </div>

      </section>

      {/* LEVELS */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 pb-24">

        {[
          {
            title: "Basics",
            desc: "Introduction to data science concepts data handling and foundations of artificial intelligence."
          },
          {
            title: "Advanced",
            desc: "Machine learning models data analysis techniques and practical implementation in real systems."
          },
          {
            title: "Expert",
            desc: "Deep learning advanced AI systems deployment and building scalable intelligent solutions."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, rotateX: 6, rotateY: 6 }}
            className="relative group p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl overflow-hidden"
          >
            {/* glow layer */}
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

      {/* PATH SECTION */}
      <section className="max-w-5xl mx-auto px-6 pb-24 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"
        >
          Structured Learning Path
        </motion.h2>

        <p className="mt-6 text-gray-600 text-lg">
          Progress from foundational knowledge to advanced expertise through guided learning practical projects and real world application.
        </p>

      </section>

      {/* CTA */}
      <section className="pb-24 text-center">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold shadow-xl cursor-pointer"
        >
          Join The Training Programme
        </motion.div>

      </section>

    </div>
  );
}