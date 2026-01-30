import artSecArtImg from "../../assets/images/artbg.jpeg";
import ArtFloating from "../cards/ArtFloating";
import Caption from "../common/Caption";
import seoImage from "../../assets/images/seo-master.jpeg";
import conversion from "../../assets/images/conversion.jpeg";
import { Search, TrendingUp } from "lucide-react";

function ArtSection() {
  const coreValues = [
    {
      id: 1,
      title: "SEO Mastery",
      description: "Boost your visibility and rank higher in search results.",
      img: seoImage,
      icon: Search,
    },
    {
      id: 2,
      title: "High Conversion",
      description:
        "Transform visitors into customers with optimized strategies.",
      img: conversion,
      icon: TrendingUp,
    },
  ];
  return (
    <div
      className=" mb-[120px] relative w-full h-[300px] md:h-[600px]  bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-80 flex py-[40px] px-[20px] md:py-[120px] md:px-[120px]"
      style={{ backgroundImage: `url(${artSecArtImg})` }}
    >
      <div className=" z-10 flex flex-col gap-[5px]">
        <Caption text="Discover The Art" className="uppercase" />
        <h1 className="w-full md:w-[700px] text-[24px] md:text-[36px] font-semibold tracking-wide">
          <span className="text-primary">Our Portfolio:</span> Transforming
          Brands Through Strategic Digital Solutions
        </h1>
      </div>
      <div className="  w-full md:w-auto  left-0 -bottom-20 z-20 absolute md:-bottom-10 md:left-80 flex justify-between items-center md:gap-[200px]">
        {coreValues.map((value) => (
          <ArtFloating
            key={value.id}
            title={value.title}
            description={value.description}
            img={value.img}
            icon={value.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default ArtSection;
