import React from "react";
import { motion } from "framer-motion";
import dataquality from "../assets/data quality.webp";
import analytics from "../assets/analytics.jpg";
import dashboard from "../assets/dashboard.jpg";
import coding from "../assets/coding.webp";
import datatable from "../assets/data table.avif";

// Animation Variants
const fadeInVariant = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 60 : -60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  },
});


const features = [
  {
    title: "Data Tables & Tabulation",
    description:
      "Precise, customized data tables that present your research findings in clear, actionable formats. Our team ensures accuracy and consistency across all deliverables.",
    image: datatable,
  },
  {
    title: "Open-End Coding",
    description:
      "AI-Powered Excellence: Leverage our advanced AI algorithms for efficient and accurate open-ended response coding, delivering deeper insights faster than traditional methods.",
    image: coding,
  },
  {
    title: "Data Quality Management",
    description:
      "AI-Enhanced Quality Control: Our proprietary AI algorithms identify and classify survey respondents, ensuring the highest data integrity by detecting and filtering out poor-quality responses.",
    image: dataquality,
  },
  {
    title: "Interactive Dashboards",
    description:
      "Transform complex data into intuitive, interactive visualizations that tell your story and drive decision-making across your organization.",
    image: dashboard,
  },
  {
    title: "Advanced Analytics",
    description:
      "Unlock hidden patterns and insights with our sophisticated analytical techniques, from predictive modeling to segmentation analysis.",
    image: analytics,
  },
];

const Marketresearch = () => {
  return (
    <div className="max-w-7xl py-16 px-4 sm:px-6 md:px-10 bg-[#f8fafc] text-gray-800 mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-16 px-4 py-6 
               bg-gradient-to-r from-[#0ea5e9] via-[#6366f1] to-[#ec4899] 
               text-white border-4 border-white rounded-2xl shadow-2xl 
               backdrop-blur-sm bg-opacity-90 inline-block w-full sm:w-auto  md:mx-40">
        Market Research Agency
      </h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((item, index) => (
   <motion.div
    key={index}
    className="bg-white rounded-xl overflow-hidden shadow-xl flex flex-col h-full"
    variants={fadeInVariant("up", index * 0.2)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    {/* Image */}
    <div className="w-full h-[240px] sm:h-[280px] md:h-[300px]">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>

    {/* Text */}
    <div className="p-4 sm:p-6 bg-gradient-to-br from-sky-50 via-purple-50 to-pink-50 flex flex-col justify-start flex-1">
      <h3 className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
        {item.title}
      </h3>
      <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed mt-1">
        {item.description}
      </p>
    </div>
  </motion.div>
))}

      </div>
    </div>
  );
};

export default Marketresearch;
    