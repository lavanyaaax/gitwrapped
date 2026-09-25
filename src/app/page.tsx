import { Sparkles, Terminal } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="flex max-w-md flex-col items-center gap-6 rounded-2xl border border-white/10 bg-[#121217] p-8 shadow-2xl backdrop-blur-sm">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 text-white shadow-lg shadow-cyan-500/20">
          <Terminal className="h-7 w-7" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            <Sparkles className="h-3 w-3" />
            Milestone 1 Verified
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            GitWrapped <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">2026</span>
          </h1>
          <p className="text-sm text-zinc-400">
            Next.js 15, React 19, TypeScript, and Tailwind CSS initialized.
          </p>
        </div>
      </div>
    </main>
  );
}
