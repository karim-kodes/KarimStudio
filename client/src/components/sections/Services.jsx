import SectionHeader from "../common/SectionHeader";
import PackageCard from "../cards/PackageCard";
import { Zap, Layers, Rocket, Globe } from "lucide-react";

function Services() {
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
      isActive: true, // This one will be taller and dark
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
      <div className="flex gap-[18px] flex-wrap items-center justify-center max-w-[1254px]">
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
    </div>
  );
}

export default Services;
