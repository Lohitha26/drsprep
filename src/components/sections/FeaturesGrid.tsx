"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  BookOpen,
  CalendarCheck,
  ClipboardList,
  Image,
  Zap,
  BarChart3,
  TrendingUp,
  FileText,
} from "lucide-react";

const tiles = [
  { icon: BookOpen, label: "Topic Wise QBank" },
  { icon: CalendarCheck, label: "Daily Practice Questions" },
  { icon: ClipboardList, label: "Grand Test Series" },
  { icon: Image, label: "Image Based Questions" },
  { icon: Zap, label: "Rapid Revision" },
  { icon: BarChart3, label: "Performance Tracking" },
  { icon: TrendingUp, label: "Rank Prediction" },
  { icon: FileText, label: "Detailed Explanations" },
];

export default function FeaturesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.label}
              variants={fadeInUp}
              custom={i}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-100
                hover:shadow-md hover:border-[#00B8A9]/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#00B8A9]/10 flex items-center justify-center">
                <tile.icon className="w-7 h-7 text-[#00B8A9]" />
              </div>
              <span className="text-sm font-medium text-[#1A1A2E] text-center">{tile.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
