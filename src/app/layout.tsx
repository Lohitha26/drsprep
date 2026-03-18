import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LoginModal from "@/components/auth/LoginModal";

const poppins = Poppins({
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DrsPrep — NEET PG, FMGE & Medical Exam Preparation",
  description:
    "Access free video lectures, QBank, mock tests and more. Join thousands of medical aspirants preparing smarter with DrsPrep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <LoginModal />
      </body>
    </html>
  );
}
