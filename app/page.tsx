import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="relative h-screen max-h-screen w-screen overflow-hidden bg-[#060709] text-white flex flex-col justify-between select-none">
      {/* Background Graphic from Figma */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/hero-bg.png"
          alt="Cosmic Ambient Background"
          fill
          priority
          className="object-cover object-center opacity-85"
        />
        {/* Vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060709]/80 via-transparent to-[#060709]/40" />
      </div>

      {/* Main App Canvas */}
      <div className="relative z-10 flex flex-col h-full w-full justify-between">
        <Navbar />
        <HeroSection />
      </div>
    </main>
  );
}
