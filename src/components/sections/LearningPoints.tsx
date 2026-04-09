"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import Image from "next/image";

const learningPoints = [
  "How to write short answers",
  "How to present in university exams",
  "How to structure long answers",
  "How to answer viva questions confidently",
];

export default function LearningPoints() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F1FCFF 0%, #FFFFFF 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
          style={{
            maxWidth: 'clamp(600px, 55.47vw, 1065px)',
            margin: '0 auto clamp(40px, 4.167vw, 80px) auto'
          }}
        >
          <h2
            style={{
              fontFamily: 'Poppins',
              fontWeight: 700,
              fontSize: 'clamp(28px, 1.875vw, 36px)',
              lineHeight: 'clamp(32px, 2.083vw, 40px)',
              letterSpacing: '0px',
              textAlign: 'center',
              color: '#0F172A',
              marginBottom: 'clamp(12px, 0.833vw, 16px)'
            }}
          >
            How Your Learning Happens
          </h2>
          <p
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: 'clamp(14px, 0.9375vw, 18px)',
              lineHeight: 'clamp(22px, 1.458vw, 28px)',
              letterSpacing: '0px',
              textAlign: 'center',
              color: '#64748B'
            }}
          >
            Structured mentorship from mastering concepts to acing exams, all personalized to your learning style
          </p>
        </motion.div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content - Learning Points */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex-1 w-full"
            style={{
              maxWidth: 'clamp(400px, 29.53vw, 567px)'
            }}
          >
            <div className="space-y-6">
              {learningPoints.map((point, index) => (
                <motion.div
                  key={point}
                  variants={fadeInUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={index}
                  className="flex items-center gap-4"
                >
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                      rotate: [0, 3, 0, -3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'loop',
                      ease: 'easeInOut',
                      delay: index * 0.4,
                    }}
                    style={{
                      flexShrink: 0,
                      width: 'clamp(32px, 2.5vw, 48px)',
                      height: 'clamp(32px, 2.5vw, 48px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Image
                      src="/icons/Learning tick.svg"
                      alt="Check"
                      width={48}
                      height={48}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </motion.div>
                  <p
                    style={{
                      fontFamily: 'Poppins',
                      fontWeight: 600,
                      fontSize: 'clamp(16px, 1.254vw, 24.08px)',
                      lineHeight: 'clamp(22px, 1.756vw, 33.71px)',
                      letterSpacing: '0px',
                      color: '#0F172A'
                    }}
                  >
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex-1 w-full flex justify-center lg:justify-end"
          >
            <img
              src="/images/Learning Image.png"
              alt="Learning illustration"
              style={{
                width: 'clamp(300px, 22.34vw, 429px)',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
