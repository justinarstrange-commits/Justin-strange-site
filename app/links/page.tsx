import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Justin Strange — Links",
  description:
    "Founder. Builder. Creator. Operator. Explore the ventures of Justin Strange.",
  openGraph: {
    title: "Justin Strange — Links",
    description: "Founder. Builder. Creator. Operator. Explore the ventures of Justin Strange.",
    url: "/links",
    siteName: "Justin Strange",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Strange — Links",
    description: "Founder. Builder. Creator. Operator.",
    images: ["/og-image.png"],
  },
};

const LINKS = [
  {
    label: "Justin Strange",
    url: "https://justinstrange.site",
    description: "Founder · Builder · Creator · Operator",
    primary: true,
  },
  {
    label: "The Confident Man",
    url: "https://theconfidentman.online",
    description: "AI confidence coach for men",
  },
  {
    label: "Hollinger Holdings",
    url: "https://hollinger-holdings.com",
    description: "Technology & AI ventures",
  },
  {
    label: "Hollinger AI",
    url: "https://hollingerai.com",
    description: "Custom AI for brick-and-mortar business",
  },
  {
    label: "Writing",
    url: "https://justinstrange.site/blog",
    description: "Essays on entrepreneurship, confidence & AI",
  },
  {
    label: "Get in Touch",
    url: "https://justinstrange.site/contact",
    description: "Investment · AI consulting · Collaboration",
  },
];

const SOCIAL = [
  { label: "X / Twitter", url: "https://x.com/jstrangeai" },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-20 pb-16 px-6">
      <div className="w-full max-w-sm">

        {/* Avatar + name */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border border-zinc-800">
            <Image
              src="/js-portrait-close.png"
              alt="Justin Strange"
              fill
              className="object-cover object-top grayscale"
            />
          </div>
          <h1 className="text-white text-lg font-light tracking-wide">Justin Strange</h1>
          <p className="text-zinc-500 text-xs tracking-widest uppercase mt-1">
            Vancouver · Canada
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3 w-full">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`group w-full border px-5 py-4 transition-colors ${
                link.primary
                  ? "border-zinc-600 hover:border-white"
                  : "border-zinc-800 hover:border-zinc-600"
              }`}
            >
              <p className={`text-sm font-light transition-colors ${
                link.primary ? "text-white" : "text-zinc-300 group-hover:text-white"
              }`}>
                {link.label}
              </p>
              {link.description && (
                <p className="text-zinc-600 text-xs mt-0.5">{link.description}</p>
              )}
            </a>
          ))}
        </div>

        {/* Social */}
        <div className="flex justify-center gap-6 mt-8">
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-400 text-xs tracking-widest uppercase transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>

        <p className="text-center text-zinc-800 text-xs mt-10 tracking-widest uppercase">
          Hollinger is a Justin Strange Company
        </p>
      </div>
    </div>
  );
}
