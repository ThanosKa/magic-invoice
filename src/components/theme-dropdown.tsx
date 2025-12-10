"use client";

import * as React from "react";
import { LaptopMinimal, Moon, Sun, Check } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type ThemeOption = "light" | "dark" | "system";

const options: { value: ThemeOption; label: string; icon: React.ReactNode }[] =
  [
    { value: "light", label: "Light", icon: <Sun className="mr-2 h-4 w-4" /> },
    {
      value: "system",
      label: "System",
      icon: <LaptopMinimal className="mr-2 h-4 w-4" />,
    },
    { value: "dark", label: "Dark", icon: <Moon className="mr-2 h-4 w-4" /> },
  ];

interface ThemeDropdownProps {
  className?: string;
}

export function ThemeDropdown({ className }: ThemeDropdownProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme: ThemeOption =
    theme === "system" ? "system" : (resolvedTheme as ThemeOption) ?? "system";

  const activeIconType =
    activeTheme === "dark"
      ? "moon"
      : activeTheme === "light"
      ? "sun"
      : "laptop";
  const activeIcon =
    activeIconType === "moon" ? (
      <Moon className="h-5 w-5" />
    ) : activeIconType === "sun" ? (
      <Sun className="h-5 w-5" />
    ) : (
      <LaptopMinimal className="h-5 w-5" />
    );

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn("relative", className)}
          aria-label="Toggle theme"
        >
          {mounted ? activeIcon : <Sun className="h-5 w-5" />}
        </Button>
      </DropdownMenuTrigger>
      <AnimatePresence>
        {open && (
          <DropdownMenuContent
            forceMount
            asChild
            align="end"
            className="w-36"
            sideOffset={8}
          >
            <motion.div
              key="theme-dropdown"
              initial={{ opacity: 0, scale: 0.97, y: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -4 }}
              transition={{ duration: 0.14, ease: [0.16, 1, 0.3, 1] }}
            >
              {options.map((option) => (
                <DropdownMenuItem
                  key={option.value}
                  onClick={() => setTheme(option.value)}
                  className="flex items-center"
                >
                  {option.icon}
                  <span className="flex-1 text-sm">{option.label}</span>
                  {activeTheme === option.value && (
                    <Check className="h-4 w-4" />
                  )}
                </DropdownMenuItem>
              ))}
            </motion.div>
          </DropdownMenuContent>
        )}
      </AnimatePresence>
    </DropdownMenu>
  );
}
