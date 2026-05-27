import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";

const VENTURES = [
  // Live
  {
    name: "Hollinger Holdings",
    initials: "HH",
    url: "https://hollinger-holdings.com",
    category: "Holding Company",
    description: "A holding company focused on emerging technologies and AI. Built to acquire, incubate, and operate ventures at the leading edge of what is possible.",
    live: true,
  },
  {
    name: "Hollinger AI",
    initials: "H·AI",
    url: "https://hollingerai.com",
    category: "AI Solutions",
    description: "Custom AI integrations for brick-and-mortar businesses. Taking tools reserved for enterprise and making them operational for the businesses that need them most.",
    live: true,
  },
  {
    name: "Hugo AI",
    initials: "HGO",
    url: "https://hugo-ai.online",
    category: "AI · Technology",
    description: "An applied AI platform built to solve real operational problems. Fast deployment, practical outcomes, no theoretical fluff.",
    live: true,
  },
  {
    name: "Orca AI",
    initials: "ORC",
    url: "https://orca-ai.online",
    category: "AI · Real Estate",
    description: "AI built specifically for realtors. Automates the work that kills productivity so agents can spend their time closing, not administrating.",
    live: true,
  },
  {
    name: "Hollinger Media",
    initials: "HM",
    url: "https://hollingermedia.site",
    category: "Social · Media Management",
    description: "A social media management platform built for businesses that take their presence seriously. Schedule, publish, and analyse across every channel from one clean dashboard.",
    live: true,
  },
  {
    name: "The Confident Man",
    initials: "CM",
    url: "https://theconfidentman.online",
    category: "AI · Coaching",
    description: "An AI-powered confidence coach for men. Built in response to a cultural shift that nobody was talking about. A generation that needed a direct answer.",
    live: true,
  },
  // Building
  {
    name: "Big Willy",
    initials: "BW",
    url: "#",
    category: "Hospitality · Brand",
    description: "A bold hospitality brand built around character, quality, and the kind of experience people talk about after. More soon.",
    live: false,
  },
  {
    name: "Techncocktails",
    initials: "TC",
    url: "#",
    category: "Marketing · Agency",
    description: "A boutique marketing agency. Built for brands that want to stand out, not blend in. Strategic, creative, and small enough to actually care.",
    live: false,
  },
  {
    name: "Crumb",
    initials: "CRM",
    url: "#",
    category: "Technology · CRM",
    description: "A CRM built for operators who are tired of paying enterprise prices for features they do not use. Clean, fast, and built around how real businesses actually work.",
    live: false,
  },
  {
    name: "Hollinger Power",
    initials: "HP",
    url: "#",
    category: "Energy · Technology",
    description: "Intelligent power management for commercial and industrial operators. Precision infrastructure for businesses that cannot afford downtime.",
    live: false,
  },
  {
    name: "The Confident Woman",
    initials: "CW",
    url: "#",
    category: "AI · Coaching",
    description: "The female counterpart to The Confident Man. An AI coach designed for women navigating confidence, dating, and the social dynamics that nobody talks about directly.",
    live: false,
  },
  {
    name: "Ask The Sexes",
    initials: "ATS",
    url: "#",
    category: "Relationships · Media",
    description: "Relationship advice from the one perspective that actually matters. Real answers from the opposite sex, unfiltered and on demand.",
    live: false,
  },
  {
    name: "Wander Index",
    initials: "WI",
    url: "#",
    category: "Travel · Lifestyle",
    description: "A private travel intelligence platform for people who move differently. Curated itineraries, insider access, and a community that knows the difference.",
    live: false,
  },
  {
    name: "Baseline Performance",
    initials: "BP",
    url: "#",
    category: "Health · Performance",
    description: "Precision wellness for high-performers. Biometric tracking, recovery protocols, and AI-driven insights built around how serious people actually train.",
    live: false,
  },
  {
    name: "Clear Ledger",
    initials: "CL",
    url: "#",
    category: "Finance · Tools",
    description: "Financial clarity for independent operators. A smarter way to track, plan, and protect the money you built without the overhead of a family office.",
    live: false,
  },
  {
    name: "Operator Desk",
    initials: "OD",
    url: "#",
    category: "Productivity · AI",
    description: "An AI workspace built for founders and operators who run lean. Everything you need to think, plan, and execute in one clean environment.",
    live: false,
  },
  {
    name: "Sophia's Closet",
    initials: "SC",
    url: "#",
    category: "Fashion · Community",
    description: "Clothing swap built for women. A curated marketplace to trade, share, and discover wardrobe pieces without the waste of buying new.",
    live: false,
  },
  {
    name: "Property IQ",
    initials: "PIQ",
    url: "#",
    category: "Real Estate · Tech",
    description: "A smarter way to find, evaluate, and move on residential real estate. Built for the buyer who does their homework and moves fast when it counts.",
    live: false,
  },
  {
    name: "Reply Ready",
    initials: "RR",
    url: "#",
    category: "Communications · AI",
    description: "AI-powered communication tools for small business. Better customer conversations, faster response times, and the polish that makes people trust you.",
    live: false,
  },
  {
    name: "Scale Stack",
    initials: "SS",
    url: "#",
    category: "Operations · AI",
    description: "Operational infrastructure for businesses that have outgrown their original systems. Built to scale without rebuilding from scratch.",
    live: false,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://justinstrange.site/#justin-strange",
      "name": "Justin Strange",
      "url": "https://justinstrange.site",
      "image": "https://justinstrange.site/og-image.png",
      "sameAs": [
        "https://x.com/jstrangeai",
      ],
      "jobTitle": "Founder & Operator",
      "description":
        "Founder, builder, creator, and operator. Vancouver-based entrepreneur with twenty years building businesses at the intersection of technology, confidence, and human potential.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vancouver",
        "addressRegion": "BC",
        "addressCountry": "CA",
      },
      "knowsAbout": [
        "Entrepreneurship",
        "Artificial Intelligence",
        "Small Business",
        "Confidence Coaching",
        "Technology Ventures",
      ],
      "founder": [
        { "@type": "Organization", "name": "Hollinger Holdings", "url": "https://hollinger-holdings.com" },
        { "@type": "Organization", "name": "Hollinger AI", "url": "https://hollingerai.com" },
        { "@type": "Organization", "name": "The Confident Man", "url": "https://theconfidentman.online" },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://hollinger-holdings.com/#organization",
      "name": "Hollinger Holdings",
      "url": "https://hollinger-holdings.com",
      "description":
        "A holding company focused on emerging technologies and AI, founded by Justin Strange.",
      "founder": { "@id": "https://justinstrange.site/#justin-strange" },
    },
    {
      "@type": "Organization",
      "@id": "https://hollingerai.com/#organization",
      "name": "Hollinger AI",
      "url": "https://hollingerai.com",
      "description":
        "Custom AI integrations for brick-and-mortar businesses, founded by Justin Strange.",
      "founder": { "@id": "https://justinstrange.site/#justin-strange" },
    },
  ],
};

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Hero ── */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/30 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-zinc-500 text-xs tracking-[0.3em] uppercase mb-6 animate-fade-in">
              Vancouver, Canada
            </p>

            <h1
              className="font-serif text-5xl sm:text-7xl font-normal text-white tracking-tight mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Justin
              <br />
              Strange
            </h1>

            <p
              className="text-zinc-400 text-sm tracking-[0.25em] uppercase mb-12 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Founder&nbsp;&nbsp;·&nbsp;&nbsp;Builder&nbsp;&nbsp;·&nbsp;&nbsp;Creator&nbsp;&nbsp;·&nbsp;&nbsp;Operator
            </p>

            <p
              className="text-zinc-300 text-lg sm:text-xl leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Twenty years building businesses from first principles.
              Currently at the intersection of technology, human confidence, and
              what AI can do for the businesses most people forgot to automate.
            </p>

            <div
              className="flex flex-wrap items-center gap-6 mt-12 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Link
                href="/contact"
                className="bg-white text-black text-xs font-medium tracking-widest uppercase px-8 py-4 hover:bg-zinc-200 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/blog"
                className="text-zinc-400 hover:text-white text-xs tracking-widest uppercase transition-colors border-b border-zinc-700 pb-0.5"
              >
                Read My Writing →
              </Link>
            </div>
          </div>

          {/* Photo */}
          <div
            className="hidden lg:block relative animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative overflow-hidden w-full" style={{ aspectRatio: "2/3" }}>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent z-10 pointer-events-none" />
              <Image
                src="/js-full-length.png"
                alt="Justin Strange"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── About / Bio ── */}
      <section className="py-24 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-16 items-start">
          {/* Photo column */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="relative overflow-hidden w-full" style={{ aspectRatio: "3/4" }}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] z-10 pointer-events-none" />
              <Image
                src="/js-portrait-seated.png"
                alt="Justin Strange seated"
                fill
                className="object-cover object-top grayscale"
              />
            </div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-3">
            <p className="text-zinc-600 text-xs tracking-[0.3em] uppercase mb-4">About</p>
            <h2 className="font-serif text-2xl text-white mb-8">The Long Game</h2>
            <div className="space-y-5 text-zinc-400 text-base leading-relaxed">
              <p>
                I have been self-employed since 2004. That is not a boast. It is context.
                It means I have never had the option of waiting for someone to hand me a plan.
                Every business I have built started with a problem I could not stop thinking
                about and a decision to do something about it.
              </p>
              <p>
                The Confident Man came from watching something happen in real time. A generation
                of young men losing their footing. Not dramatically, but quietly. Confidence
                eroding, relationships fracturing, the social architecture that has held
                communities together for generations starting to give way. Less marriage. A
                distorted picture of what family life looks like. A deep uncertainty about what
                a man is even supposed to be. I built something to address it directly.
              </p>
              <p>
                Hollinger is the infrastructure around the things I believe are worth building.
                A holding company for technology and AI ventures, and a consulting arm. Hollinger
                AI takes the tools most small businesses have never accessed and makes them
                operational. The businesses that need AI the most are not in Silicon Valley.
                They are on Main Street, and most of them are still running on spreadsheets and goodwill.
              </p>
              <p>
                Outside of work I fly, I train, I spend as much time outdoors as possible.
                Ideally somewhere warm, preferably somewhere new. I give back where I can.
                I have been a member of the Entrepreneurs&apos; Organization and served on the
                Business Leaders Council advising the Premier of British Columbia on small
                business policy. My children are the best thing I have ever built.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photo strip ── */}
      <section className="border-t border-zinc-900 overflow-hidden">
        <div className="grid grid-cols-3 h-64 sm:h-80">
          <div className="relative overflow-hidden">
            <Image
              src="/js-portrait-side.png"
              alt="Justin Strange"
              fill
              className="object-cover object-top grayscale"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/js-portrait-alt.png"
              alt="Justin Strange"
              fill
              className="object-cover object-top grayscale"
            />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/js-portrait-seated.png"
              alt="Justin Strange"
              fill
              className="object-cover object-top grayscale"
            />
          </div>
        </div>
      </section>

      {/* ── Philosophy quote ── */}
      <section className="py-20 px-6 border-t border-zinc-900 bg-zinc-950/50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-2xl sm:text-3xl text-white leading-relaxed tracking-wide text-balance">
            &ldquo;The best businesses I have ever seen were not built on an idea.
            They were built on a refusal to accept the way things already were.&rdquo;
          </p>
          <p className="text-zinc-600 text-xs tracking-widest uppercase mt-8">
            Justin Strange
          </p>
        </div>
      </section>

      {/* ── Ventures ── */}
      <section className="py-24 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-zinc-600 text-xs tracking-[0.3em] uppercase mb-4">Portfolio</p>
            <h2 className="font-serif text-2xl text-white mb-3">Portfolio</h2>
            <p className="text-zinc-600 text-sm">Live and in development across technology, hospitality, media, and AI.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VENTURES.map((v) => {
              const isLink = v.url !== "#";
              const Tag = isLink ? "a" : "div";
              const linkProps = isLink
                ? { href: v.url, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <Tag
                  key={v.name}
                  {...(linkProps as Record<string, string>)}
                  className={`group relative border p-6 transition-colors flex flex-col ${
                    isLink
                      ? "border-zinc-800 hover:border-zinc-600 cursor-pointer"
                      : "border-zinc-900 cursor-default"
                  }`}
                >
                  {/* Logo mark */}
                  <div className={`w-12 h-12 border flex items-center justify-center mb-5 transition-colors ${
                    isLink ? "border-zinc-800 group-hover:border-zinc-600" : "border-zinc-900"
                  }`}>
                    <span className={`text-xs tracking-widest font-light ${
                      isLink ? "text-zinc-400" : "text-zinc-700"
                    }`}>
                      {v.initials}
                    </span>
                  </div>

                  <div className="flex items-start justify-between mb-3">
                    <p className="text-zinc-600 text-xs tracking-widest uppercase">
                      {v.category}
                    </p>
                    {v.live ? (
                      <span className="text-xs text-zinc-500 tracking-widest uppercase border border-zinc-800 px-2 py-0.5 shrink-0 ml-2">
                        Live
                      </span>
                    ) : (
                      <span className="text-xs text-zinc-700 tracking-widest uppercase shrink-0 ml-2">
                        Building
                      </span>
                    )}
                  </div>
                  <h3
                    className={`text-base font-light mb-3 transition-colors ${
                      isLink
                        ? "text-white group-hover:text-zinc-200"
                        : "text-zinc-500"
                    }`}
                  >
                    {v.name}
                  </h3>
                  <p className="text-zinc-600 text-xs leading-relaxed flex-1">{v.description}</p>
                  {isLink && (
                    <p className="text-zinc-700 text-xs mt-5 group-hover:text-zinc-400 transition-colors tracking-widest uppercase">
                      Visit →
                    </p>
                  )}
                </Tag>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Credentials strip ── */}
      <section className="py-16 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 text-center sm:text-left">
            <div>
              <p className="text-white text-4xl font-light mb-2">20+</p>
              <p className="text-zinc-600 text-xs tracking-widest uppercase">
                Years Self-Employed
              </p>
            </div>
            <div>
              <p className="text-white text-4xl font-light mb-2">EO</p>
              <p className="text-zinc-600 text-xs tracking-widest uppercase">
                Entrepreneurs&apos; Organization Alumni
              </p>
            </div>
            <div>
              <p className="text-white text-4xl font-light mb-2">BLC</p>
              <p className="text-zinc-600 text-xs tracking-widest uppercase">
                BC Business Leaders Council, Premier&apos;s Advisory
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Discipline quote ── */}
      <section className="py-20 px-6 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-3xl sm:text-5xl text-white tracking-tight">
            &ldquo;Discipline is life&apos;s currency.&rdquo;
          </p>
          <p className="text-zinc-600 text-xs tracking-widest uppercase mt-8">
            Justin Strange
          </p>
        </div>
      </section>

      {/* ── Recent Writing ── */}
      {recentPosts.length > 0 && (
        <section className="py-24 px-6 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-end justify-between mb-14">
              <div>
                <p className="text-zinc-600 text-xs tracking-[0.3em] uppercase mb-4">Writing</p>
                <h2 className="font-serif text-2xl text-white">Recent Thoughts</h2>
              </div>
              <Link
                href="/blog"
                className="text-zinc-500 hover:text-white text-xs tracking-widest uppercase transition-colors border-b border-zinc-800 pb-0.5 shrink-0"
              >
                All Writing →
              </Link>
            </div>

            <div className="divide-y divide-zinc-900">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12 py-8 hover:opacity-80 transition-opacity"
                >
                  <p className="text-zinc-700 text-xs tracking-widest uppercase shrink-0 pt-1 w-28">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <div>
                    {post.category && (
                      <p className="text-zinc-600 text-xs tracking-widest uppercase mb-2">
                        {post.category}
                      </p>
                    )}
                    <h3 className="text-white text-lg font-light mb-2 group-hover:text-zinc-200 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{post.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-24 px-6 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white leading-snug mb-4">
              If you have something worth building, let&apos;s talk.
            </h2>
            <p className="text-zinc-500 text-base leading-relaxed">
              Whether it is an investment conversation, an AI pilot for your business,
              or a collaboration worth exploring. The contact form is short and I actually read it.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Link
              href="/contact"
              className="bg-white text-black text-xs font-medium tracking-widest uppercase px-10 py-5 hover:bg-zinc-200 transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
