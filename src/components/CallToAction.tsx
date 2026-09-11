import { MessageCircle } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { brand } from "@/data/site";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-surface/40 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]"
      />
      <Reveal className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl leading-tight font-semibold text-balance sm:text-5xl">
          Have an Idea?
          <span className="block text-gold-gradient">Let's Turn It Into Reality.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Whether you need a Reel, brand film, product video, event coverage or complete
          content production, let's create something worth watching.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_36px_-8px_var(--gold)] active:scale-[0.98]"
          >
            Start a Project
          </a>
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 px-8 py-3.5 text-sm font-semibold text-champagne transition-colors duration-300 hover:bg-gold/10"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>
      </Reveal>
    </section>
  );
}
