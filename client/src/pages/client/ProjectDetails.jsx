import { ArrowLeft } from "lucide-react";
import ProjectDetailCard from "../../components/cards/ProjectDetailCard";
import ProjectTimelineCard from "../../components/cards/ProjectTimelineCard";
function ProjectDetails() {
  return (
    <div className="flex flex-col gap-[32px] mt-[24px] px-[24px]">
      <a
        href="/client/projects"
        className="flex items-center gap-[3px] text-sm text-[#026dfc]"
      >
        <ArrowLeft size={20} />
        <span>Back to projects</span>
      </a>
      <ProjectDetailCard
        name="Natours - Tour Booking Platform"
        packageType="Professional"
        startDate="12 Jan 2025"
        deliveryDate="15 Feb 2025"
        value={45}
        projectManager="KarimStudio"
        assignedMember="John Mccaty"
        company="KarimStudio"
        btnText="View Deliverables"
      />
      <ProjectTimelineCard value={85} />
    </div>
  );
}
export default ProjectDetails;
