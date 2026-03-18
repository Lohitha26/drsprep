"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInLeft, fadeInRight, floatAnimation } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/lib/store";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { openLogin } = useAuthStore();

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-r from-[#00B8A9] to-[#008F84] relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 text-white/10 text-8xl">✚</div>
      <div className="absolute bottom-10 right-20 text-white/10 text-6xl">🩺</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Text */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex-1 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Start Your Medical Exam Preparation Today
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join thousands of aspirants preparing smarter with DRSPREP.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={openLogin}
                className="bg-white text-[#00B8A9] hover:bg-gray-100 font-semibold px-8 h-12 rounded-lg
                  transition-transform hover:scale-105"
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById("resources")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 h-12 rounded-lg
                  transition-transform hover:scale-105 bg-transparent"
              >
                Explore Courses
              </Button>
            </div>
          </motion.div>

          {/* Right Doctor Image */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex-1 hidden lg:flex justify-center"
          >
            <motion.div animate={floatAnimation}>
              <div className="w-72 h-72 rounded-full bg-white/10 flex items-center justify-center">
                <div className="w-56 h-56 rounded-full bg-white/15 flex items-center justify-center">
                  <div className="text-7xl">👨‍⚕️</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
