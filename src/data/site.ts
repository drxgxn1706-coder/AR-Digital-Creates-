/**
 * AR Digital Creates — all site content in one place.
 *
 * ⇩ TO REPLACE IMAGES: swap the imported files in `src/assets/`
 *   (keep the same file names) or change the import paths below.
 */
import heroImage from "@/assets/hero.jpg";
import aboutImage from "@/assets/about.jpg";
import showreelImage from "@/assets/showreel.jpg";
import workProduct from "@/assets/work-product.jpg";
import workReel from "@/assets/work-reel.jpg";
import workEvent from "@/assets/work-event.jpg";
import workBts from "@/assets/work-bts.jpg";

export const brand = {
  name: "AR Digital Creates",
  tagline: "You Dream It, We Frame It",
  badge: "Creative Media & Digital Content Studio",
  phone: "+91 88388 49379",
  phoneHref: "tel:+918838849379",
  email: "ardigitalcreates@gmail.com",
  youtube: "AR Digital Creates",
  youtubeUrl: "https://www.youtube.com/@ardigitalcreates",
  instagramUrl: "https://www.instagram.com/ardigitalcreates",
  whatsapp:
    "https://wa.me/918838849379?text=" +
    encodeURIComponent("Hi AR Digital Creates, I would like to discuss a project."),
};

export const images = {
  hero: heroImage,
  about: aboutImage,
  showreel: showreelImage,
  product: workProduct,
  reel: workReel,
  event: workEvent,
  bts: workBts,
};

/** Replace with your real showreel embed (YouTube / Vimeo) URL. */
export const showreelEmbedUrl =
  "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&rel=0";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Clients", href: "#clients" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 18, suffix: "+", label: "Projects" },
  { value: 10, suffix: "+", label: "Brands" },
  { value: 100, suffix: "+", label: "Videos" },
  { value: null, suffix: "", label: "Growing Community", display: "∞" },
];

export const services = [
  {
    icon: "Clapperboard",
    title: "Video Production",
    description:
      "Professional video production designed to bring your brand story to life.",
  },
  {
    icon: "Scissors",
    title: "Video Editing",
    description:
      "High-quality cinematic editing, transitions, color grading and sound design.",
  },
  {
    icon: "Smartphone",
    title: "Social Media Content",
    description:
      "Engaging Reels, short-form videos and social-first content designed for today's audience.",
  },
  {
    icon: "Megaphone",
    title: "Brand Promotions",
    description:
      "Creative promotional videos that help businesses attract attention and build trust.",
  },
  {
    icon: "Camera",
    title: "Product Photography & Videography",
    description:
      "Professional visual content that showcases your products in the best possible way.",
  },
  {
    icon: "PartyPopper",
    title: "Event Coverage",
    description:
      "Capture important events, celebrations and special moments with professional visuals.",
  },
  {
    icon: "Handshake",
    title: "Marketing Collaborations",
    description: "Creative collaborations that connect brands with the right audiences.",
  },
  {
    icon: "Zap",
    title: "Reels & Short Videos",
    description: "Fast-paced, engaging and platform-ready short-form content.",
  },
];

export const whyChooseUs = [
  { title: "Creative storytelling", note: "Every frame carries a reason to keep watching." },
  { title: "Professional equipment", note: "Cinema-grade cameras, lenses, lighting and audio." },
  { title: "Fast turnaround", note: "Reels in days, campaigns on schedule — always." },
  { title: "Social-media expertise", note: "Built for the way people actually scroll." },
  { title: "Cinematic editing", note: "Color, pace and sound tuned like a film." },
  { title: "Brand-focused strategy", note: "Content shaped around your business goals." },
  { title: "Personalized service", note: "One team, direct communication, no handoffs." },
  { title: "High-quality output", note: "Delivered in every format your platforms need." },
];

export const portfolioCategories = [
  "All",
  "Brand Videos",
  "Reels",
  "Events",
  "Products",
  "Promotions",
  "Behind The Scenes",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export const projects: {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "All">;
  description: string;
  image: string;
}[] = [
  {
    id: "p1",
    title: "Signature Brand Film",
    category: "Brand Videos",
    description: "A 90-second cinematic brand story shot across two locations.",
    image: images.hero,
  },
  {
    id: "p2",
    title: "Luxury Watch Launch",
    category: "Products",
    description: "Macro product film with controlled lighting and gold reflections.",
    image: images.product,
  },
  {
    id: "p3",
    title: "Scroll-Stopping Reel Series",
    category: "Reels",
    description: "Six short-form vertical edits built for maximum retention.",
    image: images.reel,
  },
  {
    id: "p4",
    title: "Evening Celebration Coverage",
    category: "Events",
    description: "Full-day event film with highlights delivered in 48 hours.",
    image: images.event,
  },
  {
    id: "p5",
    title: "Festive Campaign Promo",
    category: "Promotions",
    description: "Promotional campaign cut for TV, YouTube and social placements.",
    image: images.showreel,
  },
  {
    id: "p6",
    title: "On Set: Lighting Day",
    category: "Behind The Scenes",
    description: "A look at how we build light before a single frame is shot.",
    image: images.bts,
  },
  {
    id: "p7",
    title: "Studio Grade Session",
    category: "Behind The Scenes",
    description: "Color grading and sound design in the edit suite.",
    image: images.about,
  },
  {
    id: "p8",
    title: "Retail Store Promo",
    category: "Brand Videos",
    description: "Storefront-to-shelf brand promo for a growing local business.",
    image: images.event,
  },
  {
    id: "p9",
    title: "Product Drop Teaser",
    category: "Products",
    description: "Ten-second teaser cut designed for paid social.",
    image: images.product,
  },
];

export const galleryImages = [
  { src: images.bts, alt: "Lighting setup on a film set" },
  { src: images.about, alt: "Editor color grading footage" },
  { src: images.reel, alt: "Creator filming a short-form reel" },
  { src: images.showreel, alt: "Crew shooting outdoors at golden hour" },
  { src: images.hero, alt: "Camera operator behind a cinema camera" },
  { src: images.event, alt: "Event coverage in progress" },
];

/** Replace these placeholder client names with real brand logos later. */
export const clients = [
  "NORTHSTAR",
  "Velora",
  "CASA VERDE",
  "Lumen Co.",
  "Aurum",
  "Studio 9",
  "Kaira",
  "PRISM",
];

export const testimonials = [
  {
    name: "Rahul Menon",
    company: "Velora Interiors",
    rating: 5,
    quote:
      "They understood our brand in one meeting and delivered a film that doubled our enquiry calls. Completely professional from shoot to final cut.",
  },
  {
    name: "Sneha Iyer",
    company: "Casa Verde Cafe",
    rating: 5,
    quote:
      "Our reels finally look like the place feels. The turnaround was fast and the editing quality is genuinely cinematic.",
  },
  {
    name: "Arun Prakash",
    company: "Northstar Fitness",
    rating: 5,
    quote:
      "Great planning, great crew, great result. The promo they produced is still our best performing ad.",
  },
  {
    name: "Divya Nair",
    company: "Aurum Jewels",
    rating: 5,
    quote:
      "The product films made our collection look premium. Lighting, color and sound were all handled beautifully.",
  },
];

export const serviceOptions = services.map((s) => s.title);
