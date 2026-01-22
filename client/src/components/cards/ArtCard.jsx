import { Search } from "lucide-react";

function ArtCard() {
  return (
    <div className=" absolute top-7 -right-40 flex flex-col gap-[16px] md:w-[260px] md:h-auto rounded-xl bg-[#1a1a1a] border border-[#2c2c2c] p-[20px]">
      <div>
        <Search size={28} className="text-primary " />
      </div>
      <div className="flex flex-col gap-[8px] w-[184px]">
        <span className="text-textprimary text-lg font-semibold">
          Seo Mastery
        </span>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur. Viverra sed{" "}
        </p>
      </div>
    </div>
  );
}

export default ArtCard;
