import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";

import { SectionHeading } from "@/components/ui/reveal";
import { portfolioCategories, projects, type PortfolioCategory } from "@/data/site";
import { cn } from "@/lib/utils";

export function Portfolio() {
  const [active, setActive] = useState<PortfolioCategory>("All");

  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section id="portfolio" className="border-y border-border/60 bg-surface/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Work That <span className="text-gold-gradient">Speaks.</span>
            </>
          }
          subtitle="A selection of brand films, reels, product features and event coverage."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition-all duration-300 sm:text-sm",
                active === category
                  ? "border-gold bg-gold text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-gold/50 hover:text-gold",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                </div>

                <div className="relative -mt-16 p-6">
                  <span className="text-[10px] font-semibold tracking-[0.25em] text-gold uppercase">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-lg leading-snug font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-champagne uppercase transition-colors hover:text-gold"
                  >
                    View Project
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
