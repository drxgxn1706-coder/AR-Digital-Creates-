import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

import { brand, images } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <img
        src={images.hero}
        alt="Camera operator filming on a cinematic set"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-medium tracking-[0.22em] text-champagne uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {brand.badge}
          </span>

          <h1 className="mt-7 text-4xl leading-[1.05] font-semibold text-balance sm:text-6xl lg:text-7xl">
            We Don't Just Create Content.
            <span className="mt-2 block text-gold-gradient">We Create Impact.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            From concept to camera to final frame, {brand.name} transforms ideas into
            powerful visual stories that connect brands with their audience.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#portfolio"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_36px_-8px_var(--gold)] active:scale-[0.98]"
            >
              View Our Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 px-7 py-3.5 text-sm font-semibold text-champagne transition-colors duration-300 hover:bg-gold/10"
            >
              Let's Work Together
            </a>
            <a
              href="#showreel"
              className="inline-flex items-center justify-center gap-2 px-2 py-3.5 text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              <Play className="h-4 w-4 fill-current" />
              Watch showreel
            </a>
          </div>
        </motion.div>
      </div>

      <div className="gold-hairline absolute inset-x-0 bottom-0 h-px" />
    </section>
  );
}
