/* eslint-disable */

import Logo from "./../../assets/images/KarimStudio-logo.png";
import { NavLink } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";
import { FolderKanban } from "lucide-react";
import { History } from "lucide-react";
import { Settings } from "lucide-react";
import { FileText } from "lucide-react";
import { Files } from "lucide-react";
import { LogOut } from "lucide-react";

function Sidebar() {
  const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/client", end: true },
    { label: "Projects", icon: FolderKanban, path: "/client/projects" },
    { label: "Updates", icon: History, path: "/client/updates" },
    { label: "Deliverables", icon: Files, path: "/client/deliverables" },
    { label: "Invoices & Payments", icon: FileText, path: "/client/invoices" },
    { label: "Settings", icon: Settings, path: "/client/settings" },
  ];

  return (
    <div className="flex flex-col gap-[10px] max-w-[260px] h-full mb-[20px] bg-[#1a1a1a] border-r border-r-[#2d2d2d]">
      <div className="flex gap-[10px] items-center justify-center w-[100%] px-[24px] py-[20px] border-b border-b-[#2d2d2d]">
        <img src={Logo} alt="Company Logo" className="w-[30px] h-[30px]" />
        <h3 className="text-2xl text-[#fcfcfc] font-bold tracking-wide">
          KarimStudio
        </h3>
      </div>
      <div className="flex flex-col  flex-1 justify-between items-center p-[10px]">
        <div className="flex flex-col px-[16px] py-[16px] gap-[16px]">
          {menuItems.map(({ label, icon: Icon, path, end }) => (
            <NavLink
              key={label}
              to={path}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-[8px] w-[236px] px-[16px] py-[8px] rounded-md transition-all
    ${
      isActive
        ? "bg-[#026dfc]/5 text-white border-l-4 border-l-[#026dfc]"
        : "text-gray-500 hover:text-white hover:bg-[#026dfc]/5 hover:border-l-4 hover:border-l-[#026dfc]"
    }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={22}
                    className={isActive ? "text-[#026dfc]" : "text-gray-500"}
                  />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </div>
        <NavLink
          to="/logout"
          className="mt-auto flex items-center gap-[8px] w-[236px] px-[16px] py-[8px] rounded-md
             text-gray-500 hover:text-red-400 hover:bg-red-500/5
             hover:border-l-4 hover:border-red-400 transition-all"
        >
          <LogOut size={24} />
          Logout
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
