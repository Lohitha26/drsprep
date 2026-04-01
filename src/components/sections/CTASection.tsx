"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import { useAuthStore } from "@/lib/store";
import Image from "next/image";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { openLogin, openExplore } = useAuthStore();

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #00B8D4 0%, #00B3CD 7.14%, #00AEC7 14.29%, #00AAC0 21.43%, #00A5BA 28.57%, #00A0B4 35.71%, #009CAD 42.86%, #0097A7 50%, #009AAB 57.14%, #009DAE 64.29%, #00A0B2 71.43%, #00A3B6 78.57%, #00A6BA 85.71%, #00A9BD 92.86%, #00ACC1 100%)'
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      >
        <Image
          src="/images/footer grid.png"
          alt=""
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 1 }}>
        <div className="cta-content-wrapper flex flex-col lg:flex-row items-center justify-between gap-0">
          {/* Left Content */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex-1 text-white"
            style={{ maxWidth: 'clamp(400px, 40vw, 768px)' }}
          >
            <h2
              style={{
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: 'clamp(32px, 2.5vw, 48px)',
                lineHeight: 'clamp(40px, 3.125vw, 60px)',
                letterSpacing: '0px',
                color: '#FFFFFF',
                marginBottom: 'clamp(16px, 1.25vw, 24px)'
              }}
            >
              Start Your Medical Exam Preparation Today
            </h2>
            <p
              style={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: 'clamp(16px, 1.042vw, 20px)',
                lineHeight: 'clamp(24px, 1.458vw, 28px)',
                letterSpacing: '0px',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: 'clamp(24px, 2.5vw, 48px)'
              }}
            >
              Join thousands of aspirants preparing smarter with DRSPREP.
            </p>
            <div className="cta-buttons flex flex-wrap gap-4">
              {/* Start Free Trial Button */}
              <button
                onClick={openLogin}
                className="btn-3d-white"
                style={{
                  width: 'clamp(180px, 11.035vw, 211.88px)',
                  height: 'clamp(48px, 2.917vw, 56px)',
                  borderRadius: 'clamp(8px, 0.521vw, 10px)',
                  background: '#FFFFFF',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  fontSize: 'clamp(14px, 0.9375vw, 18px)',
                  lineHeight: 'clamp(24px, 1.458vw, 28px)',
                  letterSpacing: '0px',
                  textAlign: 'center',
                  color: '#00B8D4',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Start Free Trial
              </button>

              {/* Explore Courses Button */}
              <button
                onClick={openExplore}
                className="btn-3d-ghost"
                style={{
                  width: 'clamp(180px, 11.223vw, 215.49px)',
                  height: 'clamp(48px, 2.93vw, 56.25px)',
                  borderRadius: 'clamp(8px, 0.489vw, 9.38px)',
                  background: 'transparent',
                  border: 'clamp(1.5px, 0.098vw, 1.88px) solid #FFFFFF',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  fontSize: 'clamp(14px, 0.879vw, 16.88px)',
                  lineHeight: 'clamp(22px, 1.367vw, 26.25px)',
                  letterSpacing: '0px',
                  textAlign: 'center',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                Explore Courses
              </button>
            </div>
          </motion.div>

          {/* Right Image Circle */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex-shrink-0"
          >
            <div
              style={{
                width: 'clamp(260px, 22vw, 380px)',
                height: 'clamp(260px, 22vw, 380px)',
                borderRadius: '50%',
                border: 'clamp(6px, 0.417vw, 8px) solid rgba(255, 255, 255, 0.2)',
                padding: 'clamp(6px, 0.417vw, 8px)',
                background: 'transparent',
                boxShadow: '0px 8px 24px 0px rgba(0, 0, 0, 0.15)',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <Image
                  src="/images/footer banner.png"
                  alt="Medical Professional"
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
