function FilterBill({ text, status = "default" }) {
  const statusStyles = {
    active: "bg-primary text-textprimary border-primary",
    default: "bg-textprimary/5  border-textprimary/10 text-gray-400",
  };
  return (
    <span
      className={`h-[32px] px-[18px] py-[10px] w-auto flex items-center justify-center rounded-md  border  text-sm cursor-pointer hover:bg-primary hover:text-textprimary  transition-all ease-in-out ${
        statusStyles[status] || statusStyles.default
      }`}
    >
      {text}
    </span>
  );
}

export default FilterBill;
