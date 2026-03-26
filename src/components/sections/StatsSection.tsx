"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import { Users, FileText, Video, Award } from "lucide-react";

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const stats = [
  { icon: Users, value: 50, suffix: "K+", label: "Active Students" },
  { icon: FileText, value: 10, suffix: "M+", label: "Questions Practiced" },
  { icon: Video, value: 600, suffix: "+", label: "Lecture Hours" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref} 
      className="py-20"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left - Stats Card */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{
              width: '100%',
              maxWidth: 'clamp(400px, 29.53vw, 567px)',
              height: 'clamp(320px, 21.15vw, 406px)',
              borderRadius: 'clamp(12px, 0.833vw, 16px)',
              border: '1px solid #F3F4F6',
              padding: 'clamp(32px, 2.552vw, 49px) clamp(32px, 2.552vw, 49px) clamp(8px, 0.052vw, 1px) clamp(32px, 2.552vw, 49px)',
              background: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(24px, 1.667vw, 32px)'
            }}
          >
            <h3
              style={{
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: 'clamp(24px, 1.563vw, 30px)',
                lineHeight: 'clamp(30px, 1.875vw, 36px)',
                letterSpacing: '0px',
                color: '#0F172A'
              }}
            >
              Learning Impact
            </h3>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(20px, 1.25vw, 24px)'
              }}
            >
              {stats.map((stat) => {
                const count = useCountUp(stat.value, 2000, isInView);
                return (
                  <div 
                    key={stat.label} 
                    className="flex items-center gap-4"
                  >
                    <div
                      style={{
                        width: 'clamp(48px, 3.333vw, 64px)',
                        height: 'clamp(48px, 3.333vw, 64px)',
                        borderRadius: 'clamp(12px, 0.833vw, 16px)',
                        background: 'linear-gradient(135deg, #00B8D4 0%, #00B5D0 8.33%, #00B2CC 16.67%, #00B0C9 25%, #00ADC5 33.33%, #00AAC1 41.67%, #00A7BD 50%, #00A5BA 58.33%, #00A2B6 66.67%, #009FB2 75%, #009CAE 83.33%, #009AAB 91.67%, #0097A7 100%)',
                        border: '2px solid #FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <stat.icon
                        style={{
                          width: 'clamp(24px, 1.667vw, 32px)',
                          height: 'clamp(24px, 1.667vw, 32px)',
                          color: '#FFFFFF'
                        }}
                      />
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: 'Poppins',
                          fontWeight: 700,
                          fontSize: 'clamp(24px, 1.563vw, 30px)',
                          lineHeight: 'clamp(30px, 1.875vw, 36px)',
                          letterSpacing: '0px',
                          color: '#0F172A'
                        }}
                      >
                        {count}{stat.suffix}
                      </p>
                      <p
                        style={{
                          fontFamily: 'Poppins',
                          fontWeight: 400,
                          fontSize: 'clamp(14px, 0.833vw, 16px)',
                          lineHeight: 'clamp(20px, 1.25vw, 24px)',
                          letterSpacing: '0px',
                          color: '#64748B'
                        }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Achievement Card */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{
              width: '100%',
              maxWidth: 'clamp(400px, 29.53vw, 567px)',
              height: 'clamp(320px, 21.15vw, 406px)',
              borderRadius: 'clamp(12px, 0.833vw, 16px)',
              background: 'linear-gradient(135deg, #00B8D4 0%, #00B5D0 8.33%, #00B2CC 16.67%, #00B0C9 25%, #00ADC5 33.33%, #00AAC1 41.67%, #00A7BD 50%, #00A5BA 58.33%, #00A2B6 66.67%, #009FB2 75%, #009CAE 83.33%, #009AAB 91.67%, #0097A7 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(32px, 2.5vw, 48px)',
              textAlign: 'center'
            }}
          >
            <div
              style={{
                width: 'clamp(64px, 4.167vw, 80px)',
                height: 'clamp(64px, 4.167vw, 80px)',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'clamp(20px, 1.667vw, 32px)'
              }}
            >
              <Award
                style={{
                  width: 'clamp(32px, 2.083vw, 40px)',
                  height: 'clamp(32px, 2.083vw, 40px)',
                  color: '#FFFFFF'
                }}
              />
            </div>
            <h3
              style={{
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: 'clamp(28px, 1.875vw, 36px)',
                lineHeight: 'clamp(32px, 2.083vw, 40px)',
                letterSpacing: '0px',
                textAlign: 'center',
                color: '#FFFFFF',
                marginBottom: 'clamp(12px, 0.833vw, 16px)'
              }}
            >
              Achievement
            </h3>
            <p
              style={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: 'clamp(18px, 1.25vw, 24px)',
                lineHeight: 'clamp(28px, 2.031vw, 39px)',
                letterSpacing: '0px',
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: 'clamp(8px, 0.625vw, 12px)'
              }}
            >
              Best Medical Learning Platform Award
            </p>
            <p
              style={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: 'clamp(14px, 0.9375vw, 18px)',
                lineHeight: 'clamp(22px, 1.458vw, 28px)',
                letterSpacing: '0px',
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              Trusted by thousands of medical aspirants
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
