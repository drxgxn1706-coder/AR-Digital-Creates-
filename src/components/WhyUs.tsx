import { Check } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { brand, whyChooseUs } from "@/data/site";

export function WhyUs() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why us"
          title={
            <>
              Why Brands Choose <span className="text-gold-gradient">{brand.name}</span>
            </>
          }
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.05}>
              <div className="group relative h-full bg-background p-7 transition-colors duration-300 hover:bg-surface/70">
                <span className="font-display text-xs text-gold/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-4 flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-gold/40 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base leading-snug font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.note}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
