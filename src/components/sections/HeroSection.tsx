"use client";

import { motion } from "framer-motion";
import { useAuthStore } from "@/lib/store";
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from "@/lib/animations";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Video, ClipboardCheck, BookOpen, Image, ArrowRight } from "lucide-react";
import styles from "./HeroSection.module.css";

const featurePills = [
  { icon: Video, label: "1-on-1 Live Classes" },
  { icon: ClipboardCheck, label: "Faculty-Curated Notes" },
  { icon: BookOpen, label: "Recorded Video Support" },
  { icon: Image, label: "Exam Writing Training" },
];

export default function HeroSection() {
  const { openLogin, openGetStarted } = useAuthStore();

  return (
    <>
      <section 
        className="relative pt-16 sm:pt-18 lg:pt-20 pb-16 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #E0F7FA 0%, #E2F7FB 7.14%, #E5F8FB 14.29%, #E7F8FC 21.43%, #E9F8FD 28.57%, #EBF8FE 35.71%, #EEF9FE 42.86%, #F0F9FF 50%, #EEF8FF 58.33%, #EBF8FF 66.67%, #E9F7FF 75%, #E6F6FE 83.33%, #E4F6FE 91.67%, #E1F5FE 100%)',
          position: 'relative'
        }}
      >
        {/* Container image overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/images/Container.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 1,
            zIndex: 1
          }}
        />
        
        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="flex flex-col lg:flex-row items-center justify-between gap-12"
            style={{
              display: 'flex',
              alignItems: 'start'
            }}
          >
            {/* Left Content */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
              className="flex-1 w-full max-w-3xl"
            >
              <h1 
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: 'clamp(24px, 1.979vw, 38px)',
                  lineHeight: '100%',
                  letterSpacing: '0px',
                  marginBottom: 'clamp(16px, 1.25vw, 24px)'
                }}
              >
                <span style={{ color: '#006B7A', display: 'block', marginBottom: '16px' }}>
                  Get Video Lectures, QBank, Mock Tests,
                </span>
                <span style={{ color: '#006B7A', display: 'block', marginBottom: '16px' }}>
                  and 1-on-1 Live Classes with Subject
                </span>
               
                <span style={{ color: '#000000' }}>
                  Matter Experts - all in one place.
                </span>
              </h1>

              <p
                style={{
                  fontFamily: 'Poppins',
                  paddingTop:'4%',
                  fontWeight: 400,
                  fontSize: 'clamp(16px, 1.25vw, 24px)',
                  lineHeight: '150%',
                  letterSpacing: '0px',
                  color: '#006B7A',
                  maxWidth: 'clamp(400px, 37.03vw, 711px)',
                  marginBottom: 'clamp(24px, 2.5vw, 48px)'
                }}
              >
                <span>
                  Unlock personalized 1-on-1 expert-led live classes designed
                  to help you master concepts and excel in exams
                  with confidence.
                </span>
              </p>

              <div 
                className="flex flex-wrap gap-4"
                style={{ paddingTop: '8%' }}
              >
                {/* Get Started Button */}
                <button
                  onClick={openGetStarted}
                  className="btn-3d-primary"
                  style={{
                    width: 'clamp(180px, 10.78vw, 207px)',
                    height: 'clamp(48px, 2.917vw, 56px)',
                    borderRadius: '1000px',
                    background: '#00ACC6',
                    boxShadow: '0px 4px 4px 0px #79DFEE inset',
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    fontSize: 'clamp(14px, 0.9375vw, 18px)',
                    lineHeight: '23.85px',
                    color: '#FFFFFF',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    position: 'relative',
                    paddingRight: 'clamp(48px, 2.917vw, 56px)'
                  }}
                >
                  Get Started
                  <div
                    style={{
                      width: 'clamp(48px, 2.917vw, 56px)',
                      height: 'clamp(48px, 2.917vw, 56px)',
                      borderRadius: '100px',
                      background: '#FFFFFF',
                      border: '3px solid #00ACC6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'absolute',
                      right: 0
                    }}
                  >
                    <ArrowRight style={{ color: '#00ACC6', width: '24px', height: '24px' }} />
                  </div>
                </button>

                {/* Explore Programs Button */}
                <button
                  onClick={() => {
                    const element = document.getElementById('features-showcase');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="btn-3d-outline"
                  style={{
                    width: 'clamp(180px, 11.04vw, 212px)',
                    height: 'clamp(48px, 2.917vw, 56px)',
                    borderRadius: '1000px',
                    background: 'linear-gradient(90deg, #E7F8FC 0%, #FFFFFF 100%)',
                    border: '1px solid #00B8D4',
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    fontSize: 'clamp(14px, 0.9375vw, 18px)',
                    lineHeight: '23.85px',
                    color: '#00ACC6',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  Explore Programs
                </button>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              className="flex-1 w-full max-w-2xl"
            >
              <img 
                src="/images/Home banner.png" 
                alt="Medical professionals" 
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </motion.div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
