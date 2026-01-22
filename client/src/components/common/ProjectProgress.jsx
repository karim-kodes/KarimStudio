import ProgressBar from "./ProgressBar";
import ProgressStep from "./ProgressStep";

function ProjectProgress({ progress, steps }) {
  return (
    <div className="flex flex-col gap-[20px]">
      {/* Progress label + bar */}
      <div className="flex flex-col gap-[8px] px-[24px]">
        <p className="text-base tracking-wide text-textprimary">
          Project progress: <span className="text-gray-400">{progress}%</span>
        </p>

        <ProgressBar value={progress} />
      </div>

      {/* Steps */}
      <div className="flex w-full px-[24px] gap-[100px]">
        {steps.map((step, index) => (
          <ProgressStep
            key={step.label}
            index={index + 1}
            label={step.label}
            completed={step.completed}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectProgress;
