"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleDollarSign, Banknote } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative w-full h-full flex-1 max-w-[1440px] mx-auto overflow-hidden pointer-events-none select-none">
      
      {/* Background Ambience Glow */}
      <div className="absolute right-[-5%] top-[15%] w-[650px] h-[650px] rounded-full bg-[#D9FD18]/12 blur-[140px] z-0" />
      <div className="absolute left-[5%] top-[35%] w-[450px] h-[450px] rounded-full bg-white/[0.03] blur-[120px] z-0" />

      {/* Layer 1: Giant Background Watermark (BIG.ETHER) */}
      <div className="absolute left-1/2 top-[34%] sm:top-[36%] -translate-x-1/2 -translate-y-1/2 w-full text-center z-10">
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
      <div className="absolute left-6 md:left-12 lg:left-16 right-6 md:right-12 lg:right-16 top-[51%] sm:top-[52%] -translate-y-1/2 flex items-center justify-between z-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-bold tracking-tight text-white drop-shadow-md">
            Your Money
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-bold tracking-tight text-white drop-shadow-md">
            Reimagined
          </h2>
        </motion.div>
      </div>

      {/* Layer 3: Center 3D Glass Cards (Transparent with Screen blend mode and subtle glow) */}
      <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 w-[min(940px,96vh)] h-[min(940px,96vh)] z-20 flex items-center justify-center">
        
        {/* The 3D Glass Cards Artwork with Screen blending */}
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

          {/* Floating Metric Card 1: $2B+ Managed Assets (Figma exact coordinates: ~71% left, ~50% top) */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute left-[68%] sm:left-[70%] top-[48%] sm:top-[50%] z-30 pointer-events-auto"
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
              className="w-[130px] sm:w-[150px] h-[120px] sm:h-[142px] rounded-[20px] sm:rounded-[22px] p-3.5 sm:p-4 lg:p-5 glass-badge flex flex-col justify-between group hover:border-[#D9FD18]/60 transition-all duration-300"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-black/40 border border-white/15 flex items-center justify-center text-amber-300 shadow-inner">
                <CircleDollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-[#f5cc00]" />
              </div>
              <div>
                <div className="text-xl sm:text-[26px] font-bold text-white tracking-tight leading-none mb-1">
                  $2B+
                </div>
                <div className="text-[11px] sm:text-[12px] text-white/60 font-medium leading-tight">
                  Managed Assets
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Metric Card 2: ZERO Hidden Fees (Figma exact coordinates: ~42% left, ~69% top) */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute left-[39%] sm:left-[41%] top-[66%] sm:top-[68%] z-30 pointer-events-auto"
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
              className="w-[130px] sm:w-[150px] h-[120px] sm:h-[142px] rounded-[20px] sm:rounded-[22px] p-3.5 sm:p-4 lg:p-5 glass-badge flex flex-col justify-between group hover:border-[#D9FD18]/60 transition-all duration-300"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-black/40 border border-white/15 flex items-center justify-center text-[#D9FD18] shadow-inner">
                <Banknote className="w-4 h-4 sm:w-5 sm:h-5 text-[#D9FD18]" />
              </div>
              <div>
                <div className="text-xl sm:text-[26px] font-bold text-white tracking-tight leading-none mb-1">
                  ZERO
                </div>
                <div className="text-[11px] sm:text-[12px] text-white/60 font-medium leading-tight">
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
        className="absolute left-6 md:left-12 lg:left-16 bottom-5 md:bottom-7 lg:bottom-9 z-30 flex flex-col gap-2.5 sm:gap-3.5 max-w-[290px] sm:max-w-[330px] pointer-events-auto"
      >
        {/* Neon Clover Icon */}
        <div className="w-7 h-7 sm:w-8 sm:h-8 relative flex-shrink-0">
          <Image
            src="/assets/clover-icon.svg"
            alt="Feature Icon"
            width={32}
            height={32}
            className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(217,253,24,0.6)]"
          />
        </div>

        {/* Heading & Paragraph */}
        <div className="flex flex-col gap-1.5">
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Zero hidden fees
          </h3>
          <p className="text-[13px] sm:text-[14px] text-white/50 leading-[1.45] font-normal">
            Discover an innovative and more intelligent approach to effectively manage, invest, and significantly grow your financial resources.
          </p>
        </div>

        {/* Dual Action Buttons */}
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
        className="absolute right-6 md:right-12 lg:right-16 bottom-5 md:bottom-7 lg:bottom-9 z-30 pointer-events-auto cursor-pointer group"
      >
        <div className="relative w-[120px] h-[120px] sm:w-[135px] sm:h-[135px] lg:w-[145px] lg:h-[145px] flex items-center justify-center">
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
  );
}
