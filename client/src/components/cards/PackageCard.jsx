/* eslint-disable */

import { Check } from "lucide-react";
import Button from "../common/Button";

function PackageCard({
  icon: Icon,
  price,
  title,
  description,
  features = [],
  isPopular = false,
  isActive = false,
  onGetPackage,
}) {
  return (
    <div
      className={`flex flex-col gap-[20px] w-[340px] md:w-[300px] p-[20px] rounded-lg relative transition-all ${
        isActive
          ? " scale-x-105 md:scale-x-100 md:scale-y-110 bg-gradient-to-bl from-[#1a1a1a] to-[#2d2d2d] border border-blue-500"
          : "h-[448px] bg-gradient-to-bl from-[#9DC1F1] to-textprimary"
      }`}
    >
      {isPopular && (
        <span className="flex w-fit items-center bg-gradient-to-l from-primary to-[#14366B] border border-primary h-[25px] px-[20px] py-[5px] rounded-full text-sm text-textprimary absolute -top-3 left-[32%]">
          POPULAR
        </span>
      )}

      <div className="flex justify-between h-[40px] items-center">
        <span
          className={`bg-[linear-gradient(180deg,#026DFC_43%,#14366B_100%)] shadow-lg shadow-sky-600/20 h-[40px] w-[40px] rounded-md flex items-center justify-center text-white`}
        >
          <Icon size={24} />
        </span>
        <h2
          className={`font-semibold text-[32px] bg-gradient-to-l from-primary to-[#14366B] bg-clip-text text-transparent`}
        >
          ${price}
        </h2>
      </div>

      <div className="flex flex-col gap-[10px] w-[260px]">
        <h3
          className={`text-xl font-semibold ${
            isActive ? "text-white" : "text-neutral-800"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm text-left ${
            isActive ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-[8px] w-[260px]">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-[5px] w-[260px]">
            <span className="flex items-center justify-center w-[18px] h-[18px] text-textprimary bg-[#549eff] rounded-full flex-shrink-0">
              <Check size={14} />
            </span>
            <span
              className={`text-sm tracking-wide ${
                isActive ? "text-gray-300" : "text-neutral-700"
              }`}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>

      <Button
        withArrow={true}
        className="flex items-center justify-center"
        onClick={onGetPackage}
      >
        Get Package
      </Button>

      <Button
        variant="outline"
        withArrow={true}
        className={`flex items-center justify-center bg-transparent border ${
          isActive
            ? "text-primary border-primary"
            : "text-[#0669ea] border-[#0669ea]"
        }`}
      >
        Learn More
      </Button>
    </div>
  );
}

export default PackageCard;
