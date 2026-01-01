import { useState } from "react";

// Button component
function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-[#026dfc] text-white px-6 py-3 rounded-md hover:bg-[#0257d4] transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    fname: "",
    phone: "",
    email: "",
    cname: "",
    budget: "",
    project: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fname.trim()) {
      newErrors.fname = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.cname.trim()) {
      newErrors.cname = "Company name is required";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select a budget";
    }

    if (!formData.project.trim()) {
      newErrors.project = "Project description is required";
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "You must accept the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", formData);
      setSubmitStatus("success");

      // Reset form after successful submission
      setFormData({
        fname: "",
        phone: "",
        email: "",
        cname: "",
        budget: "",
        project: "",
        acceptTerms: false,
      });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center justify-center w-full md:w-[800px] md:max-w-[560px] h-auto bg-[#1c1d1f] border border-[#323232] p-[20px] rounded-md">
        <div className="flex flex-col gap-[25px] w-full">
          {submitStatus === "success" && (
            <div className="bg-green-900/30 border text-sm md:text-base border-green-700 text-green-400 p-4 rounded-md">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-red-900/30 border border-red-700 text-red-400 p-4 rounded-md">
              Something went wrong. Please try again.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full">
            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor="fname"
                className="text-base text-[#c9c9c9] text-left tracking-wider font-thin"
              >
                Full name*
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                placeholder="John Doe"
                className={`h-[39px] w-full bg-[#2e2e2e] text-base px-[12px] py-[10px] rounded-md border ${
                  errors.fname ? "border-red-500" : "border-[#464646]"
                } placeholder:text-gray-500 text-[#fcfcfc] focus:outline-none focus:border-[#026dfc]`}
              />
              {errors.fname && (
                <span className="text-red-500 text-sm">{errors.fname}</span>
              )}
            </div>

            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor="phone"
                className="text-base text-[#c9c9c9] text-left tracking-wider font-thin"
              >
                Phone Number*
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+254 707 831 257"
                className={`h-[39px] w-full bg-[#2e2e2e] text-base px-[12px] py-[10px] rounded-md border ${
                  errors.phone ? "border-red-500" : "border-[#464646]"
                } placeholder:text-gray-500 text-[#fcfcfc] focus:outline-none focus:border-[#026dfc]`}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone}</span>
              )}
            </div>

            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor="email"
                className="text-base text-[#c9c9c9] text-left tracking-wider font-thin"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`h-[39px] w-full bg-[#2e2e2e] text-base px-[12px] py-[10px] rounded-md border ${
                  errors.email ? "border-red-500" : "border-[#464646]"
                } placeholder:text-gray-500 text-[#fcfcfc] focus:outline-none focus:border-[#026dfc]`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>

            <div className="flex flex-col gap-[5px]">
              <label
                htmlFor="cname"
                className="text-base text-[#c9c9c9] text-left tracking-wider font-thin"
              >
                Company Name*
              </label>
              <input
                type="text"
                id="cname"
                name="cname"
                value={formData.cname}
                onChange={handleChange}
                placeholder="My Company Luna"
                className={`h-[39px] w-full bg-[#2e2e2e] text-base px-[12px] py-[10px] rounded-md border ${
                  errors.cname ? "border-red-500" : "border-[#464646]"
                } placeholder:text-gray-500 text-[#fcfcfc] focus:outline-none focus:border-[#026dfc]`}
              />
              {errors.cname && (
                <span className="text-red-500 text-sm">{errors.cname}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-[5px] w-full">
            <label
              htmlFor="budget"
              className="text-base text-[#c9c9c9] text-left tracking-wider font-thin"
            >
              Estimated budget*
            </label>
            <select
              name="budget"
              id="budget"
              value={formData.budget}
              onChange={handleChange}
              className={`bg-[#2e2e2e] text-base px-[12px] py-[10px] rounded-md border ${
                errors.budget ? "border-red-500" : "border-[#464646]"
              } text-[#fcfcfc] focus:outline-none focus:border-[#026dfc]`}
            >
              <option value="" className="text-gray-500">
                Select Your Budget
              </option>
              <option value="250-350">$250 - $350</option>
              <option value="300-450">$300 - $450</option>
              <option value="450-750">$450 - $750</option>
              <option value="750+">above $750</option>
            </select>
            {errors.budget && (
              <span className="text-red-500 text-sm">{errors.budget}</span>
            )}
          </div>

          <div className="flex flex-col gap-[5px] w-full">
            <label
              htmlFor="project"
              className="text-base text-[#c9c9c9] text-left tracking-wider font-thin"
            >
              Describe your project*
            </label>
            <textarea
              name="project"
              id="project"
              value={formData.project}
              onChange={handleChange}
              className={`h-[184px] bg-[#2e2e2e] text-base px-[12px] py-[10px] rounded-md border ${
                errors.project ? "border-red-500" : "border-[#464646]"
              } placeholder:text-gray-500 text-[#fcfcfc] focus:outline-none focus:border-[#026dfc] resize-none`}
              placeholder="Describe your project, your needs, your objectives......"
            />
            {errors.project && (
              <span className="text-red-500 text-sm">{errors.project}</span>
            )}
          </div>

          <div className="flex flex-col gap-[5px]">
            <div
              className={`flex gap-[10px] w-full px-[12px] py-[10px] rounded-md border ${
                errors.acceptTerms ? "border-red-500" : "border-[#464646]"
              } bg-[#2e2e2e]`}
            >
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="mt-1"
              />
              <p className="text-sm md:text-base text-[#fcfcfc]">
                I accept the{" "}
                <span className="text-[#026dfc]">Privacy policy</span> and{" "}
                <span className="text-[#026dfc]">Terms of Use*</span>
              </p>
            </div>
            {errors.acceptTerms && (
              <span className="text-red-500 text-sm">{errors.acceptTerms}</span>
            )}
          </div>

          <Button
            onClick={handleSubmit}
            className="justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>

          <p className="text-base text-center text-[#fcfcfc]">
            All fields marked with * are required
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
