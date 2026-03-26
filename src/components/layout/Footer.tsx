"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Mail } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { label: "Courses", href: "#features" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#pricing" },
  { label: "Mock Tests", href: "#features" },
];

const supportLinks = [
  { label: "Contact", href: "#" },
  { label: "Help Center", href: "#" },
];

const socials = [
  { icon: "/icons/instagram.svg", href: "#", label: "Instagram" },
  { icon: "/icons/linkedln icon.svg", href: "#", label: "LinkedIn" },
  { icon: "/icons/youtube icon.svg", href: "#", label: "YouTube" },
  { icon: "/icons/twitter icon.svg", href: "#", label: "Twitter" },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer 
      ref={ref} 
      style={{ background: '#0D1B2A' }}
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          paddingTop: 'clamp(48px, 4.167vw, 80px)',
          paddingBottom: 'clamp(32px, 2.5vw, 48px)'
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div style={{ maxWidth: 'clamp(280px, 20vw, 384px)' }}>
            <div style={{ marginBottom: 'clamp(16px, 1.25vw, 24px)' }}>
              <Image
                src="/images/Main Logo.svg"
                alt="DrsPrep Logo"
                width={120}
                height={40}
                style={{
                  width: 'clamp(100px, 6.25vw, 120px)',
                  height: 'auto'
                }}
              />
            </div>
            <p
              style={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: 'clamp(14px, 0.833vw, 16px)',
                lineHeight: 'clamp(22px, 1.354vw, 26px)',
                letterSpacing: '0px',
                color: '#99A1AF',
                marginBottom: 'clamp(20px, 1.667vw, 32px)'
              }}
            >
              Your trusted partner for medical exam preparation. Empowering
              thousands of medical aspirants to achieve their dream ranks.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: 'clamp(36px, 2.083vw, 40px)',
                    height: 'clamp(36px, 2.083vw, 40px)',
                    borderRadius: 'clamp(12px, 0.833vw, 16px)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.3s ease',
                    padding: '10px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#00B8D4';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <Image
                    src={s.icon}
                    alt={s.label}
                    width={20}
                    height={20}
                    style={{
                      width: 'clamp(16px, 1.042vw, 20px)',
                      height: 'clamp(16px, 1.042vw, 20px)'
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: 'clamp(16px, 0.9375vw, 18px)',
                lineHeight: 'clamp(24px, 1.458vw, 28px)',
                letterSpacing: '0px',
                color: '#FFFFFF',
                marginBottom: 'clamp(16px, 1.25vw, 24px)'
              }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col" style={{ gap: 'clamp(12px, 0.833vw, 16px)' }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: 'Poppins',
                      fontWeight: 400,
                      fontSize: 'clamp(14px, 0.833vw, 16px)',
                      lineHeight: 'clamp(20px, 1.25vw, 24px)',
                      letterSpacing: '0px',
                      color: '#99A1AF',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#00B8D4';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#99A1AF';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4
              style={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: 'clamp(16px, 0.9375vw, 18px)',
                lineHeight: 'clamp(24px, 1.458vw, 28px)',
                letterSpacing: '0px',
                color: '#FFFFFF',
                marginBottom: 'clamp(16px, 1.25vw, 24px)'
              }}
            >
              Support
            </h4>
            <ul className="flex flex-col" style={{ gap: 'clamp(12px, 0.833vw, 16px)' }}>
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: 'Poppins',
                      fontWeight: 400,
                      fontSize: 'clamp(14px, 0.833vw, 16px)',
                      lineHeight: 'clamp(20px, 1.25vw, 24px)',
                      letterSpacing: '0px',
                      color: '#99A1AF',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#00B8D4';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#99A1AF';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <Mail
                  style={{
                    width: 'clamp(14px, 0.833vw, 16px)',
                    height: 'clamp(14px, 0.833vw, 16px)',
                    color: '#99A1AF'
                  }}
                />
                <span
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: 'clamp(14px, 0.833vw, 16px)',
                    lineHeight: 'clamp(20px, 1.25vw, 24px)',
                    letterSpacing: '0px',
                    color: '#99A1AF'
                  }}
                >
                  support@drsprep.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: 'clamp(24px, 1.719vw, 33px)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: 'clamp(14px, 0.833vw, 16px)',
              lineHeight: 'clamp(20px, 1.25vw, 24px)',
              letterSpacing: '0px',
              textAlign: 'center',
              color: '#99A1AF',
              paddingBottom: 'clamp(24px, 1.25vw, 24px)'
            }}
          >
            © DRSPREP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
