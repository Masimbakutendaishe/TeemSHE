import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function AboutUsPage() {
  const team = [
    {
      name: "Lebo Ndlovu",
      role: "Chief Executive Officer",
      image: "/ceo.jpg",
      bio: "Visionary founder with a passion for smart aquaculture and sustainable tech.",
    },
    {
      name: "Kuda Moyo",
      role: "Chief Technology Officer",
      image: "/cto.jpg",
      bio: "Leads our AIoT architecture and software strategy with precision and creativity.",
    },
    {
      name: "Thandi Dube",
      role: "Lead Engineer",
      image: "/engineer.jpg",
      bio: "Builds and deploys real-time aquaculture systems with resilience and scalability.",
    },
    {
      name: "Tinashe Chirwa",
      role: "Data Scientist",
      image: "/datascientist.jpg",
      bio: "Turns pond data into actionable insight through analytics and AI modeling.",
    },
    {
      name: "Rutendo Sibanda",
      role: "UX Designer",
      image: "/designer.jpg",
      bio: "Designs intuitive, inclusive user interfaces for digital aquaculture tools.",
    },
  ];

  // Helper component for 3D tilt card effect
  function TiltCard({ children }) {
    // Motion values for x and y mouse position relative to card center
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Rotate transforms based on x, y with small multiplier for subtle effect
    const rotateX = useTransform(y, [-50, 50], [15, -15]);
    const rotateY = useTransform(x, [-50, 50], [-15, 15]);

    // Handle mouse move relative to card center
    function handleMouseMove(event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const posX = event.clientX - rect.left - rect.width / 2;
      const posY = event.clientY - rect.top - rect.height / 2;
      x.set(posX);
      y.set(posY);
    }

    // Reset rotation when mouse leaves
    function handleMouseLeave() {
      x.set(0);
      y.set(0);
    }

    return (
      <motion.div
        style={{ rotateX, rotateY, transformPerspective: 600, cursor: "pointer" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#f8f9fc] text-[#1f2937] overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#00bfa5] to-[#1cdaff]">
          Meet the Team
        </h1>
        <p className="text-center max-w-2xl mx-auto text-gray-700 mb-16">
          We're a team of passionate engineers, creatives, and scientists building the next generation of AI-powered aquaculture tools.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {team.map((member, idx) => (
            <TiltCard key={idx}>
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 object-cover rounded-full border-4 border-white/60 mb-4"
              />
              <h3 className="text-xl font-semibold text-[#1f2937] mb-1">{member.name}</h3>
              <p className="text-[#1cdaff] font-medium mb-2">{member.role}</p>
              <p className="text-sm text-gray-600">{member.bio}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  );
}
