"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  Brain,
  CalendarCheck,
  Trophy,
  Image,
  Zap,
  Activity,
  LineChart,
  FileText,
} from "lucide-react";

const tiles = [
  { icon: Brain, label: "Topic Wise QBank" },
  { icon: CalendarCheck, label: "Daily Practice Questions" },
  { icon: Trophy, label: "Grand Test Series" },
  { icon: Image, label: "Image Based Questions" },
  { icon: Zap, label: "Rapid Revision" },
  { icon: Activity, label: "Performance Tracking" },
  { icon: LineChart, label: "Rank Prediction" },
  { icon: FileText, label: "Detailed Explanations" },
];

export default function FeaturesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16" style={{background: 'linear-gradient(90deg, #EAFDFF 0%, #FFFFFF 100%)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.label}
              variants={fadeInUp}
              custom={i}
              className="flex flex-col items-center p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              style={{
                background: 'linear-gradient(90deg, #EAFDFF 0%, #FFFFFF 100%)',
                borderTop: '1px solid #9BEBF5'
              }}
            >
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: 'linear-gradient(135deg, #00B8D4 0%, #00B5D0 8.33%, #00B2CC 16.67%, #00B0C9 25%, #00ADC5 33.33%, #00AAC1 41.67%, #00A7BD 50%, #00A5BA 58.33%, #00A2B6 66.67%, #009FB2 75%, #009CAE 83.33%, #009AAB 91.67%, #0097A7 100%)'
                }}
              >
                <tile.icon className="w-8 h-8 text-white" />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-family-poppins)',
                  fontWeight: 'var(--font-weight-semibold)',
                  fontSize: '18px',
                  lineHeight: '28px',
                  color: '#0F172A',
                  textAlign: 'center'
                }}
              >
                {tile.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
