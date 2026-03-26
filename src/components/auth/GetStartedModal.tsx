"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { useAuthStore } from "@/lib/store";

const yearOptions = [
  "1st Year",
  "2nd Year",
  "3rd Year",
  "4th Year",
  "Intern",
];

const countryOptions = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
  "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
  "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
  "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
  "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica",
  "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
  "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
  "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
  "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
  "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
  "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
  "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
  "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
  "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
  "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
  "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama",
  "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
  "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
  "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea",
  "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
  "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
  "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
  "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen", "Zambia", "Zimbabwe",
];

const stateOptions = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const labelStyle = {
  fontFamily: "Poppins",
  fontWeight: 500,
  fontSize: "clamp(12px, 0.729vw, 14px)",
  lineHeight: "clamp(18px, 1.042vw, 20px)",
  color: "#0F172A",
} as const;

const inputStyle = {
  width: "100%",
  height: "clamp(44px, 2.708vw, 52px)",
  padding: "clamp(10px, 0.625vw, 12px) clamp(12px, 0.833vw, 16px)",
  border: "2px solid #E2E8F0",
  borderRadius: "clamp(10px, 0.625vw, 12px)",
  fontFamily: "Poppins",
  fontWeight: 400,
  fontSize: "clamp(14px, 0.833vw, 16px)",
  lineHeight: "clamp(20px, 1.25vw, 24px)",
  color: "#0F172A",
  outline: "none",
  transition: "border-color 0.2s ease",
  boxSizing: "border-box" as const,
};

const selectStyle = {
  ...inputStyle,
  height: "clamp(44px, 2.734vw, 52.5px)",
  padding: "clamp(10px, 0.729vw, 14px) clamp(12px, 0.833vw, 16px)",
  appearance: "none" as const,
  background: "#FFFFFF",
  cursor: "pointer",
};

const errorStyle = {
  fontFamily: "Poppins",
  fontWeight: 400,
  fontSize: "clamp(11px, 0.625vw, 12px)",
  color: "#EF4444",
  margin: 0,
  marginTop: "2px",
};

const fieldGap = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "clamp(6px, 0.417vw, 8px)",
};

export default function GetStartedModal() {
  const { isGetStartedOpen, closeGetStarted } = useAuthStore();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    yearOfStudy: "",
    university: "",
    country: "",
    state: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (name: string, value: string) => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        if (!/^[a-zA-Z\s.'-]+$/.test(value.trim())) return "Name can only contain letters, spaces, dots, hyphens";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.trim())) return "Enter a valid email address";
        return "";
      case "phone":
        if (!value.trim()) return "Phone number is required";
        if (!/^\+?[0-9]{7,15}$/.test(value.replace(/[\s-]/g, ""))) return "Enter a valid phone number (7-15 digits)";
        return "";
      case "university":
        if (!value.trim()) return "University is required";
        if (value.trim().length < 2) return "University name must be at least 2 characters";
        return "";
      default:
        return "";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    const mandatoryFields = ["fullName", "email", "phone", "university"];
    mandatoryFields.forEach((field) => {
      const error = validate(field, formData[field as keyof typeof formData]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    setTouched(
      Object.fromEntries(mandatoryFields.map((f) => [f, true]))
    );
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      // Handle form submission logic here
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (touched[name]) {
      const error = validate(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validate(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
    e.currentTarget.style.borderColor = "#E2E8F0";
  };

  const RequiredStar = () => (
    <span style={{ color: "#EF4444", marginLeft: "2px" }}>*</span>
  );

  return (
    <AnimatePresence>
      {isGetStartedOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeGetStarted}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.5)",
              zIndex: 9998,
            }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              zIndex: 9999,
              width: "clamp(340px, 90vw, 448px)",
              maxHeight: "90vh",
              overflowY: "auto",
              borderRadius: "clamp(16px, 1.25vw, 24px)",
              background: "#FFFFFF",
              padding: "clamp(24px, 1.667vw, 32px)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeGetStarted}
              style={{
                position: "absolute",
                top: "clamp(12px, 0.677vw, 13px)",
                right: "clamp(12px, 0.677vw, 13px)",
                width: "clamp(28px, 1.667vw, 32px)",
                height: "clamp(28px, 1.667vw, 32px)",
                borderRadius: "50%",
                background: "#DBFAFE",
                border: "2px solid #0097A7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#00B8D4";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#DBFAFE";
              }}
            >
              <X
                style={{
                  width: "clamp(16px, 1.042vw, 20px)",
                  height: "clamp(16px, 1.042vw, 20px)",
                  color: "#0097A7",
                }}
              />
            </button>

            {/* Header */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "clamp(6px, 0.417vw, 8px)",
                marginBottom: "clamp(24px, 2.083vw, 40px)",
              }}
            >
              <h2
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 1.563vw, 30px)",
                  lineHeight: "clamp(30px, 1.875vw, 36px)",
                  textAlign: "center",
                  color: "#0F172A",
                  margin: 0,
                }}
              >
                Get Started with{" "}
                <span style={{ color: "#00B8D4" }}>DRSPREP</span>
              </h2>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 0.833vw, 16px)",
                  lineHeight: "clamp(20px, 1.25vw, 24px)",
                  textAlign: "center",
                  color: "#64748B",
                  margin: 0,
                }}
              >
                Fill in your details to start your free trial
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "clamp(12px, 1.042vw, 20px)",
                }}
              >
                {/* Full Name */}
                <div style={fieldGap}>
                  <label style={labelStyle}>
                    Full Name<RequiredStar />
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    style={{
                      ...inputStyle,
                      borderColor: errors.fullName && touched.fullName ? "#EF4444" : "#E2E8F0",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#00B8D4";
                    }}
                    onBlur={handleBlur}
                  />
                  {errors.fullName && touched.fullName && (
                    <p style={errorStyle}>{errors.fullName}</p>
                  )}
                </div>

                {/* Email Address */}
                <div style={fieldGap}>
                  <label style={labelStyle}>
                    Email Address<RequiredStar />
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    style={{
                      ...inputStyle,
                      borderColor: errors.email && touched.email ? "#EF4444" : "#E2E8F0",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#00B8D4";
                    }}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <p style={errorStyle}>{errors.email}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div style={fieldGap}>
                  <label style={labelStyle}>
                    Phone Number<RequiredStar />
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    style={{
                      ...inputStyle,
                      borderColor: errors.phone && touched.phone ? "#EF4444" : "#E2E8F0",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#00B8D4";
                    }}
                    onBlur={handleBlur}
                  />
                  {errors.phone && touched.phone && (
                    <p style={errorStyle}>{errors.phone}</p>
                  )}
                </div>

                {/* Year of Study */}
                <div style={fieldGap}>
                  <label style={labelStyle}>
                    Year of Study
                  </label>
                  <div style={{ position: "relative" }}>
                    <select
                      name="yearOfStudy"
                      value={formData.yearOfStudy}
                      onChange={handleChange}
                      style={{
                        ...selectStyle,
                        color: formData.yearOfStudy ? "#0F172A" : "rgba(15, 23, 42, 0.5)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#00B8D4";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "#E2E8F0";
                      }}
                    >
                      <option value="">Select Year</option>
                      {yearOptions.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      style={{
                        position: "absolute",
                        right: "clamp(12px, 0.833vw, 16px)",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "clamp(16px, 1.042vw, 20px)",
                        height: "clamp(16px, 1.042vw, 20px)",
                        color: "#878B94",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                </div>

                {/* University */}
                <div style={fieldGap}>
                  <label style={labelStyle}>
                    University<RequiredStar />
                  </label>
                  <input
                    type="text"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    placeholder="Enter your university name"
                    required
                    style={{
                      ...inputStyle,
                      borderColor: errors.university && touched.university ? "#EF4444" : "#E2E8F0",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#00B8D4";
                    }}
                    onBlur={handleBlur}
                  />
                  {errors.university && touched.university && (
                    <p style={errorStyle}>{errors.university}</p>
                  )}
                </div>

                {/* Country */}
                <div style={fieldGap}>
                  <label style={labelStyle}>
                    Country
                  </label>
                  <div style={{ position: "relative" }}>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      style={{
                        ...selectStyle,
                        color: formData.country ? "#0F172A" : "rgba(15, 23, 42, 0.5)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#00B8D4";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "#E2E8F0";
                      }}
                    >
                      <option value="">Select Country</option>
                      {countryOptions.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      style={{
                        position: "absolute",
                        right: "clamp(12px, 0.833vw, 16px)",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "clamp(16px, 1.042vw, 20px)",
                        height: "clamp(16px, 1.042vw, 20px)",
                        color: "#878B94",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                </div>

                {/* State/Province */}
                <div style={fieldGap}>
                  <label style={labelStyle}>
                    State / Province
                  </label>
                  <div style={{ position: "relative" }}>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      style={{
                        ...selectStyle,
                        color: formData.state ? "#0F172A" : "rgba(15, 23, 42, 0.5)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#00B8D4";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "#E2E8F0";
                      }}
                    >
                      <option value="">Select State</option>
                      {stateOptions.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      style={{
                        position: "absolute",
                        right: "clamp(12px, 0.833vw, 16px)",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "clamp(16px, 1.042vw, 20px)",
                        height: "clamp(16px, 1.042vw, 20px)",
                        color: "#878B94",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    height: "clamp(44px, 2.708vw, 52px)",
                    background: "#00B8D4",
                    borderRadius: "clamp(10px, 0.625vw, 12px)",
                    border: "none",
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    fontSize: "clamp(16px, 0.9375vw, 18px)",
                    lineHeight: "clamp(24px, 1.458vw, 28px)",
                    textAlign: "center",
                    color: "#FFFFFF",
                    cursor: "pointer",
                    marginTop: "clamp(12px, 1.042vw, 20px)",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0097A7";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#00B8D4";
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
