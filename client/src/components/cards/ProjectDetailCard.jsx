import profileAvatar from "../../assets/images/default-profile.jpeg";
import ProjectProgress from "../../components/common/ProjectProgress";
import Badge from "../common/Badge";
import Button from "../common/Button";
// import { CircleCheck } from "lucide-react";

function ProjectDetailCard({
  name,
  packageType,
  startDate,
  deliveryDate,
  assignedMember,
  company,
  projectManager,
  value,
  btnText,
}) {
  const steps = [
    { label: "Discovery", completed: true },
    { label: "Design", completed: true },
    { label: "Development", completed: true },
    { label: "Testing", completed: false },
    { label: "Launch", completed: false },
  ];
  return (
    <div className="flex w-full bg-[#1a1a1a] border border-[#2c2c2c] rounded-md h-auto py-[24px]">
      <div className="flex flex-col w-[65%] h-full gap-[24px] ">
        <div className="flex justify-between items-center px-[24px]">
          <h2 className="text-lg text-[#fcfcfc] font-bold">{name}</h2>
          <Badge text="In Progress" status="completed" />
        </div>
        <div className="w-full flex flex-col px-[24px] gap-[12px]">
          <p className="text-sm text-[#fcfcfc] tracking-wide">
            <span className="text-gray-400">Package : </span>
            {packageType}
          </p>
          <p className="text-sm text-[#fcfcfc] tracking-wide">
            <span className="text-gray-400">Start date : </span>
            {startDate}
          </p>
          <p className="text-sm text-[#fcfcfc] tracking-wide">
            <span className="text-gray-400">Delivery : </span>
            {deliveryDate}
          </p>
          <p className="text-sm text-[#fcfcfc] tracking-wide">
            <span className="text-gray-400">Project Manager : </span>
            {projectManager}
          </p>
        </div>
        <ProjectProgress progress={value} steps={steps} />
      </div>
      <div className="flex flex-1 flex-col  gap-[40px]">
        <div className="flex flex-col gap-[16px] w-[70%] self-center">
          <Button className="justify-center">{btnText}</Button>
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
              {assignedMember} -{" "}
              <span className="text-[#fcfcfc] font-semibold">{company}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailCard;
