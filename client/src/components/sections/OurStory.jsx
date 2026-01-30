import Button from "../common/Button";
import Caption from "../common/Caption";

function OurStory() {
  return (
    <div className="flex flex-col gap-[40px] px-[20px] py-[40px] md:flex-row  md:justify-between md:px-[120px] md:py-[120px]">
      <div className=" flex flex-col gap-[16px] max-w-[700px]">
        <Caption text="Our Story" className="uppercase" />
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide bg-gradient-to-r from-white to-[#9dc1f1] bg-clip-text text-transparent">
          How KarimStudio Began
        </h2>
        <p className=" text-[15px] md:text-base text-gray-400">
          <span className="tracking-wide">
            <span className="font-semibold text-blue-500">KarimStudio</span>{" "}
            began as a personal journey to build meaningful digital products,
            not just websites. What started as a passion for design and
            development evolved into a studio focused on crafting systems that
            solve real problems. KarimStudio began as a personal journey to
            build meaningful digital products, not just websites. What started
            as a passion for design and development evolved into a studio
            focused on crafting systems that solve real problems.
          </span>
          <br />
          <br />
          <span className="tracking-wide ">
            Through learning, experimentation, and hands-on projects, the vision
            became clear to help brands and individuals bring ideas to life with
            clarity, performance, and long-term value.
          </span>
        </p>
        <Button variant="outline" className="max-w-fit my-4">
          Learn More
        </Button>
      </div>
      <div className="md:w-[500px] flex flex-col gap-6">
        <div>
          <h3 className="bg-gradient-to-r from-white to-[#9dc1f1] bg-clip-text text-transparent text-xl md:text-2xl font-bold mb-2">
            Founded in 2024
          </h3>
          <p className="text-gray-400 mb-6">
            Founded with the belief that good design and clean code should work
            together.
          </p>
        </div>

        <div className="space-y-4">
          <div className="border-l-2 border-[#026DFC] pl-4">
            <h4 className="text-white font-semibold mb-1">
              Quality Over Quantity
            </h4>
            <p className="text-gray-400 text-sm">
              Every project receives dedicated attention and craftsmanship.
            </p>
          </div>
          <div className="border-l-2 border-[#026DFC] pl-4">
            <h4 className="text-white font-semibold mb-1">
              Future-Proof Solutions
            </h4>
            <p className="text-gray-400 text-sm">
              Built to scale and adapt as your business grows.
            </p>
          </div>
          <div className="border-l-2 border-[#026DFC] pl-4">
            <h4 className="text-white font-semibold mb-1">
              Transparent Process
            </h4>
            <p className="text-gray-400 text-sm">
              Clear communication from concept to launch and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
