
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Monitor, FileEdit, Play, ChevronRight } from "lucide-react";
import Image from "next/image";

const icons = [
    { iconSrc: "/icons/laptop why drsprep icon.svg", label: "Learn" },
    { iconSrc: "/icons/notepad.svg", label: "Practice" },
    { iconSrc: "/icons/Vector.svg", label: "Watch" },
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
            className="py-20 overflow-hidden"
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
                        minHeight: 'clamp(350px, 31.25vw, 600px)',
                        marginBottom: 'clamp(40px, 3.125vw, 60px)'
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
                            width: 'clamp(250px, 20.833vw, 400px)',
                            height: 'auto'
                        }}
                    >
                        <Image
                            src="/images/Phone app.png"
                            alt="DrsPrep App"
                            width={400}
                            height={600}
                            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                            priority
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
                        <div key={item.label} className="flex items-center" style={{ gap: 'clamp(16px, 1.667vw, 32px)' }}>
                            {/* Circle Icon */}
                            <div
                                style={{
                                    aspectRatio: '1',
                                    width: 'clamp(57px, 1vw, 96px)',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(130.48deg, #E6F8FC 13.41%, #BFE9EF 86.26%)',
                                    border: '1px solid',
                                    borderImageSource: 'linear-gradient(180deg, #FFFFFF 0%, #63C1CF 120.83%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}
                            >
                                <Image
                                    src={item.iconSrc}
                                    alt={item.label}
                                    width={44}
                                    height={44}
                                    style={{
                                        width: 'clamp(28px, 2.5vw, 44px)',
                                        height: 'clamp(28px, 2.5vw, 44px)',
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>

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

                    {/* Arrow before Group icon */}
                    <ChevronRight
                        style={{
                            width: 'clamp(16px, 1.25vw, 24px)',
                            height: 'clamp(16px, 1.25vw, 24px)',
                            color: '#94A3B8',
                            strokeWidth: 'clamp(2px, 0.139vw, 2.67px)'
                        }}
                    />

                    {/* Group.png (AI Bot Icon) */}
                    <div
                        style={{
                            aspectRatio: '1',
                            width: 'clamp(75px, 5vw, 96px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }}
                    >
                        <Image
                            src="/icons/Group.png"
                            alt="AI Bot"
                            width={136}
                            height={92}
                            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                        />
                    </div>
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

