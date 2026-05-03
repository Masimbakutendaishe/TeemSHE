'use client';

import { useRef } from "react";
import { motion } from "framer-motion";

export default function CompanyPage() {
  const missionRef = useRef(null);
  const historyRef = useRef(null);
  const visionRef = useRef(null);
  const valuesRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative bg-[#f4f7fb] text-gray-800 overflow-hidden">

      {/* BACKGROUND GLOW ORBS */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyan-300 rounded-full blur-[120px] opacity-40"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-purple-300 rounded-full blur-[120px] opacity-40"></div>

      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden">

       {/* 3D ROTATING GLASS CUBE */}
<motion.div
  className="absolute w-[220px] h-[220px] rounded-3xl backdrop-blur-xl border border-white/40"
  style={{
    background: "linear-gradient(135deg, rgba(144,238,144,0.3), rgba(173,216,230,0.3))", // light green → light blue
    boxShadow: "0 30px 80px rgba(0,0,0,0.15)",
    transformStyle: "preserve-3d",
  }}
  animate={{ rotateY: 360, rotateX: 360 }}
  transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
/>

        {/* VIDEO OVERLAY */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-5"
        >
          <source src="/pagevid2.mp4" type="video/mp4" />
        </video>

        {/* HERO TEXT */}
        <div className="relative z-10 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-500 via-cyan-300 to-blue-500 bg-clip-text text-transparent"
          >
            Empowering the Future with Smart Innovation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-gray-600"
          >
            From robotics and AI to professional training, qualifications, and custom learning materials —
            Teemshe builds intelligent solutions for both technical and non-technical growth.
          </motion.p>

          {/* NAV BUTTONS */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[{label:"Mission",ref:missionRef},
              {label:"History",ref:historyRef},
              {label:"Vision",ref:visionRef},
              {label:"Values",ref:valuesRef}
            ].map((item, i) => (
              <button
                key={i}
                onClick={() => scrollTo(item.ref)}
                className="px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-gray-200 hover:bg-white transition shadow-md"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="max-w-6xl mx-auto px-6 py-20 space-y-28">

        {/* REUSABLE CARD STYLE */}
        {[
          {
            ref: missionRef,
            title: "Our Mission",
            text: `At Teemshe, our mission is to democratize access to advanced technologies such as AI, IoT, and robotics while also delivering high-quality training, qualifications, and custom learning materials. We serve both technical and non-technical sectors, ensuring individuals, businesses, and institutions gain practical, relevant skills for real-world impact.`
          },
          {
            ref: historyRef,
            title: "Our History",
            text: `Teemshe started as a small innovation lab driven by engineers and educators. Over time, it evolved into a multi-disciplinary company delivering technology solutions, professional training programs, and tailored educational content. From robotics workshops for children to enterprise systems and accredited training, our growth has always been impact-focused.`
          },
          {
            ref: visionRef,
            title: "Our Vision",
            text: `We envision a future where technology, education, and skills development are seamlessly integrated. Teemshe aims to lead in digital transformation by providing not only cutting-edge solutions but also accessible training and qualifications across both technical and non-technical industries.`
          }
        ].map((section, i) => (
          <motion.section
            key={i}
            ref={section.ref}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-200/40 to-purple-200/40 blur-xl opacity-0 group-hover:opacity-100 transition"></div>

            <div className="relative p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-xl">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                {section.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {section.text}
              </p>
            </div>
          </motion.section>
        ))}

        {/* VALUES */}
        <motion.section
          ref={valuesRef}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
            Our Core Values
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {title:"Innovation",desc:"Future-ready tech and training solutions."},
              {title:"Accessibility",desc:"Inclusive learning for all sectors."},
              {title:"Integrity",desc:"Ethical, transparent and trusted delivery."},
              {title:"Impact",desc:"Real measurable outcomes in skills and systems."}
            ].map((val, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                className="p-6 rounded-2xl bg-white/80 backdrop-blur-lg border border-gray-200 shadow-lg"
              >
                <h4 className="text-xl font-semibold text-cyan-600">{val.title}</h4>
                <p className="text-gray-600 mt-2">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </main>
    </div>
  );
}
