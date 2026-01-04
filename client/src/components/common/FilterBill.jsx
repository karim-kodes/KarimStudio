function FilterBill({ text, status = "default" }) {
  const statusStyles = {
    active: "bg-[#026dfc] text-[#fcfcfc] border-[#026dfc]",
    default: "bg-[#fcfcfc]/5  border-[#fcfcfc]/10 text-gray-400",
  };
  return (
    <span
      className={`h-[32px] px-[18px] py-[10px] w-auto flex items-center justify-center rounded-md  border  text-sm  ${
        statusStyles[status] || statusStyles.default
      }`}
    >
      {text}
    </span>
  );
}

export default FilterBill;
