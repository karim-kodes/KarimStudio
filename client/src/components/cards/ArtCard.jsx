/* eslint-disable */

function ArtCard({ icon: Icon, title, description }) {
  return (
    <div className=" md:absolute md:top-7 md:-right-40 flex flex-col gap-[16px] w-[185px] md:w-[260px] h-[150px] md:h-auto rounded-xl bg-[#1a1a1a] border border-[#2c2c2c] p-[10px] md:p-[20px]">
      <div>
        <Icon size={28} className="text-primary " />
      </div>
      <div className="flex flex-col gap-[8px] md:w-[184px]">
        <span className="text-textprimary text-base md:text-lg font-semibold">
          {title}
        </span>
        <p className="text-xs md:text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default ArtCard;
