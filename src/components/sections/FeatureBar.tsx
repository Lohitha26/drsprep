"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Video, ClipboardCheck, PlayCircle, PenTool } from "lucide-react";

const features = [
  { icon: Video, label: "1-on-1 Live Classes" },
  { icon: ClipboardCheck, label: "Faculty-Curated Notes" },
  { icon: PlayCircle, label: "Recorded Video Support" },
  { icon: PenTool, label: "Exam Writing Training" },
];

export default function FeatureBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        padding: '0 clamp(16px, 1.25vw, 24px)',
        marginTop: 'clamp(-40px, -2.083vw, -20px)',
        marginBottom: 'clamp(20px, 2.083vw, 40px)',
        position: 'relative',
        zIndex: 10
      }}
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex flex-col sm:flex-row items-center justify-center"
        style={{
          width: '100%',
          maxWidth: 'clamp(900px, 76.56vw, 1470px)',
          height: 'auto',
          minHeight: 'clamp(80px, 6.875vw, 132px)',
          background: '#FFFFFF',
          boxShadow: '0px 0px 9.9px 0px #00000014',
          overflow: 'hidden'
        }}
      >
        {features.map((feature, index) => (
          <div
            key={feature.label}
            className="flex items-center gap-4"
            style={{
              flex: 1,
              padding: 'clamp(16px, 1.25vw, 24px) clamp(20px, 1.667vw, 32px)',
              borderRight: !isMobile && index < features.length - 1 ? '1px solid #D4D4D4' : 'none',
              justifyContent: 'center'
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: 'clamp(40px, 2.5vw, 48px)',
                height: 'clamp(40px, 2.5vw, 48px)',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00B8D4 0%, #0097A7 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <feature.icon
                style={{
                  width: 'clamp(20px, 1.25vw, 24px)',
                  height: 'clamp(20px, 1.25vw, 24px)',
                  color: '#FFFFFF'
                }}
              />
            </div>

            {/* Label */}
            <span
              style={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: 'clamp(14px, 1.042vw, 20px)',
                lineHeight: 'clamp(22px, 1.691vw, 32.47px)',
                letterSpacing: '0px',
                color: '#0F172A',
                whiteSpace: 'nowrap'
              }}
            >
              {feature.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
