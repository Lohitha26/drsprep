"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import { ArrowRight, Check } from "lucide-react";

const studySteps = ["Learn", "Practice", "Test", "Revise", "Improve"];

export default function HowYouActuallyStudy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-7"
        >
          <h2
            style={{
              fontFamily: 'Poppins',
              fontWeight: 700,
              fontSize: 'clamp(28px, 1.875vw, 36px)',
              lineHeight: 'clamp(38px, 2.5vw, 48px)',
              letterSpacing: '0px',
              textAlign: 'center',
              color: '#0F172A',
            }}
          >
            Built for How You Actually Study
          </h2>
        </motion.div>

        {/* Study Steps Flow */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-3 mb-8"
          style={{
            maxWidth: 'clamp(400px, 24.34vw, 467.31px)',
            margin: '0 auto clamp(20px, 1.875vw, 36px) auto'
          }}
        >
          {studySteps.map((step, index) => (
            <div key={step} className="flex items-center">
              {/* Step Text */}
              <motion.span
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index}
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: 'clamp(16px, 0.9375vw, 18px)',
                  lineHeight: 'clamp(24px, 1.458vw, 28px)',
                  letterSpacing: '0px',
                  textAlign: 'center',
                  color: '#0097A7',
                  whiteSpace: 'nowrap'
                }}
              >
                {step}
              </motion.span>
              
              {/* Arrow Icon (except for last item) */}
              {index < studySteps.length - 1 && (
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={index + 0.5}
                  className="mx-1 lg:mx-2"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <ArrowRight
                    style={{
                      width: 'clamp(14px, 0.833vw, 16px)',
                      height: 'clamp(14px, 0.833vw, 16px)',
                      color: '#0097A7',
                      strokeWidth: 'clamp(1px, 0.087vw, 1.67px)'
                    }}
                  />
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Bottom Description */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
          style={{
            maxWidth: 'clamp(600px, 62.5vw, 1200px)'
          }}
        >
          <p
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: 'clamp(16px, 0.9375vw, 18px)',
              lineHeight: 'clamp(26px, 1.523vw, 29.25px)',
              letterSpacing: '0px',
              textAlign: 'center',
              color: '#64748B',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(6px, 0.417vw, 8px)'
            }}
          >
            <span>
              A seamless system that connects every step of your preparation - so nothing is missed, and everything improves together. ✓
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
