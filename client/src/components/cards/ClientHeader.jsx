import { Bell } from "lucide-react";
import profileAvatar from "./../../assets/images/default-profile.jpeg";

function ClientHeader({ title, description }) {
  return (
    <header className="flex  sticky items-center justify-between px-[20px] py-[10px] h-[73px] border-b border-b-[#2d2d2d] bg-[#1a1a1a]">
      <div className="flex flex-col gap-[0px] max-h-[42px]">
        <h2 className="text-lg text-gray-100 tracking-wide font-semibold">
          {title}
        </h2>
        <p className="text-sm font-normal tracking-wide text-gray-400">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-[24px]">
        <Bell size={28} className="text-gray-500 flex items-center" />
        <img
          src={profileAvatar}
          alt="Profile Avatar"
          className="w-[40px] h-[40px] rounded-full"
        />
      </div>
    </header>
  );
}

export default ClientHeader;
