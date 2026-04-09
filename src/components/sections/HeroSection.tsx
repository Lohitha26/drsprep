"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
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
  const { openLogin, openGetStarted, openExplore } = useAuthStore();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 425);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <>
      <section 
        className="relative pt-16 sm:pt-18 lg:pt-20 pb-0 overflow-hidden"
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
        <div style={{ position: 'relative', zIndex: 2, paddingBottom: 'clamp(20px, 2vw, 40px)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
            style={{
              display: 'flex',
              alignItems: 'start',
              paddingBottom: '0'
            }}
          >
            {/* Left Content */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
              className="flex-1 w-full max-w-3xl"
              style={{ paddingRight: isMobile ? '0' : '39px' }}
            >
              <h1 
                className="hero-heading"
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: 'clamp(24px, 1.979vw, 27px)',
                  lineHeight: isMobile ? '146%' : '100%',
                  letterSpacing: '0px',
                  marginBottom: 'clamp(16px, 1.25vw, 24px)'
                }}
              >
                <div className="hero-heading-group">
                  <span style={{ color: '#006B7A', display: 'block', marginBottom: '16px' }}>
                    Get Video Lectures, QBank, Mock Tests,
                  </span>
                  <span style={{ color: '#006B7A', display: 'block', marginBottom: '16px' }}>
                    and 1-on-1 Live Classes with Subject
                  </span>
                </div>
               
                <span style={{ color: '#000000' }}>
                  Matter Experts - all in one place.
                </span>
              </h1>

              <p
                className="hero-description"
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
                className="hero-buttons flex flex-wrap gap-4"
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
                  onClick={openExplore}
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(90deg, #FFFFFF 0%, #C9F5FF 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(90deg, #E7F8FC 0%, #FFFFFF 100%)';
                  }}
                >
                  Explore Programs
                </button>
              </div>
            </motion.div>

            {/* Right - Phone with Orbiting Icons */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              className="flex-1 w-full max-w-2xl"
              style={{
                marginBottom: '-49px',
                marginLeft: isMobile ? '' : '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: isMobile ? '100%' : 'clamp(400px, 32vw, 580px)',
                  aspectRatio: '1 / 1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Dashed Ellipse Orbit */}
                <img
                  src="/icons/Ellipse.svg"
                  alt=""
                  style={{
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '82%',
                    height: '100%',
                    objectFit: 'contain',
                    pointerEvents: 'none',
                  }}
                />

                {/* Phone Image */}
                <img
                  src="/icons/phone image without background.png"
                  alt="DrsPrep App"
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />

                {/* Icon 1 - Video (top-left, ~10 o'clock) */}
                <motion.img
                  src="/icons/Icon-1 2.svg"
                  alt="Live Classes"
                  animate={{
                    y: [0, -18, 0],
                    x: [0, 2, 0],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                    delay: 0,
                  }}
                  style={{
                    position: 'absolute',
                    top: '15%',
                    left: '10%',
                    transform: 'translate(-50%, -50%)',
                    width: 'clamp(48px, 4vw, 72px)',
                    height: 'auto',
                    zIndex: 3,
                  }}
                />

                {/* Icon 4 - Pencil (top-right, ~2 o'clock) */}
                <motion.img
                  src="/icons/Icon-4svg.svg"
                  alt="Exam Writing"
                  animate={{
                    y: [0, -16, 0],
                    x: [0, -2, 0],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                    delay: 0.8,
                  }}
                  style={{
                    position: 'absolute',
                    top: '16%',
                    left: '79%',
                    transform: 'translate(-50%, -50%)',
                    width: 'clamp(48px, 4vw, 72px)',
                    height: 'auto',
                    zIndex: 3,
                  }}
                />

                {/* Icon 2 - Document (bottom-left, ~8 o'clock) */}
                <motion.img
                  src="/icons/Icon-2 2.svg"
                  alt="Curated Notes"
                  animate={{
                    y: [0, 16, 0],
                    x: [0, -2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                    delay: 1.6,
                  }}
                  style={{
                    position: 'absolute',
                    top: '39%',
                    left: '4%',
                    transform: 'translate(-50%, -50%)',
                    width: 'clamp(52px, 4vw, 83px)',
                    height: 'auto',
                    zIndex: 3,
                  }}
                />

                {/* Icon 3 - Brain (right, ~4 o'clock) */}
                <motion.img
                  src="/icons/Icon-3 2.svg"
                  alt="Smart Learning"
                  animate={{
                    y: [0, 18, 0],
                    x: [0, 2, 0],
                  }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                    delay: 2.4,
                  }}
                  style={{
                    position: 'absolute',
                    top: '40%',
                    left: '82%',
                    transform: 'translate(-50%, -50%)',
                    width: 'clamp(52px, 4vw, 83px)',
                    height: 'auto',
                    zIndex: 3,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
