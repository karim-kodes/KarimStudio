/* eslint-disable */
function ClientStatsCard({ icon: Icon, title, description }) {
  return (
    <div
      className="flex flex-col gap-[10px] w-[25%] p-[16px] rounded-md bg-[#1a1a1a] border border-[#2c2c2c]   shadow-[0_8px_25px_rgba(0,0,0,0.3)]
  hover:shadow-[0_14px_40px_rgba(0,0,0,0.45)]
  transition-all duration-300 "
    >
      <span className="flex items-center h-[32px] w-[32px] justify-center bg-primary rounded-md ">
        <Icon size={18} className="text-white" />
      </span>
      <div className="flex flex-col gap-[5px] text-left ">
        <h1 className="text-2xl font-bold text-textprimary">{title}</h1>
        <p className="text-gray-300 text-[15px] tracking-wide">{description}</p>
      </div>
    </div>
  );
}

export default ClientStatsCard;
