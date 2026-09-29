import Link from "next/link";
import { Sparkles, Terminal, ArrowRight, User } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="flex max-w-md w-full flex-col items-center gap-6 rounded-3xl border border-white/10 bg-[#121217] p-8 shadow-2xl backdrop-blur-sm">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-500 text-white shadow-lg shadow-cyan-500/20">
          <Terminal className="h-7 w-7" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
            <Sparkles className="h-3 w-3" />
            Milestone 3: Early Story Skeleton
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            GitWrapped{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              2026
            </span>
          </h1>
          <p className="text-xs text-zinc-400 max-w-xs mx-auto">
            Interactive Spotify Wrapped-style developer era experience for GitHub.
          </p>
        </div>

        {/* Quick Test Links for M3 Story Route */}
        <div className="w-full flex flex-col gap-2 pt-2 text-left">
          <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider px-1">
            Test Story Routes (Mock Profiles)
          </span>

          <Link
            href="/wrapped/alexrivera"
            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-all group"
          >
            <div className="flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-cyan-400" />
              <span>@alexrivera (Balanced Full-Stack)</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </Link>

          <Link
            href="/wrapped/maya-codes"
            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-all group"
          >
            <div className="flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-indigo-400" />
              <span>@maya-codes (Weekend Warrior)</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </Link>

          <Link
            href="/wrapped/dr-tensor"
            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-all group"
          >
            <div className="flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-emerald-400" />
              <span>@dr-tensor (Specialist Purist)</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </Link>

          <Link
            href="/wrapped/zen-coder"
            className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-all group"
          >
            <div className="flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-pink-400" />
              <span>@zen-coder (Stealth Lurker)</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
          </Link>
        </div>
      </div>
    </main>
  );
}
