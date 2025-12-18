import { useState } from "react";
import { motion } from "framer-motion";

const inputVariants = {
  rest: { scale: 1, boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" },
  hover: {
    scale: 1.02,
    boxShadow: "0px 4px 20px rgba(34, 197, 94, 0.4)",
  },
};

export default function ContactUsPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out!");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f0fdfa] via-[#e0f7f4] to-[#ccfbf1] text-[#1f2937] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 z-0"
      >
        <source src="/contactbg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent z-0 backdrop-blur-sm" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0ea5e9] to-[#22c55e]"
        >
          Let's Talk
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center max-w-xl mx-auto text-gray-600 mb-16"
        >
          Send us a message and we’ll get back to you faster than your fish grow. Whether it’s a partnership, feedback, or a tech inquiry — we’re listening.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-10 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email", "message"].map((field) => (
                <motion.div key={field} whileHover="hover" initial="rest" animate="rest" variants={inputVariants}>
                  {field !== "message" ? (
                    <input
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-lg bg-white/60 text-gray-800 border border-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                      required
                    />
                  ) : (
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-3 rounded-lg bg-white/60 text-gray-800 border border-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
                      required
                    />
                  )}
                </motion.div>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.03 }}
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#22c55e] to-[#0ea5e9] text-white font-bold rounded-lg shadow-lg hover:shadow-[#22c55e]/40 transition-all"
              >
                🚀 Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col justify-center space-y-6 text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div>
              <h3 className="font-semibold text-[#0ea5e9] mb-1">🌍 Address</h3>
              <p>1 AIoT Lane, AquaTech Valley, Harare, Zimbabwe</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0ea5e9] mb-1">📞 Phone</h3>
              <p>+263 71 234 5678</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0ea5e9] mb-1">📧 Email</h3>
              <p>hello@smartponds.co.zw</p>
            </div>
            <motion.div
              whileHover={{ rotateY: 10, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="mt-10 w-full h-52 rounded-xl bg-gradient-to-tr from-[#22c55e]/20 to-[#0ea5e9]/20 border border-white/30 shadow-inner flex items-center justify-center text-3xl font-bold text-gray-700 backdrop-blur-sm"
            >
              🤝 Let’s Collaborate
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
