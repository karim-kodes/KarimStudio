export default function Caption({ text = "Portfolio", className = "" }) {
  return (
    <div
      className={`
        flex flex-row gap-[8px] items-center
        h-[32px] px-[14px] py-[7px]
        rounded-full
        bg-[#4088e7]/30 border border-[#2e73cd]
        w-fit shadow-lg shadow-white/5
        ${className}
      `}
    >
      <span className="h-[8px] w-[8px] bg-[#026DFC] rounded-full  shadow-sm shadow-blue-300/80" />

      <p className="text-xs font-normal text-white tracking-wider">{text} </p>
    </div>
  );
}
