import React from "react";
import { motion } from "framer-motion";
import mr from "../assets/market research vector.png";

import da from "../assets/data analyst vector.png";
import CountUp from "react-countup";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};



const Services = () => {
     const stats = [
    { label: "Years of Industry Excellence", value: 8 },
    { label: "Projects Delivered", value: 5500, suffix: "+" },
    { label: "Expert Professionals", value: 25 },
    { label: "Strategic Locations", value: 2, extra: "(Faridabad & Noida)" },
  ];
  return (
    <div
      className="max-w-7xl bg-cover bg-center py-16 px-4 sm:px-6 mx-auto"
    >

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={i + 1}
              className="bg-blue-50 p-6 rounded-xl shadow hover:scale-105 transition"
            >
              <h2 className="text-4xl font-bold text-blue-700">
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={3.5}
                  delay={i * 0.5}
                  suffix={stat.suffix || ""}
                />
              </h2>
              <p className="text-gray-700 mt-2">{stat.label}</p>
              {stat.extra && (
                <p className="text-sm text-gray-500">{stat.extra}</p>
              )}
            </motion.div>
          ))}
        </div>




      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <div className="flex justify-center items-center gap-2 flex-wrap text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
          <div className="text-6xl sm:border-y-4 border-sky-400 px-4 py-2 text-black">
            Our
          </div>
          <span className="text-6xl border-b-4 border-yellow  sm:border-y-4 sm:border-black px-4 py-2 text-sky-400">
            Services
          </span>

        </div>


    
        {/* services Grid */}
        <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          What can we do for you?
        </h2>
        <p className="text-lg text-gray-600">
          We hold exceptional expertise in five main areas
        </p>
      </div>

      {/* Market Research Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        {/* Image Left */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={mr}
            alt="Market Research Agency"
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text Right */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Market Research Agency
          </h3>
          <p className="text-gray-600">
            We conduct in-depth market research and offer insights that help
            businesses make informed decisions, optimize strategies, and
            understand their audiences better.
          </p>
        </motion.div>
      </div>

      {/* Data Analytics Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Left */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Data Analytics Services
          </h3>
          <p className="text-gray-600">
            Leverage the power of data with our analytics services. We help you
            uncover trends, improve performance, and gain competitive
            advantages through actionable insights.
          </p>
        </motion.div>

        {/* Image Right */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={da}
            alt="Data Analytics Services"
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
      </div>
    </div>


    
  );
};

export default Services;
