"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Mail, X } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border py-12 md:py-16 bg-background">
      <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Magic Invoice Logo"
            width={24}
            height={24}
            className="dark:invert rounded-md"
          />
          <span className="text-lg font-bold tracking-tight">
            {t("common.appName")}
          </span>
        </div>

        <div className="flex items-center justify-center gap-6">
          <Link
            href="https://github.com/ThanosKa/magic-invoice"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://x.com/KazakisThanos"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            aria-label="X (Twitter)"
          >
            <X className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:hello@magic-self.dev"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>

        <div className="text-sm text-muted-foreground text-center">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
