import { motion } from "framer-motion";
import { useState } from "react";

const jobs = [
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    description: "Join our UI/UX team to build elegant interfaces for smart aquaculture dashboards.",
  },
  {
    title: "AI & IoT Systems Engineer",
    location: "Cape Town / Hybrid",
    type: "Contract",
    description: "Develop real-time machine learning models for water quality and feeding systems.",
  },
  {
    title: "Product Designer",
    location: "Remote",
    type: "Full-time",
    description: "Design user-friendly tools that empower farmers with accessible, data-driven tech.",
  },
  {
    title: "Marketing & Community Lead",
    location: "Harare / Remote",
    type: "Part-time",
    description: "Grow our community of digital aquaculture adopters through storytelling and outreach.",
  },
];

export default function CareersPage() {
  const [hoveredJob, setHoveredJob] = useState(null);

  return (
    <div className="relative min-h-screen bg-[#f8f9fc] text-[#1f2937] overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20 z-0"
      >
        <source src="/teamvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00fca8] to-[#1cdaff]">
          Join Our Team
        </h1>
        <p className="text-center max-w-2xl mx-auto text-gray-700 mb-12">
          We’re building the future of aquaculture tech. If you're passionate about sustainable innovation, apply below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md cursor-pointer"
              whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onMouseEnter={() => setHoveredJob(index)}
              onMouseLeave={() => setHoveredJob(null)}
            >
              <h3 className="text-xl font-bold text-[#1f2937]">{job.title}</h3>
              <p className="text-[#1cdaff] mb-1">{job.location} • {job.type}</p>
              <p className="text-gray-600 text-sm">{job.description}</p>

              {hoveredJob === index && (
                <motion.div
                  className="mt-4 inline-block px-4 py-2 rounded-md bg-gradient-to-r from-[#00fca8] to-[#1cdaff] text-white text-sm font-medium shadow-md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Apply Now
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
