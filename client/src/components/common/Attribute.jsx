import { Check } from "lucide-react";

function Attribute({ attribute }) {
  return (
    <div className="flex gap-[5px] md:items-center">
      <span className="flex items-center justify-center w-[18px] h-[18px] text-textprimary bg-primary rounded-full flex-shrink-0">
        <Check size={14} />
      </span>
      <span className="text-sm tracking-wide bg-gradient-to-r from-white to-[#395a84] bg-clip-text text-transparent">
        {attribute}
      </span>
    </div>
  );
}

export default Attribute;
