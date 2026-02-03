import Caption from "../common/Caption";
import HowItWorksImg from "./../../assets/images/HowItWorks.jpeg";
import { MessageSquare, Pencil, Rocket } from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Discovery & Consultation",
      description: "We discuss your goals, vision, and requirements in detail.",
    },
    {
      number: "02",
      icon: Pencil,
      title: "Design & Development",
      description:
        "Our team crafts a tailored solution that brings your ideas to life.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Launch & Support",
      description:
        "We deploy your project and provide ongoing support for success.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-dark">
      {/* Radial Glow */}
      <div
        className="absolute bottom-[300px] left-1/2 -translate-x-1/2 
                    w-[900px] h-[30%]
                    rounded-full bg-[#026DFC]/30
                    blur-[200px]"
      />
      <div className="flex flex-col lg:flex-row justify-center items-center px-4 md:px-8 lg:px-20 py-16 md:py-24 gap-10 lg:gap-16 max-w-7xl mx-auto">
        {/* Left Image - Hidden on mobile */}
        <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-primary to-[#14366b] p-[3px] rounded-2xl shadow-2xl">
          <img
            src={HowItWorksImg}
            alt="How It Works"
            className="h-[600px] w-[400px] object-cover rounded-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-8 max-w-2xl">
          <div className="space-y-4">
            <Caption text="HOW IT WORKS" className="uppercase" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-semibold text-white">
              Excellent Work From Increased Website Traffic To Higher Conversion
              Rates
            </h2>
            <p className="text-gray-400 text-sm md:text-lg">
              Our proven process ensures your project is delivered on time, on
              budget, and exceeds expectations.
            </p>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-8 pt-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex gap-6 items-start group">
                  {/* Number with gradient background */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-[#14366b] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                    {/* Connecting line - except for last item */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-1/2 top-16 w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent transform -translate-x-1/2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5 text-primary" />
                      <h4 className="text-lg font-semibold text-white tracking-wide">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Image - Only visible on mobile/tablet */}
          <div className="lg:hidden flex items-center justify-center bg-gradient-to-br from-primary to-[#14366b] p-[3px] rounded-2xl shadow-2xl mt-6">
            <img
              src={HowItWorksImg}
              alt="How It Works"
              className="w-full max-w-md h-[400px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
