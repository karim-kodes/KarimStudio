import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import Button from "../../components/common/Button";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const projectTypes = [
    "Web Development",
    "Mobile App Development",
    "E-commerce Solution",
    "Custom Software",
    "UI/UX Design",
    "API Development",
    "Website Redesign",
    "Maintenance & Support",
    "Other",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "Not Sure Yet",
  ];

  const timelines = [
    "ASAP (Less than 1 month)",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Flexible",
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

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Please provide more details (at least 20 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // TODO: Replace with actual API call
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Form submitted:", formData);

        // Show success message
        setSubmitSuccess(true);

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          message: "",
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Something went wrong. Please try again or email us directly.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-dark pt-[90px] pb-20">
      {/* Hero Section */}
      <div className="px-6 md:px-20 py-8 md:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something Amazing Together
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Fill out the form below
            or reach out directly, and I'll get back to you within 24 hours.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Cards */}
            <div className="bg-[#001529] border border-[#026dfc]/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                Get In Touch
              </h3>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#026dfc]/10 p-3 rounded-lg">
                    <Mail className="text-[#026dfc]" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <a
                      href="mailto:hello@karimstudio.com"
                      className="text-white hover:text-[#026dfc] transition"
                    >
                      hello@karimstudio.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#026dfc]/10 p-3 rounded-lg">
                    <Phone className="text-[#026dfc]" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-white hover:text-[#026dfc] transition"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#026dfc]/10 p-3 rounded-lg">
                    <MapPin className="text-[#026dfc]" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-white">Nairobi, Kenya</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#026dfc]/10 p-3 rounded-lg">
                    <Clock className="text-[#026dfc]" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Working Hours</p>
                    <p className="text-white">Mon - Fri: 9:00 AM - 6:00 PM EAT</p>
                    <p className="text-gray-400 text-sm">
                      Weekends: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Work With Me */}
            <div className="bg-[#001529] border border-[#026dfc]/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                Why Work With Me?
              </h3>
              <div className="space-y-4">
                {[
                  "Fast turnaround times",
                  "Clear communication",
                  "Transparent pricing",
                  "Quality guaranteed",
                  "Post-launch support",
                  "Scalable solutions",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#026dfc]" size={20} />
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-[#026dfc]/20 to-[#14366B]/20 border border-[#026dfc]/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                ⚡ Quick Response
              </h3>
              <p className="text-gray-300">
                I typically respond to all inquiries within 24 hours on business
                days. Urgent? Call me directly!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#001529] border border-[#026dfc]/30 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Start Your Project
              </h3>
              <p className="text-gray-400 mb-8">
                Tell me about your project and I'll get back to you with a proposal
              </p>

              {/* Success Message */}
              {submitSuccess && (
                <div className="mb-6 bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-green-500 font-medium">
                      Message sent successfully!
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      Thank you for reaching out. I'll get back to you within 24
                      hours.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-[#000E24] border ${
                        errors.name ? "border-red-500" : "border-[#026dfc]/30"
                      } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#026dfc] transition`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-[#000E24] border ${
                        errors.email ? "border-red-500" : "border-[#026dfc]/30"
                      } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#026dfc] transition`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone and Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#000E24] border border-[#026dfc]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#026dfc] transition"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#000E24] border border-[#026dfc]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#026dfc] transition"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Project Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#000E24] border ${
                      errors.projectType
                        ? "border-red-500"
                        : "border-[#026dfc]/30"
                    } rounded-lg text-white focus:outline-none focus:border-[#026dfc] transition`}
                  >
                    <option value="">Select project type</option>
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

                {/* Budget and Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#000E24] border border-[#026dfc]/30 rounded-lg text-white focus:outline-none focus:border-[#026dfc] transition"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#000E24] border border-[#026dfc]/30 rounded-lg text-white focus:outline-none focus:border-[#026dfc] transition"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`w-full px-4 py-3 bg-[#000E24] border ${
                      errors.message ? "border-red-500" : "border-[#026dfc]/30"
                    } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#026dfc] transition resize-none`}
                    placeholder="Tell me about your project goals, features you need, any specific requirements, etc."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                  <p className="text-gray-500 text-xs mt-1">
                    {formData.message.length} characters (minimum 20)
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-6 md:px-20 mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Quick answers to common questions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex web applications may take 2-4 months. I'll provide a detailed timeline during our consultation.",
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes! All projects include 30 days of free support post-launch. I also offer monthly maintenance packages for ongoing updates, security, and technical support.",
              },
              {
                q: "What technologies do you work with?",
                a: "I specialize in React, Node.js, MongoDB, PostgreSQL, and modern web technologies. I choose the best tech stack based on your specific project requirements.",
              },
              {
                q: "How do you handle payments?",
                a: "I typically work with a 50% upfront deposit and 50% upon project completion. For larger projects, I offer milestone-based payments to ensure transparency and trust.",
              },
              {
                q: "Can you work with my existing team?",
                a: "Absolutely! I'm experienced in collaborating with design teams, product managers, and other developers. I can seamlessly integrate into your workflow.",
              },
              {
                q: "Do you sign NDAs?",
                a: "Yes, I'm happy to sign NDAs and confidentiality agreements to protect your intellectual property and business ideas.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-[#001529] border border-[#026dfc]/30 rounded-xl p-6"
              >
                <h4 className="text-lg font-semibold text-white mb-3">
                  {faq.q}
                </h4>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 md:px-20 mt-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#026DFC]/10 to-[#14366B]/10 border border-[#026dfc]/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prefer a Quick Call?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Sometimes it's easier to discuss your project over a call. Schedule a
            free 30-minute consultation to discuss your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+1234567890">
              <Button className="flex items-center gap-2">
                <Phone size={18} />
                Call Now
              </Button>
            </a>
            <a href="https://calendly.com/yourusername" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 border border-[#026dfc] text-white rounded-lg hover:bg-[#026dfc]/10 transition-all duration-300">
                Schedule a Meeting
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;