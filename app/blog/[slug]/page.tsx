import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getAllPosts, getPost } from "@/lib/blog";
import { NameMeaningTool } from "@/components/NameMeaningTool";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://justinstrange.site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: "Justin Strange", url: BASE }],
    keywords: ["Justin Strange", post.category ?? "", "entrepreneurship", "Hollinger"].filter(Boolean),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `${BASE}/blog/${slug}`,
      siteName: "Justin Strange",
      publishedTime: new Date(post.date).toISOString(),
      authors: ["Justin Strange"],
      images: [
        {
          url: `${BASE}/justin-strange.png`,
          width: 1200,
          height: 630,
          alt: `${post.title} — Justin Strange`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${BASE}/justin-strange.png`],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "datePublished": new Date(post.date).toISOString(),
    "url": `${BASE}/blog/${post.slug}`,
    "image": `${BASE}/justin-strange.png`,
    "author": {
      "@type": "Person",
      "name": "Justin Strange",
      "url": BASE,
    },
    "publisher": {
      "@type": "Person",
      "name": "Justin Strange",
      "url": BASE,
    },
    "keywords": ["Justin Strange", post.category ?? "", "Hollinger"].filter(Boolean).join(", "),
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-2xl mx-auto">
        <Link
          href="/blog"
          className="text-zinc-600 hover:text-zinc-400 text-xs tracking-widest uppercase transition-colors mb-12 inline-block"
        >
          ← Writing
        </Link>

        {post.category && (
          <p className="text-zinc-600 text-xs tracking-widest uppercase mb-4">{post.category}</p>
        )}

        <h1 className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-4">
          {post.title}
        </h1>

        <p className="text-zinc-600 text-xs tracking-widest uppercase mb-12">
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>

        <article className="prose prose-invert prose-zinc max-w-none
          prose-headings:font-serif prose-headings:font-normal prose-headings:text-white prose-headings:mt-14 prose-headings:mb-6
          prose-p:text-zinc-400 prose-p:leading-loose prose-p:mb-6 prose-p:text-lg
          prose-a:text-zinc-300 prose-a:no-underline hover:prose-a:text-white
          prose-strong:text-zinc-200
          prose-hr:border-zinc-800">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        {post.slug === "the-name" && <NameMeaningTool />}

        <div className="mt-16 pt-12 border-t border-zinc-900">
          <Link
            href="/blog"
            className="text-zinc-600 hover:text-zinc-400 text-xs tracking-widest uppercase transition-colors"
          >
            ← Back to Writing
          </Link>
        </div>
      </div>
    </div>
  );
}
