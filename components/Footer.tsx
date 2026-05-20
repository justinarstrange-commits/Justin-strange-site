export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-900 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-600 text-xs tracking-widest uppercase">
          © {year} Justin Strange
        </p>
        <a
          href="https://hollinger-holdings.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 hover:text-zinc-400 text-xs tracking-widest uppercase transition-colors"
        >
          Hollinger
        </a>
      </div>
    </footer>
  );
}
