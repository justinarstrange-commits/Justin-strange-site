"use client";

import { useState } from "react";

export function NameMeaningTool() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setLoading(true);
    setResult("");
    setError("");
    try {
      const res = await fetch("/api/name-meaning", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      const data = await res.json();
      if (data.error) setError(data.error);
      else setResult(data.meaning);
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-16 pt-12 border-t border-zinc-800">
      <p className="text-zinc-600 text-xs tracking-[0.3em] uppercase mb-4">
        Your Name
      </p>
      <h2 className="font-serif text-2xl text-white mb-3">
        What Does Your Name Mean?
      </h2>
      <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-md">
        Every name comes from somewhere. Most people never look. Type yours and
        find out what it has been asking of you.
      </p>

      <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          maxLength={60}
          className="flex-1 bg-transparent border border-zinc-800 text-white text-sm px-4 py-3 placeholder:text-zinc-700 focus:outline-none focus:border-zinc-600 transition-colors"
        />
        <button
          type="submit"
          disabled={loading || !name.trim()}
          className="bg-white text-black text-xs font-medium tracking-widest uppercase px-6 py-3 hover:bg-zinc-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
        >
          {loading ? "Looking..." : "Look It Up"}
        </button>
      </form>

      {error && (
        <p className="text-zinc-500 text-sm">{error}</p>
      )}

      {result && (
        <div className="border-l-2 border-zinc-800 pl-6">
          <p className="text-zinc-600 text-xs tracking-widest uppercase mb-4">
            {name}
          </p>
          <div className="text-zinc-300 text-base leading-relaxed space-y-4">
            {result.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
