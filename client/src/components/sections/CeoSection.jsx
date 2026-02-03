import Attribute from "../common/Attribute";
import Button from "../common/Button";
import Caption from "../common/Caption";
import ceoImage from "./../../assets/images/Ceo-THREE.jpeg";

function CeoSection() {
  const attributes = [
    "Full-stack developer specializing in modern web applications and SaaS platforms",
    "Strong UI/UX and product design background with a focus on usability and clarity",
    "Founder of KarimStudio, delivering digital solutions for real-world problems",
    "Experience building client portals, dashboards, and scalable systems",
    "Based in Kenya, working with clients and projects globally",
  ];
  return (
    <div className="flex justify-between gap-[40px] px-[20px] py-[40px] flex-col md:flex-row md:px-[120px] md:py-[120px]">
      <div className="flex items-center justify-center bg-gradient-to-r from-[#aac1e6] to-[#026dfc] p-[5px] rounded-xl">
        <img
          src={ceoImage}
          alt=""
          className="md:w-[500px] h-[600px] rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-[16px] md:w-[600px]">
        <Caption text="Founder & Creative Director" className="uppercase" />
        <h3 className="text-2xl tracking-wide text-blue-500 font-semibold">
          Abdikarim Mohamed Abdi
        </h3>
        <p className="tracking-wide text-gray-400 text-sm md:text-base leading-6 md:leading-8">
          Abdikarim Mohamed Abdi is a full-stack developer and designer focused
          on building thoughtful, scalable digital products. With a strong
          foundation in web technologies and user-centered design, he bridges
          the gap between functionality and visual clarity. KarimStudio was
          created as a space to craft reliable solutions for brands, startups,
          and individuals who value quality, performance, and long-term growth.
        </p>
        <div className="flex flex-col gap-[19px]">
          {attributes.map((attribute, index) => (
            <Attribute attribute={attribute} key={index} />
          ))}
        </div>
        <Button className="mt-[30px] max-w-fit">Download CV</Button>
      </div>
    </div>
  );
}

export default CeoSection;
