"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/lib/store";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic Plan",
    price: "₹2,999",
    period: "/3 months",
    features: ["QBank access", "Basic video lectures", "Practice tests", "Email support"],
    popular: false,
  },
  {
    name: "Standard Plan",
    price: "₹7,999",
    period: "/6 months",
    features: [
      "Full video lectures",
      "Complete QBank",
      "Mock tests",
      "Performance analytics",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Premium Plan",
    price: "₹14,999",
    period: "/1 year",
    features: [
      "Everything in Standard",
      "Live sessions",
      "Mentorship",
      "Exclusive test series",
      "24/7 support",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { openLogin } = useAuthStore();

  return (
    <section id="pricing" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-3">
            Choose Your DRSPREP Plan
          </h2>
          <p className="text-[#6B7280]">
            Select the perfect plan for your exam preparation journey
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-[#00B8A9] shadow-xl scale-100 md:scale-105 bg-white z-10"
                  : "border border-gray-200 shadow-sm bg-white hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#00B8A9] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-[#1A1A2E] mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold text-[#1A1A2E]">{plan.price}</span>
                <span className="text-[#6B7280] text-sm">{plan.period}</span>
              </div>

              <ul className="flex flex-col gap-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#1A1A2E]">
                    <Check className="w-4 h-4 text-[#00B8A9] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                onClick={openLogin}
                className={`w-full h-11 font-semibold rounded-lg transition-transform hover:scale-105 ${
                  plan.popular
                    ? "bg-[#00B8A9] hover:bg-[#008F84] text-white"
                    : "bg-white border border-gray-300 text-[#1A1A2E] hover:bg-gray-50"
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
