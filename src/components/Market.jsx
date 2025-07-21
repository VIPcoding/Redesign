import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaRocket } from "react-icons/fa";
import { MdEmail, MdOutlineMailOutline } from "react-icons/md";
import overlayImage from "../assets/bg1.webp"; // Ensure the image exists

const Market = () => {
  return (
    <>
      {/* === Market Research Section === */}
      <div className="relative overflow-hidden w-full py-16 px-6 bg-gradient-to-br from-black via-[#020f2a] to-[#041533] text-white my-10">
        {/* Floating Icons */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute left-10 top-10 animate-pulse text-5xl text-white/20">
            <FaPaperPlane />
          </div>
          <div className="absolute right-12 top-24 animate-bounce text-4xl text-white/30">
            <FaEnvelope />
          </div>
          <div className="absolute left-1/2 bottom-20 animate-ping text-6xl text-white/10">
            <MdEmail />
          </div>
          <div className="absolute right-1/3 bottom-10 animate-spin-slow text-5xl text-white/20">
            <MdOutlineMailOutline />
          </div>
        </div>

        {/* Image Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-30 bg-cover bg-center mix-blend-overlay"
          style={{
            backgroundImage: `url(${overlayImage})`,
          }}
        ></div>

        {/* Main Content */}
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center px-6 py-10 bg-sky-900/50 backdrop-blur-md rounded-xl shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Market Research?
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Whether you need comprehensive survey programming, advanced analytics,
            or AI-powered insights, we're here to help.
            <strong className="text-yellow-400"> Lemniscate Technologies </strong>
            can transform your market research capabilities — contact us today.
          </p>
        </motion.div>
      </div>

      {/* === Brand CTA Section === */}
      <div className="w-full py-20 px-6 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white relative overflow-hidden my-10">
        {/* Icon blend */}
        <div className="absolute top-10 left-10 text-white/20 text-6xl animate-bounce">
          <FaRocket />
        </div>
        <div className="absolute right-16 bottom-12 text-white/30 text-5xl animate-spin">
          <MdOutlineMailOutline />
        </div>
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-lighten"
          style={{ backgroundImage: `url(${overlayImage})` }}
        ></div>

        {/* Main CTA */}
        <motion.div
          className="max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-md rounded-2xl px-8 py-14 shadow-2xl border border-white/20 relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Transform your brand today!
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 px-5">
            Ready to elevate your digital presence with powerful ideas and creative strategy?
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
          >
            Let's Discuss a Project
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default Market;
