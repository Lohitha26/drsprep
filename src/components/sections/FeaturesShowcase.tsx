"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import { ClipboardCheck, Lightbulb, Image as ImageIcon, FileText, Check } from "lucide-react";

const features = [
  {
    icon: ClipboardCheck,
    title: "Advanced Mock Tests",
    description: "Experience real exam simulation with comprehensive analysis.",
    points: [
      "Real exam simulation",
      "AI performance analysis",
      "Detailed solutions"
    ],
    imagePosition: "left"
  },
  {
    icon: Lightbulb,
    title: "Smart Question Bank",
    description: "Master concepts with intelligent practice questions.",
    points: [
      "Topic-wise practice",
      "Explanation based learning",
      "Performance tracking"
    ],
    imagePosition: "right"
  },
  {
    icon: ImageIcon,
    title: "Clinical Image Based Questions",
    description: "Practice visual diagnosis with clinical case scenarios.",
    points: [
      "Real clinical case questions",
      "Diagnosis practice",
      "Exam style learning"
    ],
    imagePosition: "left"
  },
  {
    icon: FileText,
    title: "Rapid Revision Notes",
    description: "Quick revision with high-yield content summaries.",
    points: [
      "High-yield summaries",
      "Quick concept refresh",
      "Perfect for last revision"
    ],
    imagePosition: "right"
  }
];

export default function FeaturesShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section id="features-showcase" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={index}
            className="flex flex-col lg:flex-row items-center gap-12 mb-20"
            style={{
              flexDirection: isMobile ? 'column' : (feature.imagePosition === "right" ? "row-reverse" : "row")
            }}
          >
            {/* Image Container */}
            <motion.div
              variants={feature.imagePosition === "left" ? fadeInLeft : fadeInRight}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex-1"
              style={{
                width: '100%',
                maxWidth: isMobile ? '100%' : 'clamp(400px, 36.21vw, 695.13px)',
                height: isMobile ? '250px' : 'clamp(300px, 24.97vw, 479.4px)',
                background: 'linear-gradient(135deg, #E0F7FA 0%, #E2F7FB 14.29%, #E5F8FB 28.57%, #E7F8FC 42.86%, #E9F8FD 57.14%, #EBF8FE 71.43%, #EEF9FE 85.71%, #F0F9FF 100%)',
                borderRadius: 'clamp(14px, 1.052vw, 20.19px)',
                padding: 'clamp(24px, 2.103vw, 40.37px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Image Placeholder */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background: '#FFFFFF',
                  borderRadius: 'clamp(10px, 0.833vw, 16px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ImageIcon
                  style={{
                    width: 'clamp(60px, 5.208vw, 100px)',
                    height: 'clamp(60px, 5.208vw, 100px)',
                    color: '#B2EBF2',
                    strokeWidth: 1.5
                  }}
                />
              </div>
            </motion.div>

            {/* Content Container */}
            <motion.div
              variants={feature.imagePosition === "left" ? fadeInRight : fadeInLeft}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex-1"
              style={{
                width: '100%',
                maxWidth: isMobile ? '100%' : 'clamp(400px, 36.21vw, 695.13px)',
                minHeight: isMobile ? 'unset' : 'clamp(300px, 21.72vw, 416.95px)'
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 'clamp(50px, 3.68vw, 70.65px)',
                  height: 'clamp(50px, 3.68vw, 70.65px)',
                  borderRadius: 'clamp(14px, 1.052vw, 20.19px)',
                  background: 'linear-gradient(135deg, #00B8D4 0%, #00B5D0 8.33%, #00B2CC 16.67%, #00B0C9 25%, #00ADC5 33.33%, #00AAC1 41.67%, #00A7BD 50%, #00A5BA 58.33%, #00A2B6 66.67%, #009FB2 75%, #009CAE 83.33%, #009AAB 91.67%, #0097A7 100%)',
                  border: 'clamp(2px, 0.115vw, 2.21px) solid #FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'clamp(16px, 1.25vw, 24px)'
                }}
              >
                <feature.icon
                  style={{
                    width: 'clamp(24px, 1.875vw, 36px)',
                    height: 'clamp(24px, 1.875vw, 36px)',
                    color: '#FFFFFF'
                  }}
                />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: 'clamp(28px, 2.366vw, 45.42px)',
                  lineHeight: 'clamp(32px, 2.628vw, 50.46px)',
                  letterSpacing: '0px',
                  color: '#0F172A',
                  marginBottom: 'clamp(12px, 0.833vw, 16px)'
                }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: 'clamp(16px, 1.183vw, 22.71px)',
                  lineHeight: 'clamp(24px, 1.922vw, 36.9px)',
                  letterSpacing: '0px',
                  color: '#64748B',
                  marginBottom: 'clamp(24px, 2.083vw, 40px)'
                }}
              >
                {feature.description}
              </p>

              {/* Points */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(10px, 0.789vw, 15.14px)',
                  paddingTop: 'clamp(8px, 0.526vw, 10.09px)'
                }}
              >
                {feature.points.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3"
                  >
                    <Check
                      style={{
                        width: 'clamp(18px, 1.25vw, 24px)',
                        height: 'clamp(18px, 1.25vw, 24px)',
                        color: '#00B8D4',
                        strokeWidth: 'clamp(1.5px, 0.082vw, 1.58px)',
                        flexShrink: 0
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'Poppins',
                        fontWeight: 400,
                        fontSize: 'clamp(16px, 1.052vw, 20.19px)',
                        lineHeight: 'clamp(24px, 1.577vw, 30.28px)',
                        letterSpacing: '0px',
                        color: '#0F172A'
                      }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
