"use client";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Shield, Globe } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div className="flex flex-col gap-0 w-full overflow-hidden">
      {/* Hero Section */}
      <section ref={targetRef} className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-16 md:pt-32 md:pb-24">
        {/* Radial Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted/50 via-background to-background -z-10" />

        <motion.div
          style={{ opacity, scale }}
          className="container max-w-4xl px-4 text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link href="#features" className="group inline-flex items-center gap-1 mb-8">
              <AnimatedShinyText className="inline-flex items-center justify-center rounded-full border border-border bg-background px-4 py-1.5 text-sm shadow-sm transition hover:bg-accent hover:text-accent-foreground">
                <span className="flex items-center gap-1">
                  ✨ v2.0 is now live
                  <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </AnimatedShinyText>
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground">
              Invoicing made <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                beautifully simple.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Create professional, stunning invoices in seconds. No account required.
              Export to PDF and get paid faster with the most intuitive editor on the web.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-12 px-8 rounded-full w-full sm:w-auto font-medium hover:bg-primary/90">
                Start Invoicing Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 rounded-full w-full sm:w-auto bg-transparent hover:bg-accent hover:text-accent-foreground">
                View Templates
              </Button>
            </div>
          </motion.div>

          {/* Hero Media / Abstract UI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 relative mx-auto max-w-5xl rounded-xl border border-border/50 bg-muted/20 p-2 md:p-4 shadow-2xl"
          >
            <div className="aspect-[16/9] rounded-lg bg-background overflow-hidden border border-border shadow-sm flex items-center justify-center">
              <div className="text-muted-foreground text-sm">[Invoice Editor Preview Image]</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-border/40 bg-muted/5">
        <div className="container px-4 mx-auto max-w-6xl">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">TRUSTED BY FREELANCERS & TEAMS</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for logos */}
            {['Acme Inc', 'Vertex', 'Nvidia', 'Framer', 'Stripe'].map((brand) => (
              <div key={brand} className="text-lg font-semibold font-serif text-foreground">{brand}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-background">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">Everything you need, nothing you don't.</h2>
            <p className="text-lg text-muted-foreground">Focus on your work, not on paperwork. Pure invoicing experience.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Built for speed. Create, edit, and send invoices in milliseconds without page reloads."
              },
              {
                icon: Shield,
                title: "Private & Secure",
                description: "Your data stays on your device. We don't store your financial information."
              },
              {
                icon: Globe,
                title: "Global Currency",
                description: "Support for 100+ currencies and languages. Do business anywhere in the world."
              },
              {
                icon: CheckCircle2,
                title: "PDF Export",
                description: "Generate pixel-perfect PDFs instantly that look great on any device."
              },
              {
                icon: CheckCircle2,
                title: "Custom Branding",
                description: "Add your logo and brand colors to make your invoices stand out."
              },
              {
                icon: CheckCircle2,
                title: "No Sign-up",
                description: "Start creating immediately. No barriers, just productivity."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-border/50 bg-background hover:border-border transition-colors shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4 text-foreground">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30 border-t border-border/50">
        <div className="container px-4 mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">Ready to start invoicing?</h2>
            <p className="text-xl text-muted-foreground mb-10">Join thousands of freelancers who have switched to Magic Invoice.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-12 px-8 rounded-full w-full sm:w-auto font-medium">
                Get Started for Free
              </Button>
              {/* Secondary CTA invisible/transparent as per brief if desired, or simplified */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
