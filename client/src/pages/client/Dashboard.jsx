import ClientStatsCard from "../../components/cards/ClientStatsCard";
import { Folder } from "lucide-react";
import { Files } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { FileText } from "lucide-react";
import { CircleCheck } from "lucide-react";
import Badge from "../../components/common/Badge";
import ProgressBar from "../../components/common/ProgressBar";
import Button from "../../components/common/Button";
import profileAvatar from "../../assets/images/default-profile.jpeg";

function Dashboard() {
  const statsCards = [
    {
      id: 1,
      title: 1,
      description: "Active Projects",
      icon: Folder,
    },
    {
      id: 2,
      title: 6,
      description: "Deliverables Ready",
      icon: Files,
    },
    {
      id: 3,
      title: 2,
      description: "Unread Messages",
      icon: MessageCircle,
    },
    {
      id: 4,
      title: 1,
      description: "Pending Invoice",
      icon: FileText,
    },
  ];

  console.log("Dashboard rendered");

  return (
    <div className="flex flex-col gap-[32px] px-[24px] ">
      <div className="flex gap-[33px] mt-[32px]">
        {statsCards.map((card) => (
          <ClientStatsCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div className="flex w-full bg-[#1a1a1a] border border-[#2c2c2c] rounded-md h-auto py-[24px]">
        <div className="flex flex-col w-[65%] h-full gap-[24px] ">
          <div className="flex justify-between items-center px-[24px]">
            <h2 className="text-lg text-[#fcfcfc] font-bold">
              Natours - Tour Booking System
            </h2>
            <Badge text="In Progress" />
          </div>
          <div className="w-full flex flex-col px-[24px] gap-[12px]">
            <p className="text-sm text-[#fcfcfc] tracking-wide">
              <span className="text-gray-400">Package:</span>
              Professional
            </p>
            <p className="text-sm text-[#fcfcfc] tracking-wide">
              <span className="text-gray-400">Package:</span>
              Professional
            </p>
            <p className="text-sm text-[#fcfcfc] tracking-wide">
              <span className="text-gray-400">Package:</span>
              Professional
            </p>
          </div>
          <div className="flex flex-col gap-[8px] px-[24px]">
            <p className="text-base tracking-wide text-[#fcfcfc]">
              Project progress: <span className="text-gray-400">45%</span>
            </p>
            <ProgressBar value={45} />
          </div>
          <div className="flex w-full px-[24px] gap-[100px] ">
            <div className="flex flex-col gap-[8px] items-center w-max">
              <p className="text-base text-[#fcfcfc]">1. Discovery</p>
              <CircleCheck size={24} className="text-[#026dfc]" />
            </div>
            <div className="flex flex-col gap-[8px] items-center w-max">
              <p className="text-base text-[#fcfcfc]">2. Design</p>
              <CircleCheck size={24} className="text-[#026dfc]" />
            </div>
            <div className="flex flex-col gap-[8px] items-center w-max">
              <p className="text-base text-[#fcfcfc]">3. Development</p>
              <CircleCheck size={24} className="text-[#026dfc]" />
            </div>
            <div className="flex flex-col gap-[8px] items-center w-max">
              <p className="text-base text-gray-400">4. Testing</p>
              <CircleCheck size={24} className="text-gray-400" />
            </div>
            <div className="flex flex-col gap-[8px] items-center w-max">
              <p className="text-base text-gray-400">5. Launch</p>
              <CircleCheck
                size={24}
                fill="bg-text-gray-400"
                className="text-gray-400"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col  gap-[40px]">
          <div className="flex flex-col gap-[16px] w-[70%] self-center">
            <Button className="justify-center">View Project</Button>
            <Button variant="outline" className="justify-center">
              Message Team
            </Button>
          </div>
          <div className="flex flex-col gap-[10px] w-[70%] self-center">
            <p className="text-sm text-gray-400">Assigned To</p>
            <div className="flex gap-[10px] items-center">
              <img
                src={profileAvatar}
                alt="Profile Avatar"
                className="w-[50px] h-[50px] rounded-full"
              />
              <p className="text-sm text-gray-400 tracking-wide">
                {" "}
                Abdikarim -{" "}
                <span className="text-[#fcfcfc] font-semibold">
                  KarimStudio
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[12px]  rounded-md bg-[#1a1a1a] border border-[#2c2c2c]">
        <div className="flex items-center justify-between px-[24px] py-[12px] bg-[#282a2d] border-b border-b-[#3c3c3c] h-[67px]">
          <h3 className="text-base font-bold text-[#fcfcfc] tracking-wide ">
            Recent Activity
          </h3>
          <a
            href="/client/deliverables"
            className="text-[15px] text-[#026dfc] tracking-wide"
          >
            View all
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
