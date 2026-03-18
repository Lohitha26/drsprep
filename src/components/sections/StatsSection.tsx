"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import { Users, BookOpen, Video, Trophy } from "lucide-react";

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
  { icon: BookOpen, value: 10, suffix: "M+", label: "Questions Practiced" },
  { icon: Video, value: 600, suffix: "+", label: "Lecture Hours" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left - Stats Card */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm"
          >
            <h3 className="text-xl font-bold text-[#1A1A2E] mb-6">Learning Impact</h3>
            <div className="flex flex-col gap-6">
              {stats.map((stat) => {
                const count = useCountUp(stat.value, 2000, isInView);
                return (
                  <div key={stat.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#00B8A9]/10 flex items-center justify-center shrink-0">
                      <stat.icon className="w-6 h-6 text-[#00B8A9]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#1A1A2E]">
                        {count}{stat.suffix}
                      </p>
                      <p className="text-sm text-[#6B7280]">{stat.label}</p>
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
            className="bg-gradient-to-br from-[#00B8A9] to-[#008F84] rounded-2xl p-8 text-white flex flex-col items-center justify-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Achievement</h3>
            <p className="text-lg font-semibold mb-1">
              Best Medical Learning Platform Award
            </p>
            <p className="text-white/80 text-sm">
              Trusted by thousands of medical aspirants
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
