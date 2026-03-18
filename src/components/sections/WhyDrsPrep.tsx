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
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-3">
            Why DRSPREP Is the Smart Choice for Medical Aspirants
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
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
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm
                hover:shadow-lg hover:border-[#00B8A9] hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00B8A9]/10 flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-[#00B8A9]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A2E] mb-1">{f.title}</h3>
              <p className="text-sm text-[#6B7280]">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
