import Caption from "../common/Caption";
import ceoImage from "./../../assets/images/user-male-7.jpeg";
function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-dark">
      <div
        className="absolute bottom-[300px] left-1/2 -translate-x-1/2 
                    w-[900px] h-[30%]
                    rounded-full bg-[#026DFC]/30
                    blur-[200px]"
      />
      <div className="flex flex-col px-[16px] py-[40px]  md:flex-row md:items-center  md:py-[120px] md:px-[120px] gap-[40px] justify-between ">
        <div className="flex flex-col gap-[20px] ">
          <Caption text="About KarimStudio" className="uppercase" />
          <h2 className=" text-2xl  md:text-4xl font-bold bg-gradient-to-r from-white to-[#9DC1F1] bg-clip-text text-transparent max-w-[700px] tracking-wide">
            Designing and building digital experiences that grow with purpose.
          </h2>
          <p className="max-w-[700px] text-gray-500 tracking-wide md:text-lg">
            KarimStudio was founded with a simple goal to help brands and
            founders turn ideas into clear, functional, and scalable digital
            products. What started as a personal journey has grown into a
            focused practice built around design, development, and long-term
            thinking.
          </p>
          <h4 className="text-[20px] md:text-[28px] font-semibold bg-gradient-to-r from-[#aac1e6] to-[#026dfc] bg-clip-text text-transparent">
            20+ Projects Shipped
          </h4>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-center justify-center bg-gradient-to-r from-[#aac1e6] to-[#026dfc] p-[5px] rounded-xl">
            <img
              src={ceoImage}
              alt="CEO Image"
              className="w-[480px] rounded-lg border border-[#14366B]"
            />
          </div>
          <div className="flex gap-[3px] flex-col">
            <h3 className="text-2xl tracking-wide text-blue-500 font-semibold">
              Abdikarim Mohamed
            </h3>
            <h4 className="tracking-wide">Founder & Full-stack Engineer</h4>
            <p className="max-w-[440px] text-sm tracking-wide text-gray-500">
              Building scalable web products with design and engineering at the
              core.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
