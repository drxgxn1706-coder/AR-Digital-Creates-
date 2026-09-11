import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { galleryImages } from "@/data/site";

export function Gallery() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Behind the scenes"
          title={
            <>
              Behind Every <span className="text-gold-gradient">Frame</span>
            </>
          }
          subtitle="Shoot days, studio sessions, edit suites and the people who make it happen."
        />

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {galleryImages.map((image, i) => (
            <Reveal key={image.alt} delay={(i % 3) * 0.06} className="break-inside-avoid">
              <figure className="group relative overflow-hidden rounded-2xl border border-border">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-background to-transparent p-5 text-sm text-champagne transition-transform duration-500 group-hover:translate-y-0">
                  {image.alt}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
