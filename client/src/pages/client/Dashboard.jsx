import Badge from "../../components/common/Badge";
import Button from "../../components/common/Button";
import profileAvatar from "../../assets/images/default-profile.jpeg";
import ClientStatsCard from "../../components/cards/ClientStatsCard";
import ActivityCard from "../../components/cards/ActivityCard";
import ActivityItem from "../../components/common/ActivityItem";
import {
  Folder,
  Files,
  MessageCircle,
  FileText,
  CircleCheck,
  Activity,
} from "lucide-react";
import ProjectProgress from "../../components/common/ProjectProgress";

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

  const activities = [
    {
      icon: Folder,
      title: "New deliverable uploaded",
      description: "Homepage design files have been added",
      time: "2 hours ago",
    },
    {
      icon: Activity,
      title: "Project moved to Development",
      description: "Design phase completed",
      time: "Yesterday",
    },
    {
      icon: FileText,
      title: "Invoice generated",
      description: "Final payment invoice is ready",
      time: "3 days ago",
    },
    {
      icon: MessageCircle,
      title: "New message from KarimStudio",
      description: "We’ve shared an update on progress",
      time: "5 days ago",
    },
  ];
  const steps = [
    { label: "Discovery", completed: true },
    { label: "Design", completed: true },
    { label: "Development", completed: true },
    { label: "Testing", completed: false },
    { label: "Launch", completed: false },
  ];

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
            <Badge text="In Progress" status="completed" />
          </div>
          <div className="w-full flex flex-col px-[24px] gap-[12px]">
            <p className="text-sm text-[#fcfcfc] tracking-wide">
              <span className="text-gray-400">Package : </span>
              Professional
            </p>
            <p className="text-sm text-[#fcfcfc] tracking-wide">
              <span className="text-gray-400">Start date : </span>
              12 Jan 2025
            </p>
            <p className="text-sm text-[#fcfcfc] tracking-wide">
              <span className="text-gray-400">Delivery : </span>
              15 Feb 2025
            </p>
          </div>
          <ProjectProgress progress={45} steps={steps} />
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
      <ActivityCard
        title="Recent Activity"
        linkText="View all"
        linkTo="/client/deliverables"
      >
        {activities.map((activity, index) => (
          <ActivityItem key={index} {...activity} />
        ))}
      </ActivityCard>
    </div>
  );
}

export default Dashboard;
