"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#", active: true },
  { name: "Shop", href: "#", active: false },
  { name: "Collections", href: "#", active: false },
  { name: "About", href: "#", active: false },
  { name: "Journal", href: "#", active: false },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-6 pb-2 flex-shrink-0">
      <div className="flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 transition-transform group-hover:scale-105">
            <Image
              src="/assets/logo-icon.svg"
              alt="BIG.ETHER Logo"
              width={28}
              height={30}
              priority
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col leading-none font-extrabold tracking-wider text-[13px] sm:text-[14px] text-white">
            <span className="flex items-center">
              BIG<span className="text-[#D9FD18]">.</span>
            </span>
            <span className="text-white/90">ETHER</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-14">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[15px] tracking-wide transition-colors relative py-1 ${
                link.active
                  ? "text-white font-bold"
                  : "text-white/50 font-normal hover:text-white"
              }`}
            >
              {link.name}
              {link.active && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D9FD18] rounded-full"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Action Button */}
        <div className="hidden sm:flex items-center">
          <Link
            href="#register"
            className="group flex items-center justify-between gap-3 px-4 py-2 sm:px-5 sm:py-2.5 rounded-[14px] border border-white/20 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.08] hover:border-[#D9FD18]/40 transition-all duration-300"
          >
            <span className="text-[14px] sm:text-[15px] font-bold text-white tracking-wide">
              Register
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D9FD18] transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden p-2 text-white/80 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="sm:hidden absolute top-full left-6 right-6 mt-2 p-5 rounded-2xl bg-[#0e1116]/95 border border-white/10 backdrop-blur-xl flex flex-col gap-3 shadow-2xl z-50"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base py-1.5 ${
                  link.active ? "text-[#D9FD18] font-bold" : "text-white/70"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#register"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#D9FD18] text-black font-bold text-sm"
            >
              <span>Register</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
