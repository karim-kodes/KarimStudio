import SectionHeader from "../common/SectionHeader";
import ResultCard from "../cards/ResultCard";

import { Rocket, Gauge, Clock, Users } from "lucide-react";
function Results() {
  const results = [
    {
      id: 1,
      icon: Rocket,
      caption: "Average improvements in conversations",
      title: "70%",
    },
    {
      id: 2,
      icon: Clock,
      caption: "Typical Delivery",
      title: "2weeks",
    },
    {
      id: 3,
      icon: Gauge,
      caption: "Lighthouse performance score",
      title: "95+",
    },
    {
      id: 4,
      icon: Users,
      caption: "Satisfied clients",
      title: "20+%",
    },
  ];

  return (
    <div className="flex flex-col gap-[50px] pb-[150px] items-center">
      <SectionHeader
        caption="Results"
        title="Results That Matter"
        description="Measurable outcomes delivered with clarity, focus, and purpose."
      />
      <div className="flex gap-[20px] py-[40px] items-center justify-center flex-wrap">
        {results.map((result) => (
          <ResultCard
            key={result.id}
            icon={result.icon}
            caption={result.caption}
            title={result.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Results;
