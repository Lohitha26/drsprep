"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    rank: "AIR 47, NEET PG 2025",
    quote: "DRSPREP was instrumental in my success. The comprehensive study material and expert guidance helped me secure my dream rank.",
    rating: 5,
  },
  {
    name: "Dr. Rahul Verma", 
    rank: "AIR 89, NEXT 2025",
    quote: "The structured approach and performance analytics gave me the confidence to excel. Mock tests were incredibly realistic.",
    rating: 5,
  },
  {
    name: "Dr. Ananya Patel",
    rank: "AIR 156, FMGE 2026", 
    quote: "Mock tests were incredibly realistic and helped me identify my weak areas. The personalized feedback was invaluable.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000); // Increased from 5000ms to 8000ms
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={ref} 
      className="py-20"
      style={{background: 'linear-gradient(135deg, #F8FAFC 0%, #FAFCFD 33.33%, #FDFDFE 66.67%, #FFFFFF 100%)'}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <h2 
            className="mb-3"
            style={{
              fontFamily: 'var(--font-family-poppins)',
              fontWeight: 'var(--font-weight-bold)',
              fontSize: '36px',
              lineHeight: '40px',
              textAlign: 'center',
              color: 'var(--color-text-primary)'
            }}
          >
            Voices of Success — DRSPREP Toppers Speak
          </h2>
          <p 
            style={{
              fontFamily: 'var(--font-family-poppins)',
              fontWeight: 'var(--font-weight-normal)',
              fontSize: '18px',
              lineHeight: '28px',
              textAlign: 'center',
              color: 'var(--color-text-secondary)'
            }}
          >
            Hear how students achieved their dream ranks with DRSPREP
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative flex justify-center items-center"
          style={{width: '1024px', height: '345px', margin: '0 auto'}}
        >
          {/* Only show current testimonial */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-1000 ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                width: '992px',
                height: '345px',
                background: 'linear-gradient(135deg, rgb(224, 247, 250) 0%, rgb(227, 248, 250) 9.09%, rgb(230, 248, 251) 18.18%, rgb(233, 249, 251) 27.27%, rgb(235, 250, 252) 36.36%, rgb(238, 251, 252) 45.45%, rgb(241, 251, 253) 54.55%, rgb(244, 252, 253) 63.64%, rgb(247, 253, 254) 72.73%, rgb(249, 254, 254) 81.82%, rgb(252, 254, 255) 90.91%, rgb(255, 255, 255) 100%)',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px',
                borderRadius: '24px',
                border: '2px solid',
                borderImage: 'linear-gradient(rgb(0, 173, 197) 0%, rgb(255, 255, 255) 100%) 1',
                display: index === currentIndex ? 'block' : 'none',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) ${index === currentIndex ? 'scale(1)' : 'scale(0.95)'}`
              }}
            >
                  {/* Quote Icon */}
                  <div
                    style={{
                      position: 'absolute',
                      width: '48px',
                      height: '48px',
                      left: '48px',
                      top: '48px'
                    }}
                  >
                    <div style={{position: 'relative', width: '100%', height: '100%'}}>
                      <div 
                        style={{
                          position: 'absolute',
                          left: '58.33%',
                          right: '12.5%',
                          top: '12.5%',
                          bottom: '12.5%',
                          border: '4px solid #00B8D4'
                        }}
                      />
                      <div 
                        style={{
                          position: 'absolute',
                          left: '12.5%',
                          right: '58.33%',
                          top: '12.5%',
                          bottom: '12.5%',
                          border: '4px solid #00B8D4'
                        }}
                      />
                    </div>
                  </div>

                  {/* Quote Text */}
                  <p
                    style={{
                      position: 'absolute',
                      width: '896px',
                      height: '65px',
                      left: '48px',
                      top: '120px',
                      fontFamily: 'var(--font-family-poppins)',
                      fontStyle: 'italic',
                      fontWeight: 'var(--font-weight-normal)',
                      fontSize: '20px',
                      lineHeight: '32px',
                      color: 'var(--color-text-primary)'
                    }}
                  >
                    "{testimonial.quote}"
                  </p>

                  {/* Author Info */}
                  <div
                    className="flex items-center gap-6"
                    style={{
                      position: 'absolute',
                      width: '896px',
                      height: '80px',
                      left: '48px',
                      top: '217px'
                    }}
                  >
                    {/* Avatar */}
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        border: '4px solid #00B8D4',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#F3F4F6'
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-family-poppins)',
                          fontWeight: 'var(--font-weight-bold)',
                          fontSize: '24px',
                          color: '#00B8D4'
                        }}
                      >
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>

                    {/* Name and Rank */}
                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-family-poppins)',
                          fontWeight: 'var(--font-weight-bold)',
                          fontSize: '20px',
                          lineHeight: '28px',
                          color: 'var(--color-text-primary)',
                          marginBottom: '4px'
                        }}
                      >
                        {testimonial.name}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-family-poppins)',
                          fontWeight: 'var(--font-weight-semibold)',
                          fontSize: '16px',
                          lineHeight: '24px',
                          color: '#00B8D4'
                        }}
                      >
                        {testimonial.rank}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </motion.div>
      </div>
    </section>
  );
}
