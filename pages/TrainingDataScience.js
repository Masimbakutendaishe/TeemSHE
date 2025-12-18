import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, BrainCircuit, Atom, CheckCircle, Quote } from "lucide-react";

export default function DataScienceTrainingPage() {
  const [hovered, setHovered] = useState(null);

  const levels = [
    {
      id: "basic",
      title: "Basic Level",
      description:
        "Start with zero experience and build a strong foundation in data science using real tools.",
      label: "Beginner-Friendly",
      modules: [
        "Python Essentials",
        "Excel for Data Analysis",
        "AI with ChatGPT",
        "Data Visualization with Canva & Sheets",
      ],
      image: "/robb.jpg",
      icon: <Sparkles size={36} className="text-[#00bcd4]" />,
      gradient: "from-[#e0f7fa] via-[#b2ebf2] to-[#00bcd4]",
    },
    {
      id: "advanced",
      title: "Advanced Level",
      description:
        "Solve real-world problems with machine learning, data engineering, and cloud-based AI tools.",
      label: "Job-Ready Skills",
      modules: [
        "Machine Learning with scikit-learn",
        "Data Wrangling with Pandas & NumPy",
        "AWS & Azure AI Tools",
        "Power BI & Dashboards",
      ],
      image: "/robb.jpg",
      icon: <BrainCircuit size={36} className="text-[#9c27b0]" />,
      gradient: "from-[#f3e5f5] via-[#ce93d8] to-[#9c27b0]",
    },
    {
      id: "expert",
      title: "Expert Level",
      description:
        "Master deep learning, natural language processing, and deploy scalable AI systems.",
      label: "Professional & Research",
      modules: [
        "Deep Learning (CNNs, RNNs)",
        "Natural Language Processing",
        "MLOps & Deployment",
        "Ethical AI & Governance",
      ],
      image: "/robb.jpg",
      icon: <Atom size={36} className="text-[#ff9800]" />,
      gradient: "from-[#fff3e0] via-[#ffcc80] to-[#ff9800]",
    },
  ];

  const testimonials = [
    {
      name: "Lerato M.",
      role: "Data Analyst at a Fintech Startup",
      feedback:
        "This course gave me the confidence and skills to switch careers into data science. The hands-on projects made all the difference!",
      avatar: "/avatar1.jpg",
    },
    {
      name: "David K.",
      role: "AI Engineer at a Telecoms Company",
      feedback:
        "The expert level deep learning modules were world-class. I was able to deploy my own NLP model at work!",
      avatar: "/avatar2.jpg",
    },
    {
      name: "Nokuthula S.",
      role: "Graduate Trainee in Analytics",
      feedback:
        "The mentorship and structured learning path kept me motivated. I landed my first data job thanks to this program!",
      avatar: "/avatar3.jpg",
    },
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden text-gray-800">
      {/* Animated background */}
      <div className="absolute inset-0 z-0 animate-pulse">
        <div
          className="w-full h-full bg-gradient-to-tr from-[#fdfbfb] via-[#e0f7fa] to-[#e1f5fe]"
          style={{
            backgroundImage: `radial-gradient(at 30% 20%, rgba(255, 245, 157, 0.25), transparent 50%),
                              radial-gradient(at 70% 80%, rgba(129, 212, 250, 0.3), transparent 50%),
                              linear-gradient(135deg, #fdfbfb 0%, #e1f5fe 100%)`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-[#00fca8] to-[#1cdaff] text-transparent bg-clip-text"
        >
          Teemshe Data Science & AI Training
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center max-w-3xl mx-auto text-lg text-gray-600 mb-12"
        >
          Learn data science the smart way — <span className="font-semibold text-[#00bcd4]">project-based</span>,
          <span className="font-semibold text-[#9c27b0]"> mentor-led</span>, and powered by real-world tools used by top companies.
        </motion.p>

        {/* Levels Section */}
        <div className="grid md:grid-cols-3 gap-10">
          {levels.map((level, index) => (
            <motion.div
              key={level.id}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition-all ${
                hovered === level.id ? "z-20" : "z-10"
              }`}
              onMouseEnter={() => setHovered(level.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${level.image})` }}
              ></div>
              <div
                className={`p-6 bg-gradient-to-br ${level.gradient}`}
                style={{ color: "rgba(0,0,0,0.85)" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  {level.icon}
                  <h2 className="text-xl font-bold">{level.title}</h2>
                </div>
                <span className="text-sm bg-white text-gray-800 px-3 py-1 rounded-full inline-block mb-3 font-semibold shadow">
                  {level.label}
                </span>
                <p className="mb-4 leading-relaxed">{level.description}</p>
                <ul className="text-sm space-y-2">
                  {level.modules.map((mod, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-[#00fca8]" /> {mod}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-[#1cdaff] to-[#00fca8] text-transparent bg-clip-text">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-left">
            {[
              { step: "1. Choose Level", desc: "Start with the level that fits your experience and goals." },
              { step: "2. Learn Weekly", desc: "Access guided content, quizzes, and weekly project sprints." },
              { step: "3. Build Projects", desc: "Create portfolio-ready projects using real datasets." },
              { step: "4. Get Certified", desc: "Earn credentials and career support to land opportunities." },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow p-6"
              >
                <h3 className="text-lg font-bold text-[#1cdaff] mb-2">{item.step}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold text-center mb-10 bg-gradient-to-r from-[#ff9800] to-[#9c27b0] text-transparent bg-clip-text">
            What Our Learners Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <Quote className="text-[#1cdaff] mb-3" size={28} />
                <p className="text-gray-700 italic mb-4">“{t.feedback}”</p>
                <h4 className="font-bold text-gray-900">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.role}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#00fca8] to-[#1cdaff] text-transparent bg-clip-text">
            Ready to Upskill?
          </h2>
          <p className="text-lg mb-6 text-gray-700 max-w-2xl mx-auto">
            Join hundreds of learners gaining high-demand skills and building the future with AI & Data.
          </p>
          <button className="px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#00fca8] to-[#1cdaff] rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            Enroll Now 🚀
          </button>
        </motion.div>
      </div>
    </div>
  );
}
