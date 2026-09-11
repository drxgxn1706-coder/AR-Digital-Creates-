import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/About";
import { CallToAction } from "@/components/CallToAction";
import { Clients } from "@/components/Clients";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Showreel } from "@/components/Showreel";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";

const title = "AR Digital Creates | Creative Media & Digital Content Studio";
const description =
  "AR Digital Creates creates cinematic videos, reels, promotional content, brand videos and digital media experiences for businesses and creators.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "AR Digital Creates",
          description,
          slogan: "You Dream It, We Frame It",
          telephone: "+91 88388 49379",
          email: "ardigitalcreates@gmail.com",
          areaServed: "IN",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Portfolio />
        <Showreel />
        <Gallery />
        <Clients />
        <Testimonials />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
