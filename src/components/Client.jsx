import React from "react";
import { motion } from "framer-motion";
import dynata from "../assets/dynata.png";
import marriott from "../assets/marriott.png";
import bgimg from "../assets/background.jpg";

const clients = [
  { id: 1, image: dynata },
  { id: 2, image: marriott  },
];

const Client = () => {
  return (
    <div
      className="w-full bg-cover bg-center py-15 px-4 sm:px-6"
      style={{ backgroundImage: `url(${bgimg})` }}
    >




      
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <div className="flex justify-center items-center gap-2 flex-wrap text-3xl sm:text-4xl md:text-5xl font-bold mb-15">
          <div className="text-6xl sm:border-y-4 border-yellow-400 px-4 py-2 text-black">
            Our
          </div>
          <div className="text-6xl border-b-4 border-yellow  sm:border-y-4 sm:border-black px-4 py-2 text-yellow-400">
            Clients
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-15 md:gap-30 place-items-center w-fit mx-auto  px-10 pb-10 md:pb-0">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              className="bg-white p-4 rounded-lg scale-120 shadow-md w-full max-w-xs mx-auto cursor-pointer transform transition-transform duration-500 ease-in-out hover:scale-130 "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="overflow-hidden rounded">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full object-cover brightness-20  hover:brightness-100   transition duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                {client.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

          












    </div>
  );
};

export default Client;
