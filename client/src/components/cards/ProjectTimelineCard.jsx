import ProjectProgress from "../common/ProjectProgress";

function ProjectTimelineCard({ value }) {
  const steps = [
    { label: "Discovery", completed: true },
    { label: "Design", completed: true },
    { label: "Development", completed: true },
    { label: "Testing", completed: false },
    { label: "Launch", completed: false },
  ];
  return (
    <div className="flex flex-col gap-[24px]  bg-[#1a1a1a] border border-[#2c2c2c] rounded-md">
      <div className="flex items-center justify-between w-full rounded-t-md bg-primary/10 px-[24px] py-[12px] ">
        <div className="flex flex-col gap-[2px]">
          <p className="text-base text-textprimary tracking-wide font-semibold">
            Project Timeline
          </p>
          <span className="text-gray-400 text-sm tracking-wide font-normal ">
            Track progress across each project phase
          </span>
        </div>
        <a
          href="/project-timeline"
          className="text-sm text-primary tracking-wide font-normal"
        >
          View full plan
        </a>
      </div>
      <ProjectProgress progress={value} steps={steps} />
    </div>
  );
}

export default ProjectTimelineCard;
