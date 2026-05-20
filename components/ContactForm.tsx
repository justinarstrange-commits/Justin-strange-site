"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      reason: (form.elements.namedItem("reason") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-zinc-800 p-10 text-center">
        <p className="font-serif text-xl text-white mb-3">Message received.</p>
        <p className="text-zinc-500 text-sm leading-relaxed">
          I read every submission personally. You will hear back within 48 hours
          if your message is a fit for a conversation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-zinc-600 text-xs tracking-widest uppercase mb-2">
          Name
        </label>
        <input
          name="name"
          type="text"
          required
          className="w-full bg-transparent border border-zinc-800 text-white text-sm px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-700"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-zinc-600 text-xs tracking-widest uppercase mb-2">
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          className="w-full bg-transparent border border-zinc-800 text-white text-sm px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-700"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-zinc-600 text-xs tracking-widest uppercase mb-2">
          Reason
        </label>
        <select
          name="reason"
          required
          className="w-full bg-[#0a0a0a] border border-zinc-800 text-white text-sm px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"
        >
          <option value="">Select a reason</option>
          <option value="investment">Investment</option>
          <option value="ai-consulting">AI Consulting</option>
          <option value="media-speaking">Media / Speaking</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-zinc-600 text-xs tracking-widest uppercase mb-2">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full bg-transparent border border-zinc-800 text-white text-sm px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-700 resize-none"
          placeholder="What are you working on and why does it matter?"
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm border border-red-900/50 bg-red-950/20 px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-white text-black text-xs font-medium tracking-widest uppercase py-4 hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
