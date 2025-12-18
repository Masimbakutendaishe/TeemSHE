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
    <div className="bg-[#f8f9fc] text-[#1f2937]">
      {/* Hero with animated 3D-ish cube + video overlay */}
      <section className="relative h-[70vh] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Rotating 3D-ish cube */}
        <motion.div
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#00acc1",
            borderRadius: 24,
            boxShadow: "0 20px 40px rgba(0, 172, 193, 0.5)",
            perspective: 800,
            position: "absolute",
            inset: 0,
            margin: "auto",
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateY: 360,
            rotateX: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        />

        {/* Transparent Video Overlay */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
        >
          <source src="/pagevid2.mp4" type="video/mp4" />
        </video>

        {/* Text Content */}
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-5xl font-bold mb-4 text-gray-800">
            Empowering the Future with Smart Tech
          </h2>
          <p className="text-lg text-gray-600">
            From robotics for kids to accredited AI training, Teemshe builds intelligent, accessible solutions.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollTo(missionRef)}
              className="px-4 py-2 rounded-md bg-[#00acc1] text-white hover:bg-[#0097a7] transition"
            >
              Our Mission
            </button>
            <button
              onClick={() => scrollTo(historyRef)}
              className="px-4 py-2 rounded-md bg-[#00acc1] text-white hover:bg-[#0097a7] transition"
            >
              Our History
            </button>
            <button
              onClick={() => scrollTo(visionRef)}
              className="px-4 py-2 rounded-md bg-[#00acc1] text-white hover:bg-[#0097a7] transition"
            >
              Our Vision
            </button>
            <button
              onClick={() => scrollTo(valuesRef)}
              className="px-4 py-2 rounded-md bg-[#00acc1] text-white hover:bg-[#0097a7] transition"
            >
              Our Values
            </button>
          </div>
        </div>
      </section>

      {/* About Sections */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        {/* Mission */}
        <section ref={missionRef} className="scroll-mt-20">
          <h3 className="text-3xl font-bold mb-4 text-[#00acc1]">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            At Teemshe, we strive to democratize access to advanced technologies like AI, IoT, and robotics by making them affordable, inclusive, and scalable. Whether it's through educational programs, custom mobile apps, or data-driven web platforms, our goal is to build a digitally empowered Africa — one solution at a time.
          </p>
        </section>

        {/* History */}
        <section ref={historyRef} className="scroll-mt-20">
          <h3 className="text-3xl font-bold mb-4 text-[#00acc1]">Our History</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Teemshe began as a small digital lab founded by engineers and educators passionate about local innovation. From early workshops teaching kids how to build robots to complex enterprise AI deployments, our journey has always centered on meaningful impact and measurable transformation.
          </p>
        </section>

        {/* Vision */}
        <section ref={visionRef} className="scroll-mt-20">
          <h3 className="text-3xl font-bold mb-4 text-[#00acc1]">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            We envision a world where every learner, creator, and business has the tools to thrive in a smart, data-driven society. Teemshe aims to lead Africa’s digital transformation by bridging tech education with practical implementation.
          </p>
        </section>

        {/* Values */}
        <section ref={valuesRef} className="scroll-mt-20">
          <h3 className="text-3xl font-bold mb-4 text-[#00acc1]">Our Values</h3>
          <ul className="text-gray-700 text-lg space-y-2 list-disc list-inside">
            <li><strong>Innovation:</strong> We create future-ready technologies tailored to African contexts.</li>
            <li><strong>Accessibility:</strong> We design with inclusion in mind — for learners, startups, and rural communities.</li>
            <li><strong>Integrity:</strong> We prioritize transparency, data ethics, and user trust.</li>
            <li><strong>Impact:</strong> Every product or program we launch is tied to real-world outcomes.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
