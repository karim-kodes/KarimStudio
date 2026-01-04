/* eslint-disable */

function ActivityItem({ icon: Icon, title, description, time }) {
  return (
    <div className="flex justify-between w-full py-[12px] max-h-[65px] border-b border-b-[#3c3c3c] last:border-b-0">
      <div className="flex gap-[10px] h-[40px] w-[301px]">
        <span className="flex items-center justify-center w-[40px] h-[40px] rounded-md bg-[#026dfc] text-white">
          <Icon size={24} />
        </span>

        <div className="flex flex-col gap-[2px]">
          <p className="text-sm text-gray-100 tracking-wide">{title}</p>
          <p className="text-xs text-gray-400 tracking-wide">{description}</p>
        </div>
      </div>

      <span className="text-xs tracking-wide text-gray-400">{time}</span>
    </div>
  );
}

export default ActivityItem;
