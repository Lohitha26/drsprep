"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { BookOpen, Pencil, Clock, RefreshCw, BarChart3 } from "lucide-react";

const gradientBg = "linear-gradient(135deg, #00BCD4 0%, #00B9D1 16.67%, #00B7CE 33.33%, #00B4CA 50%, #00B1C7 66.67%, #00AFC4 83.33%, #00ACC1 100%)";

const studySteps = [
  { label: "Learn", icon: BookOpen, numberBg: gradientBg },
  { label: "Practice", icon: Pencil, numberBg: "#73DBE8" },
  { label: "Test", icon: Clock, numberBg: gradientBg },
  { label: "Revise", icon: RefreshCw, numberBg: "#73DBE8" },
  { label: "Improve", icon: BarChart3, numberBg: gradientBg },
];

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
          className="text-center"
          style={{ marginBottom: 'clamp(12px, 0.833vw, 16px)' }}
        >
          <h2
            style={{
              fontFamily: 'Poppins',
              fontWeight: 700,
              fontSize: 'clamp(28px, 1.875vw, 36px)',
              lineHeight: 'clamp(38px, 2.5vw, 48px)',
              textAlign: 'center',
              color: '#0F172A',
            }}
          >
            Built for How You Actually Study
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
          style={{ marginBottom: 'clamp(32px, 3.333vw, 64px)' }}
        >
          <p
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: 'clamp(14px, 0.9375vw, 18px)',
              lineHeight: 'clamp(22px, 1.523vw, 29.25px)',
              color: '#64748B',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            A seamless system that connects every step of your preparation &nbsp;- so nothing is missed, and everything improves together. ✓
          </p>
        </motion.div>

        {/* Cards Row */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div
            className="study-cards-row"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0',
            }}
          >
            {studySteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.label} style={{ display: 'flex', alignItems: 'center' }}>
                  {/* Card */}
                  <div
                    style={{
                      position: 'relative',
                      width: 'clamp(160px, 14.01vw, 269px)',
                      height: 'clamp(150px, 12.73vw, 244.55px)',
                      background: '#FFFFFF',
                      border: '1.34px solid #B1E3EA',
                      borderRadius: 'clamp(14px, 1.12vw, 21.5px)',
                      flexShrink: 0,
                    }}
                  >
                    {/* Number Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 'clamp(-9px, -0.77vw, -14.78px)',
                        right: 'clamp(-9px, -0.77vw, -14.78px)',
                        width: 'clamp(32px, 2.52vw, 48.37px)',
                        height: 'clamp(32px, 2.52vw, 48.37px)',
                        borderRadius: '50%',
                        background: step.numberBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Poppins',
                          fontWeight: 700,
                          fontSize: 'clamp(13px, 0.98vw, 18.81px)',
                          lineHeight: '27px',
                          color: '#FFFFFF',
                        }}
                      >
                        {index + 1}
                      </span>
                    </div>

                    {/* Icon Container */}
                    <div
                      style={{
                        position: 'absolute',
                        left: 'clamp(20px, 2.31vw, 44.34px)',
                        top: 'clamp(20px, 2.31vw, 44.34px)',
                        width: 'clamp(60px, 5vw, 110px)',
                        height: 'clamp(60px, 5vw, 110px)',
                        background: 'linear-gradient(135deg, #F2FDFF 0%, #C3F8FF 100%)',
                        borderRadius: 'clamp(14px, 1.12vw, 21.5px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconComponent
                        style={{
                          width: 'clamp(24px, 2.24vw, 43px)',
                          height: 'clamp(24px, 2.24vw, 43px)',
                          color: '#00BCD4',
                        }}
                        strokeWidth={2.5}
                      />
                    </div>

                    {/* Label */}
                    <div
                      style={{
                        position: 'absolute',
                        left: 'clamp(20px, 2.31vw, 44.34px)',
                        bottom: 'clamp(16px, 1.67vw, 32px)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Poppins',
                          fontWeight: 700,
                          fontSize: 'clamp(18px, 1.4vw, 26.87px)',
                          lineHeight: 'clamp(26px, 1.96vw, 37.62px)',
                          letterSpacing: '-0.67px',
                          color: '#1E293B',
                        }}
                      >
                        {step.label}
                      </span>
                    </div>
                  </div>

                  {/* Connector Line (except last) */}
                  {index < studySteps.length - 1 && (
                    <div
                      className="study-connector"
                      style={{
                        width: 'clamp(16px, 2.24vw, 43px)',
                        height: '2.69px',
                        background: '#E0F7FA',
                        flexShrink: 0,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
