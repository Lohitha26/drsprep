"use client";

import { motion } from "framer-motion";
import { fadeInDown } from "@/lib/animations";

export default function DiscountBanner() {
  return (
    <motion.div
      variants={fadeInDown}
      initial="hidden"
      animate="visible"
      className="w-full bg-[#00B2CC] text-white"
      style={{
        height: 'clamp(50px, 3.125vw, 60px)',
        transform: 'rotate(0deg)',
        minHeight: '50px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center px-4 sm:px-6 lg:px-8" style={{ height: '100%', width: '100%' }}>
        <div
          className="flex items-center"
          style={{
            fontFamily: 'Poppins',
            fontWeight: '500',
            fontStyle: 'Medium',
            fontSize: 'clamp(14px, 1.26vw, 20px)',
            lineHeight: '100%',
            letterSpacing: '0px',
            textAlign: 'center'
          }}
        >
          <span
            style={{ fontWeight: 'bold', marginRight: 'clamp(4px, 0.417vw, 8px)' }}
          >
            60% OFF
          </span>
          <span>for the First 1,000 Users</span>
        </div>
        <button
          className="bg-white text-[#00B2CC] font-medium hover:bg-gray-100 btn-3d-white"
          style={{
            fontFamily: 'Poppins',
            fontWeight: '500',
            fontSize: 'clamp(12px, 0.833vw, 16px)',
            borderRadius: 'clamp(6px, 0.417vw, 8px)',
            padding: 'clamp(6px, 0.417vw, 8px) clamp(12px, 0.833vw, 16px)',
            minWidth: 'clamp(70px, 4.375vw, 84px)',
            // height: 'clamp(28px, 1.667vw, 32px)',
            marginLeft: 'clamp(12px, 0.833vw, 16px)'
          }}
        >
          Grab Now
        </button>
      </div>
    </motion.div>
  );
}
