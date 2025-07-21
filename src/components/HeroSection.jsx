import React from "react";
import hero from "../assets/ai.png";
import { motion } from "framer-motion";
import mrai from "../assets/mrai.mp4";

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-900 text-white py-15 mt-4">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={mrai} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left - Text with animation from left to right */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-yellow-400">
            Empowering Market Research
            <br />
            <span className="text-white">with AI-Driven Solutions</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            With over{" "}
            <span className="text-yellow-400 font-semibold">
              5,500 successful projects
            </span>{" "}
            delivered,
            <span className="text-white font-semibold">
              {" "}
              Lemniscate Technologies
            </span>{" "}
            stands as a trusted partner in full-scale market research and data
            analytics. Our
            <span className="text-yellow-400 font-semibold">
              {" "}
              25-member expert team
            </span>{" "}
            combines cutting-edge
            <span className="text-white font-semibold">
              {" "}
              AI technology
            </span>{" "}
            with deep industry expertise to deliver exceptional results.
          </p>
          <button className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-400 transition">
            Learn More
          </button>
        </motion.div>

        {/* Right - Image with animation from right to left */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 100 }} // entry animation
          animate={{
            opacity: 1, // fade in once
            y: [0, -10, 0], // loop only Y movement
          }}
          transition={{
            opacity: { duration: 1.5 }, // one-time fade in
            y: {
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        >
          <img
            src={hero}
            alt="AI Market Research"
            className="w-full rounded-xl shadow-lg sm:h-90"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
