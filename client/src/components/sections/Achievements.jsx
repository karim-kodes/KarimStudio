import SectionHeader from "../common/SectionHeader";
import ProjectCard from "../cards/ProjectCard";
import NatoursImage from "./../../assets/images/Natours-image.png";
import KarimStudioImage from "./../../assets/images/KarimStudio-image.png";
import ProjectTwoImage from "./../../assets/images/project-2.png";
import AlmondImage from "./../../assets/images/AlmondSaaS.jpeg";
import LifeLineImage from "./../../assets/images/Lifeline.jpeg";
import RelinkImage from "./../../assets/images/Relink.jpeg";

function Achievements() {
  const handleViewProject = (projectName) => {
    console.log(`Viewing project: ${projectName}`);
    // Add your navigation logic here
  };
  return (
    <div className="flex  flex-col items-center gap-[50px] pb-[150px]">
      <SectionHeader
        caption="Our Achievements"
        title="Some of the work We've delivered for clients"
        description="A curated selection of projects We've designed and developed that blend creativity, clean code, and user experiences"
      />

      <div className="flex flex-row flex-wrap justify-center gap-[24px] py-[30px] max-w-[1192px] items-center">
        <ProjectCard
          ProjectImage={NatoursImage}
          title="Natours - Tour Booking System"
          description="Natours is a tour booking platform that enables users to explore, book, and manage tours through a secure and intuitive web experience."
          techStack={[
            "Pug",
            "Node Js",
            "charts Js",
            "Css",
            "Mongo Db",
            "Express Js",
          ]}
          onViewProject={() => handleViewProject("Natours")}
        />
        <ProjectCard
          ProjectImage={KarimStudioImage}
          title="KarimStudio - Portfolio System"
          description="KarimStudio is a developer portfolio that presents technical skills, projects, and accomplishments through a polished and professional web platform."
          techStack={[
            "React",
            "Node",
            "Tailwind",
            "Jwt",
            "Mongo Db",
            "Express Js",
          ]}
          onViewProject={() => handleViewProject("Natours")}
        />
        <ProjectCard
          ProjectImage={ProjectTwoImage}
          title="SmartAgri - Farm Marketplace"
          description="Natours is a tour booking platform that enables users to explore, book, and manage tours through a secure and intuitive web experience."
          techStack={[
            "React",
            "Node",
            "Tailwind",
            "Jwt",
            "Mongo Db",
            "Express Js",
          ]}
          onViewProject={() => handleViewProject("Natours")}
        />
        <ProjectCard
          ProjectImage={LifeLineImage}
          title="LifeLine - Donation Platform"
          description="Natours is a tour booking platform that enables users to explore, book, and manage tours through a secure and intuitive web experience."
          techStack={["HTML", "MySql", "PhP", "Css", "Javascript", "Firebase"]}
          onViewProject={() => handleViewProject("Natours")}
        />
        <ProjectCard
          ProjectImage={AlmondImage}
          title="Almond - SaaS Web Application"
          description="Natours is a tour booking platform that enables users to explore, book, and manage tours through a secure and intuitive web experience."
          techStack={[
            "React",
            "Node",
            "Tailwind",
            "Jwt",
            "Mongo Db",
            "Express Js",
          ]}
          onViewProject={() => handleViewProject("Natours")}
        />
        <ProjectCard
          ProjectImage={RelinkImage}
          title="Relink - AI SaaS Website"
          description="Natours is a tour booking platform that enables users to explore, book, and manage tours through a secure and intuitive web experience."
          techStack={[
            "React",
            "Node",
            "Tailwind",
            "Jwt",
            "Mongo Db",
            "Express Js",
          ]}
          onViewProject={() => handleViewProject("Natours")}
        />
      </div>
    </div>
  );
}

export default Achievements;
