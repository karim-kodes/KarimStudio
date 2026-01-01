import SectionHeader from "../common/SectionHeader";
import ProcessStep from "../common/ProcessStep";
import Step1Image from "./../../assets/images/Step01.jpeg";
import Step2Image from "./../../assets/images/Step02.jpeg";
import Step3Image from "./../../assets/images/Step03.jpeg";
import Step4Image from "./../../assets/images/Step04.jpeg";

function Process() {
  const steps = [
    {
      caption: "Step 01",
      title: "Problem Analysis",
      description:
        "We identify your challenge precisely and define the optimal solution together",
      image: Step1Image,
      reverse: false,
    },
    {
      caption: "Step 02",
      title: "Design & Planning",
      description:
        "Creating wireframes and visual designs that align with your brand and goals",
      image: Step2Image,
      reverse: true,
    },
    {
      caption: "Step 03",
      title: "Development",
      description:
        "Building your solution with clean code, modern technologies, and best practices",
      image: Step3Image,
      reverse: false,
    },
    {
      caption: "Step 04",
      title: "Launch & Support",
      description:
        "Deploying your project and providing ongoing support to ensure success",
      image: Step4Image,
      reverse: true,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-dark">
      <div
        className="absolute bottom-[400px] left-1/2 -translate-x-1/2 
                    w-[900px] h-[40%] 
                    rounded-full bg-[#026DFC]/30
                    blur-[200px]"
      />
      <div className="flex flex-col gap-[50px] pb-[150px] items-center">
        <SectionHeader
          caption="Process"
          title="How it works"
          description="A simple and reliable process, from idea to launch."
        />
        <div className="flex flex-col gap-[50px]">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              caption={step.caption}
              title={step.title}
              description={step.description}
              image={step.image}
              reverse={step.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
