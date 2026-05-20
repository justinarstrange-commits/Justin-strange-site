import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Writing",
  description: "Thoughts on entrepreneurship, technology, confidence, and building things that matter. Essays by Justin Strange.",
  openGraph: {
    title: "Writing | Justin Strange",
    description: "Thoughts on entrepreneurship, technology, confidence, and building things that matter.",
    type: "website",
    url: "/blog",
    siteName: "Justin Strange",
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing | Justin Strange",
    description: "Thoughts on entrepreneurship, technology, confidence, and building things that matter.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-zinc-600 text-xs tracking-[0.3em] uppercase mb-4">Writing</p>
          <h1 className="font-serif text-4xl text-white mb-4">Thoughts</h1>
          <p className="text-zinc-500 text-base max-w-lg">
            On entrepreneurship, technology, confidence, and the things worth building.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-zinc-600 text-sm">Articles coming soon.</p>
        ) : (
          <div className="divide-y divide-zinc-900">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-12 py-10 hover:opacity-80 transition-opacity"
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
                  <h2 className="text-white text-xl font-light mb-2 group-hover:text-zinc-200 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-zinc-500 text-sm leading-relaxed">{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
