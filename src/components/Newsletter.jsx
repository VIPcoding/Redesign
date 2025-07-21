import React from 'react'
import { FaPaperPlane, FaEnvelope } from "react-icons/fa";
import { MdEmail, MdOutlineMailOutline } from "react-icons/md";

export const Newsletter = () => {
  return (
   <div className="relative w-full bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 py-16 px-6 overflow-hidden mb-10">
      {/* Floating icons */}
      <div className="absolute top-10 left-10 text-white text-4xl opacity-10 animate-pulse">
        <FaPaperPlane />
      </div>
      <div className="absolute bottom-8 right-12 text-white text-5xl opacity-10 animate-bounce">
        <MdEmail />
      </div>
      <div className="absolute top-1/2 left-[20%] text-white text-6xl opacity-10 animate-spin-slow">
        <MdOutlineMailOutline />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto bg-white rounded-xl p-8 shadow-2xl">
        <div className="flex items-center gap-3 mb-4">
          <FaPaperPlane className="text-teal-500 text-xl" />
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
            Subscribe to Our Newsletter
          </h3>
        </div>
        <form className="flex flex-col md:flex-row gap-4">
          <div className="flex items-center w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-100">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent outline-none text-gray-800"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2 rounded-md font-semibold hover:from-teal-600 hover:to-cyan-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}
