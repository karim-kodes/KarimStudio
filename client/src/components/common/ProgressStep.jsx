import { CircleCheck } from "lucide-react";

function ProgressStep({ label, completed, index }) {
  return (
    <div className="flex flex-col gap-[8px] items-center w-max">
      <p
        className={`text-base tracking-wide ${
          completed ? "text-textprimary" : "text-gray-400"
        }`}
      >
        {index}. {label}
      </p>

      <CircleCheck
        size={24}
        className={completed ? "text-primary" : "text-gray-400"}
      />
    </div>
  );
}

export default ProgressStep;
