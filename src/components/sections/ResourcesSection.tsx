"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Video, PlayCircle, FileText, ClipboardList, Zap, Calendar } from "lucide-react";

const resourceCards = [
  { 
    icon: Video, 
    title: "1-on-1 Expert Mentorship", 
    desc: "Personalized live sessions with top subject experts. Clarify concepts, solve doubts, and build exam confidence in real time." 
  },
  { 
    icon: PlayCircle, 
    title: "Recorded Video Lectures", 
    desc: "High-yield videos covering the complete syllabus—learn anytime with concept-focused, exam-oriented explanations." 
  },
  { 
    icon: FileText, 
    title: "Faculty-Curated Notes", 
    desc: "Concise, high-impact notes designed by expert faculty. Perfect for rapid revision, retention, and last-minute preparation." 
  },
  { 
    icon: ClipboardList, 
    title: "Q-Bank Practice", 
    desc: "Extensive MCQ bank with detailed explanations. Practice topic-wise, track accuracy, and strengthen weak areas." 
  },
  { 
    icon: Zap, 
    title: "Smart Flashcards", 
    desc: "Quick-recall flashcards for active learning. Boost memory retention with spaced repetition and key concepts." 
  },
  { 
    icon: Calendar, 
    title: "AI Study Planner", 
    desc: "Personalized study schedules based on your goals. Optimize time, track progress, and stay exam-ready every day." 
  },
];


interface ResourceCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  index: number;
}

function ResourceCard({ icon: Icon, title, desc, index }: ResourceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={index}
      className="rounded-2xl p-6 hover:shadow-lg transition-all duration-300 resource-card-hover"
      style={{
        background: '#F1FCFF',
        padding: 'clamp(16px, 1.25vw, 24px)',
      }}
    >
      <div className="flex items-start gap-4">
        {/* Icon Container */}
        <div
          style={{
            width: 'clamp(40px, 2.8125vw, 54px)',
            height: 'clamp(40px, 2.8125vw, 54px)',
            borderRadius: 'clamp(16px, 1.172vw, 22.5px)',
            background: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          <Icon 
            style={{
              width: 'clamp(20px, 1.25vw, 24px)',
              height: 'clamp(20px, 1.25vw, 24px)',
              color: '#00B8D4',
              strokeWidth: 2
            }}
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3
            style={{
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: 'clamp(16px, 1.042vw, 20px)',
              lineHeight: 'clamp(20px, 1.25vw, 24px)',
              letterSpacing: '0px',
              color: '#0F172A',
              marginBottom: 'clamp(6px, 0.5vw, 8px)'
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: 'clamp(13px, 0.833vw, 16px)',
              lineHeight: 'clamp(18px, 1.25vw, 24px)',
              letterSpacing: '0px',
              color: '#0F172A'
            }}
          >
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ResourcesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="resources" 
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
          className="text-center mb-12"
        >
          <h2 
            style={{
              fontFamily: 'Poppins',
              fontWeight: 700,
              fontSize: 'clamp(28px, 1.875vw, 36px)',
              lineHeight: 'clamp(32px, 2.083vw, 40px)',
              letterSpacing: '0px',
              textAlign: 'center',
              color: '#0F172A',
              marginBottom: 'clamp(12px, 0.833vw, 16px)'
            }}
          >
            Resources That Make You Exam Ready
          </h2>
          <p 
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: 'clamp(14px, 0.9375vw, 18px)',
              lineHeight: 'clamp(22px, 1.458vw, 28px)',
              letterSpacing: '0px',
              textAlign: 'center',
              color: '#64748B'
            }}
          >
            Everything you need to excel in your medical entrance examinations
          </p>
        </motion.div>

        {/* Resource Cards Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourceCards.map((card, i) => (
            <ResourceCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              desc={card.desc}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

