import * as React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const REPO_URL = "https://github.com/ThanosKa/magic-invoice";

export function GitHubStars() {
  const [isHovered, setIsHovered] = React.useState(false);
  const [stars, setStars] = React.useState<number | null>(null);

  React.useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/ThanosKa/magic-invoice"
        );
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Failed to fetch GitHub stars:", error);
        setStars(0);
      }
    };

    fetchStars();
  }, []);

  return (
    <motion.a
      href={REPO_URL}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "group relative inline-flex h-8 select-none items-center overflow-hidden rounded-full border border-border/40",
        "bg-background/50 text-sm font-medium shadow-sm backdrop-blur-md transition-shadow",
        "hover:shadow-md dark:border-white/20 dark:bg-background/20"
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 -z-10",
          "bg-[length:400%_400%] animate-gradient-xy transition-colors duration-500",
          "bg-gradient-to-r from-violet-200/30 via-pink-200/30 to-cyan-200/30",
          "dark:from-violet-500/10 dark:via-pink-500/10 dark:to-cyan-500/10",
          "group-hover:from-violet-200/50 group-hover:via-pink-200/50 group-hover:to-cyan-200/50",
          "dark:group-hover:from-violet-500/20 dark:group-hover:via-pink-500/20 dark:group-hover:to-cyan-500/20"
        )}
      />

      <div className="relative z-10 px-3 text-sm font-medium">
        Star on GitHub
      </div>

      <div className="relative z-10 flex h-full items-center border-l border-border/60 bg-primary/5 px-3 text-xs font-semibold">
        <motion.div
          animate={isHovered ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
          className="mr-1"
        >
          <Star
            className="h-3.5 w-3.5 text-yellow-500/70 transition-colors duration-300 group-hover:text-yellow-500 dark:text-yellow-400/70 dark:group-hover:text-yellow-400"
            fill={isHovered ? "currentColor" : "none"}
          />
        </motion.div>

        <motion.span
          key={stars ?? "loading"}
          initial={{ opacity: 0.6, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
        >
          {stars?.toLocaleString() ?? "---"}
        </motion.span>
      </div>
    </motion.a>
  );
}
