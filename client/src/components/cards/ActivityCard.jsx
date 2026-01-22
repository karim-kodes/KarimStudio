function ActivityCard({ title, linkText, linkTo, children }) {
  return (
    <div className="flex flex-col gap-[12px] rounded-md bg-[#1a1a1a] border border-[#2c2c2c]">
      {/* Header */}
      <div className="flex items-center justify-between px-[24px] py-[12px] bg-primary/10 border-b border-b-[#3c3c3c] h-[67px] rounded-t-md">
        <h3 className="text-base font-bold text-textprimary tracking-wide">
          {title}
        </h3>

        {linkTo && (
          <a href={linkTo} className="text-[15px] text-primary tracking-wide">
            {linkText}
          </a>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col px-[24px]">{children}</div>
    </div>
  );
}

export default ActivityCard;
