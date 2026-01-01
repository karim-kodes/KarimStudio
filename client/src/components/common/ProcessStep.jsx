function ProcessStep({ caption, title, description, image, reverse = false }) {
  const textContent = (
    <div className="flex flex-col gap-[8px] md:gap-[15px]  w-[370px] md:max-w-[600px]">
      <span className="text-blue-500 text-sm font-semibold tracking-wider">
        {caption}
      </span>
      <h3 className="text-white text-2xl md:text-3xl font-semibold">{title}</h3>
      <p className="text-gray-400 text-base leading-relaxed">{description}</p>
    </div>
  );

  const imageContent = (
    <div className="bg-[#1c1d1f] border border-[#323232] h-[280px] md:h-[300px] w-[100%] md:w-[459px] rounded-lg p-[10px]">
      <img
        src={image}
        alt={`${caption} image`}
        className=" w-[380px] md:w-[439px] rounded-md h-[260px] md:h-[280px] object-cover"
      />
    </div>
  );

  return (
    <div
      className={`flex flex-col gap-[25px] items-center md:flex-row justify-between w-[370px] md:w-[1200px] md:h-[300px] ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {textContent}
      {imageContent}
    </div>
  );
}

export default ProcessStep;
