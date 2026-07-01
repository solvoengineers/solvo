"use client";

import { allIcons } from "../helpers/icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomSelect from "./CustomSelect";

// Select options from Figma
const lookingForOptions = [
  { value: "start-new-project", label: "Start a new project" },
  { value: "consultations", label: "Consultations" },
  { value: "dedicated-team", label: "Dedicated team" },
  { value: "revamp-existing-job", label: "Revamp an existing job" },
];

const preferableSoftwareOptions = [
  { value: "ansys", label: "Ansys" },
  { value: "solidworks", label: "Solidworks" },
  { value: "ls-dyna", label: "LS-DYNA" },
  { value: "abaqus", label: "Abaqus" },
  { value: "autocad", label: "AutoCAD" },
  { value: "openfoam", label: "OpenFOAM" },
  { value: "comsol", label: "Comsol" },
  { value: "others", label: "Others" },
];

const estimatedBudgetOptions = [
  { value: "5000-usd", label: "< 5000 USD" },
  { value: "5000-10000-usd", label: "5000 - 10000 USD" },
  { value: "10000-30000-usd", label: "10000 - 30000 USD" },
  { value: "50000-usd", label: "> 50000 USD" },
];

const servicesOptions = [
  { value: "fea-analysis", label: "FEA analysis" },
  { value: "cfd-analysis", label: "CFD analysis" },
  { value: "cad-design", label: "CAD design" },
  { value: "crashworthiness", label: "Crashworthiness" },
  { value: "seismic-analysis", label: "Seismic analysis" },
  { value: "hvac", label: "HVAC" },
  { value: "thermal-management", label: "Thermal management" },
  { value: "product-design", label: "Product design" },
  { value: "design-optimization", label: "Design optimization" },
  { value: "fsi", label: "FSI" },
  { value: "airflow-simulations", label: "Airflow simulations" },
];

// Maximum allowed upload size (10 MB)
const MAX_FILE_SIZE = 10 * 1024 * 1024;

export default function GetInTouchForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    lookingFor: "",
    fullName: "",
    services: "",
    email: "",
    software: "",
    budget: "",
    message: "",
    requiresNDA: false,
    file: null as File | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Returns an error message for one field ("" means it's valid)
  const validateField = (
    name: string,
    data: typeof formData = formData
  ): string => {
    switch (name) {
      case "lookingFor":
        return data.lookingFor ? "" : "Please choose an option";
      case "fullName":
        return data.fullName.trim() ? "" : "Please enter your name";
      case "services":
        return data.services ? "" : "Please choose an option";
      case "email":
        if (!data.email.trim()) return "Please enter your email";
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())
          ? ""
          : "Please enter a valid email";
      case "software":
        return data.software ? "" : "Please choose an option";
      case "budget":
        return data.budget ? "" : "Please choose an option";
      case "message":
        return data.message.trim() ? "" : "Please enter your message";
      case "file":
        if (data.file && data.file.size > MAX_FILE_SIZE)
          return "File is larger than 10 MB. Please choose a smaller file.";
        return "";
      default:
        return "";
    }
  };

  const validateAll = (data: typeof formData = formData) => {
    const fields = [
      "lookingFor",
      "fullName",
      "services",
      "email",
      "software",
      "budget",
      "message",
      "file",
    ];
    const newErrors: Record<string, string> = {};
    fields.forEach((field) => {
      const message = validateField(field, data);
      if (message) newErrors[field] = message;
    });
    return newErrors;
  };

  const setFieldError = (name: string, message: string) => {
    setErrors((prev) => {
      const next = { ...prev };
      if (message) next[name] = message;
      else delete next[name];
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check everything first
    const newErrors = validateAll();
    setErrors(newErrors);
    setTouched({
      lookingFor: true,
      fullName: true,
      services: true,
      email: true,
      software: true,
      budget: true,
      message: true,
      file: true,
    });

    // Stop here if anything is invalid (the messages are now visible)
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("lookingFor", formData.lookingFor);
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("services", formData.services);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("software", formData.software);
      formDataToSend.append("budget", formData.budget);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("requiresNDA", formData.requiresNDA.toString());
      if (formData.file) {
        formDataToSend.append("file", formData.file);
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to thank you page
        router.push("/thank-you");
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, type } = e.target;

    let fieldValue: string | boolean | File | null;
    if (type === "checkbox") {
      fieldValue = (e.target as HTMLInputElement).checked;
    } else if (type === "file") {
      fieldValue = (e.target as HTMLInputElement).files?.[0] || null;
    } else {
      fieldValue = e.target.value;
    }

    const newData = { ...formData, [name]: fieldValue };
    setFormData(newData);

    // A file is checked the instant it's picked; other fields only after being touched
    if (name === "file") {
      setTouched((prev) => ({ ...prev, file: true }));
      setFieldError("file", validateField("file", newData));
    } else if (touched[name]) {
      setFieldError(name, validateField(name, newData));
    }
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    setFieldError(name, validateField(name));
  };

  // For the custom dropdowns: only validate once focus leaves the whole field
  const handleGroupBlur =
    (name: string) => (e: React.FocusEvent<HTMLDivElement>) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
        handleBlur(name);
      }
    };

  const fieldError = (name: string) =>
    errors[name] ? (
      <p className="text-sm text-red-500 font-normal font-poppins mt-1">
        {errors[name]}
      </p>
    ) : null;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-[1.375rem] p-8 border border-primary-blue rounded-[1.25rem] sm:w-full w-[47rem] sm:p-5"
    >
      {/* Title */}
      <div className="relative z-10  sm:block hidden">
        <h3 className="text-2xl  text-text-gray font-semibold font-poppins">
          <span className="text-primary-blue">Get in touch</span> with us
        </h3>

        {/* Checkmark Items */}
        <div className="flex flex-col gap-[0.625rem]  mt-6">
          {/* First Item */}
          <div className="flex flex-row text-primary-blue items-center gap-2.5 w-full">
            <div className="text-primary-blue flex-shrink-0">
              {allIcons.checkCircle(12, 12)}
            </div>
            <span className="text-sm  text-footer-text font-medium font-poppins">
              We will respond to you within 24 hours
            </span>
          </div>

          {/* Second Item */}
          <div className="flex flex-row text-primary-blue items-center gap-2.5 w-full">
            <div className="text-primary-blue flex-shrink-0">
              {allIcons.checkCircle(12, 12)}
            </div>
            <span className="text-sm  text-footer-text font-medium font-poppins">
              You'll be talking to CAE engineers not account managers
            </span>
          </div>
        </div>
      </div>

      <h2 className="text-text-gray font-semibold font-poppins sm:hidden block">
        How Can We Help You?
      </h2>

      {/* Form Fields */}
      <div className="flex flex-col gap-6">
        {/* 6 Fields Grid - 3 cols, 2 rows */}
        <div
          className="grid sm:grid-cols-2 grid-cols-[repeat(3,12.5rem)] gap-6"
          style={{ justifyContent: "space-between" }}
        >
          {/* I am looking to */}
          <div
            className="w-[12.5rem] sm:w-full"
            onBlur={handleGroupBlur("lookingFor")}
          >
            <CustomSelect
              name="lookingFor"
              value={formData.lookingFor}
              onChange={handleChange}
              placeholder="I am looking to"
              className="w-full"
              options={lookingForOptions}
            />
            {fieldError("lookingFor")}
          </div>

          {/* Full Name */}
          <div className="w-[12.5rem] sm:w-full">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={() => handleBlur("fullName")}
              placeholder="Full Name"
              className="w-full px-3 py-1 border border-footer-border rounded-lg text-base  text-footer-text font-normal font-poppins outline-none focus:border-primary-blue"
            />
            {fieldError("fullName")}
          </div>

          {/* Services I need */}
          <div
            className="w-[12.5rem] sm:w-full"
            onBlur={handleGroupBlur("services")}
          >
            <CustomSelect
              name="services"
              value={formData.services}
              onChange={handleChange}
              placeholder="Services I need"
              className="w-full"
              options={servicesOptions}
            />
            {fieldError("services")}
          </div>

          {/* Email */}
          <div className="w-[12.5rem] sm:w-full">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur("email")}
              placeholder="Email"
              className="w-full px-3 py-1 border border-footer-border rounded-lg text-base  text-footer-text font-normal font-poppins outline-none focus:border-primary-blue"
            />
            {fieldError("email")}
          </div>

          {/* Preferable Software */}
          <div
            className="w-[12.5rem] sm:w-full"
            onBlur={handleGroupBlur("software")}
          >
            <CustomSelect
              name="software"
              value={formData.software}
              onChange={handleChange}
              placeholder="Preferable Software"
              className="w-full"
              options={preferableSoftwareOptions}
            />
            {fieldError("software")}
          </div>

          {/* Estimated Budget */}
          <div
            className="w-[12.5rem] sm:w-full"
            onBlur={handleGroupBlur("budget")}
          >
            <CustomSelect
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Estimated Budget"
              className="w-full"
              options={estimatedBudgetOptions}
            />
            {fieldError("budget")}
          </div>
        </div>

        {/* Message Textarea */}
        <div className="flex flex-col gap-2.5">
          <label
            htmlFor="message"
            className="text-lg  text-text-gray font-medium font-poppins"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={() => handleBlur("message")}
            placeholder="Type here...."
            rows={8}
            className="px-3 py-3 border border-footer-border rounded-lg w-full min-h-[12.5rem] text-base  text-footer-text font-normal font-poppins outline-none resize-none focus:border-primary-blue"
          />
          {fieldError("message")}
        </div>

        {/* Checkbox and File Upload */}
        <div className="flex flex-col gap-4">
          <label className="flex flex-row items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="requiresNDA"
              checked={formData.requiresNDA}
              onChange={handleChange}
              className="w-4 h-4 border border-primary-blue rounded cursor-pointer"
            />
            <span className="text-base text-primary-blue font-normal font-poppins">
              This project required an NDA
            </span>
          </label>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="file"
              className="text-xs  text-text-gray font-normal font-poppins"
            >
              Upload Document (Optional)
            </label>
            <div className="flex flex-row items-center gap-5 px-3 py-1 border border-footer-border rounded-lg">
              <span className="text-sm  text-footer-text font-normal font-poppins flex-1">
                {formData.file ? formData.file.name : "Choose file to upload"}
              </span>
              <label className="px-3 py-1 border border-orange rounded-lg bg-orange cursor-pointer">
                <span className="text-sm  text-white font-normal font-poppins">
                  Browse File
                </span>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
            </div>
            {fieldError("file")}
          </div>
        </div>

        {/* Submit Status Message */}
        {submitStatus.type && (
          <div
            className={`p-4 rounded-lg ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            <p className="text-base font-normal font-poppins">
              {submitStatus.message}
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-fit"
          disabled={isSubmitting}
        >
          <span className="text-base text-white font-normal font-poppins">
            {isSubmitting ? "Sending..." : "Send as a message!"}
          </span>
          {!isSubmitting && (
            <div className="w-6 h-6 text-white">
              {allIcons.chevronRight(24, 24)}
            </div>
          )}
        </button>
      </div>
    </form>
  );
}
