
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Monitor, FileEdit, Play, ChevronRight } from "lucide-react";
import Image from "next/image";

const icons = [
    { iconSrc: "/icons/Icon-1.svg", label: "Learn" },
    { iconSrc: "/icons/Icon-2.svg", label: "Practice" },
    { iconSrc: "/icons/Icon-3.svg", label: "Watch" },
    { iconSrc: "/icons/Icon-4.svg", label: "AI Bot" },
];

const points = [
    "Concepts become clear - not memorized",
    "Practice becomes targeted - not random",
    "Revision becomes faster - not overwhelming",
    "Results become predictable - not uncertain",
];

export default function DrsPrepMain() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="py-12 lg:py-16 overflow-hidden"
            style={{
                background: 'linear-gradient(90deg, #F6FAFB 0%, #ECF9FB 22.6%, #F6FAFB 45.19%)'
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section 1: Phone with DRS / PREP text */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="relative flex items-center justify-center"
                    style={{
                        minHeight: 'clamp(400px, 35vw, 670px)',
                        marginBottom: 'clamp(24px, 2vw, 40px)'
                    }}
                >
                    {/* DRS Text - Left */}
                    <div
                        className="absolute"
                        style={{
                            left: 'clamp(60px, 6vw, 200px)',
                            top: '27%',
                            transform: 'translateY(-50%)',
                            width: 'clamp(200px, 25vw, 480px)',
                            height: 'auto',
                            opacity: 1,
                            zIndex: 0
                        }}
                    >
                        <Image
                            src="/images/drs text.png"
                            alt="Drs"
                            width={480}
                            height={200}
                            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                        />
                    </div>

                    {/* Phone Image - Center */}
                    <div
                        className="relative z-10"
                        style={{
                            width: 'clamp(300px, 28.65vw, 550px)',
                            height: 'auto'
                        }}
                    >
                        <Image
                            src="/images/Phone app.png"
                            alt="DrsPrep App"
                            width={1000}
                            height={1300}
                            // style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                            // priority
                        />
                        {/* Bottom fade overlay */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '30%',
                                background: 'linear-gradient(to bottom, transparent 0%, #EFF9FB 100%)',
                                pointerEvents: 'none',
                                zIndex: 2
                            }}
                        />
                    </div>

                    {/* PREP Text - Right */}
                    <div
                        className="absolute"
                        style={{
                            right: 'clamp(28px, 2vw, 200px)',
                            top: '60%',
                            transform: 'translateY(-50%)',
                            width: 'clamp(250px, 28vw, 540px)',
                            height: 'auto',
                            opacity: 1,
                            zIndex: 0
                        }}
                    >
                        <Image
                            src="/images/prep text.png"
                            alt="Prep"
                            width={540}
                            height={220}
                            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                        />
                    </div>
                </motion.div>

                {/* Section 2: Icons Row */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex items-center justify-center"
                    style={{
                        marginBottom: 'clamp(32px, 2.5vw, 48px)',
                        gap: 'clamp(16px, 1.667vw, 32px)'
                    }}
                >
                    {icons.map((item, index) => (
                        <div key={item.label} className="flex items-center" style={{ gap: 'clamp(12px, 1.25vw, 24px)' }}>
                            {/* Icon SVG */}
                            <Image
                                src={item.iconSrc}
                                alt={item.label}
                                width={index === 3 ? 136 : 96}
                                height={index === 3 ? 136 : 96}
                                style={{
                                    width: index === 3 ? 'clamp(80px, 7vw, 136px)' : 'clamp(60px, 5vw, 96px)',
                                    height: index === 3 ? 'clamp(80px, 7vw, 136px)' : 'clamp(60px, 5vw, 96px)',
                                    objectFit: 'contain',
                                    flexShrink: 0
                                }}
                            />

                            {/* Arrow between icons */}
                            {index < icons.length - 1 && (
                                <ChevronRight
                                    style={{
                                        width: 'clamp(16px, 1.25vw, 24px)',
                                        height: 'clamp(16px, 1.25vw, 24px)',
                                        color: '#94A3B8',
                                        strokeWidth: 'clamp(2px, 0.139vw, 2.67px)'
                                    }}
                                />
                            )}
                        </div>
                    ))}
                </motion.div>

                {/* Section 3: Heading */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center"
                    style={{
                        marginBottom: 'clamp(32px, 2.5vw, 48px)'
                    }}
                >
                    <h2
                        style={{
                            fontFamily: 'Poppins',
                            fontWeight: 700,
                            fontSize: 'clamp(24px, 1.5625vw, 30px)',
                            lineHeight: 'clamp(30px, 1.875vw, 36px)',
                            letterSpacing: '0px',
                            textAlign: 'center',
                            color: '#0F172A'
                        }}
                    >
                        This is what changes when you use DrsPrep
                    </h2>
                </motion.div>

                {/* Section 4: Points Grid - 2 columns */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2"
                    style={{
                        maxWidth: 'clamp(800px, 70vw, 1200px)',
                        margin: '0 auto',
                        gap: 'clamp(16px, 1.25vw, 24px) clamp(60px, 6vw, 120px)',
                        alignItems: 'start'
                    }}
                >
                    {points.map((point, index) => (
                        <motion.div
                            key={point}
                            variants={fadeInUp}
                            custom={index}
                            className="flex items-start gap-3"
                        >
                            {/* Tick Icon */}
                            <div
                                style={{
                                    width: 'clamp(24px, 1.667vw, 32px)',
                                    height: 'clamp(24px, 1.667vw, 32px)',
                                    flexShrink: 0,
                                    marginTop: '2px'
                                }}
                            >
                                <img
                                    src="/icons/tick.svg"
                                    alt="tick"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>

                            {/* Point Text */}
                            <p
                                style={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 400,
                                    fontSize: 'clamp(18px, 1.25vw, 24px)',
                                    lineHeight: 'clamp(24px, 1.458vw, 28px)',
                                    letterSpacing: '0px',
                                    color: '#64748B'
                                }}
                            >
                                {point}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div >
        </section >
    );
}

