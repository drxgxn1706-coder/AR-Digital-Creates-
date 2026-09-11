import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { clients } from "@/data/site";

export function Clients() {
  return (
    <section id="clients" className="border-y border-border/60 bg-surface/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Clients"
          title={
            <>
              Brands We've <span className="text-gold-gradient">Worked With</span>
            </>
          }
          subtitle="Every project is a collaboration. Every collaboration is a story."
        />

        {/* Placeholder client names — replace each with a real logo image. */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/60 sm:grid-cols-4">
          {clients.map((client, i) => (
            <Reveal key={client} delay={(i % 4) * 0.05}>
              <div className="grid h-28 place-items-center bg-background px-4 transition-colors duration-300 hover:bg-surface">
                <span className="font-display text-center text-lg tracking-[0.2em] text-muted-foreground uppercase transition-colors duration-300 hover:text-gold">
                  {client}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
