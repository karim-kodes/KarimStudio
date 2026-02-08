/* eslint-disable */

import logo from "./../../assets/images/KarimStudio-logo.png";
import { FaInstagram, FaTwitter, FaLinkedin, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  const socials = [
    {
      id: 1,
      icon: MdEmail,
      link: "Email",
    },
    {
      id: 2,
      icon: FaInstagram,
      link: "Instagram",
    },
    {
      id: 3,
      icon: FaLinkedin,
      link: "LinkedIn",
    },
    {
      id: 4,
      icon: FaTwitter,
      link: "Twitter",
    },
    {
      id: 5,
      icon: FaTiktok,
      link: "Tiktok",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-dark md:mt-[150px]">
      <div
        className="absolute top-[300px] left-1/2 -translate-x-1/2 
                    w-[60%] h-[30%]
                    rounded-full bg-[#026DFC]/50
                    blur-[200px]"
      />
      <div className="flex flex-col gap-[20px] px-[20px] py-[40px] w-[100%] ">
        <div className="flex flex-wrap gap-[40px] md:mx-[80px] items-center md:justify-between py-[40px] ">
          <div className="flex flex-col gap-[15px] w-[350px] md:w-[392px] h-[180px] ">
            <div className="flex gap-[10px] items-center max-h-[55px] ">
              <img
                src={logo}
                alt="Footer logo"
                className=" w-[40px] md:w-[55px] h-[40px] md:h-[55px] "
              />
              <h2 className=" text-3xl md:text-5xl text-[#fcfcfc] font-bold ">
                KarimStudio
              </h2>
            </div>
            <p className="w-[100%]  text-sm md:text-base text-[#cecece] tracking-wide ">
              Helping businesses grow with modern, user- focused web
              applications and design. We build products that scale and inspire
              confidence
            </p>
          </div>
          <div className="flex flex-col gap-[15px] w-[200px] h-auto ">
            <h4 className="text-lg font-semibold text-[#fcfcfc]">Links</h4>
            <ul className="flex flex-col gap-[12px]">
              <ListItem text="Home" />
              <ListItem text="Services" />
              <ListItem text="Work" />
              <ListItem text="Contact" />
              <ListItem text="Policy & Privacy" />
            </ul>
          </div>
          <div className="flex flex-col gap-[15px] w-[200px] h-auto ">
            <h4 className="text-lg font-semibold text-[#fcfcfc]">Services</h4>
            <ul className="flex flex-col gap-[12px]">
              <ListItem text="Web Development" />
              <ListItem text="UI/UX Design" />
              <ListItem text="SaaS Solutions" />
              <ListItem text="E-commerce Solution" />
              <ListItem text="Branding & Strategy" />
            </ul>
          </div>
          <div className="flex flex-col gap-[15px] w-[200px] h-auto ">
            <h4 className="text-lg font-semibold text-[#fcfcfc]">
              Connect With Us
            </h4>
            <div className="flex flex-col gap-[12px]">
              {socials.map((social) => (
                <SocialLink
                  key={social.id}
                  icon={social.icon}
                  link={social.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ListItem({ text }) {
  return (
    <li className="text-base text-gray-500 tracking-wide hover:text-[#026dfc] list-none transition">
      {text}
    </li>
  );
}

function SocialLink({ icon: Icon, link }) {
  return (
    <div className="flex gap-[5px] h-[24px]">
      <Icon size={24} fill="#026dfc" className="text-[#026dfc]" />
      <a
        href=""
        className="text-base no-underline text-gray-500 tracking-wide hover:text-[#026dfc] transition"
      >
        {link}
      </a>
    </div>
  );
}

export default Footer;
