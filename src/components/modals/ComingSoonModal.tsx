"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthStore } from "@/lib/store";
import Image from "next/image";

export default function ComingSoonModal() {
  const { isExploreOpen, closeExplore } = useAuthStore();
  const [isCloseHovered, setIsCloseHovered] = useState(false);

  return (
    <AnimatePresence>
      {isExploreOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closeExplore}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.6)',
            padding: 'clamp(16px, 2vw, 40px)'
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 'clamp(800px, 66.98vw, 1286px)',
              aspectRatio: '1286 / 671',
              background: 'linear-gradient(255.11deg, #E0F7FA 0%, #FFFFFF 99.51%)',
              borderRadius: 'clamp(12px, 1.25vw, 24px)',
              overflow: 'hidden'
            }}
          >
            {/* Stay Tuned Illustration (Frame.svg) */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 'calc(50% - 28.89% - 8.9%)',
                width: '57%',
                height: '57.8%',
                zIndex: 1
              }}
            >
              <Image
                src="/modal/Frame.svg"
                alt="Stay Tuned Coming Soon"
                width={733}
                height={388}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                priority
              />
            </div>

            {/* Right Teal Panel Background (Frame 18.png) */}
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                width: '35.77%',
                height: '100%',
                borderRadius: '0px clamp(12px, 1.25vw, 24px) clamp(12px, 1.25vw, 24px) 0px',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(91.39deg, #0097A7 1.24%, rgba(1, 151, 167, 0) 154.85%)',
                  zIndex: 1
                }}
              />
              <Image
                src="/modal/Frame 18.png"
                alt=""
                width={460}
                height={671}
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: 0 }}
              />
            </div>

            {/* Phone Mockup Image */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '1.9%',
                width: '36.86%',
                height: '99.6%',
                zIndex: 2
              }}
            >
              <Image
                src="/modal/Mockup 1.png"
                alt="DrsPrep App Mockup"
                width={474}
                height={668}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                priority
              />
            </div>

            {/* Play Store Button */}
            <a
              href="#"
              style={{
                position: 'absolute',
                left: '5.29%',
                top: '81.07%',
                width: '13.53%',
                height: '7.6%',
                zIndex: 3
              }}
            >
              <Image
                src="/modal/Group 517170.svg"
                alt="Get it on Play Store"
                width={175}
                height={51}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </a>

            {/* App Store Button */}
            <a
              href="#"
              style={{
                position: 'absolute',
                left: '19.83%',
                top: '81.07%',
                width: '13.53%',
                height: '7.6%',
                zIndex: 3
              }}
            >
              <Image
                src="/modal/Group 517169.svg"
                alt="Get it on App Store"
                width={175}
                height={51}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </a>

            {/* Close Button */}
            <button
              onClick={closeExplore}
              onMouseEnter={() => setIsCloseHovered(true)}
              onMouseLeave={() => setIsCloseHovered(false)}
              style={{
                position: 'absolute',
                top: '3.28%',
                right: '1.79%',
                width: 'clamp(28px, 1.67vw, 32px)',
                height: 'clamp(28px, 1.67vw, 32px)',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                padding: 0,
                zIndex: 10,
                transition: 'transform 0.2s ease'
              }}
            >
              <Image
                src={isCloseHovered ? "/icons/close icon hover.svg" : "/icons/close icon.svg"}
                alt="Close"
                width={32}
                height={32}
                style={{ width: '100%', height: '100%' }}
              />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
