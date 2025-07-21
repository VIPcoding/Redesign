import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header =() =>{


  const navLinkClass = ({ isActive }) =>
  isActive
    ? "text-sky-500 font-semibold p-4"
    : "text-gray-700 hover:text-sky-400 p-4";

  const [isOpen, setIsOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState({
    services: false,
    products: false,
  });

  const toggleMobileSubmenu = (menu) => {
    setMobileSubmenu((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  

  return (

    <nav className="bg-white text-black py-5 shadow-xl z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
            <img src={Logo} alt="" className="w-25" />
          {/* <div className="text-xl font-bold bg-white size-25  mask-auto grid place-content-center">
          </div> */}

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:gap-8 p-4 ">
            <NavLink to="/"  className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about"  className={navLinkClass}>
              About
            </NavLink>

            {/* Services Dropdown */}
           <div className="relative group p-4">
  {/* Trigger Button */}
  <button className="flex items-center gap-1 hover:text-sky-400 cursor-pointer">
    Services
  </button>

  {/* Dropdown */}
  <div className="absolute left-0 mt-2 w-72 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 bg-sky-600 py-2 px-4 rounded shadow-lg z-10">
    <NavLink to="/dataanalytics" className="block py-2 text-black hover:text-white">
      Data Analytics Services
    </NavLink>
    <NavLink to="/Marketresearch" className="block py-2 text-black hover:text-white">
      Market Research Agency
    </NavLink>
  </div>
</div>



            {/* Our Technology */}
            <NavLink to="/technology" className={navLinkClass}>
              Our Technology
            </NavLink>

            {/* Products Dropdown */}
            <div className="relative group p-4">
              <button className="flex items-center gap-1 hover:text-sky-400 hover:cursor-pointer">
                Our Products 
              </button>
              <div className="absolute left-0  w-50 mt-2 hidden group-hover:flex flex-col bg-sky-600 py-2 px-4 rounded shadow-lg z-10">
                <NavLink to="https://colaborazia.com" className="py-2 text-black hover:text-white">
                  Colaborazia
                </NavLink>
                <NavLink to="https://dataqire.com/" className="py-2 text-black hover:text-white">
                  DataQire
                </NavLink>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block p-4">
            <a
              href="#"
              className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-black "
            >
              Contact
            </a>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
{isOpen && (
  <div className="md:hidden bg-white px-4 space-y-2 mt-4 w-full">
    <NavLink
      to="/"
      onClick={() => setIsOpen(false)}
      className="block text-black focus:bg-sky-600 focus:text-white p-2"
    >
      Home
    </NavLink>
    <NavLink
      to="/about"
      onClick={() => setIsOpen(false)}
      className="block text-black focus:bg-sky-600 focus:text-white p-2"
    >
      About
    </NavLink>

    {/* Services Mobile */}
    <div>
      <button
        onClick={() => toggleMobileSubmenu("services")}
        className="flex w-full justify-between items-center text-black focus:bg-sky-600 focus:text-white p-2"
      >
        Services <ChevronDown size={25} />
      </button>
      {mobileSubmenu.services && (
        <div className="pl-4 mt-3 space-y-4">
          <NavLink
            to="/dataanalytics"
            onClick={() => setIsOpen(false)}
            className="block text-black focus:bg-black focus:text-white p-2"
          >
            Data Analytics Services
          </NavLink>
          <NavLink
            to="/Marketresearch"
            onClick={() => setIsOpen(false)}
            className="block text-black focus:bg-black focus:text-white p-2"
          >
            Market Research Agency
          </NavLink>
        </div>
      )}
    </div>

    <NavLink
      to="/technology"
      onClick={() => setIsOpen(false)}
      className="block text-black focus:bg-sky-600 focus:text-white p-2"
    >
      Our Technology
    </NavLink>

    {/* Products Mobile */}
    <div>
      <button
        onClick={() => toggleMobileSubmenu("products")}
        className="flex w-full justify-between items-center text-black focus:bg-sky-600 focus:text-white p-2"
      >
        Our Products <ChevronDown size={25} />
      </button>
      {mobileSubmenu.products && (
        <div className="pl-4 mt-3 space-y-4">
          <a
            href="https://colaborazia.com"
            onClick={() => setIsOpen(false)}
            className="block text-black focus:bg-black focus:text-white p-2"
          >
            Colaborazia
          </a>
          <a
            href="https://dataqire.com/"
            onClick={() => setIsOpen(false)}
            className="block text-black focus:bg-black focus:text-white p-2"
          >
            DataQire
          </a>
        </div>
      )}
    </div>

    <a
      href="#"
      onClick={() => setIsOpen(false)}
      className="inline-block bg-sky-500 text-white px-4 py-2 mt-4 w-full text-center rounded focus:bg-black"
    >
      Contact
    </a>
  </div>
)}

    </nav>
  );
}


export default Header;