import Caption from "../common/Caption";

function MissionVission() {
  return (
    <div className="flex px-[20px] py-[40px] flex-col gap-[60px] md:px-[120px] md:py-[120px]">
      <div className="flex flex-col gap-[25px] justify-center items-center ">
        <Caption text="Mission & Vision" className="uppercase" />
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide bg-gradient-to-r from-white to-[#9dc1f1] bg-clip-text text-transparent">
          What Drives KarimStudio Forward
        </h2>
      </div>
      <div className="flex flex-col gap-[40px] md:flex-row justify-between">
        <div className="flex flex-col gap-[5px] md:max-w-[500px]">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 tracking-wide text-blue-600">
            Our Mission
          </h3>
          <p className="tracking-wide text-gray-400 text-sm md:text-base leading-6 md:leading-8">
            <span className="font-semibold bg-white text-blue-500 px-[5px]">
              KarimStudio
            </span>{" "}
            exists to design and build meaningful digital experiences that help
            individuals and businesses present themselves with clarity,
            confidence, and impact. The mission is to combine design thinking
            and modern development to create systems that are not only visually
            appealing, but also functional, scalable, and user-focused.
          </p>
        </div>
        <div className="flex flex-col gap-[5px] md:max-w-[500px]">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 tracking-wide text-blue-600">
            Our Vision
          </h3>
          <p className="tracking-wide text-gray-400 text-sm md:text-base leading-6 md:leading-8">
            The vision is to grow{" "}
            <span className="font-semibold bg-white text-blue-500 px-[5px]">
              KarimStudio
            </span>{" "}
            into a trusted digital studio known for crafting high-quality web
            experiences and innovative portfolio systems that evolve with
            technology. The goal is to continuously learn, adapt, and push
            creative boundaries while empowering clients through smart,
            future-ready solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionVission;
