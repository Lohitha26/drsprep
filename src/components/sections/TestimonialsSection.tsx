"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const mentors = [
  {
    name: "Dr. Anjali Menon",
  },
  {
    name: "Dr. Sameer Khanna",
  },
  {
    name: "Dr. Priya Sethi",
  },
];

export default function TestimonialsSection() {
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
            Beyond Learning  Master Exam Writing
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

        {/* Mentor Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{
            maxWidth: 'clamp(900px, 76.67vw, 1472px)',
            margin: '0 auto'
          }}
        >
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              variants={fadeInUp}
              custom={index}
              className="flex flex-col items-center mentor-card-hover"
              style={{
                background: '#FFFFFF',
                borderRadius: 'clamp(16px, 1.152vw, 22.11px)',
                padding: 'clamp(32px, 2.5vw, 48px) clamp(16px, 1.25vw, 24px)',
                height: 'clamp(300px, 18.536vw, 355.91px)'
              }}
            >
              {/* Avatar Circle */}
              <div
                style={{
                  width: 'clamp(100px, 6.91vw, 132.69px)',
                  height: 'clamp(100px, 6.91vw, 132.69px)',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #E0F7FA 0%, #DCF6F9 10%, #D7F5F8 20%, #D3F3F8 30%, #CEF2F7 40%, #C9F1F6 50%, #C5F0F5 60%, #C0EFF4 70%, #BCEDF4 80%, #B7ECF3 90%, #B2EBF2 100%)',
                  marginBottom: 'clamp(16px, 1.25vw, 24px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 'clamp(6px, 0.45vw, 8.63px)'
                }}
              >
                {/* White Inner Circle */}
                <div
                  style={{
                    width: 'clamp(86px, 5.99vw, 115px)',
                    height: 'clamp(86px, 5.99vw, 115px)',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Poppins',
                      fontWeight: 600,
                      fontSize: 'clamp(24px, 2.25vw, 43.16px)',
                      color: '#00B8D4'
                    }}
                  >
                    {mentor.name.split(' ')[1]?.[0] || ''}
                  </span>
                </div>
              </div>

              {/* Expert Mentor Tag */}
              <div
                style={{
                  background: '#E0F7FA',
                  padding: 'clamp(6px, 0.5vw, 8px) clamp(12px, 1vw, 16px)',
                  borderRadius: 'clamp(6px, 0.5vw, 8px)',
                  marginBottom: 'clamp(12px, 1vw, 16px)'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: 'clamp(12px, 0.864vw, 16.59px)',
                    lineHeight: 'clamp(16px, 1.152vw, 22.11px)',
                    letterSpacing: '0px',
                    textAlign: 'center',
                    color: '#00B8D4'
                  }}
                >
                  EXPERT MENTOR
                </span>
              </div>

              {/* Mentor Name */}
              <h3
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  fontSize: 'clamp(20px, 1.44vw, 27.64px)',
                  lineHeight: 'clamp(28px, 2.016vw, 38.7px)',
                  letterSpacing: '0px',
                  textAlign: 'center',
                  color: '#0F172A'
                }}
              >
                {mentor.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
