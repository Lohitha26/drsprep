"use client";

import Link from "next/link";
import { useAuthStore } from "@/lib/store";
import Image from "next/image";

export default function Header() {
  const { openGetStarted } = useAuthStore();

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "clamp(60px, 3.75vw, 72px)",
        background: "rgba(255, 255, 255, 0.67)",
        backdropFilter: "blur(10.4px)",
        WebkitBackdropFilter: "blur(10.4px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="DrsPrep home"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Image
            src="/icons/Header main Logo.svg"
            alt="DrsPrep"
            width={116}
            height={30}
            style={{
              width: "clamp(80px, 6.042vw, 116px)",
              height: "auto",
            }}
            priority
          />
        </Link>

        {/* Get Started Button */}
        <button
          type="button"
          onClick={openGetStarted}
          className="btn-3d-small"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "clamp(6px, 0.417vw, 8px) clamp(16px, 1.25vw, 24px)",
            gap: "clamp(6px, 0.417vw, 8px)",
            width: "clamp(110px, 6.875vw, 132px)",
            height: "clamp(32px, 1.875vw, 36px)",
            background: "#00B8D4",
            borderRadius: "clamp(24px, 2.031vw, 39px)",
            border: "none",
            cursor: "pointer",
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "clamp(12px, 0.729vw, 14px)",
            lineHeight: "clamp(18px, 1.042vw, 20px)",
            textAlign: "center",
            color: "#FFFFFF",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#0097A7";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#00B8D4";
          }}
        >
          Get Started
        </button>
      </div>
    </header>
  );
}
