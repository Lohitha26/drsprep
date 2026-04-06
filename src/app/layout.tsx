import type { Metadata, Viewport } from "next";
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
  icons: {
    icon: "/icons/DrsPrep - Fav Icon.png",
    shortcut: "/icons/DrsPrep - Fav Icon.png",
    apple: "/icons/DrsPrep - Fav Icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ overflowX: 'hidden' }}>
      <body className={`${poppins.variable} antialiased overflow-x-hidden`} style={{ overflowX: 'hidden' }}>
        {children}
        <LoginModal />
      </body>
    </html>
  );
}
