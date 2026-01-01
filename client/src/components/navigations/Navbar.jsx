import { useState } from "react";

import Logo from "./../../assets/images/KarimStudio-logo.png";
import { Menu, Cross } from "lucide-react";
import Button from "../common/Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [activeLink, setActiveLink] = useState("Home");

  const navItems = ["Home", "Services", "Work", "Contact"];

  const getLinkCLasses = (item) => {
    const baseClasses =
      "text-sm transition h-full flex items-center justify-center rounded-md";
    const padding =
      item === "Home" || item === "Contact" ? "px-[30px]" : "px-[20px]";

    if (activeLink === item) {
      return `${baseClasses} ${padding} bg-[#026DFC] text-white border-[#026dfc] transition`;
    }
    return `${baseClasses} ${padding} text-gray-800 hover:text-white hover:bg-[#026DFC] hover:border-[#026dfc] transition`;
  };

  return (
    <nav className="w-full h-[60px] md:h-[90px] border-b-2 border-gray-600/20">
      <div className=" mx-auto h-full flex items-center justify-between py-[10px] md:py-[20px] px-[20px] md:px-[100px]">
        {/**Logo */}
        <div className="flex items-center gap-2 h-[37px]">
          <div>
            <img
              className=" h-[28px] md:h-[40px] w-[28px] md:w-[40px]"
              src={Logo}
              alt="Studio Logo"
            />
          </div>
          <h1 className="text-white text-xl md:text-3xl font-bold tracking-wider">
            KarimStudio
          </h1>
        </div>
        <div className="hidden  md:flex items-center   backdrop-blur-sm  justify-between gap-[20px] w-auto h-[43px] bg-gradient-to-l from-[#9DC1F1] to-[#ffffff] border border-[#8cbbf9] rounded-md ">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={getLinkCLasses(item)}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(item);
              }}
            >
              {item}
            </a>
          ))}
        </div>

        <span
          onClick={() => setIsOpen(true)}
          className="flex bg-gradient-to-bl from-[#026DFC] to-[#14366B] h-[34px] w-[34px] rounded-md text-[#fcfcfc] items-center justify-center border border-[#026dfc] md:hidden cursor-pointer"
        >
          <Menu size={20} />
        </span>

        <Button
          className=" hidden md:flex"
          onClick={() => {
            document
              .getElementById("start-project")
              ?.scrollIntoView({ behavior: "smooth" });
            setActiveLink("Contact");
          }}
        >
          Start a Project
        </Button>
      </div>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sliding Panel */}
        <div
          className={`absolute top-0 left-0 h-full w-[280px] bg-[#000E24] border-r border-white/10
      transform transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
              `}
        >
          <div className="p-6 flex flex-col gap-6">
            <Cross
              size={24}
              className="text-white self-end items-end transform rotate-45"
            />
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-white text-lg hover:bg-[#026dfc] p-[5px] rounded-md"
                onClick={() => {
                  setActiveLink(item);
                  setIsOpen(false);
                }}
              >
                {item}
              </a>
            ))}

            <Button
              className="mt-4 w-full"
              onClick={() => {
                document
                  .getElementById("start-project")
                  ?.scrollIntoView({ behavior: "smooth" });

                setIsOpen(false);
              }}
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
