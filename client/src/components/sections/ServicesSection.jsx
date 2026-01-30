import React, { useState } from "react";
import Caption from "../common/Caption";
import {
  Search,
  TrendingUp,
  Palette,
  Code,
  Megaphone,
  BarChart,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Boost your visibility and rank higher in search results with proven strategies.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Optimization",
    description:
      "Transform visitors into customers with data-driven optimization techniques.",
  },
  {
    icon: Palette,
    title: "Brand Design",
    description:
      "Create stunning visual identities that resonate with your target audience.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Build responsive, high-performance websites tailored to your business needs.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Reach your audience effectively through strategic multi-channel campaigns.",
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description:
      "Make informed decisions with comprehensive data analysis and reporting.",
  },
];

function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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

    if (isLeftSwipe && activeIndex < services.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
    if (isRightSwipe && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="flex flex-col gap-[10px] md:gap-[30px] w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <Caption text="Services We Offer" className="uppercase self-center" />
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 max-w-3xl mx-auto leading-tight">
        Explore Our Comprehensive Range Of Digital Services Designed To Elevate
        Your Online Presence
      </h2>

      {/* Desktop Grid View */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

      {/* Mobile Carousel View */}
      <div className="md:hidden">
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
            {services.map((service, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <ServiceCard
                  service={service}
                  isActive={index === activeIndex}
                  isMobile={true}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "w-8 bg-gradient-to-r from-primary to-[#14366b]"
                  : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service, isActive = false, isMobile = false }) {
  const Icon = service.icon;

  const cardClasses = isMobile
    ? `p-6 rounded-xl border-2 transition-all ${
        isActive
          ? "bg-gradient-to-br from-primary to-[#14366b] border-transparent text-white"
          : "bg-white border-gray-200 hover:bg-gradient-to-br hover:from-primary hover:to-[#14366b] hover:border-transparent hover:text-white"
      }`
    : "p-6 rounded-xl border-2 border-[#2c2c2c] bg-[#1a1a1a] hover:bg-gradient-to-br hover:from-primary hover:to-[#14366b] hover:border-transparent hover:text-white transition-all group";

  return (
    <div className={cardClasses}>
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
          isMobile && isActive
            ? "bg-white/20"
            : "bg-[#2c2c2c] group-hover:bg-white/20"
        }`}
      >
        <Icon
          className={`w-7 h-7 ${
            isMobile && isActive
              ? "text-white"
              : "text-blue-600 group-hover:text-white"
          }`}
        />
      </div>

      {/* Title */}
      <h3
        className={`text-xl font-semibold mb-3 ${
          isMobile && isActive
            ? "text-white"
            : "text-textprimary group-hover:text-white"
        }`}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm mb-4 line-clamp-2 ${
          isMobile && isActive
            ? "text-white/90"
            : "text-gray-600 group-hover:text-white/90"
        }`}
      >
        {service.description}
      </p>

      {/* Learn More Link */}
      <a
        href="#"
        className={`inline-flex items-center gap-1 text-sm font-medium ${
          isMobile && isActive
            ? "text-white"
            : "text-blue-600 group-hover:text-white"
        }`}
      >
        Learn More
        <ChevronRight className="w-4 h-4" />
      </a>
    </div>
  );
}

export default ServicesSection;
