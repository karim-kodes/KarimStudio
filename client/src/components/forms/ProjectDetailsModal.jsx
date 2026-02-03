import { X, ExternalLink, Github, Calendar, Users } from "lucide-react";
import TechPill from "../common/TechPill";
import Button from "../common/Button";

function ProjectDetailsModal({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-[#001529] border border-[#026dfc]/30 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-slideUp shadow-2xl">
        {/* Header with Image */}
        <div className="relative h-[300px] md:h-[400px] bg-[#272727]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001529] via-[#001529]/50 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 p-2 rounded-lg transition backdrop-blur-sm"
          >
            <X size={24} />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-gray-300 text-lg">{project.tagline}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.duration && (
              <div className="flex items-center gap-3 bg-[#000E24] p-4 rounded-lg border border-[#026dfc]/20">
                <Calendar className="text-[#026dfc]" size={20} />
                <div>
                  <p className="text-gray-400 text-xs">Duration</p>
                  <p className="text-white font-medium">{project.duration}</p>
                </div>
              </div>
            )}

            {project.role && (
              <div className="flex items-center gap-3 bg-[#000E24] p-4 rounded-lg border border-[#026dfc]/20">
                <Users className="text-[#026dfc]" size={20} />
                <div>
                  <p className="text-gray-400 text-xs">Role</p>
                  <p className="text-white font-medium">{project.role}</p>
                </div>
              </div>
            )}

            {project.client && (
              <div className="flex items-center gap-3 bg-[#000E24] p-4 rounded-lg border border-[#026dfc]/20">
                <div className="w-5 h-5 bg-[#026dfc] rounded-full" />
                <div>
                  <p className="text-gray-400 text-xs">Client</p>
                  <p className="text-white font-medium">{project.client}</p>
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Project Overview
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-[#026dfc] mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges & Solutions */}
          {project.challenges && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Challenges & Solutions
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {project.challenges}
              </p>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <TechPill key={index} text={tech} />
              ))}
            </div>
          </div>

          {/* Results/Impact */}
          {project.results && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Results & Impact
              </h3>
              <p className="text-gray-300 leading-relaxed">{project.results}</p>
            </div>
          )}

          {/* Additional Images Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-[200px] object-cover rounded-lg border border-[#026dfc]/20"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-[#026dfc]/20">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px]"
              >
                <Button className="w-full flex items-center justify-center gap-2">
                  <ExternalLink size={18} />
                  Visit Live Site
                </Button>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px]"
              >
                <button className="w-full px-6 py-3 border border-[#026dfc] text-white rounded-lg hover:bg-[#026dfc]/10 transition flex items-center justify-center gap-2">
                  <Github size={18} />
                  View Source Code
                </button>
              </a>
            )}

            {project.caseStudyUrl && (
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px]"
              >
                <button className="w-full px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-white/5 transition">
                  Read Case Study
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsModal;
