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
    <section 
      id="faq" 
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
          style={{
            maxWidth: 'clamp(800px, 79.24vw, 1521.35px)',
            margin: '0 auto clamp(60px, 6.25vw, 120px) auto'
          }}
        >
          <h2
            style={{
              fontFamily: 'Poppins',
              fontWeight: 700,
              fontSize: 'clamp(32px, 2.447vw, 46.97px)',
              lineHeight: 'clamp(38px, 2.718vw, 52.19px)',
              letterSpacing: '0px',
              textAlign: 'center',
              color: '#0F172A',
              marginBottom: 'clamp(12px, 0.833vw, 16px)'
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: 'clamp(16px, 1.223vw, 23.49px)',
              lineHeight: 'clamp(24px, 1.903vw, 36.53px)',
              letterSpacing: '0px',
              textAlign: 'center',
              color: '#64748B'
            }}
          >
            Find answers to common questions about DRSPREP
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col"
          style={{
            maxWidth: 'clamp(700px, 52.19vw, 1002.06px)',
            margin: '0 auto',
            gap: 'clamp(16px, 1.088vw, 20.88px)'
          }}
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              custom={i}
              style={{
                width: '100%',
                minHeight: 'clamp(56px, 3.534vw, 67.85px)',
                borderRadius: 'clamp(14px, 1.088vw, 20.88px)',
                background: openIndex === i
                  ? 'linear-gradient(180deg, #E9F8FD 0%, #FFFFFF 100%)'
                  : 'linear-gradient(180deg, #E9F8FD 0%, #FFFFFF 100%)',
                border: '1px solid #88D8E4',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)'
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between text-left transition-colors"
                style={{
                  padding: 'clamp(16px, 1.631vw, 31.31px)',
                  minHeight: 'clamp(56px, 3.534vw, 67.85px)'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: 'clamp(14px, 0.952vw, 18.27px)',
                    lineHeight: 'clamp(20px, 1.359vw, 26.1px)',
                    letterSpacing: '0px',
                    color: '#0F172A',
                    paddingRight: 'clamp(12px, 1.042vw, 20px)'
                  }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  style={{
                    width: 'clamp(16px, 1.042vw, 20px)',
                    height: 'clamp(16px, 1.042vw, 20px)',
                    color: '#64748B',
                    strokeWidth: 'clamp(1.5px, 0.091vw, 1.74px)',
                    flexShrink: 0,
                    transition: 'transform 0.3s ease',
                    transform: openIndex === i ? 'rotate(-90deg)' : 'rotate(0deg)'
                  }}
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
                    <p
                      style={{
                        fontFamily: 'Poppins',
                        fontWeight: 400,
                        fontSize: 'clamp(14px, 0.952vw, 18.27px)',
                        lineHeight: 'clamp(20px, 1.359vw, 26.1px)',
                        letterSpacing: '0px',
                        color: '#0F172A',
                        padding: '0 clamp(16px, 1.631vw, 31.31px) clamp(16px, 1.631vw, 31.31px) clamp(16px, 1.631vw, 31.31px)'
                      }}
                    >
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
