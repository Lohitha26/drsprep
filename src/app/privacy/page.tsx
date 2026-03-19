"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Shield, Eye, Lock, Database, UserCheck, Globe } from "lucide-react";

const privacySections = [
  {
    icon: Shield,
    title: "Information We Collect",
    content: [
      "Personal identification information (Name, Email, Phone Number)",
      "Educational background and exam preparation goals",
      "Usage data and interaction patterns on our platform",
      "Payment information for subscription services",
      "Communication preferences and contact details"
    ]
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      "To provide personalized learning experiences",
      "To deliver relevant study materials and test recommendations",
      "To process payments and manage subscriptions",
      "To communicate important updates and support messages",
      "To improve our services through analytics and feedback"
    ]
  },
  {
    icon: Lock,
    title: "Data Security Measures",
    content: [
      "Industry-standard encryption for all sensitive data",
      "Secure authentication protocols and access controls",
      "Regular security audits and vulnerability assessments",
      "Limited employee access to user information",
      "Compliance with data protection regulations"
    ]
  },
  {
    icon: Database,
    title: "Data Storage and Retention",
    content: [
      "Secure cloud storage with redundant backups",
      "Data retention periods based on legal requirements",
      "Automatic deletion of inactive accounts after 2 years",
      "Right to request data deletion at any time",
      "Secure data export options for users"
    ]
  },
  {
    icon: UserCheck,
    title: "Your Rights and Choices",
    content: [
      "Access to your personal data upon request",
      "Correction of inaccurate information",
      "Deletion of your account and associated data",
      "Opt-out of marketing communications",
      "Control over cookie and tracking preferences"
    ]
  },
  {
    icon: Globe,
    title: "Third-Party Sharing",
    content: [
      "We never sell personal information to third parties",
      "Limited sharing only with essential service providers",
      "Payment processors for transaction processing",
      "Analytics services with anonymized data only",
      "Legal compliance when required by law"
    ]
  }
];

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
              Your privacy is important to us. This policy outlines how we collect, 
              use, and protect your personal information on the DRSPREP platform.
            </p>
            <p className="text-sm text-[#6B7280] mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </motion.div>

          {/* Privacy Sections */}
          <div className="space-y-8">
            {privacySections.map((section, index) => (
              <motion.div
                key={section.title}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#00B8A9]/10 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-[#00B8A9]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
                      {section.title}
                    </h2>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#00B8A9] mt-2 flex-shrink-0" />
                          <span className="text-[#6B7280] leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="mt-16 bg-gradient-to-r from-[#00B8A9] to-[#008F84] rounded-2xl p-8 text-white"
          >
            <h2 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h2>
            <p className="text-white/80 mb-6">
              If you have any questions about this privacy policy or how we handle your data, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:privacy@drsprep.com"
                className="bg-white text-[#00B8A9] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Email Privacy Team
              </a>
              <a
                href="tel:+918012345678"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Call Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
