function Badge({ text, status = "default" }) {
  const statusStyles = {
    completed: "bg-primary/10 border-primary/10 text-primary",
    active: "bg-green-500/10 border-green-500 text-green-500",
    pending: "bg-yellow-500/10 border-yellow-500 text-yellow-500",
    cancelled: "bg-red-500/10 border-red-500 text-red-500",
    default: "bg-gray-500/10 border-gray-500 text-gray-400",
  };

  return (
    <span
      className={`flex items-center justify-center px-[18px] py-[6px] h-[27px] max-w-fit self-center
        rounded-full text-xs border
        ${statusStyles[status] || statusStyles.default}`}
    >
      {text}
    </span>
  );
}

export default Badge;
