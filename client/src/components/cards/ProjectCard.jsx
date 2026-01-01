import TechPill from "../common/TechPill";
import Button from "../common/Button";

function ProjectCard({
  ProjectImage,
  title,
  description,
  techStack = [],
  onViewProject,
  imgAlt,
}) {
  return (
    <div className="flex  gap-[10px] flex-col w-[380px] h-auto bg-[#1c1d1f] border border-[#323232] rounded-2xl">
      <div className="w-[100%] h-[209px] bg-[#272727] p-[10px] rounded-t-2xl">
        <img
          className="w-[360px] max-h-[189px] rounded-lg border border-[#323232]"
          src={ProjectImage}
          alt={imgAlt}
        />
      </div>
      <div className="flex flex-col gap-[15px] p-[20px] pt-0">
        <h2 className="w-[100%] text-white font-semibold text-lg tracking-wider">
          {title}
        </h2>
        <p className="w-[100%] text-left text-sm text-gray-500">
          {description}
        </p>
        <div className="flex flex-col gap-[8px]">
          <h3 className="text-white text-base font-semibold">Tech Stack</h3>
          <div className="flex flex-wrap gap-[7px]">
            {techStack.map((tech, index) => (
              <TechPill key={index} text={tech} />
            ))}
          </div>
        </div>
        <Button
          className="w-fit self-end py-[5px] h-[36px]"
          onClick={onViewProject}
        >
          View Project
        </Button>
      </div>
    </div>
  );
}

export default ProjectCard;
