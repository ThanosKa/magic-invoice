"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import { ThemeDropdown } from "@/components/theme-dropdown";
import { GitHubStars } from "@/components/landing/github-stars";
import { LanguageSelector } from "@/components/language-selector";

export function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: t("header.features") },
    { href: "#faq", label: t("header.faq") },
  ];

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border py-4"
          : "bg-transparent py-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo-rounded.svg"
            alt="Magic Invoice Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-xl font-bold tracking-tight">
            {t("common.appName")}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="hidden sm:block">
            <GitHubStars />
          </div>
          <LanguageSelector compact />
          <ThemeDropdown />
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 shadow-xl"
        >
          <nav className="flex flex-col gap-4">
            <div className="pb-4 border-b border-border/50">
              <LanguageSelector />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-foreground py-2 border-b border-border/50"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between mt-2">
              <span className="text-muted-foreground text-sm">
                {t("header.supportUs")}
              </span>
              <GitHubStars />
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-muted-foreground text-sm">
                {t("common.toggleTheme")}
              </span>
              <ThemeDropdown />
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
