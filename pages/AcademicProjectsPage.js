'use client';

import { motion } from "framer-motion";

export default function AcademicProjectsPage() {
  return (
    <div className="relative min-h-screen bg-[#f4f7fb] text-gray-800 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-green-300 blur-[130px] opacity-40 rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-blue-300 blur-[130px] opacity-40 rounded-full"></div>

      {/* HERO */}
      <section className="relative text-center py-24 px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
        >
          Academic Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          We design structured academic project systems that support learning delivery management and student success across institutions.
        </motion.p>

      </section>

      {/* PROJECT AREAS */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-24">

        {[
          {
            title: "Onboarding",
            desc: "Structured onboarding systems that guide students and staff through clear processes for smooth programme start and engagement."
          },
          {
            title: "Safety",
            desc: "Systems and processes designed to ensure safe learning environments compliance and protection of students and staff."
          },
          {
            title: "Organized",
            desc: "Well managed academic workflows including schedules content tracking assessments and reporting."
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

      {/* SUPPORT SECTION */}
      <section className="max-w-5xl mx-auto px-6 pb-24 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"
        >
          Supporting Institutions and Learners
        </motion.h2>

        <p className="mt-6 text-gray-600 text-lg">
          Our academic project systems are designed to improve coordination enhance learning outcomes and provide structured support for both educators and learners.
        </p>

      </section>

      {/* CTA */}
      <section className="pb-24 text-center">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold shadow-xl cursor-pointer"
        >
          Build Your Academic Project System
        </motion.div>

      </section>

    </div>
  );
}