import seoImage from "../../assets/images/seo-master.jpeg";
import ArtCard from "./ArtCard";

function ArtFloating() {
  return (
    <div className=" relative md:w-[390px] md:h-[224px] ">
      <div className="flex items-center justify-center bg-gradient-to-t from-primary to-[#0c2f66] rounded-xl w-full h-full ">
        <img
          src={seoImage}
          alt="seo image"
          className="w-[380px] h-[214px] rounded-xl"
        />
      </div>
      <ArtCard />
    </div>
  );
}

export default ArtFloating;
