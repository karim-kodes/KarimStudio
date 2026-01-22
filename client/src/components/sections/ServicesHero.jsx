import serviceHero from "../../assets/images/service-hero.jpeg";

function ServicesHero() {
  return (
    <div
      className=" relative w-full h-[300px] md:h-[500px]  bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-70"
      style={{ backgroundImage: `url(${serviceHero})` }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Our Services
        </h1>
        <p className=" text-lg md:text-xl text-center max-w-2xl mb-8">
          Expert solutions across multiple domains
        </p>
        <div className="flex gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-primary">50+</p>
            <p className=" text-xs md:text-sm text-nowrap">
              Projects Completed
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">15+</p>
            <p className=" text-xs md:text-sm text-nowrap">Services Offered</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">100%</p>
            <p className=" text-xs text-nowrap md:text-sm ">
              Client Satisfaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesHero;
