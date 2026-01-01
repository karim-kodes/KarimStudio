function Badge({ text }) {
  return (
    <span className="flex items-center justify-center bg-[#026dfc]/10 border border-[#026dfc] px-[12px] py-[6px] rounded-full text-xs h-[27px] text-[#026dfc]">
      {text}
    </span>
  );
}

export default Badge;
