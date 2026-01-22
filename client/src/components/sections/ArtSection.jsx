import artSecArtImg from "../../assets/images/artbg.jpeg";
import ArtFloating from "../cards/ArtFloating";
import Caption from "../common/Caption";

function ArtSection() {
  return (
    <div
      className=" relative w-full h-[300px] md:h-[600px]  bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-80 flex  py-[120px] px-[120px]"
      style={{ backgroundImage: `url(${artSecArtImg})` }}
    >
      <div className=" z-10 flex flex-col gap-[5px]">
        <Caption text="Discover The Art" className="uppercase" />
        <h1 className="w-[700px] text-[36px] font-semibold tracking-wide">
          Our Portfolio: Transforming Brands Through Strategic Digital Solutions
        </h1>
      </div>
      <div className=" z-20 absolute -bottom-10 left-80 flex gap-[200px]">
        <ArtFloating />
        <ArtFloating />
      </div>
    </div>
  );
}

export default ArtSection;
