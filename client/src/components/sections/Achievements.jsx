import { useState } from "react";
import SectionHeader from "../common/SectionHeader";
import ProjectCard from "../cards/ProjectCard";
import NatoursImage from "./../../assets/images/Natours-image.png";
import KarimStudioImage from "./../../assets/images/KarimStudio-image.png";
import ProjectTwoImage from "./../../assets/images/project-2.png";
import AlmondImage from "./../../assets/images/AlmondSaaS.jpeg";
import LifeLineImage from "./../../assets/images/Lifeline.jpeg";
import RelinkImage from "./../../assets/images/Relink.jpeg";

function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const projects = [
    {
      id: 1,
      image: NatoursImage,
      title: "Natours - Tour Booking System",
      description:
        "Natours is a tour booking platform that enables users to explore, book, and manage tours through a secure and intuitive web experience.",
      techStack: [
        "Pug",
        "Node Js",
        "charts Js",
        "Css",
        "Mongo Db",
        "Express Js",
      ],
      name: "Natours",
    },
    {
      id: 2,
      image: KarimStudioImage,
      title: "KarimStudio - Portfolio System",
      description:
        "KarimStudio is a developer portfolio that presents technical skills, projects, and accomplishments through a polished and professional web platform.",
      techStack: ["React", "Node", "Tailwind", "Jwt", "Mongo Db", "Express Js"],
      name: "KarimStudio",
    },
    {
      id: 3,
      image: ProjectTwoImage,
      title: "SmartAgri - Farm Marketplace",
      description:
        "Natours is a tour booking platform that enables users to explore, book, and manage tours through a secure and intuitive web experience.",
      techStack: ["React", "Node", "Tailwind", "Jwt", "Mongo Db", "Express Js"],
      name: "SmartAgri",
    },
    {
      id: 4,
      image: LifeLineImage,
      title: "LifeLine - Donation Platform",
      description:
        "Natours is a tour booking platform that enables users to explore, book, and manage tours through a secure and intuitive web experience.",
      techStack: ["HTML", "MySql", "PhP", "Css", "Javascript", "Firebase"],
      name: "LifeLine",
    },
    {
      id: 5,
      image: AlmondImage,
      title: "Almond - SaaS Web Application",
      description:
        "Natours is a tour booking platform that enables users to explore, book, and manage tours through a secure and intuitive web experience.",
      techStack: ["React", "Node", "Tailwind", "Jwt", "Mongo Db", "Express Js"],
      name: "Almond",
    },
    {
      id: 6,
      image: RelinkImage,
      title: "Relink - AI SaaS Website",
      description:
        "Natours is a tour booking platform that enables users to explore, book, and manage tours through a secure and intuitive web experience.",
      techStack: ["React", "Node", "Tailwind", "Jwt", "Mongo Db", "Express Js"],
      name: "Relink",
    },
  ];

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && activeIndex < projects.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
    if (isRightSwipe && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleViewProject = (projectName) => {
    console.log(`Viewing project: ${projectName}`);
    // Add your navigation logic here
  };

  return (
    <div className="flex flex-col items-center gap-[50px] pb-[150px]">
      <SectionHeader
        caption="Our Achievements"
        title="Some of the work We've delivered for clients"
        description="A curated selection of projects We've designed and developed that blend creativity, clean code, and user experiences"
      />

      {/* Desktop Grid View */}
      <div className="hidden md:flex flex-row flex-wrap justify-center gap-[24px] py-[30px] max-w-[1192px] items-center">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            ProjectImage={project.image}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            onViewProject={() => handleViewProject(project.name)}
          />
        ))}
      </div>

      {/* Mobile Carousel View */}
      <div className="md:hidden w-full ">
        <div
          className="overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {projects.map((project) => (
              <div key={project.id} className="w-full flex-shrink-0 px-6">
                <ProjectCard
                  ProjectImage={project.image}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  onViewProject={() => handleViewProject(project.name)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "w-8 bg-gradient-to-r from-[#026DFC] to-[#14366B]"
                  : "w-2 bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
