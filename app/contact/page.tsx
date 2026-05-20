import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Justin Strange",
  description: "Get in touch with Justin Strange for investment conversations, AI consulting, or collaborations.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left column */}
        <div>
          <p className="text-zinc-600 text-xs tracking-[0.3em] uppercase mb-4">Contact</p>
          <h1 className="font-serif text-4xl text-white mb-6">
            Let&apos;s Talk
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed mb-10">
            I keep the form short because the right conversations do not need a lot of preamble.
            Tell me what you are working on and why it matters to you.
          </p>

          <div className="space-y-8">
            <div>
              <p className="text-zinc-600 text-xs tracking-widest uppercase mb-2">Investment</p>
              <p className="text-zinc-500 text-sm leading-relaxed">
                If you are looking at ventures worth backing or want to explore what Hollinger
                is building, start here.
              </p>
            </div>
            <div>
              <p className="text-zinc-600 text-xs tracking-widest uppercase mb-2">AI Consulting</p>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Ready to run an AI pilot in your business? Hollinger AI works with
                brick-and-mortar operators who are serious about it.
              </p>
            </div>
            <div>
              <p className="text-zinc-600 text-xs tracking-widest uppercase mb-2">Everything Else</p>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Media, speaking, collaboration, or something that does not fit a category.
                All of it goes through the same form.
              </p>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
