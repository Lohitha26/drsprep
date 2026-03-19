"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/lib/store";
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer, floatAnimation } from "@/lib/animations";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Video, ClipboardCheck, BookOpen, Image } from "lucide-react";
import { validatePhoneNumber, formatPhoneNumberInput, PHONE_ERRORS } from "@/lib/phone-validation";
import styles from "./HeroSection.module.css";

const featurePills = [
  { icon: Video, label: "Video Lectures" },
  { icon: ClipboardCheck, label: "Smart Tests" },
  { icon: BookOpen, label: "QBank" },
  { icon: Image, label: "Image Questions" },
];

export default function HeroSection() {
  const { openLogin } = useAuthStore();
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handleContinue = () => {
    const validation = validatePhoneNumber(phone);
    if (!validation.isValid) {
      setPhoneError(validation.error || PHONE_ERRORS.GENERIC);
      return;
    }
    setPhoneError("");
    openLogin();
  };

  const handlePhoneChange = (value: string) => {
    const formattedPhone = formatPhoneNumberInput(value);
    setPhone(formattedPhone);
    
    // Only clear error if the input becomes valid
    if (phoneError && validatePhoneNumber(formattedPhone).isValid) {
      setPhoneError("");
    }
  };

  return (
    <>
      <section className={`relative pt-24 pb-16 overflow-hidden ${styles.heroBackground}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Left Content */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
              className="flex-1 w-full max-w-lg mx-auto lg:mx-0"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h1 className={`text-center ${styles.heroTitle}`}>
                  Access Free Modules Anytime
                </h1>
                <p className={`mb-6 text-center p-4 ${styles.heroSubtitle}`}>
                  Get Video Lectures, QBank, Mock Tests & More
                </p>

                <div className="mb-4">
                  <label className="mb-1.5 block" style={{ fontFamily: 'var(--font-family-poppins)', fontWeight: 'var(--font-weight-medium)', fontStyle: 'normal', fontSize: 'var(--font-size-sm)', lineHeight: 'var(--line-height-normal)', letterSpacing: 'var(--letter-spacing-none)', color: 'var(--color-text-primary)' }}>
                    Mobile Number
                  </label>
                  <div className={styles.phoneInputContainer}>
                    <div className={styles.countryCodeContainer}>
                      <img src="/icons/india.png" alt="India" className="w-5 h-5" />
                      <span className={styles.countryCodeText}>+91</span>
                    </div>
                    <div style={{ paddingLeft: '31px' }}>
                      <Input
                        type="tel"
                        placeholder="Enter mobile number"
                        value={phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        className="border-0 focus-visible:ring-0 shadow-none bg-transparent flex-1"
                        maxLength={10}
                        style={{ width: '369px', height: '48px', borderRadius: '10px', padding: '0px' }}
                      />
                    </div>
                  </div>
                  {phoneError && (
                    <p className={styles.errorMessage}>{phoneError}</p>
                  )}
                </div>

                <label className="flex items-center gap-2 cursor-pointer mb-5">
                  <input
                    type="checkbox"
                    checked={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.checked)}
                    className={styles.checkbox}
                    aria-checked={whatsapp}
                    aria-label="Get OTP via WhatsApp"
                    role="checkbox"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setWhatsapp(!whatsapp);
                      }
                    }}
                  />
                  <span className={styles.checkboxLabel}>Get OTP via WhatsApp</span>
                </label>

                <Button
                  onClick={handleContinue}
                  className="w-full h-12 rounded-lg"
                  style={{
                    fontFamily: 'var(--font-family-poppins)',
                    fontWeight: 'var(--font-weight-medium)',
                    fontStyle: 'normal',
                    fontSize: 'var(--font-size-lg)',
                    lineHeight: 'var(--line-height-relaxed)',
                    letterSpacing: 'var(--letter-spacing-none)',
                    textAlign: 'center',
                    color: 'var(--color-white)',
                    backgroundColor: 'var(--color-primary)'
                  }}
                >
                  Continue
                </Button>

                <p className={styles.termsText}>
                  By continuing, you agree to our{" "}
                  <Link href="/privacy" className={styles.termsLink}>Privacy Policy</Link>{" "}
                  and{" "}
                  <span className={styles.termsLink}>Terms of Service</span>
                </p>
              </div>
            </motion.div>


          </div>

          {/* Feature Pills */}

        </div>
      </section>

      <section className={styles.featureSection}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-6"
        >
          {featurePills.map((pill, i) => (
            <AnimatedSection key={pill.label} variant={fadeInUp} delay={i * 0.1}>
              <div className={styles.featurePill}>
                <div className={styles.featureIconContainer}>
                  <pill.icon className="w-6 h-6 text-white" />
                </div>
                <div className={styles.featureTextContainer}>
                  <span className={styles.featureText}>
                    {pill.label}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </motion.div>
      </section>
    </>
  );
}
