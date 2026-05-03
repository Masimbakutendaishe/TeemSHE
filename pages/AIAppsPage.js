'use client';

import { motion } from "framer-motion";

export default function AIAppsPage() {
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
          AI Applications for Modern Business
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
        >
          We design and build intelligent AI solutions that automate work,
          improve decision making, and transform how businesses operate.
        </motion.p>

      </section>

      {/* 3D AI SOLUTIONS GRID */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-24">

        {[
          {
            title: "AI Chatbots",
            desc: "Smart customer support bots that respond instantly and reduce workload."
          },
          {
            title: "Business Automation",
            desc: "Automate repetitive tasks and workflows using AI powered systems."
          },
          {
            title: "Predictive Analytics",
            desc: "Use data to predict trends, sales, and business opportunities."
          },
          {
            title: "Custom AI Apps",
            desc: "Tailor made AI applications built specifically for your business needs."
          },
          {
            title: "Document Intelligence",
            desc: "Extract and process information from documents automatically."
          },
          {
            title: "AI Training Systems",
            desc: "Smart learning platforms powered by adaptive AI technology."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
            className="p-6 rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-green-600">
              {item.title}
            </h3>
            <p className="mt-3 text-gray-600">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-5xl mx-auto px-6 pb-24 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"
        >
          Why Businesses Choose Teemshe AI
        </motion.h2>

        <p className="mt-6 text-gray-600 text-lg">
          We combine AI engineering, automation design, and business strategy to deliver real world impact.
          Our solutions are built to scale with your business.
        </p>

      </section>

      {/* CTA */}
      <section className="pb-24 text-center">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold shadow-xl cursor-pointer"
        >
          Build Your AI Solution With Us
        </motion.div>

      </section>

    </div>
  );
}