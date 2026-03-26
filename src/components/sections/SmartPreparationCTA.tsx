"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import { useAuthStore } from "@/lib/store";

export default function SmartPreparationCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { openLogin } = useAuthStore();

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
              marginBottom: 'clamp(8px, 0.625vw, 12px)'
            }}
          >
            Designed by Doctors. Built for MBBS Students.
          </h2>
          <p
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: 'clamp(16px, 1.042vw, 20px)',
              lineHeight: 'clamp(24px, 1.458vw, 28px)',
              letterSpacing: '0px',
              textAlign: 'center',
              color: '#64748B'
            }}
          >
            Focused on Real Exam Results.
          </p>
        </motion.div>

        {/* CTA Box */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative overflow-hidden"
          style={{
            maxWidth: 'clamp(900px, 76.61vw, 1471px)',
            height: 'clamp(180px, 12.5vw, 240px)',
            margin: '0 auto',
            borderRadius: 'clamp(16px, 1.25vw, 24px)',
            background: '#00B8D4',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(24px, 2.5vw, 48px)',
            position: 'relative'
          }}
        >
          {/* Gradient Grid Lines */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(269.82deg, rgba(255, 255, 255, 0.3) -22.77%, rgba(255, 255, 255, 0) 144.27%)',
              opacity: 0.3,
              pointerEvents: 'none'
            }}
          >
            {/* Vertical lines */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`v-${i}`}
                style={{
                  position: 'absolute',
                  left: `${i * 12.5}%`,
                  top: 0,
                  bottom: 0,
                  width: '1px',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)'
                }}
              />
            ))}
            {/* Horizontal lines */}
            {[...Array(4)].map((_, i) => (
              <div
                key={`h-${i}`}
                style={{
                  position: 'absolute',
                  top: `${i * 33.33}%`,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)'
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            {/* Main Heading */}
            <h3
              style={{
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: 'clamp(24px, 1.875vw, 36px)',
                lineHeight: 'clamp(28px, 2.083vw, 40px)',
                letterSpacing: '0px',
                textAlign: 'center',
                color: '#FFFFFF',
                marginBottom: 'clamp(8px, 0.625vw, 12px)'
              }}
            >
              Start Your Smart Preparation Today
            </h3>

            {/* Subheading */}
            <p
              style={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: 'clamp(14px, 0.9375vw, 18px)',
                lineHeight: 'clamp(22px, 1.458vw, 28px)',
                letterSpacing: '0px',
                textAlign: 'center',
                color: '#FFFFFF',
                marginBottom: 'clamp(20px, 2.083vw, 40px)'
              }}
            >
              Join DrsPrep and experience a better way to learn, practice, and succeed.
            </p>

            {/* Join Now Button */}
            <button
              onClick={openLogin}
              className=""
              style={{
                width: 'clamp(160px, 9.167vw, 176px)',
                height: 'clamp(48px, 2.917vw, 56px)',
                borderRadius: '1000px',
                background: '#FFFFFF',
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: 'clamp(14px, 0.9375vw, 18px)',
                lineHeight: '23.85px',
                color: '#0097A7',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                position: 'relative',
                paddingRight: 'clamp(48px, 2.917vw, 56px)',
              }}
            >
              Join Now
              <div
                style={{
                  width: 'clamp(48px, 2.917vw, 56px)',
                  height: 'clamp(48px, 2.917vw, 56px)',
                  borderRadius: '100px',
                  background: '#0097A7',
                  border: '3px solid #FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  right: 0
                }}
              >
                <ArrowRight style={{ color: '#FFFFFF', width: '24px', height: '24px' }} />
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
