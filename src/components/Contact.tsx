import { CheckCircle2, Instagram, Mail, MessageCircle, Phone, Youtube } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { brand, serviceOptions } from "@/data/site";
import { cn } from "@/lib/utils";

type Fields = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  details: string;
};

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  details: "",
};

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (values.phone.replace(/\D/g, "").length < 8)
    errors.phone = "Please enter a valid phone number.";
  if (!values.service) errors.service = "Please choose a service.";
  if (values.details.trim().length < 10)
    errors.details = "Tell us a little more about the project (10+ characters).";
  return errors;
}

const fieldClass =
  "w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:ring-1 focus:ring-gold";

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof Fields, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    setSent(true);
    setValues(empty);
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's Create Something <span className="text-gold-gradient">Amazing.</span>
            </>
          }
          subtitle="Tell us about your project and we'll get back to you within one working day."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4">
            <a
              href={brand.phoneHref}
              className="glass-panel flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-gold/50"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold">
                <Phone className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs tracking-widest text-muted-foreground uppercase">
                  Phone
                </span>
                <span className="block truncate text-sm font-semibold">{brand.phone}</span>
              </span>
            </a>

            <a
              href={`mailto:${brand.email}`}
              className="glass-panel flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-gold/50"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold">
                <Mail className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs tracking-widest text-muted-foreground uppercase">
                  Email
                </span>
                <span className="block truncate text-sm font-semibold">{brand.email}</span>
              </span>
            </a>

            <a
              href={brand.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-gold/50"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold">
                <Youtube className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs tracking-widest text-muted-foreground uppercase">
                  YouTube
                </span>
                <span className="block truncate text-sm font-semibold">{brand.youtube}</span>
              </span>
            </a>

            <div className="flex gap-3 pt-2">
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
                  className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
                >
                  <social.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {sent ? (
              <div className="glass-panel flex h-full min-h-80 flex-col items-center justify-center rounded-3xl p-10 text-center">
                <CheckCircle2 className="h-14 w-14 text-gold" />
                <h3 className="mt-5 text-2xl font-semibold">Enquiry sent</h3>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                  Thank you for reaching out to {brand.name}. We've received your details
                  and will reply within one working day.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-7 rounded-full border border-gold/50 px-6 py-3 text-sm font-semibold text-champagne transition-colors hover:bg-gold/10"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={onSubmit}
                className="glass-panel grid gap-4 rounded-3xl p-6 sm:grid-cols-2 sm:p-8"
              >
                <Field label="Name" error={errors.name}>
                  <input
                    className={cn(fieldClass, errors.name && "border-destructive")}
                    value={values.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your full name"
                  />
                </Field>

                <Field label="Email" error={errors.email}>
                  <input
                    type="email"
                    className={cn(fieldClass, errors.email && "border-destructive")}
                    value={values.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@example.com"
                  />
                </Field>

                <Field label="Phone" error={errors.phone}>
                  <input
                    type="tel"
                    className={cn(fieldClass, errors.phone && "border-destructive")}
                    value={values.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+91 00000 00000"
                  />
                </Field>

                <Field label="Company / Brand">
                  <input
                    className={fieldClass}
                    value={values.company}
                    onChange={(e) => update("company", e.target.value)}
                    placeholder="Optional"
                  />
                </Field>

                <Field label="Service Required" error={errors.service} full>
                  <select
                    className={cn(fieldClass, errors.service && "border-destructive")}
                    value={values.service}
                    onChange={(e) => update("service", e.target.value)}
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Project Details" error={errors.details} full>
                  <textarea
                    rows={5}
                    className={cn(fieldClass, "resize-y", errors.details && "border-destructive")}
                    value={values.details}
                    onChange={(e) => update("details", e.target.value)}
                    placeholder="Tell us about your idea, timeline and budget."
                  />
                </Field>

                <button
                  type="submit"
                  className="sm:col-span-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_36px_-8px_var(--gold)] active:scale-[0.99]"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  full,
  children,
}: {
  label: string;
  error?: string | undefined;
  full?: boolean | undefined;
  children: React.ReactNode;
}) {
  return (
    <label className={cn("block min-w-0", full && "sm:col-span-2")}>
      <span className="mb-2 block text-xs tracking-widest text-muted-foreground uppercase">
        {label}
      </span>
      {children}
      {error ? <span className="mt-1.5 block text-xs text-destructive">{error}</span> : null}
    </label>
  );
}
