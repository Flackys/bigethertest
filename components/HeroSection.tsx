"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleDollarSign, Banknote } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      {/* ========================================================================= */}
      {/* 1. MOBILE & TABLET LAYOUT (< lg)                                          */}
      {/* ========================================================================= */}
      <div className="flex lg:hidden flex-col items-center justify-between w-full max-w-lg mx-auto px-6 py-6 min-h-[calc(100vh-80px)] text-center relative z-20">
        
        {/* Top Watermark & Heading */}
        <div className="flex flex-col items-center gap-1 w-full pt-2">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[15vw] sm:text-6xl font-extrabold tracking-tight uppercase text-watermark leading-none"
          >
            BIG<span className="text-[#D9FD18]">.</span>ETHER
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-2 flex items-center justify-center gap-2"
          >
            <span>Your Money</span>
            <span className="text-[#D9FD18]">Reimagined</span>
          </motion.h2>
        </div>

        {/* Center 3D Glass Cards Composite with Floating Badges */}
        <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] my-6 flex items-center justify-center">
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 0.8, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full h-full"
          >
            <Image
              src="/assets/glass-cards-transparent.png"
              alt="3D Glass Cards"
              fill
              priority
              className="object-contain filter drop-shadow-[0_0_30px_rgba(217,253,24,0.2)]"
            />
          </motion.div>

          {/* Floating Metric Card 1: $2B+ Managed Assets */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute -right-3 top-[20%] z-30"
          >
            <div className="w-[115px] h-[105px] rounded-2xl p-3 glass-badge flex flex-col justify-between text-left">
              <div className="w-7 h-7 rounded-lg bg-black/40 border border-white/15 flex items-center justify-center">
                <CircleDollarSign className="w-4 h-4 text-[#f5cc00]" />
              </div>
              <div>
                <div className="text-xl font-bold text-white tracking-tight leading-none mb-0.5">
                  $2B+
                </div>
                <div className="text-[10px] text-white/60 font-medium leading-tight">
                  Managed Assets
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Metric Card 2: ZERO Hidden Fees */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute -left-3 bottom-[12%] z-30"
          >
            <div className="w-[115px] h-[105px] rounded-2xl p-3 glass-badge flex flex-col justify-between text-left">
              <div className="w-7 h-7 rounded-lg bg-black/40 border border-white/15 flex items-center justify-center">
                <Banknote className="w-4 h-4 text-[#D9FD18]" />
              </div>
              <div>
                <div className="text-xl font-bold text-white tracking-tight leading-none mb-0.5">
                  ZERO
                </div>
                <div className="text-[10px] text-white/60 font-medium leading-tight">
                  Hidden Fees
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Feature Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col items-center gap-3 w-full max-w-sm mt-2"
        >
          <div className="w-7 h-7 relative flex-shrink-0">
            <Image
              src="/assets/clover-icon.svg"
              alt="Feature Icon"
              width={28}
              height={28}
              className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(217,253,24,0.6)]"
            />
          </div>

          <div className="flex flex-col gap-1.5 text-center">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Zero hidden fees
            </h3>
            <p className="text-xs text-white/60 leading-relaxed font-normal px-2">
              Discover an innovative and more intelligent approach to effectively manage, invest, and significantly grow your financial resources.
            </p>
          </div>

          {/* Dual Action CTA Buttons */}
          <div className="flex items-center justify-center gap-2 pt-1 w-full">
            <Link
              href="#register"
              className="flex-1 max-w-[200px] py-3 rounded-xl bg-white text-black font-bold text-sm tracking-wide shadow-lg hover:bg-neutral-200 transition-all active:scale-95 text-center"
            >
              Register
            </Link>
            <Link
              href="#register"
              className="w-11 h-11 rounded-xl bg-[#D9FD18] flex items-center justify-center text-black shadow-lg hover:bg-[#e2ff40] transition-all active:scale-95 group"
            >
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>

        {/* Bottom AI Rotating Badge */}
        <div className="pt-6 pb-2">
          <div className="relative w-[100px] h-[100px] flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-full h-full relative"
            >
              <Image
                src="/assets/ai-badge.svg"
                alt="AI Digital Banking Badge"
                fill
                className="object-contain filter drop-shadow-[0_0_12px_rgba(217,253,24,0.3)]"
              />
            </motion.div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 2. DESKTOP LAYOUT (lg+) — 100vh Pixel-Perfect Non-Scrolling Figma Layering */}
      {/* ========================================================================= */}
      <div className="hidden lg:block relative w-full h-full flex-1 max-w-[1440px] mx-auto overflow-hidden pointer-events-none select-none">
        
        {/* Ambience Glow */}
        <div className="absolute right-[-5%] top-[15%] w-[650px] h-[650px] rounded-full bg-[#D9FD18]/12 blur-[140px] z-0" />
        <div className="absolute left-[5%] top-[35%] w-[450px] h-[450px] rounded-full bg-white/[0.03] blur-[120px] z-0" />

        {/* Layer 1: Giant Background Watermark (BIG.ETHER) */}
        <div className="absolute left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2 w-full text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-[17vw] xl:text-[255px] 2xl:text-[275px] font-extrabold tracking-[-0.04em] leading-none uppercase text-watermark drop-shadow-sm"
          >
            BIG<span className="text-[#D9FD18] inline-block">.</span>ETHER
          </motion.h1>
        </div>

        {/* Layer 2: Mid Subtitles (Your Money & Reimagined) */}
        <div className="absolute left-12 lg:left-16 right-12 lg:right-16 top-[52%] -translate-y-1/2 flex items-center justify-between z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl lg:text-[36px] font-bold tracking-tight text-white drop-shadow-md">
              Your Money
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl lg:text-[36px] font-bold tracking-tight text-white drop-shadow-md">
              Reimagined
            </h2>
          </motion.div>
        </div>

        {/* Layer 3: Center 3D Glass Cards (Transparent with Screen blend mode) */}
        <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 w-[min(940px,96vh)] h-[min(940px,96vh)] z-20 flex items-center justify-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 0.6, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full h-full"
            >
              <Image
                src="/assets/glass-cards-transparent.png"
                alt="3D Glass Cards"
                fill
                priority
                className="object-contain filter drop-shadow-[0_0_35px_rgba(217,253,24,0.2)]"
              />
            </motion.div>

            {/* Floating Metric Card 1: $2B+ Managed Assets */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute left-[70%] top-[50%] z-30 pointer-events-auto"
            >
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-[145px] lg:w-[155px] h-[135px] lg:h-[145px] rounded-[22px] p-4 lg:p-5 glass-badge flex flex-col justify-between group hover:border-[#D9FD18]/60 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/15 flex items-center justify-center text-amber-300 shadow-inner">
                  <CircleDollarSign className="w-5 h-5 text-[#f5cc00]" />
                </div>
                <div>
                  <div className="text-[26px] font-bold text-white tracking-tight leading-none mb-1">
                    $2B+
                  </div>
                  <div className="text-[12px] text-white/60 font-medium leading-tight">
                    Managed Assets
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Metric Card 2: ZERO Hidden Fees */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute left-[41%] top-[68%] z-30 pointer-events-auto"
            >
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="w-[145px] lg:w-[155px] h-[135px] lg:h-[145px] rounded-[22px] p-4 lg:p-5 glass-badge flex flex-col justify-between group hover:border-[#D9FD18]/60 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/15 flex items-center justify-center text-[#D9FD18] shadow-inner">
                  <Banknote className="w-5 h-5 text-[#D9FD18]" />
                </div>
                <div>
                  <div className="text-[26px] font-bold text-white tracking-tight leading-none mb-1">
                    ZERO
                  </div>
                  <div className="text-[12px] text-white/60 font-medium leading-tight">
                    Hidden Fees
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Layer 4: Bottom-Left Features Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute left-12 lg:left-16 bottom-7 lg:bottom-9 z-30 flex flex-col gap-3.5 max-w-[330px] pointer-events-auto"
        >
          <div className="w-8 h-8 relative flex-shrink-0">
            <Image
              src="/assets/clover-icon.svg"
              alt="Feature Icon"
              width={32}
              height={32}
              className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(217,253,24,0.6)]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Zero hidden fees
            </h3>
            <p className="text-[14px] text-white/50 leading-[1.45] font-normal">
              Discover an innovative and more intelligent approach to effectively manage, invest, and significantly grow your financial resources.
            </p>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <Link
              href="#register"
              className="px-7 py-3 rounded-[14px] bg-white text-black font-bold text-[14px] tracking-wide shadow-lg hover:bg-neutral-200 transition-all active:scale-95"
            >
              Register
            </Link>
            <Link
              href="#register"
              className="w-11 h-11 rounded-[14px] bg-[#D9FD18] flex items-center justify-center text-black shadow-lg hover:bg-[#e2ff40] hover:scale-105 transition-all active:scale-95 group"
            >
              <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>

        {/* Layer 5: Bottom-Right Circular Rotating AI Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute right-12 lg:right-16 bottom-7 lg:bottom-9 z-30 pointer-events-auto cursor-pointer group"
        >
          <div className="relative w-[135px] h-[135px] lg:w-[145px] lg:h-[145px] flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{ scale: 1.06 }}
              className="w-full h-full relative"
            >
              <Image
                src="/assets/ai-badge.svg"
                alt="AI Digital Banking Badge"
                fill
                className="object-contain filter drop-shadow-[0_0_15px_rgba(217,253,24,0.35)]"
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </>
  );
}
