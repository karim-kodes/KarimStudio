import { X } from "lucide-react";
import { useState } from "react";
import Button from "../common/Button";

function ProjectModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const projectTypes = [
    "Multi-Page Website",
    "Landing Page",
    "E-commerce",
    "Custom App",
    "UI/UX Design",
    "Other",
  ];

  const budgetRanges = [
    "Under $399",
    "$399 - $599",
    "$599 - $899",
    "$899 - $1,299",
    "$1,299+",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select a budget range";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Project description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // TODO: Handle form submission (API call)
      console.log("Form submitted:", formData);

      // Reset form
      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        description: "",
      });

      // Close modal
      onClose();

      // Show success message (you can implement a toast notification)
      alert("Thank you! We'll get back to you soon.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-[#1a1a1a] border border-[#424242] rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-slideUp shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-[#1a1a1a] border-b border-[#424242] p-6 flex items-center justify-between z-10">
          <div>
            <h2 className="text-2xl font-bold text-white">Start a Project</h2>
            <p className="text-gray-400 text-sm mt-1">
              Tell us about your project and we'll get back to you soon
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition p-2 hover:bg-white/10 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-[#2c2c2c] border ${
                errors.name ? "border-red-500" : "border-[#424242]"
              } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#026dfc] transition`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-[#2c2c2c] border ${
                errors.email ? "border-red-500" : "border-[#424242]"
              } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#026dfc] transition`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Project Type and Budget - Two columns on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Project Type */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Project Type <span className="text-red-500">*</span>
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-[#2c2c2c] border ${
                  errors.projectType ? "border-red-500" : "border-[#424242]"
                } rounded-lg text-white focus:outline-none focus:border-[#026dfc] transition`}
              >
                <option value="" className="text-gray-500">
                  Select type
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.projectType && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.projectType}
                </p>
              )}
            </div>

            {/* Budget */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Budget Range <span className="text-red-500">*</span>
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-[#2c2c2c] border ${
                  errors.budget ? "border-red-500" : "border-[#424242]"
                } rounded-lg text-white focus:outline-none focus:border-[#026dfc] transition`}
              >
                <option value="" className="text-gray-500">
                  Select budget
                </option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
              {errors.budget && (
                <p className="text-red-500 text-xs mt-1">{errors.budget}</p>
              )}
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Project Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              className={`w-full px-4 py-3 bg-[#2c2c2c] border ${
                errors.description ? "border-red-500" : "border-[#424242]"
              } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#026dfc] transition resize-none`}
              placeholder="Tell us about your project goals, features you need, timeline, etc."
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">{errors.description}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1">
              Submit Project Request
            </Button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border border-gray-600 text-gray-400 rounded-lg hover:bg-white/5 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProjectModal;
