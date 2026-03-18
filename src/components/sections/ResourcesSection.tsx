"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import { Video, Image, BookOpen, Zap, ClipboardCheck, Check } from "lucide-react";

const resourceCards = [
  { icon: Video, title: "Smart Video Lectures", desc: "Expert faculty explaining complex concepts clearly." },
  { icon: Image, title: "Ultimate Image Bank", desc: "Practice clinical images and real exam scenarios." },
  { icon: BookOpen, title: "Topic Wise Question Bank", desc: "Thousands of curated exam questions with explanations." },
  { icon: Zap, title: "Structured Revision Notes", desc: "High-yield notes designed for quick exam revision." },
];

const featureRows = [
  {
    icon: ClipboardCheck,
    title: "Advanced Mock Tests",
    desc: "Experience real exam simulation with comprehensive analysis.",
    bullets: ["Real exam simulation", "AI performance analysis", "Detailed solutions"],
    imageLeft: false,
  },
  {
    icon: BookOpen,
    title: "Smart Question Bank",
    desc: "Master concepts with intelligent practice questions.",
    bullets: ["Topic-wise practice", "Explanation based learning", "Performance tracking"],
    imageLeft: true,
  },
  {
    icon: Image,
    title: "Clinical Image Based Questions",
    desc: "Practice visual diagnosis with clinical cases.",
    bullets: ["Real clinical case questions", "Diagnosis practice", "Exam style learning"],
    imageLeft: false,
  },
  {
    icon: Zap,
    title: "Rapid Revision Notes",
    desc: "Quick revision with high-yield content summaries.",
    bullets: ["High-yield summaries", "Quick concept refresh", "Perfect for last revision"],
    imageLeft: true,
  },
];

function MockupCard() {
  return (
    <div className="bg-[#F0F9FF] rounded-2xl p-6 w-full max-w-sm mx-auto shadow-sm">
      <div className="space-y-3">
        <div className="h-3 bg-[#00B8A9]/20 rounded-full w-3/4" />
        <div className="h-3 bg-[#00B8A9]/10 rounded-full w-1/2" />
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="h-16 bg-[#00B8A9] rounded-xl" />
          <div className="h-16 bg-[#00B8A9]/60 rounded-xl" />
          <div className="h-16 bg-[#00B8A9]/40 rounded-xl" />
          <div className="h-16 bg-[#00B8A9] rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default function ResourcesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resources" ref={ref} className="py-20" style={{background: 'linear-gradient(90deg, #EAFDFF 0%, #FFFFFF 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <h2 
            className="mb-3"
            style={{
              fontFamily: 'var(--font-family-poppins)',
              fontWeight: 'var(--font-weight-bold)',
              fontSize: '36px',
              lineHeight: '40px',
              color: 'var(--color-text-primary)',
              textAlign: 'center'
            }}
          >
            Resources That Make You Exam Ready
          </h2>
          <p 
            style={{
              fontFamily: 'var(--font-family-poppins)',
              fontWeight: 'var(--font-weight-normal)',
              fontSize: '18px',
              lineHeight: '28px',
              color: 'var(--color-text-secondary)',
              textAlign: 'center'
            }}
          >
            Everything you need to excel in your medical entrance examinations
          </p>
        </motion.div>

        {/* 2x2 Resource Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20"
        >
          {resourceCards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              custom={i}
              className="rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              style={{
                background: 'linear-gradient(90deg, #EAFDFF 0%, #FFFFFF 100%)',
                borderTop: '4px solid transparent',
                borderImage: 'linear-gradient(90deg, #00B8D4 0%, #00B5D0 8.33%, #00B2CC 16.67%, #00B0C9 25%, #00ADC5 33.33%, #00AAC1 41.67%, #00A7BD 50%, #00A5BA 58.33%, #00A2B6 66.67%, #009FB2 75%, #009CAE 83.33%, #009AAB 91.67%, #0097A7 100%) 1'
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                style={{
                  background: 'linear-gradient(135deg, #00B8D4 0%, #00B5D0 8.33%, #00B2CC 16.67%, #00B0C9 25%, #00ADC5 33.33%, #00AAC1 41.67%, #00A7BD 50%, #00A5BA 58.33%, #00A2B6 66.67%, #009FB2 75%, #009CAE 83.33%, #009AAB 91.67%, #0097A7 100%)'
                }}
              >
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <h3 
                className="mb-1"
                style={{
                  fontFamily: 'var(--font-family-poppins)',
                  fontWeight: 'var(--font-weight-semibold)',
                  fontSize: '18px',
                  lineHeight: '24px',
                  color: 'var(--color-text-primary)'
                }}
              >
                {card.title}
              </h3>
              <p 
                style={{
                  fontFamily: 'var(--font-family-poppins)',
                  fontWeight: 'var(--font-weight-normal)',
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: 'var(--color-text-secondary)'
                }}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Alternating Feature Rows */}
        <div className="flex flex-col gap-24">
          {featureRows.map((row, i) => {
            const variant = row.imageLeft ? fadeInLeft : fadeInRight;
            const textVariant = row.imageLeft ? fadeInRight : fadeInLeft;

            return (
              <div
                key={row.title}
                className={`flex flex-col ${
                  row.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                <FeatureRowImage variant={variant} index={i} />
                <FeatureRowText row={row} variant={textVariant} index={i} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureRowImage({ variant, index }: { variant: typeof fadeInLeft; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex-1"
    >
      <MockupCard />
    </motion.div>
  );
}

function FeatureRowText({
  row,
  variant,
  index,
}: {
  row: (typeof featureRows)[number];
  variant: typeof fadeInLeft;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex-1"
    >
      <div 
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{
          background: 'linear-gradient(135deg, #00B8D4 0%, #00B5D0 8.33%, #00B2CC 16.67%, #00B0C9 25%, #00ADC5 33.33%, #00AAC1 41.67%, #00A7BD 50%, #00A5BA 58.33%, #00A2B6 66.67%, #009FB2 75%, #009CAE 83.33%, #009AAB 91.67%, #0097A7 100%)'
        }}
      >
        <row.icon className="w-6 h-6 text-white" />
      </div>
      <h3 
        className="mb-2"
        style={{
          fontFamily: 'var(--font-family-poppins)',
          fontWeight: 'var(--font-weight-bold)',
          fontSize: '24px',
          lineHeight: '32px',
          color: 'var(--color-text-primary)'
        }}
      >
        {row.title}
      </h3>
      <p 
        className="mb-4"
        style={{
          fontFamily: 'var(--font-family-poppins)',
          fontWeight: 'var(--font-weight-normal)',
          fontSize: '16px',
          lineHeight: '24px',
          color: 'var(--color-text-secondary)'
        }}
      >
        {row.desc}
      </p>
      <ul className="flex flex-col gap-2">
        {row.bullets.map((b) => (
          <li 
            key={b} 
            className="flex items-center gap-2"
            style={{
              fontFamily: 'var(--font-family-poppins)',
              fontWeight: 'var(--font-weight-normal)',
              fontSize: '14px',
              lineHeight: '20px',
              color: 'var(--color-text-primary)'
            }}
          >
            <Check className="w-4 h-4 shrink-0" style={{color: '#00B8D4'}} />
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
