import { Instagram, Mail, MessageCircle, Youtube } from "lucide-react";

import { brand } from "@/data/site";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const footerServices = [
  "Video Production",
  "Video Editing",
  "Reels",
  "Brand Promotion",
  "Event Coverage",
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/40 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold/50 font-display text-lg font-bold text-gold-gradient">
                AR
              </span>
              <span className="font-display text-lg font-semibold">{brand.name}</span>
            </div>
            <p className="mt-4 text-sm text-champagne/80">“{brand.tagline}”</p>
            <div className="mt-6 flex gap-3">
              {[
                { href: brand.instagramUrl, icon: Instagram, label: "Instagram" },
                { href: brand.youtubeUrl, icon: Youtube, label: "YouTube" },
                { href: brand.whatsapp, icon: MessageCircle, label: "WhatsApp" },
                { href: `mailto:${brand.email}`, icon: Mail, label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="text-xs font-semibold tracking-[0.28em] text-gold uppercase">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.28em] text-gold uppercase">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {footerServices.map((service) => (
                <li key={service}>
                  <a href="#services" className="transition-colors hover:text-gold">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.28em] text-gold uppercase">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={brand.phoneHref} className="transition-colors hover:text-gold">
                  {brand.phone}
                </a>
              </li>
              <li className="break-all">
                <a href={`mailto:${brand.email}`} className="transition-colors hover:text-gold">
                  {brand.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-hairline mt-12 h-px" />
        <p className="pt-6 text-center text-xs text-muted-foreground">
          © 2026 {brand.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
