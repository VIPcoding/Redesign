import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import CountUp from "react-countup";
import mr from "../assets/mr.mp4";

// Animation Variant
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

const About = () => {
  const stats = [
    { label: "Years of Industry Excellence", value: 8 },
    { label: "Projects Delivered", value: 5500, suffix: "+" },
    { label: "Expert Professionals", value: 25 },
    { label: "Strategic Locations", value: 2, extra: "(Faridabad & Noida)" },
  ];

  const list = [
    {
      title: "Proven Track Record",
      points: [
        "5,500+ successful projects",
        "8+ years of consistent excellence",
        "99%+ client satisfaction rate",
      ],
    },
    {
      title: "Innovation-First Approach",
      points: [
        "Proprietary AI algorithms",
        "Custom-built software solutions",
        "Continuous technology advancement",
      ],
    },
    {
      title: "Expert Team",
      points: [
        "25+ specialized professionals",
        "Combined experience of 100+ years",
        "Ongoing training and development",
      ],
    },
    {
      title: "End-to-End Solutions",
      points: [
        "From survey design to final insights",
        "Single partner for all research needs",
        "Seamless project management",
      ],
    },
    {
      title: "Quality Assurance",
      points: [
        "AI-powered quality control",
        "Multi-level verification processes",
        "ISO-standard methodologies",
      ],
    },
    {
      title: "Scalability",
      points: [
        "Handle projects of any size",
        "Flexible resource allocation",
        "Quick turnaround times",
      ],
    },
  ];

  return (
    <section className="bg-white mt-4">
      {/* 🎥 Background Video Header */}
      <div className="relative overflow-hidden h-[600px] md:h-[500px]">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={mr} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Header Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-10 sm:py-24 text-center text-white space-y-6">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-extrabold"
          >
            Your Partner in{" "}
            <span className="text-7xl font-bold bg-linear-to-r/oklab from-indigo-500 to-teal-400 bg-clip-text text-transparent">
              Market Research
            </span>{" "}
            Excellence
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg max-w-3xl mx-auto text-gray-200"
          >
            Founded in 2017, Lemniscate Technologies has emerged as a leading
            provider of comprehensive market research solutions. Operating from
            our offices in Faridabad and Noida, we’ve built a reputation for
            delivering high-quality, innovative data solutions that drive
            business decisions.
          </motion.p>
        </div>
      </div>

      {/* 📊 Stats */}

      <div className="max-w-7xl mx-auto py-20 px-6 md:px-10 space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
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

        {/* 🧭 Mission */}
        {/* 🧭 Mission Section with Card and Gradient Text */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="w-full flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mx-auto mb-6 border-b-4 border-[#302847]">
            Our Mission
          </h2>
          <div className="bg-[#302847] p-10 rounded-xl shadow-xl max-w-4xl text-center mx-auto">
            <p className="text-lg md:text-xl text-white reading-relaxed">
              To revolutionize market research through innovative AI-powered
              solutions, delivering actionable insights that empower our clients
              to make data-driven decisions with confidence.
            </p>
          </div>
        </motion.div>

        <h1 className="text-4xl text-center mb-12 md:text-6xl font-extrabold text-black w-fit mx-auto border-b-4 border-[#302847]">
          Why Choose Lemniscate
        </h1>

        {/* 💡 Why Choose Lemniscate */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          <h2 className="text-2xl  font-bold text-center text-white border-2 w-fit mx-auto px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            The Lemniscate Advantage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mx-auto">
            {list.map((section, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={i + 1}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-600 to-cyan-400 p-4">
                  <h3 className="text-2xl font-bold text-white">
                    {section.title}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {section.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <FaCheckCircle className="text-cyan-500 text-lg mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
