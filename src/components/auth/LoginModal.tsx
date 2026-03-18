"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useAuthStore } from "@/lib/store";
import PhoneStep from "./PhoneStep";
import OTPStep from "./OTPStep";
import type { ConfirmationResult } from "firebase/auth";

export default function LoginModal() {
  const { isLoginOpen, closeLogin } = useAuthStore();
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [confirmation, setConfirmation] = useState<ConfirmationResult | null>(null);
  const [phone, setPhone] = useState("");

  const handlePhoneSuccess = (conf: ConfirmationResult, ph: string) => {
    setConfirmation(conf);
    setPhone(ph);
    setStep("otp");
  };

  const handleOTPSuccess = () => {
    closeLogin();
    setStep("phone");
    setConfirmation(null);
    setPhone("");
  };

  const handleBack = () => {
    setStep("phone");
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      closeLogin();
      setStep("phone");
      setConfirmation(null);
      setPhone("");
    }
  };

  return (
    <Dialog open={isLoginOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md p-6 rounded-2xl">
        {step === "phone" && <PhoneStep onSuccess={handlePhoneSuccess} />}
        {step === "otp" && confirmation && (
          <OTPStep
            confirmation={confirmation}
            phone={phone}
            onSuccess={handleOTPSuccess}
            onBack={handleBack}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
