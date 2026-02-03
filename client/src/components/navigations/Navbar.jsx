/* eslint-disable */

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "./../../assets/images/KarimStudio-logo.png";
import { Menu, X } from "lucide-react";
import Button from "../common/Button";
import ProjectModal from "../forms/ProjectModal";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("Home");

  // Define routes for each nav item
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];

  // Update active link based on current route
  useEffect(() => {
    const currentPath = location.pathname + location.hash;
    const activeItem = navItems.find((item) => item.path === currentPath);
    if (activeItem) {
      setActiveLink(activeItem.name);
    } else if (location.pathname === "/") {
      setActiveLink("Home");
    }
  }, [location]);


  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const getLinkClasses = (itemName) => {
    const baseClasses =
      "text-sm transition h-full flex items-center justify-center rounded-md";
    const padding =
      itemName === "Home" || itemName === "Contact" ? "px-[30px]" : "px-[20px]";

    if (activeLink === itemName) {
      return `${baseClasses} ${padding} bg-[#026DFC] text-white border-[#026dfc] transition`;
    }
    return `${baseClasses} ${padding} text-gray-800 hover:text-white hover:bg-[#026DFC] hover:border-[#026dfc] transition`;
  };

  const handleNavClick = (itemName, path) => {
    setActiveLink(itemName);
  };

  return (
    <>
      <nav
        className={`w-full h-[60px] md:h-[90px] border-b-2 border-gray-600/20 sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#000E24]/75 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto h-full flex items-center justify-between py-[10px] md:py-[20px] px-[20px] md:px-[120px]">
          {/**Logo */}
          <Link to="/" className="flex items-center gap-2 h-[37px]">
            <div>
              <img
                className="h-[28px] md:h-[40px] w-[28px] md:w-[40px]"
                src={Logo}
                alt="Studio Logo"
              />
            </div>
            <h1 className="text-white text-xl md:text-3xl font-bold tracking-wider">
              KarimStudio
            </h1>
          </Link>

          <div className="hidden md:flex items-center backdrop-blur-sm justify-between gap-[20px] w-auto h-[43px] bg-gradient-to-l from-[#9DC1F1] to-[#9DC1F1] border border-[#8cbbf9] rounded-md">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={getLinkClasses(item.name)}
                onClick={() => handleNavClick(item.name, item.path)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <h1 className="text-white text-xl md:text-3xl font-bold tracking-wider">
            KarimStudio
          </h1>
        </Link>

        <div className="hidden md:flex items-center backdrop-blur-sm justify-between gap-[20px] w-auto h-[43px] bg-gradient-to-l from-[#9DC1F1] to-[#9DC1F1] border border-[#8cbbf9] rounded-md">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={getLinkClasses(item.name)}
              onClick={() => handleNavClick(item.name, item.path)}
            >
              {item.name}
            </Link>
          ))}
        </div>

          <span
            onClick={() => setIsOpen(true)}
            className="flex bg-gradient-to-bl from-[#026DFC] to-[#14366B] h-[34px] w-[34px] rounded-md text-[#fcfcfc] items-center justify-center border border-[#026dfc] md:hidden cursor-pointer"
          >
            <Menu size={20} />
          </span>

          <Button
            className="hidden md:flex"
            onClick={() => setIsModalOpen(true)} // Open modal
          >
            Start a Project
          </Button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[9999] md:hidden transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sliding Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-[280px] bg-[#000E24] border-r border-white/10
            transform transition-transform duration-300
            ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-6 flex flex-col gap-6">
            <X
              size={24}
              className="text-white self-end cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-white text-lg hover:bg-[#026dfc] p-[5px] rounded-md"
                onClick={() => {
                  handleNavClick(item.name, item.path);
                  setIsOpen(false);
                }}
              >
                {item.name}
              </Link>
            ))}

            <Button
              className="mt-4 w-full"
              onClick={() => {
                setIsModalOpen(true); // Open modal from mobile menu
                setIsOpen(false); // Close mobile menu
              }}
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default Navbar;
