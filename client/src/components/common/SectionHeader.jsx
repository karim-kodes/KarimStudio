import Caption from "./Caption";

function SectionHeader({ caption, title, description }) {
  return (
    <div className="flex items-center justify-center flex-col gap-[20px]">
      <Caption text={caption} />
      <h2 className="text-center font-semibold text-xl md:text-[32px] text-white max-w-[380px] md:max-w-[660px] leading-[48px]">
        {title}
      </h2>
      <p className="text-center font-normal  text-[15px] md:text-lg text-gray-500 max-w-[380px] md:max-w-[514px]">
        {description}
      </p>
    </div>
  );
}

export default SectionHeader;
