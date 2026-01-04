import Badge from "./Badge";
import Button from "./Button";
import ProgressBar from "./ProgressBar";

function Project({
  name,
  serviceType,
  dueDate,
  value,
  badgeText,
  badgeStatus,
}) {
  return (
    <div className="flex items-center justify-between w-full bg-[#1a1a1a] border border-[#2c2c2c] rounded-md h-[147px] p-[24px]">
      <div className="flex flex-col gap-[16px] w-[350px] justify-center">
        <h2 className="text-lg text-white font-bold tracking-wide">{name}</h2>
        <div className="flex flex-col gap-[2px]">
          <p className="text-base text-gray-300 tracking-wide">Servive Type</p>
          <span className="text-sm tracking-wide text-gray-500">
            {serviceType}
          </span>
        </div>
      </div>
      <div className="w-[350px] flex flex-col gap-[16px] justify-center ">
        <Badge text={badgeText} status={badgeStatus} />

        <ProgressBar value={value} height={20} />
      </div>
      <div className="flex flex-col gap-[16px] w-[350px] justify-center">
        <div>
          <p className="text-base text-gray-300 tracking-wide">Due Date</p>
          <span className="text-sm tracking-wide text-gray-500">{dueDate}</span>
        </div>
        <Button withArrow={true} className="justify-center">
          View Project
        </Button>
      </div>
    </div>
  );
}

export default Project;
