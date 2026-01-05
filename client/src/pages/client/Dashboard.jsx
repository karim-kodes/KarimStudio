import ClientStatsCard from "../../components/cards/ClientStatsCard";
import ActivityCard from "../../components/cards/ActivityCard";
import ActivityItem from "../../components/common/ActivityItem";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import {
  Folder,
  Files,
  MessageCircle,
  FileText,
  CircleCheck,
  Activity,
} from "lucide-react";
import ProjectDetailCard from "../../components/cards/ProjectDetailCard";

function Dashboard() {
  const { setHeader } = useOutletContext();

  useEffect(() => {
    setHeader({
      title: "Dashboard",
      description: "Overview of your project & activity",
    });
  }, []);

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
      <ProjectDetailCard
        name="Natours - Tour Booking Platform"
        packageType="Professional"
        startDate="12 Jan 2025"
        deliveryDate="15 Feb 2025"
        projectManager="KarimStudio"
        assignedMember="John Mccaty"
        company="KarimStudio"
      />

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
