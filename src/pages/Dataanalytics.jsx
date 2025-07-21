import React from 'react';
import { motion } from "framer-motion";
import { FaChartLine, FaLaptopCode } from "react-icons/fa";
import { MdOutlineInsights } from "react-icons/md";
import analyticsImage from '../assets/hero6.webp'; // 🔁 replace with your image path

const Dataanalytics = () => {
  return (
    <div className="relative w-full px-6 py-16   overflow-hidden">
      
   

      {/* === Section with Image and Form === */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* === Image === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <img src={analyticsImage} alt="Analytics Illustration" className="w-full h-auto rounded-xl shadow-lg" />
        </motion.div>

        {/* === Content + Form === */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <div className="text-center md:text-left mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 border-b-4 inline-block border-yellow-400 pb-2">
              Data Analytics Services
            </h2>
            <p className="text-lg \">
              Build Data Analytics Services That Solve Problems...<br />
              Are you struggling to find a partner for your next project? <strong>Lemniscate</strong> offers
              market research services designed to simplify your workflow and boost efficiency.
            </p>
          </div>

          {/* === Quote Form === */}
          <form className="bg-black/5 backdrop-blur-md border border-black/10 rounded-xl p-6 grid grid-cols-1 gap-4 shadow-lg">
            <div>
              <label className="block text-black/80 mb-1">Full Name *</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 rounded-md bg-black/10 text-black placeholder-black/50 outline-none"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-black/80 mb-1">Personal Email *</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 rounded-md bg-black/10 text-black placeholder-black/50 outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-black/80 mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                className="w-full px-4 py-2 rounded-md bg-black/10 text-black placeholder-black/50 outline-none"
                placeholder="+91 9876543210"
              />
            </div>

            <div>
              <label className="block text-black/80 mb-1">Business Website</label>
              <input
                type="url"
                className="w-full px-4 py-2 rounded-md bg-black/10 text-black placeholder-black/50 outline-none"
                placeholder="https://yourcompany.com"
              />
            </div>

            <div>
              <label className="block text-black/80 mb-1">Type of Project *</label>
              <select
                required
                className="w-full px-4 py-2 rounded-md bg-black/10 text-black outline-none"
              >
                <option value="">Select an Option</option>
                <option>Data Strategy</option>
                <option>Analytics Services</option>
                <option>Visualization Tools</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-black/80 mb-1">Services Required *</label>
              <select
                required
                className="w-full px-4 py-2 rounded-md bg-black/10 text-black outline-none"
              >
                <option value="">Select a Service</option>
                <option>Mobile App Development</option>
                <option>Software Development</option>
                <option>Web Application Development</option>
                <option>Other</option>
              </select>
            </div>

            <div className="text-center col-span-1">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-3 rounded-full transition duration-300 mt-4"
              >
                Get Quote
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Dataanalytics;
