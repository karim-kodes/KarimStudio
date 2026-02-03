import { useState } from "react";
import SectionHeader from "../common/SectionHeader";
import PackageCard from "../cards/PackageCard";
import { Zap, Layers, Rocket, Globe } from "lucide-react";

function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const packages = [
    {
      id: 1,
      icon: Zap,
      price: 399,
      title: "Landing Page",
      description: "Perfect for showcasing your main services or product",
      features: [
        "Custom design",
        "Responsive",
        "Contact Forms",
        "SEO Optimization",
        "Optimized Performance",
      ],
      isPopular: true,
      isActive: false,
    },
    {
      id: 2,
      icon: Layers,
      price: 599,
      title: "Multi-Page Website",
      description: "Ideal for businesses needing multiple pages and sections",
      features: [
        "Up to 5 pages",
        "Custom design",
        "CMS Integration",
        "Advanced SEO",
        "Analytics Setup",
      ],
      isPopular: false,
      isActive: true,
    },
    {
      id: 3,
      icon: Rocket,
      price: 899,
      title: "E-Commerce",
      description: "Complete online store with payment integration",
      features: [
        "Product catalog",
        "Shopping cart",
        "Payment gateway",
        "Inventory management",
        "Order tracking",
      ],
      isPopular: false,
      isActive: false,
    },
    {
      id: 4,
      icon: Globe,
      price: 1299,
      title: "Full Stack App",
      description: "Custom web application with backend and database",
      features: [
        "Custom backend",
        "Database design",
        "API development",
        "User authentication",
        "Cloud hosting",
      ],
      isPopular: false,
      isActive: false,
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

    if (isLeftSwipe && activeIndex < packages.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
    if (isRightSwipe && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleGetPackage = (packageTitle) => {
    console.log(`Selected package: ${packageTitle}`);
    // Add your logic here
  };

  return (
    <div className="flex flex-col gap-[50px] pb-[150px] items-center">
      <SectionHeader
        caption="Our Services"
        title="Services Designed to Deliver"
        description="Thoughtfully crafted solutions tailored to your goals and needs."
      />

      {/* Desktop Grid View */}
      <div className="hidden md:flex gap-[18px] flex-wrap items-center justify-center max-w-[1254px]">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            icon={pkg.icon}
            price={pkg.price}
            title={pkg.title}
            description={pkg.description}
            features={pkg.features}
            isPopular={pkg.isPopular}
            isActive={pkg.isActive}
            onGetPackage={() => handleGetPackage(pkg.title)}
          />
        ))}
      </div>

      {/* Mobile Carousel View */}
      <div className="md:hidden w-full px-6">
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
            {packages.map((pkg) => (
              <div key={pkg.id} className="w-full py-4 flex-shrink-0 px-5">
                <PackageCard
                  icon={pkg.icon}
                  price={pkg.price}
                  title={pkg.title}
                  description={pkg.description}
                  features={pkg.features}
                  isPopular={pkg.isPopular}
                  isActive={pkg.isActive}
                  onGetPackage={() => handleGetPackage(pkg.title)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {packages.map((_, index) => (
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

export default Services;
