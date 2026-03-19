"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  GraduationCap,
  RefreshCw,
  BarChart3,
  ClipboardCheck,
  Smartphone,
  Stethoscope,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    desc: "Learn from experienced medical educators",
  },
  {
    icon: RefreshCw,
    title: "Updated Exam Content",
    desc: "Content aligned with latest exam patterns",
  },
  {
    icon: BarChart3,
    title: "AI Performance Analytics",
    desc: "Track progress with intelligent insights",
  },
  {
    icon: ClipboardCheck,
    title: "Grand Mock Tests",
    desc: "Realistic exam simulations with analysis",
  },
  {
    icon: Smartphone,
    title: "Mobile Learning",
    desc: "Study anywhere, anytime on any device",
  },
  {
    icon: Stethoscope,
    title: "Clinical Case Practice",
    desc: "Master real-world medical scenarios",
  },
];

export default function WhyDrsPrep() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-20 bg-[#F0F9FF]">
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
              color: '#0F172A',
              textAlign: 'center'
            }}
          >
            Why DRSPREP Is the Smart Choice for Medical Aspirants
          </h2>
          <p 
            className="max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-family-poppins)',
              fontWeight: 'var(--font-weight-normal)',
              fontSize: '18px',
              lineHeight: '28px',
              color: '#64748B',
              textAlign: 'center'
            }}
          >
            Join thousands of successful students who chose DRSPREP for their journey
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeInUp}
              custom={i}
              className="rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
              style={{
                background: 'linear-gradient(90deg, #EAFDFF 0%, #FFFFFF 100%)',
                borderTop: '1px solid transparent',
                borderImage: 'linear-gradient(180deg, #00B8D4 0%, #CBF0F6 100%) 1'
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: 'linear-gradient(135deg, #00B8D4 0%, #00B5D0 8.33%, #00B2CC 16.67%, #00B0C9 25%, #00ADC5 33.33%, #00AAC1 41.67%, #00A7BD 50%, #00A5BA 58.33%, #00A2B6 66.67%, #009FB2 75%, #009CAE 83.33%, #009AAB 91.67%, #0097A7 100%)'
                }}
              >
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 
                className="mb-1"
                style={{
                  fontFamily: 'var(--font-family-poppins)',
                  fontWeight: 'var(--font-weight-semibold)',
                  fontSize: '18px',
                  lineHeight: '24px',
                  color: '#0F172A'
                }}
              >
                {f.title}
              </h3>
              <p 
                style={{
                  fontFamily: 'var(--font-family-poppins)',
                  fontWeight: 'var(--font-weight-normal)',
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#64748B'
                }}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
