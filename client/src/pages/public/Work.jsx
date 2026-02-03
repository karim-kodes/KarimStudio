import { useState } from "react";
import ProjectDetailsModal from "../../components/forms/ProjectDetailsModal";
import ProjectCard from "../../components/cards/ProjectCard";
function Work() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      tagline: "Modern shopping experience for digital products",
      description:
        "A full-featured e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
      fullDescription:
        "Built a comprehensive e-commerce platform from the ground up, featuring a modern React frontend with Next.js for optimal SEO, a robust Node.js backend with Express, and MongoDB for scalable data storage. The platform handles thousands of daily transactions with 99.9% uptime and provides a seamless shopping experience across all devices.",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=500&fit=crop",
      techStack: [
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Stripe",
        "AWS",
        "Docker",
        "Redis",
      ],
      duration: "3 months",
      role: "Full Stack Developer",
      client: "RetailCo",
      category: "E-commerce",
      features: [
        "Real-time inventory management system with automatic stock alerts",
        "Secure payment processing with Stripe integration and fraud detection",
        "Advanced product filtering, search with autocomplete, and recommendations",
        "Comprehensive admin dashboard for order and inventory management",
        "Automated email notifications for orders, shipping, and promotions",
        "Mobile-responsive design with PWA capabilities for offline browsing",
      ],
      challenges:
        "The main challenge was handling high concurrent user traffic during flash sales and promotional events. Implemented Redis caching for session management and product data, utilized load balancing with NGINX, and optimized database queries to achieve a 10x performance improvement during peak traffic.",
      results:
        "Increased client sales by 45% in the first quarter post-launch. Reduced average page load times by 60% and decreased cart abandonment rate by 25%. The platform now serves over 50,000 active users monthly.",
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      gallery: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      ],
    },
    {
      id: 2,
      title: "Task Management SaaS",
      tagline: "Streamline team collaboration and productivity",
      description:
        "A collaborative task management application with real-time updates, team analytics, and custom workflow automation for agile teams.",
      fullDescription:
        "Developed a comprehensive SaaS task management solution that helps teams organize, track, and complete projects efficiently. The application features real-time collaboration, customizable workflows, and powerful analytics to boost team productivity. Built with scalability in mind to support teams from 5 to 500+ members.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      techStack: [
        "React",
        "TypeScript",
        "Firebase",
        "Tailwind CSS",
        "Chart.js",
        "WebSocket",
      ],
      duration: "2 months",
      role: "Lead Developer",
      client: "ProductivityHub",
      category: "Web Development",
      features: [
        "Drag-and-drop kanban boards with customizable columns and swimlanes",
        "Real-time collaboration with live cursors and instant updates",
        "Team analytics dashboard with productivity metrics and burndown charts",
        "Custom workflow automation with triggers and actions",
        "File attachments, comments, and @mentions for seamless communication",
        "Integration with Slack, Google Drive, and GitHub",
      ],
      challenges:
        "Implementing real-time synchronization across multiple users while maintaining data consistency was complex. Used Firebase's real-time database with optimistic updates and conflict resolution strategies. Also optimized re-renders using React.memo and virtualization for large task lists.",
      results:
        "Successfully launched to 500+ teams with an average productivity increase of 30%. Achieved 4.8/5 star rating on product review platforms. Reduced time-to-task-completion by an average of 2 days per project.",
      liveUrl: "https://taskmanager-demo.com",
      caseStudyUrl: "https://casestudies.example.com/taskmanager",
    },
    {
      id: 3,
      title: "Healthcare Portal",
      tagline: "Connecting patients with healthcare providers",
      description:
        "A HIPAA-compliant telemedicine platform enabling secure video consultations, appointment scheduling, and medical record management.",
      fullDescription:
        "Created a secure healthcare platform that bridges the gap between patients and healthcare providers. The system includes video consultation capabilities, electronic health records (EHR) integration, prescription management, and appointment scheduling. Built with security and compliance as top priorities.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
      techStack: [
        "React",
        "Node.js",
        "PostgreSQL",
        "WebRTC",
        "AWS",
        "Docker",
        "Redis",
      ],
      duration: "4 months",
      role: "Full Stack Developer",
      client: "MediConnect",
      category: "Landing Page",
      features: [
        "Secure HD video consultations with screen sharing capabilities",
        "HIPAA-compliant data storage and transmission with end-to-end encryption",
        "Electronic health records (EHR) integration with major providers",
        "Automated appointment scheduling with calendar sync",
        "E-prescription system with pharmacy integration",
        "Patient portal with medical history and test results",
      ],
      challenges:
        "Ensuring HIPAA compliance while maintaining a smooth user experience was critical. Implemented end-to-end encryption for all communications, secure authentication with 2FA, comprehensive audit logging, and regular security audits. WebRTC implementation required fallback mechanisms for various network conditions.",
      results:
        "Platform now serves 10,000+ active patients and 200+ healthcare providers. Reduced average appointment wait times from 2 weeks to 3 days. Achieved 98% patient satisfaction rating.",
      liveUrl: "https://healthcare-portal-demo.com",
    },
    {
      id: 4,
      title: "Real Estate Marketplace",
      tagline: "Finding your dream property made simple",
      description:
        "A modern property listing platform with advanced search, virtual tours, mortgage calculators, and direct agent communication.",
      fullDescription:
        "Developed a full-stack real estate marketplace that revolutionizes the property search experience. The platform features interactive maps, 360° virtual tours, AI-powered property recommendations, and seamless communication between buyers, sellers, and agents.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      techStack: [
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Google Maps API",
        "Stripe",
      ],
      duration: "3.5 months",
      role: "Full Stack Developer",
      category: "Multi-Page Website",
      features: [
        "Interactive map-based property search with custom filters",
        "360° virtual tours and high-quality image galleries",
        "AI-powered property recommendations based on user preferences",
        "Mortgage calculator with real-time interest rates",
        "In-app messaging between buyers and agents",
        "Saved searches with email alerts for new listings",
      ],
      challenges:
        "Handling large amounts of property data and images while maintaining fast load times. Implemented lazy loading, image optimization with Next.js Image component, and database indexing. Created a custom caching strategy for frequently accessed listings.",
      results:
        "Listed over 50,000 properties in the first 6 months. Average time-to-sale reduced by 35%. Platform generates 100,000+ monthly active users.",
      liveUrl: "https://realestate-demo.com",
      githubUrl: "https://github.com/yourusername/realestate-platform",
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      tagline: "Your personal fitness companion",
      description:
        "A cross-platform mobile app for tracking workouts, nutrition, and progress with AI-powered coaching and social features.",
      fullDescription:
        "Built a comprehensive fitness tracking application that helps users achieve their health goals. The app includes workout planning, nutrition tracking, progress analytics, and a social community for motivation and accountability.",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop",
      techStack: [
        "React Native",
        "Node.js",
        "MongoDB",
        "Firebase",
        "TensorFlow.js",
      ],
      duration: "2.5 months",
      role: "Fullstack Developer",
      category: "Custom App",
      features: [
        "Customizable workout plans with video demonstrations",
        "Barcode scanning for easy nutrition logging",
        "Progress tracking with charts and photo comparisons",
        "AI-powered form analysis using device camera",
        "Social feed for sharing achievements and challenges",
        "Integration with Apple Health and Google Fit",
      ],
      challenges:
        "Implementing AI-powered form analysis for exercises required training custom models with TensorFlow.js. Optimized models for mobile devices to ensure real-time feedback without draining battery. Also handled offline functionality for workout tracking without internet.",
      results:
        "Downloaded by 25,000+ users in first 3 months. 4.6/5 app store rating. Users report 40% increase in workout consistency.",
      liveUrl: "https://apps.apple.com/fitness-app-demo",
    },
    {
      id: 6,
      title: "Restaurant Management System",
      tagline: "Complete solution for restaurant operations",
      description:
        "An all-in-one platform for managing orders, inventory, staff scheduling, and customer reservations with real-time kitchen displays.",
      fullDescription:
        "Created a comprehensive restaurant management system that streamlines all aspects of restaurant operations. From front-of-house reservations to back-of-house inventory management, the platform increases efficiency and improves customer experience.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop",
      techStack: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Socket.io",
        "Redis",
        "Stripe",
      ],
      duration: "4 months",
      role: "Full Stack Developer",
      client: "RestaurantTech Solutions",
      category: "Multi-Page Website",
      features: [
        "Real-time kitchen display system (KDS) for order management",
        "Online reservation system with table management",
        "Inventory tracking with automatic reorder alerts",
        "Staff scheduling and time tracking",
        "Point-of-sale (POS) integration with payment processing",
        "Customer loyalty program and feedback system",
      ],
      challenges:
        "Real-time synchronization between multiple devices (POS terminals, kitchen displays, manager tablets) required robust WebSocket implementation with fallback mechanisms. Handling offline scenarios for payment processing was critical.",
      results:
        "Deployed in 15 restaurant locations. Reduced order errors by 60%. Improved table turnover rate by 25%. Decreased food waste by 30% through better inventory management.",
      liveUrl: "https://restaurant-system-demo.com",
    },
  ];

  const categories = [
    "All",
    "Multi-Page Website",
    "Custom App",
    "E-commerce",
    "Landing Page",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-dark pt-[60px] pb-20 px-2 md:px-[120px]">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Work
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-3xl">
            A showcase of projects I've built for clients and personal ventures.
            Each project represents a unique challenge solved with modern
            technology and best practices. From concept to deployment, I deliver
            scalable, user-friendly solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                filter === category
                  ? "bg-[#026DFC] text-white shadow-lg shadow-[#026dfc]/30"
                  : "bg-[#1c1d1f] text-gray-400 border border-[#323232] hover:border-[#026dfc]/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Count */}
      <div className="max-w-7xl mx-auto mb-8">
        <p className="text-gray-400">
          Showing{" "}
          <span className="text-white font-semibold">
            {filteredProjects.length}
          </span>{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            ProjectImage={project.image}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            imgAlt={project.title}
            onViewProject={() => handleViewProject(project)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="max-w-7xl mx-auto text-center py-20">
          <p className="text-gray-400 text-lg">
            No projects found in this category.
          </p>
        </div>
      )}

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-20 bg-gradient-to-r from-[#026DFC]/10 to-[#14366B]/10 border border-[#026dfc]/30 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Have a project in mind?
        </h2>
        <p className="text-gray-400 text-sm md:text-lg mb-8 max-w-2xl mx-auto">
          Let's work together to bring your ideas to life. I'm always excited to
          take on new challenges and create impactful solutions.
        </p>
        <a href="/contact">
          <button className="bg-[#026DFC] text-white px-8 py-3 rounded-lg hover:bg-[#0258d4] transition-all duration-300 shadow-lg shadow-[#026dfc]/30 hover:shadow-[#026dfc]/50">
            Get in Touch
          </button>
        </a>
      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
}

export default Work;
