import React from "react";
import ai from "../assets/ai.mp4";
import gif1 from "../assets/gif1.gif";
import gif2 from "../assets/gif2.gif";
import gif4 from "../assets/gif4.gif";
import {
  FaDatabase,
  FaMagic,
  FaCodeBranch,
  FaChartLine,
  FaTabletAlt,
  FaRobot,
} from "react-icons/fa";

// Color mappings for Tailwind-safe classes
const colorMap = {
  sky: {
    bg: "from-white to-sky-50",
    text: "text-sky-700",
    icon: "text-sky-500",
    iconHover: "text-sky-700",
    textHover: "text-sky-800",
  },
  violet: {
    bg: "from-white to-violet-50",
    text: "text-violet-700",
    icon: "text-violet-500",
    iconHover: "text-violet-700",
    textHover: "text-violet-800",
  },
  green: {
    bg: "from-white to-green-50",
    text: "text-green-700",
    icon: "text-green-500",
    iconHover: "text-green-700",
    textHover: "text-green-800",
  },
};

const technologies = [
  {
    title: "D.I.C.E.",
    subtitle: "Data Intelligence & Computation Engine",
    description:
      "Our proprietary platform for data manipulation, tabulation, and analysis. Enhances productivity and automates workflows across all project phases.",
    features: [
      "Advanced data manipulation capabilities",
      "Automated tabulation processes",
      "Custom reporting solutions",
      "Seamless integration with existing systems",
    ],
    icons: [FaDatabase, FaMagic, FaCodeBranch, FaChartLine],
    imageUrl: gif1,
    color: "sky",
  },
  {
    title: "Dataqire-Next-Generation Survey Programming",
    subtitle: "Next-Gen Survey Programming",
    description:
      "Flexible and powerful survey platform with real-time validation, complex logic, and rich question types.",
    features: [
      "Multi-device compatibility",
      "Complex logic implementation",
      "Real-time data validation",
      "Advanced question types",
    ],
    icons: [FaTabletAlt, FaCodeBranch, FaMagic, FaRobot],
    imageUrl: gif2,
    color: "violet",
  },
  {
    title: "AI-Powered Solutions",
    subtitle: "Smarter Insights with AI",
    description:
      "Automated classification and categorization of text responses, respondent quality assessment, and predictive analytics.",
    features: [
      "Open-End Coding with AI",
      "Quality Assessment using ML",
      "Predictive Analytics",
    ],
    icons: [FaRobot, FaChartLine, FaChartLine],
    imageUrl: gif4,
    color: "green",
  },
];

const Technology = () => {
  return (
    <div className="bg-white text-gray-800 mt-4">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[600px]  overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={ai} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-0">
            Powering Innovation
          </h1>
          <p className="text-lg md:text-2xl text-white mt-1">
            Smart tech, data platforms, and automation for real-world solutions.
          </p>
        </div>
      </div>

      {/* Technology Cards */}
      <section className="py-16 px-4 sm:px-6 md:px-20 space-y-16 max-w-7xl mx-auto">
        {technologies.map((tech, index) => {
          const color = colorMap[tech.color];

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-gradient-to-br ${color.bg} p-6 md:p-10 rounded-3xl shadow-md hover:shadow-2xl transition ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={tech.imageUrl}
                  alt={tech.title}
                  className="rounded-xl w-full h-full max-h-[400px] object-cover shadow-lg transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 space-y-2">
                <h2 className={`text-3xl md:text-4xl font-extrabold ${color.text}`}>
                  {tech.title}
                </h2>
                <p className="text-base text-gray-600 italic">{tech.subtitle}</p>

                <div className="mt-4 bg-white/80 p-5 rounded-xl shadow-inner ring-1 ring-gray-200 backdrop-blur-sm">
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-3">
                    {tech.description}
                  </p>
                  <ul className="space-y-3">
                    {tech.features.map((feature, idx) => {
                      const Icon = tech.icons[idx];
                      return (
                        <li
                          key={idx}
                          className="flex items-start gap-2 group transition-all"
                        >
                          <Icon
                            className={`${color.icon} text-lg group-hover:${color.iconHover} transition`}
                          />
                          <span
                            className={`text-gray-700 font-medium group-hover:${color.textHover} transition`}
                          >
                            {feature}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Technology;
