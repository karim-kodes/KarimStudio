import FilterBill from "../../components/common/FilterBill";
import Project from "../../components/common/Project";

function Projects() {
  const projects = [
    {
      name: "Natours - Tour Booking Platform",
      serviceType: "Full-stack Web Application",
      dueDate: "15 Feb 2026",
      value: 45,
      badgeText: "Active",
      badgeStatus: "active",
    },
    {
      name: "KarimStudio - Portfolio System",
      serviceType: "UI/UX Design & Development",
      dueDate: "30 Jan 2026",
      value: 85,
      badgeText: "In Review",
      badgeStatus: "pending",
    },
    {
      name: "PayTally - Payment Tracking System",
      serviceType: "Backend & Dashboard Development",
      dueDate: "12 Nov 2025",
      value: 100,
      badgeText: "Completed",
      badgeStatus: "completed",
    },
  ];
  return (
    <div className="flex flex-col gap-[32px] px-[24px]">
      <div className="flex gap-[12px] items-center mt-[32px]">
        <FilterBill text="All" status="active" />
        <FilterBill text="Active" />
        <FilterBill text="Completed" />
        <FilterBill text="In Review" />
      </div>
      <div className="flex flex-col gap-[24px]">
        {projects.map((project) => (
          <Project
            key={project.name}
            name={project.name}
            serviceType={project.serviceType}
            dueDate={project.dueDate}
            value={project.value}
            badgeText={project.badgeText}
            badgeStatus={project.badgeStatus}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
