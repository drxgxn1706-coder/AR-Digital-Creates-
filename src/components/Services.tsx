import {
  ArrowUpRight,
  Camera,
  Clapperboard,
  Handshake,
  Megaphone,
  PartyPopper,
  Scissors,
  Smartphone,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { services } from "@/data/site";

const iconMap: Record<string, LucideIcon> = {
  Clapperboard,
  Scissors,
  Smartphone,
  Megaphone,
  Camera,
  PartyPopper,
  Handshake,
  Zap,
};

export function Services() {
  return (
    <section id="services" className="relative border-y border-border/60 bg-surface/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Full-service content, <span className="text-gold-gradient">start to final cut</span>
            </>
          }
          subtitle="Everything you need to plan, shoot, edit and publish content that performs."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Clapperboard;
            return (
              <Reveal key={service.title} delay={(i % 4) * 0.06}>
                <a
                  href="#contact"
                  className="group flex h-full flex-col rounded-2xl border border-border bg-background/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_18px_50px_-24px_var(--gold)]"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg leading-snug font-semibold">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-gold uppercase">
                    Learn More
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
