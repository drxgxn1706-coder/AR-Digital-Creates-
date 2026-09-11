import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

import { Reveal } from "@/components/ui/reveal";
import { brand, images, stats } from "@/data/site";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <p className="text-xs font-semibold tracking-[0.35em] text-gold uppercase">
            About the studio
          </p>
          <h2 className="mt-4 text-3xl leading-tight font-semibold sm:text-5xl">
            Your Vision.
            <span className="block text-gold-gradient">Our Frame.</span>
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              {brand.name} helps businesses, brands and creators turn ideas into visual
              content people actually stop to watch. We work through the whole journey —
              creative storytelling, planning, professional production on set, and
              high-quality editing that gives every frame a cinematic finish.
            </p>
            <p>
              Our work is social-media focused by design: brand promotion films, product
              features, event coverage and short-form reels built for the platforms your
              audience already lives on. Through marketing collaborations we connect the
              right brands with the right people, and treat every project as a
              partnership rather than a delivery.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 0.08}
                className="glass-panel rounded-2xl p-4 text-center"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-bold text-gold-gradient sm:text-3xl">
                  {stat.value === null ? (
                    stat.display
                  ) : (
                    <Counter value={stat.value} suffix={stat.suffix} />
                  )}
                </dd>
                <p className="mt-1 text-[11px] leading-tight tracking-wide text-muted-foreground uppercase">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </dl>
        </Reveal>

        <Reveal className="order-1 lg:order-2" y={40}>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] border border-gold/20" />
            <img
              src={images.about}
              alt="Editor grading footage in a dark production studio"
              width={1200}
              height={1400}
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover"
            />
            <div className="glass-panel absolute -bottom-6 left-6 right-6 rounded-2xl p-4 text-center sm:left-10 sm:right-10">
              <p className="font-display text-sm text-champagne sm:text-base">
                “{brand.tagline}”
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
