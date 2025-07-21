import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        {/* Project Description */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-teal-400">
            Let's talk about your project
          </h2>
          <p className="text-gray-300">
            Lemniscate is a design and technology company, which builds world class products for the digital age.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md transition mt-4">
            Sounds good, let’s connect
          </button>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-teal-300">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Data Analyst Services</a></li>
            <li><a href="#" className="hover:text-white transition">Market Research Agency</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-teal-300">Connect with Us</h3>
          <ul className="space-y-3 text-gray-300 text-sm mb-6">
            <li>📍 780 Sector 31, Faridabad, Haryana 121002</li>
            <li>📧 <a href="mailto:sid@lemniscate.technology" className="hover:text-white">sid@lemniscate.technology</a></li>
            <li>💬 +91 9953185676</li>
            <li>📧 <a href="mailto:abhi@lemniscate.technology" className="hover:text-white">abhi@lemniscate.technology</a></li>
            <li>💬 +91 8586084450</li>
          </ul>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-xl">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-xl">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Legal & Policies */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-teal-300">Legal</h3>
          <div className="mt-6 space-y-1 text-sm text-gray-400">
            <p><a href="#" className="hover:text-white">Refund Policy</a></p>
            <p><a href="#" className="hover:text-white">Terms & Conditions</a></p>
            <p><a href="#" className="hover:text-white">Privacy Policy</a></p>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Lemniscate Technology. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
