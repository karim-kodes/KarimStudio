import Caption from "../common/Caption";
import Button from "../common/Button";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark">
      {/* Radial Glow */}
      <div
        className="absolute bottom-[300px] left-1/2 -translate-x-1/2 
                    w-[900px] h-[30%]
                    rounded-full bg-[#026DFC]/30
                    blur-[200px]"
      />
      <div className="flex flex-col gap-[28px] py-[70px] mt-0 mb-[80px] md:my-[150px] items-center">
        <Caption />
        <h1 className=" max-w-[380px] text-2xl md:max-w-[1100px] md:text-5xl text-center text-white font-bold md:leading-[65px]">
          Design with purpose, build with precision crafting thoughtful digital
          experiences.
        </h1>
        <p className=" max-w-[380px] md:max-w-[600px] text-center text-gray-500 text-[15px] md:text-lg">
          We help brands and businesses transform ideas into beautifully
          designed, functional digital products delivered with clarity,
          transparency, and structure.
        </p>
        <div className="flex flex-row w-[347px] justify-between">
          <Button>View Our Work</Button>
          <Button variant="outline">Request a Quote</Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
