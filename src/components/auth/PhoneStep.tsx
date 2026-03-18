"use client";

import { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "@/lib/firebase";
import type { ConfirmationResult } from "firebase/auth";

interface PhoneStepProps {
  onSuccess: (confirmation: ConfirmationResult, phone: string) => void;
}

export default function PhoneStep({ onSuccess }: PhoneStepProps) {
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSendOTP = useCallback(async () => {
    setError("");
    const cleaned = phone.replace(/\s/g, "");
    if (!/^\d{10}$/.test(cleaned)) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }

    setLoading(true);
    try {
      const firebaseAuth = getAuth();
      if (!(window as unknown as Record<string, unknown>).recaptchaVerifier) {
        (window as unknown as Record<string, unknown>).recaptchaVerifier = new RecaptchaVerifier(
          firebaseAuth,
          "recaptcha-container",
          { size: "invisible" }
        );
      }
      const verifier = (window as unknown as Record<string, unknown>).recaptchaVerifier as InstanceType<typeof RecaptchaVerifier>;
      const confirmation = await signInWithPhoneNumber(firebaseAuth, `+91${cleaned}`, verifier);
      onSuccess(confirmation, cleaned);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [phone, onSuccess]);

  return (
    <div className="flex flex-col gap-5 p-1">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#1A1A2E]">Login to DrsPrep</h2>
        <p className="text-sm text-[#6B7280] mt-1">Enter your mobile number to continue</p>
      </div>

      <div>
        <label className="text-sm font-medium text-[#1A1A2E] mb-1.5 block">
          Mobile Number
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#00B8A9]">
          <div className="flex items-center gap-1.5 px-3 bg-gray-50 border-r border-gray-300 py-2.5">
            <span className="text-lg">🇮🇳</span>
            <span className="text-sm font-medium text-[#1A1A2E]">+91</span>
          </div>
          <Input
            type="tel"
            placeholder="Enter mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
            className="border-0 focus-visible:ring-0 shadow-none"
            maxLength={10}
          />
        </div>
      </div>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={whatsapp}
          onChange={(e) => setWhatsapp(e.target.checked)}
          className="w-4 h-4 rounded border-gray-300 text-[#00B8A9] focus:ring-[#00B8A9]"
        />
        <span className="text-sm text-[#6B7280]">Get OTP via WhatsApp</span>
      </label>

      {error && (
        <p className="text-sm text-red-500 text-center">{error}</p>
      )}

      <Button
        onClick={handleSendOTP}
        disabled={loading || phone.length < 10}
        className="w-full h-12 text-base font-semibold bg-[#00B8D4] hover:bg-[#00A3BE] text-white rounded-lg"
      >
        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send OTP"}
      </Button>

      <p className="text-xs text-center text-[#6B7280]">
        By continuing, you agree to our{" "}
        <span className="text-[#00B8A9] underline cursor-pointer">Terms of Service</span>{" "}
        and{" "}
        <span className="text-[#00B8A9] underline cursor-pointer">Privacy Policy</span>
      </p>

      <div id="recaptcha-container" />
    </div>
  );
}
