export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-900 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-600 text-xs tracking-widest uppercase">
          © {year}
        </p>
        <div className="text-center sm:text-right">
          <p className="text-zinc-500 text-xs tracking-widest uppercase">Hollinger Holdings</p>
          <p className="text-zinc-700 text-xs tracking-widest uppercase">Hollinger AI &nbsp;·&nbsp; Applied AI Performance Systems</p>
          <p className="text-zinc-700 text-xs tracking-widest uppercase">A Justin Strange Company</p>
        </div>
      </div>
    </footer>
  );
}
