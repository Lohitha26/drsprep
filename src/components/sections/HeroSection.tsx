"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/lib/store";
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer, floatAnimation } from "@/lib/animations";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Video, ClipboardCheck, BookOpen, Image } from "lucide-react";

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

  const handleContinue = () => {
    openLogin();
  };

  return (
    <>
      <section className="relative pt-24 pb-16 overflow-hidden" style={{background: 'linear-gradient(135deg, #E0F7FA 0%, #E2F7FB 7.14%, #E5F8FB 14.29%, #E7F8FC 21.43%, #E9F8FD 28.57%, #EBF8FE 35.71%, #EEF9FE 42.86%, #F0F9FF 50%, #EEF8FF 58.33%, #EBF8FF 66.67%, #E9F7FF 75%, #E6F6FE 83.33%, #E4F6FE 91.67%, #E1F5FE 100%)'}}>
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
                <h1 className="top-[1px] w-[460px] h-[36px] text-center" style={{ fontFamily: 'var(--font-family-poppins)', fontWeight: 'var(--font-weight-bold)', fontStyle: 'normal', fontSize: 'var(--font-size-3xl)', lineHeight: 'var(--line-height-loose)', letterSpacing: 'var(--letter-spacing-none)', color: 'var(--color-text-primary)' }}>
                  Access Free Modules Anytime
                </h1>
                <p className="mb-6 text-center p-4" style={{ fontFamily: 'var(--font-family-poppins)', fontWeight: 'var(--font-weight-normal)', fontStyle: 'normal', fontSize: 'var(--font-size-lg)', lineHeight: 'var(--line-height-relaxed)', letterSpacing: 'var(--letter-spacing-none)', color: 'var(--color-text-secondary)' }}>
                  Get Video Lectures, QBank, Mock Tests & More
                </p>

                <div className="mb-4">
                  <label className="mb-1.5 block" style={{ fontFamily: 'var(--font-family-poppins)', fontWeight: 'var(--font-weight-medium)', fontStyle: 'normal', fontSize: 'var(--font-size-sm)', lineHeight: 'var(--line-height-normal)', letterSpacing: 'var(--letter-spacing-none)', color: 'var(--color-text-primary)' }}>
                    Mobile Number
                  </label>
                  <div className="flex items-center overflow-hidden" style={{ backgroundColor: '#F3F4F6', borderRadius: '10px', height: '48px', padding: '24px 12px' }}>
                    <div className="flex items-center" style={{ width: '102.85713958740234px', height: '48px', borderRadius: '8.57px', paddingLeft: '13.71px', gap: '6.86px', backgroundColor: '#F3F4F6' }}>
                      <img src="/icons/🇮🇳.png" alt="India" className="w-5 h-5" />
                      <span style={{ fontFamily: 'var(--font-family-poppins)', fontWeight: 'var(--font-weight-medium)', fontStyle: 'normal', fontSize: '13.71px', lineHeight: '20.57px', letterSpacing: 'var(--letter-spacing-none)', color: 'var(--color-text-primary)' }}>+91</span>
                    </div>
                    <div style={{ paddingLeft: '31px' }}>
                      <Input
                        type="tel"
                        placeholder="Enter mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                        className="border-0 focus-visible:ring-0 shadow-none bg-transparent flex-1"
                        maxLength={10}
                        style={{ fontFamily: 'var(--font-family-poppins)', fontWeight: 'var(--font-weight-normal)', fontStyle: 'normal', fontSize: 'var(--font-size-sm)', lineHeight: 'var(--line-height-tight)', letterSpacing: 'var(--letter-spacing-none)', color: 'var(--color-text-secondary)', width: '369.1428527832031px', height: '48px', borderRadius: '10px', padding: '0px' }}
                      />
                    </div>
                  </div>
                </div>

                <label className="flex items-center gap-2 cursor-pointer mb-5">
                  <input
                    type="checkbox"
                    checked={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.checked)}
                    className="w-4 h-4 rounded"
                    style={{
                      appearance: 'none',
                      WebkitAppearance: 'none',
                      MozAppearance: 'none',
                      backgroundColor: 'var(--checkbox-bg)',
                      borderWidth: '1px',
                      borderTopStyle: 'solid',
                      borderColor: 'var(--checkbox-border)',
                      boxShadow: 'var(--shadow-sm)',
                      width: 'var(--checkbox-size)',
                      height: '15px',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  />
                  <span style={{ fontFamily: 'var(--font-family-poppins)', fontWeight: 'var(--font-weight-medium)', fontStyle: 'normal', fontSize: 'var(--font-size-sm)', lineHeight: 'var(--line-height-normal)', letterSpacing: 'var(--letter-spacing-none)', color: 'var(--color-text-primary)' }}>Get OTP via WhatsApp</span>
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

                <p className="mt-3" style={{ fontFamily: 'var(--font-family-poppins)', fontWeight: 'var(--font-weight-normal)', fontStyle: 'normal', fontSize: 'var(--font-size-xs)', lineHeight: '16px', letterSpacing: 'var(--letter-spacing-none)', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
                  By continuing, you agree to our{" "}
                  <span style={{ color: 'var(--color-secondary)', textDecoration: 'underline', cursor: 'pointer' }}>Terms of Service</span>{" "}
                  and{" "}
                  <span style={{ color: 'var(--color-secondary)', textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</span>
                </p>
              </div>
            </motion.div>

            {/* Right Content - Doctor Image */}
            {/* <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="flex-1 hidden lg:flex justify-center relative"
          > */}
            {/* <motion.div
              animate={floatAnimation}
              className="relative w-80 h-80"
            > */}
            {/* <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#00B8A9]/20 to-[#00B8D4]/10 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#00B8A9]/30 to-[#00B8D4]/20 flex items-center justify-center">
                  <div className="text-6xl">👨‍⚕️</div>
                </div>
              </div> */}
            {/* Decorative stethoscope icons */}
            {/* <div className="absolute top-4 right-0 text-[#00B8A9]/30 text-4xl">⚕️</div>
              <div className="absolute bottom-8 left-0 text-[#00B8A9]/20 text-3xl">🩺</div> */}
            {/* </motion.div> */}
            {/* </motion.div> */}

          </div>

          {/* Feature Pills */}

        </div>
      </section>

      <section className="mt-16" style={{padding: '100px'}}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-6"
        >
          {featurePills.map((pill, i) => (
            <AnimatedSection key={pill.label} variant={fadeInUp} delay={i * 0.1}>
              <div 
                className="relative"
                style={{
                  width: '186.52px',
                  height: '132px',
                  background: 'linear-gradient(180deg, #EAFCFF 0%, #FFFFFF 100%)',
                  borderRadius: '16px'
                }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    position: 'absolute',
                    width: '48px',
                    height: '48px',
                    left: '69.26px',
                    top: '24px',
                    background: 'linear-gradient(135deg, #00B8D4 0%, #00B5D0 8.33%, #00B2CC 16.67%, #00B0C9 25%, #00ADC5 33.33%, #00AAC1 41.67%, #00A7BD 50%, #00A5BA 58.33%, #00A2B6 66.67%, #009FB2 75%, #009CAE 83.33%, #009AAB 91.67%, #0097A7 100%)',
                    borderRadius: '20px',
                    padding: '0px 12px'
                  }}
                >
                  <pill.icon className="w-6 h-6 text-white" />
                </div>
                <div
                  className="absolute"
                  style={{
                    position: 'absolute',
                    width: '138.52px',
                    height: '24px',
                    left: '24px',
                    top: '84px'
                  }}
                >
                  <span
                    className="block"
                    style={{
                      fontFamily: 'var(--font-family-poppins)',
                      fontWeight: 'var(--font-weight-semibold)',
                      fontStyle: 'normal',
                      fontSize: '16px',
                      lineHeight: '24px',
                      letterSpacing: '0px',
                      textAlign: 'center',
                      color: 'var(--color-text-primary)'
                    }}
                  >
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
