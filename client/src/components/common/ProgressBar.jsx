function ProgressBar({ value = 60, height }) {
  return (
    <div className="flex flex-col gap-[6px]">
      <div className="flex justify-between text-xs text-gray-400">
        <span>Progress</span>
        <span>{value}%</span>
      </div>

      <div
        className="h-[8px] bg-gray-500 rounded-full overflow-hidden"
        style={{ height: `${height}px` }}
      >
        <div
          className="h-full bg-[#026dfc] rounded-full transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
