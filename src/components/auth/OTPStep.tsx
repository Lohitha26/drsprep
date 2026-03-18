"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowLeft } from "lucide-react";
import type { ConfirmationResult } from "firebase/auth";

interface OTPStepProps {
  confirmation: ConfirmationResult;
  phone: string;
  onSuccess: () => void;
  onBack: () => void;
}

export default function OTPStep({ confirmation, phone, onSuccess, onBack }: OTPStepProps) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (resendTimer <= 0) return;
    const interval = setInterval(() => setResendTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const newOtp = [...otp];
    for (let i = 0; i < pasted.length; i++) {
      newOtp[i] = pasted[i];
    }
    setOtp(newOtp);
    const focusIndex = Math.min(pasted.length, 5);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleVerify = useCallback(async () => {
    const code = otp.join("");
    if (code.length !== 6) {
      setError("Please enter the complete 6-digit OTP");
      return;
    }

    setLoading(true);
    setError("");
    try {
      await confirmation.confirm(code);
      onSuccess();
    } catch {
      setError("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [otp, confirmation, onSuccess]);

  const maskedPhone = `+91 ${phone.slice(0, 2)}****${phone.slice(-2)}`;

  return (
    <div className="flex flex-col gap-5 p-1">
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-sm text-[#6B7280] hover:text-[#1A1A2E] transition-colors w-fit"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#1A1A2E]">Enter OTP</h2>
        <p className="text-sm text-[#6B7280] mt-1">
          OTP sent to {maskedPhone}
        </p>
      </div>

      <div className="flex justify-center gap-3" onPaste={handlePaste}>
        {otp.map((digit, i) => (
          <input
            key={i}
            ref={(el) => { inputRefs.current[i] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className="w-12 h-14 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg
              focus:border-[#00B8A9] focus:ring-2 focus:ring-[#00B8A9]/20 outline-none transition-all"
          />
        ))}
      </div>

      {error && (
        <p className="text-sm text-red-500 text-center">{error}</p>
      )}

      <Button
        onClick={handleVerify}
        disabled={loading || otp.join("").length < 6}
        className="w-full h-12 text-base font-semibold bg-[#00B8D4] hover:bg-[#00A3BE] text-white rounded-lg"
      >
        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Verify OTP"}
      </Button>

      <div className="text-center">
        {resendTimer > 0 ? (
          <p className="text-sm text-[#6B7280]">
            Resend OTP in <span className="font-semibold text-[#1A1A2E]">{resendTimer}s</span>
          </p>
        ) : (
          <button
            onClick={() => {
              setResendTimer(30);
              setError("");
            }}
            className="text-sm text-[#00B8A9] font-medium hover:underline"
          >
            Resend OTP
          </button>
        )}
      </div>
    </div>
  );
}
