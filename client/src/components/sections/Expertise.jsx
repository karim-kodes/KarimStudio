import expertiseImgOne from "../../assets/images/expertise-1.jpeg";
import expertiseImgTwo from "../../assets/images/expertise-2.jpeg";
import expertiseVideo from "../../assets/images/expertise-video.mp4";
import expertiseMobile from "../../assets/images/expertise-mobile.mp4";

import Caption from "../common/Caption";
import { Lightbulb, Rocket } from "lucide-react";

function Expertise() {
  return (
    <section className="relative overflow-hidden bg-dark">
      {/* Radial Glow */}
      <div
        className="absolute bottom-[300px] left-1/2 -translate-x-1/2 
                    w-[900px] h-[30%]
                    rounded-full bg-[#026DFC]/30
                    blur-[200px]"
      />
      <div className="flex flex-col md:flex-row justify-center items-center py-[80px] gap-[40px]">
        <div className="flex flex-col  md:flex-row items-center gap-[20px]">
          <div className="flex  md:flex-col gap-[20px]">
            <div className="flex items-center justify-center bg-gradient-to-t from-primary to-[#0c2f66] rounded-2xl">
              <img
                src={expertiseImgOne}
                alt="Expertise one image"
                className="h-[250px] w-[300px] md:w-[350px] md:h-[240px] rounded-2xl border-4 border-transparent  bg-clip-border"
              />
            </div>

            <div className="flex items-center justify-center bg-gradient-to-b from-primary to-[#0c2f66] rounded-2xl">
              <img
                src={expertiseImgTwo}
                alt="Expertise one image"
                className="h-[250px] md:w-[350px] md:h-[240px] rounded-2xl border-4 border-transparent  bg-clip-border"
              />
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center bg-gradient-to-b from-primary to-[#0c2f66] rounded-2xl">
            <video
              className="w-[350px] h-[700px] object-cover rounded-2xl border-4 border-transparent  bg-clip-border "
              autoPlay
              loop
              muted
              playsInline
              src={expertiseVideo}
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex md:hidden items-center justify-center bg-gradient-to-b from-primary to-[#0c2f66] rounded-2xl">
            <video
              className="w-full  object-cover rounded-2xl border-4 border-transparent  bg-clip-border "
              autoPlay
              loop
              muted
              playsInline
              src={expertiseMobile}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="flex flex-col gap-[28px] md:gap-[40px] md:w-[460px] px-[10px]">
          <Caption text="Expertise In ACTION" className="uppercase" />
          <div className="flex flex-col gap-[18px]">
            <h1 className="text-[28px] md:text-[36px] font-semibold">
              Elevate Your Brand In The Digital Landscape
            </h1>
            <p className="text-gray-400  text-[15px] md:text-base">
              Transform your online presence with innovative strategies designed
              to captivate and convert. Our comprehensive approach combines
              cutting-edge technology with creative excellence. Experience
              seamless integration of brand identity across all digital
              touchpoints.
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <Lightbulb size={36} className="text-primary" />
            <div className="flex flex-col gap-[3px]">
              <span className="text-sm md:text-base font-semibold tracking-wide">
                Strategic Planning
              </span>
              <p className="text-xs md:text-sm text-gray-500">
                Chart your path to digital success with data-driven strategies.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <Rocket size={36} className="text-primary" />
            <div className="flex flex-col gap-[3px]">
              <span className=" text-sm md:text-base font-semibold tracking-wide">
                Brand Development
              </span>
              <p className="md:text-sm text-xs text-gray-500">
                Build a powerful brand identity that resonates with your
                audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
