"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What exams does DRSPREP support?",
    a: "NEET PG, FMGE, USMLE and other medical entrance exams.",
  },
  {
    q: "How often is the content updated?",
    a: "Content is updated weekly with latest exam patterns and guidelines.",
  },
  {
    q: "Can I access DRSPREP on mobile?",
    a: "Yes, DRSPREP is available on iOS and Android via our mobile app.",
  },
  {
    q: "Are mock tests based on real exam patterns?",
    a: "Yes, all mock tests are designed by experienced medical faculty to closely mirror real exam patterns.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes, you can access free modules after phone verification. No credit card required.",
  },
];

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" ref={ref} className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-[#6B7280]">
            Find answers to common questions about DRSPREP
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-3"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-[#1A1A2E] pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#6B7280] shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-[#6B7280] leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
