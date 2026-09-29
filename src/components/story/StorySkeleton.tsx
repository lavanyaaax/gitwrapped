"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { GitWrappedData } from "@/types/wrapped";
import {
  ChevronLeft,
  ChevronRight,
  GitCommit,
  GitPullRequest,
  AlertCircle,
  Code2,
  Star,
  Sparkles,
  Trophy,
  Flame,
  ArrowLeft,
  Share2,
} from "lucide-react";

interface StorySkeletonProps {
  data: GitWrappedData;
}

const CHAPTER_TITLES = [
  "2026 Era Preview",
  "The Raw Tally",
  "Language DNA",
  "Circadian Rhythm",
  "Star Power & Repos",
  "Developer Persona",
  "The Grand Finale",
];

export function StorySkeleton({ data }: StorySkeletonProps) {
  const [activeChapter, setActiveChapter] = useState(0);
  const totalChapters = CHAPTER_TITLES.length;

  const handleNext = useCallback(() => {
    setActiveChapter((prev) => Math.min(prev + 1, totalChapters - 1));
  }, [totalChapters]);

  const handlePrev = useCallback(() => {
    setActiveChapter((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md">
      {/* Top Banner & Quick Controls */}
      <div className="flex items-center justify-between w-full px-2 text-xs text-zinc-400">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back</span>
        </Link>
        <span className="font-mono text-[11px] text-zinc-500">
          M3 Story Skeleton • Mock Data
        </span>
      </div>

      {/* Main Story Phone / Card Frame */}
      <div className="relative w-full aspect-[9/16] min-h-[580px] max-h-[760px] rounded-3xl border border-white/10 bg-[#121217] shadow-2xl flex flex-col justify-between p-6 overflow-hidden select-none">
        {/* Subtle Ambient Background Glow */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

        {/* Top Section: Progress Bars & Header */}
        <div className="relative z-10 flex flex-col gap-3">
          {/* 7 Segmented Progress Indicators */}
          <div className="grid grid-cols-7 gap-1.5 w-full">
            {CHAPTER_TITLES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveChapter(idx)}
                aria-label={`Jump to chapter ${idx + 1}`}
                className="group h-1.5 rounded-full overflow-hidden bg-white/10 hover:bg-white/20 transition-all focus:outline-none"
              >
                <div
                  className={`h-full transition-all duration-300 ${
                    idx < activeChapter
                      ? "bg-white"
                      : idx === activeChapter
                      ? "bg-gradient-to-r from-cyan-400 to-indigo-400 w-full"
                      : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* User Meta Header */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={data.user.avatarUrl}
                alt={data.user.login}
                className="w-8 h-8 rounded-full border border-white/20 object-cover bg-zinc-800"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white tracking-tight leading-none">
                  @{data.user.login}
                </span>
                <span className="text-[11px] text-zinc-400 leading-tight">
                  GitWrapped 2026
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-300">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>Ch. {activeChapter + 1} of {totalChapters}</span>
            </div>
          </div>
        </div>

        {/* Middle Section: Dynamic Chapter Content */}
        <div className="relative z-10 my-auto flex flex-col justify-center py-4">
          {activeChapter === 0 && (
            <div className="flex flex-col items-center text-center gap-4 animate-fade-in">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                <Sparkles className="h-3 w-3" />
                2026 Coding Era
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                  Ready for your Wrapped,
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                    {data.user.name || data.user.login}?
                  </span>
                </h2>
                <p className="text-sm text-zinc-400 max-w-xs mx-auto">
                  We analyzed your commits, repositories, languages, and rhythms.
                  Here is the story of your coding year.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 w-full max-w-xs text-left flex items-center gap-3 mt-2">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                  26
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-white">
                    Assigned Era: {data.persona.eraTitle}
                  </span>
                  <span className="text-[11px] text-zinc-400">
                    {data.metrics.totalContributions.toLocaleString()} contributions
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeChapter === 1 && (
            <div className="flex flex-col gap-3.5">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                  Chapter 1 • Contribution Volume
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  The Raw Tally
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
                  <span className="flex items-center gap-1 text-[11px] text-zinc-400">
                    <GitCommit className="w-3.5 h-3.5 text-cyan-400" />
                    Commits
                  </span>
                  <span className="text-2xl font-black text-white mt-1">
                    {data.metrics.totalCommits.toLocaleString()}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
                  <span className="flex items-center gap-1 text-[11px] text-zinc-400">
                    <GitPullRequest className="w-3.5 h-3.5 text-indigo-400" />
                    Pull Requests
                  </span>
                  <span className="text-2xl font-black text-white mt-1">
                    {data.metrics.totalPullRequests.toLocaleString()}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
                  <span className="flex items-center gap-1 text-[11px] text-zinc-400">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                    Issues Handled
                  </span>
                  <span className="text-2xl font-black text-white mt-1">
                    {data.metrics.totalIssues.toLocaleString()}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
                  <span className="flex items-center gap-1 text-[11px] text-zinc-400">
                    <Flame className="w-3.5 h-3.5 text-orange-400" />
                    Longest Streak
                  </span>
                  <span className="text-2xl font-black text-white mt-1">
                    {data.metrics.longestStreakDays} days
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-300 flex items-center justify-between">
                <span>Total Annual Contributions:</span>
                <span className="font-mono font-bold text-white text-sm">
                  {data.metrics.totalContributions.toLocaleString()}
                </span>
              </div>
            </div>
          )}

          {activeChapter === 2 && (
            <div className="flex flex-col gap-3.5">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400">
                  Chapter 2 • Tech Ecosystem
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Language DNA
                </h3>
              </div>

              <div className="flex flex-col gap-2.5">
                {data.languages.ownedLanguages.slice(0, 4).map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-1.5"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: lang.color }}
                        />
                        <span className="font-semibold text-white">{lang.name}</span>
                      </div>
                      <span className="font-mono text-zinc-400">
                        {lang.percentage.toFixed(1)}%
                      </span>
                    </div>

                    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${lang.percentage}%`,
                          backgroundColor: lang.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-[11px] text-zinc-400 text-center font-mono">
                Primary stack: {data.languages.topLanguage?.name || "Polyglot"} ({data.languages.totalUniqueLanguages} total languages)
              </div>
            </div>
          )}

          {activeChapter === 3 && (
            <div className="flex flex-col gap-3.5">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                  Chapter 3 • Day of Week Rhythm
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Circadian Rhythm
                </h3>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-zinc-400 block">Identified Rhythm</span>
                  <span className="text-base font-bold text-emerald-400">
                    {data.circadian.patternLabel}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-zinc-400 block">Peak Day</span>
                  <span className="text-sm font-semibold text-white">
                    {data.circadian.peakDay} ({data.circadian.peakDayCount})
                  </span>
                </div>
              </div>

              {/* Day of week bar visualization */}
              <div className="grid grid-cols-7 gap-1.5 pt-2">
                {data.circadian.days.map((d) => {
                  const isPeak = d.day === data.circadian.peakDay;
                  return (
                    <div key={d.day} className="flex flex-col items-center gap-1.5">
                      <div className="w-full h-24 rounded-lg bg-white/5 p-1 flex flex-col justify-end items-center">
                        <div
                          className={`w-full rounded-md transition-all ${
                            isPeak
                              ? "bg-gradient-to-t from-emerald-500 to-teal-400"
                              : "bg-white/20"
                          }`}
                          style={{
                            height: `${Math.max(d.percentage * 2.2, 8)}%`,
                          }}
                        />
                      </div>
                      <span
                        className={`text-[10px] font-mono ${
                          isPeak ? "text-emerald-400 font-bold" : "text-zinc-400"
                        }`}
                      >
                        {d.shortDay}
                      </span>
                    </div>
                  );
                })}
              </div>

              <span className="text-[10px] text-zinc-500 text-center italic">
                {data.circadian.timezoneNote}
              </span>
            </div>
          )}

          {activeChapter === 4 && (
            <div className="flex flex-col gap-3.5">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400">
                  Chapter 4 • Star Power
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Top Repositories
                </h3>
              </div>

              {data.repositories.mostStarred && (
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-amber-400 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      Most Starred
                    </span>
                    <span className="text-xs font-mono font-bold text-white">
                      ★ {data.repositories.mostStarred.stars}
                    </span>
                  </div>
                  <span className="text-base font-bold text-white">
                    {data.repositories.mostStarred.name}
                  </span>
                  <p className="text-xs text-zinc-400 line-clamp-2">
                    {data.repositories.mostStarred.description || "No description provided."}
                  </p>
                </div>
              )}

              {data.repositories.mostActive && (
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-cyan-400 flex items-center gap-1">
                      <Code2 className="w-3.5 h-3.5" />
                      Most Active Project
                    </span>
                    <span className="text-xs font-mono text-zinc-300">
                      {data.repositories.mostActive.commitsInYear} commits
                    </span>
                  </div>
                  <span className="text-base font-bold text-white">
                    {data.repositories.mostActive.name}
                  </span>
                  <p className="text-xs text-zinc-400 line-clamp-2">
                    {data.repositories.mostActive.description || "No description provided."}
                  </p>
                </div>
              )}
            </div>
          )}

          {activeChapter === 5 && (
            <div className="flex flex-col gap-3.5 text-center">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400">
                  Chapter 5 • Coding Persona
                </span>
                <div className="inline-block mx-auto text-xs px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-medium">
                  {data.persona.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 tracking-tight">
                  {data.persona.eraTitle}
                </h3>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-left space-y-2">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block">
                    The Praise
                  </span>
                  <p className="text-xs text-zinc-200">{data.persona.praise}</p>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-pink-400 block">
                    The Roast
                  </span>
                  <p className="text-xs text-zinc-300 italic">{data.persona.roast}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-left">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-zinc-400 block">Superpower</span>
                  <span className="text-xs font-semibold text-white">
                    {data.persona.superpower}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] text-zinc-400 block">Spirit Tool</span>
                  <span className="text-xs font-semibold text-white">
                    {data.persona.spiritTool}
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeChapter === 6 && (
            <div className="flex flex-col gap-3 text-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-400 to-indigo-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/20">
                <Trophy className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-black text-white tracking-tight">
                  2026 Wrapped Complete!
                </h3>
                <p className="text-xs text-zinc-400">
                  You’ve concluded your 2026 GitWrapped preview.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left space-y-1.5 text-xs">
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-zinc-400">Persona</span>
                  <span className="font-semibold text-white">{data.persona.eraTitle}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-zinc-400">Total Contributions</span>
                  <span className="font-mono text-white">
                    {data.metrics.totalContributions.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-zinc-400">Top Language</span>
                  <span className="text-white">{data.languages.topLanguage?.name || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Rhythm</span>
                  <span className="text-white">{data.circadian.patternLabel}</span>
                </div>
              </div>

              <div className="inline-flex items-center justify-center gap-1.5 text-xs text-zinc-400 font-mono">
                <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Card export coming in Milestone 7</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Section: Story Controls & Keyboard Hint */}
        <div className="relative z-10 flex flex-col gap-2 pt-2 border-t border-white/10">
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={activeChapter === 0}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-medium text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Prev</span>
            </button>

            <span className="text-[11px] font-mono text-zinc-400">
              {CHAPTER_TITLES[activeChapter]}
            </span>

            <button
              onClick={handleNext}
              disabled={activeChapter === totalChapters - 1}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold text-white transition-all shadow-md shadow-cyan-500/10"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="text-[10px] text-zinc-500 text-center font-mono">
            Use ← / → keys or buttons to navigate chapters
          </div>
        </div>
      </div>
    </div>
  );
}
