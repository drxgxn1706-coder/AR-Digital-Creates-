import { AnimatePresence, motion } from "motion/react";
import { Play, X } from "lucide-react";
import { useEffect, useState } from "react";

import { images, showreelEmbedUrl } from "@/data/site";

export function Showreel() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="showreel" className="relative overflow-hidden">
      <div className="relative min-h-[70svh] w-full">
        <img
          src={images.showreel}
          alt="Film crew shooting at golden hour"
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/75" />

        <div className="relative mx-auto flex min-h-[70svh] max-w-3xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
          <p className="text-xs font-semibold tracking-[0.35em] text-gold uppercase">
            Showreel
          </p>
          <h2 className="mt-4 text-3xl leading-tight font-semibold sm:text-5xl">
            See What <span className="text-gold-gradient">We Create.</span>
          </h2>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Play showreel"
            className="group relative mt-10 grid h-24 w-24 place-items-center rounded-full border border-gold/50 bg-gold/10 text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
          >
            <span className="absolute inset-0 animate-ping rounded-full border border-gold/30" />
            <Play className="h-8 w-8 translate-x-0.5 fill-current" />
          </button>

          <p className="mt-6 text-sm text-muted-foreground">
            2 minutes of brand films, reels and event work.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Showreel video"
            className="fixed inset-0 z-[60] grid place-items-center bg-background/95 p-4 backdrop-blur"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-gold/30 bg-black"
            >
              <iframe
                src={showreelEmbedUrl}
                title="AR Digital Creates showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
