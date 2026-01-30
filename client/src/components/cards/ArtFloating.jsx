import ArtCard from "./ArtCard";

function ArtFloating({ icon, img, title, description }) {
  return (
    <div className="  relative w-full md:w-[390px] md:h-[224px] ">
      <div className="hidden md:flex items-center justify-center bg-gradient-to-t from-primary to-[#0c2f66] rounded-xl w-full h-full ">
        <img
          src={img}
          alt="seo image"
          className="md:w-[380px] md:h-[214px] rounded-xl"
        />
      </div>
      <ArtCard title={title} description={description} icon={icon} />
    </div>
  );
}

export default ArtFloating;
