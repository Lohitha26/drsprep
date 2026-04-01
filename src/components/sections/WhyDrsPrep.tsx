"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  Video,
  Users,
  Lightbulb,
  FileText,
  RefreshCw,
  Brain,
  PenTool,
  Monitor,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Video,
    title: "Complete Learning Ecosystem",
    desc: "Everything in one place — video lectures, notes, QBank, flashcards, and AI planning.",
    point: "No need to switch between multiple apps or resources."
  },
  {
    icon: Users,
    title: "1-on-1 Expert Learning",
    desc: "Personalized subject-wise guidance from expert faculty.",
    point: "Clear doubts deeply and build strong concepts from basics to clinical level."
  },
  {
    icon: Lightbulb,
    title: "Concept-First Teaching Approach",
    desc: "We focus on understanding, not memorization.",
    point: "Build strong fundamentals that help in both exams and clinical practice."
  },
  {
    icon: FileText,
    title: "Faculty-Curated High-Yield Content",
    desc: "Notes, lectures, and questions designed by experienced doctors.",
    point: "Only what is important for exams — nothing extra, nothing missing."
  },
  {
    icon: RefreshCw,
    title: "Integrated Practice System",
    desc: "Learn → Practice → Revise → Test — all connected.",
    point: "Every step strengthens your preparation without confusion."
  },
  {
    icon: Brain,
    title: "AI-Powered Study Optimization",
    desc: "Smart planner and analytics guide your daily preparation.",
    point: "Know exactly what to study, when to revise, and how to improve."
  },
  {
    icon: PenTool,
    title: "Exam-Focused Preparation",
    desc: "Aligned with MBBS university exams and entrance patterns.",
    point: "Helps you perform better in both theory and MCQ-based exams."
  },
  {
    icon: Monitor,
    title: "Learn Anytime, Anywhere",
    desc: "Access your content on mobile or desktop.",
    point: "Study at your own pace without any schedule restrictions."
  },
];

export default function WhyDrsPrep() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="features" 
      ref={ref} 
      className="py-20"
      style={{
        background: 'linear-gradient(90deg, #F6FAFB 0%, #ECF9FB 22.6%, #F6FAFB 45.19%)'
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
            Why DrsPrep Works -<br />
            Not Just Another Learning App
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
            Built specifically for MBBS students to simplify learning, improve performance,<br />
            and deliver real exam results.
          </p>
        </motion.div>

        {/* Feature Cards Grid - 4 rows x 2 columns */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          style={{
            maxWidth: 'clamp(900px, 76.67vw, 1472px)',
            margin: '0 auto',
            rowGap: 'clamp(24px, 2.304vw, 44.23px)',
            columnGap: 'clamp(24px, 2.304vw, 44.23px)'
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              custom={index}
              className="flex gap-6 feature-card-hover"
              style={{
                background: '#FFFFFF',
                borderRadius: 'clamp(16px, 1.152vw, 22.11px)',
                padding: `clamp(32px, 2.448vw, 46.99px) clamp(24px, 2.448vw, 46.99px) clamp(2px, 0.144vw, 2.76px) clamp(24px, 2.448vw, 46.99px)`,
                minHeight: 'clamp(300px, 20.733vw, 398.06px)'
              }}
            >
              {/* Icon Container */}
              <div
                style={{
                  width: 'clamp(60px, 4.031vw, 77.4px)',
                  height: 'clamp(60px, 4.031vw, 77.4px)',
                  borderRadius: 'clamp(20px, 1.44vw, 27.64px)',
                  background: 'linear-gradient(135deg, #00B8D4 0%, #00B5D0 8.33%, #00B2CC 16.67%, #00B0C9 25%, #00ADC5 33.33%, #00AAC1 41.67%, #00A7BD 50%, #00A5BA 58.33%, #00A2B6 66.67%, #009FB2 75%, #009CAE 83.33%, #009AAB 91.67%, #0097A7 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <feature.icon
                  style={{
                    width: 'clamp(28px, 2vw, 38px)',
                    height: 'clamp(28px, 2vw, 38px)',
                    color: '#FFFFFF',
                    strokeWidth: 'clamp(2px, 0.126vw, 2.42px)'
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    fontSize: 'clamp(20px, 1.44vw, 27.64px)',
                    lineHeight: 'clamp(28px, 2.016vw, 38.7px)',
                    letterSpacing: '0px',
                    color: '#0F172A',
                    marginBottom: 'clamp(8px, 0.625vw, 12px)'
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: 'clamp(16px, 1.152vw, 22.11px)',
                    lineHeight: 'clamp(24px, 1.728vw, 33.17px)',
                    letterSpacing: '0px',
                    color: '#64748B',
                    marginBottom: 'clamp(12px, 0.833vw, 16px)',
                    marginTop: '6%'
                  }}
                >
                  {feature.desc}
                </p>

                {/* Point with Check Icon */}
                <div className="flex items-start gap-3" style={{ marginTop: '8%' }}>
                  <div
                    style={{
                      width: 'clamp(20px, 1.25vw, 24px)',
                      height: 'clamp(20px, 1.25vw, 24px)',
                      flexShrink: 0,
                      marginTop: 'clamp(2px, 0.15vw, 3px)'
                    }}
                  >
                    <Image
                      src="/icons/tick.svg"
                      alt="Check"
                      width={24}
                      height={24}
                      style={{
                        width: '100%',
                        height: '100%'
                      }}
                    />
                  </div>
                  <p
                    style={{
                      fontFamily: 'Poppins',
                      fontWeight: 400,
                      fontSize: 'clamp(16px, 1.152vw, 22.11px)',
                      lineHeight: 'clamp(24px, 1.728vw, 33.17px)',
                      letterSpacing: '0px',
                      color: '#0F172A',
                      flex: 1
                    }}
                  >
                    {feature.point}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Text */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
          style={{
            marginTop: 'clamp(40px, 4.167vw, 80px)'
          }}
        >
          {/* <h3
            style={{
              fontFamily: 'Poppins',
              fontWeight: 700,
              fontSize: 'clamp(28px, 1.875vw, 36px)',
              lineHeight: 'clamp(32px, 2.083vw, 40px)',
              letterSpacing: '0px',
              textAlign: 'center',
              color: '#000000'
            }}
          >
            Designed by Doctors. Built for MBBS Students.
          </h3> */}
        </motion.div>
      </div>
    </section>
  );
}
