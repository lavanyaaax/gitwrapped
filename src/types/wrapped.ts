/**
 * GitWrapped 2026 Domain Types & Contracts
 */

export interface GitHubUserProfile {
  login: string;
  name: string | null;
  avatarUrl: string;
  bio: string | null;
  company: string | null;
  location: string | null;
  websiteUrl: string | null;
  twitterUsername: string | null;
  publicRepos: number;
  followers: number;
  following: number;
  createdAt: string;
}

export type DayName =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export type ShortDayName = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

export interface DayOfWeekStat {
  day: DayName;
  shortDay: ShortDayName;
  /** ISO weekday: 1 = Monday, 7 = Sunday */
  isoWeekday: number;
  count: number;
  percentage: number;
}

export type CircadianPattern =
  | "weekend_warrior"
  | "midweek_sprinter"
  | "daily_grinder"
  | "zen_sleeper";

export interface CircadianRhythm {
  days: DayOfWeekStat[];
  peakDay: DayName;
  peakDayCount: number;
  weekendPercentage: number;
  weekdayPercentage: number;
  patternType: CircadianPattern;
  patternLabel: string;
  /** Transparency notice regarding GitHub timezone calculation */
  timezoneNote: string;
}

export interface LanguageStat {
  name: string;
  color: string;
  bytes: number;
  percentage: number;
}

export interface LanguageBreakdown {
  /** Aggregated from owned repositories */
  ownedLanguages: LanguageStat[];
  topLanguage: LanguageStat | null;
  totalBytes: number;
  totalUniqueLanguages: number;
}

export interface RepositoryHighlight {
  name: string;
  nameWithOwner: string;
  description: string | null;
  stars: number;
  forks: number;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
  url: string;
  isFork: boolean;
  commitsInYear?: number;
}

export interface ContributionMetrics {
  year: number;
  totalContributions: number;
  totalCommits: number;
  totalPullRequests: number;
  totalIssues: number;
  totalReviews: number;
  restrictedContributionsCount: number;
  longestStreakDays: number;
  currentStreakDays: number;
  busiestDay: {
    date: string;
    count: number;
  } | null;
}

export type PersonaArchetype =
  | "full_stack_alchemist"
  | "weekend_warrior"
  | "midweek_sprinter"
  | "polyglot_polymath"
  | "specialist_purist"
  | "monorepo_titan"
  | "open_source_champion"
  | "pr_machine"
  | "zen_lurker";

export interface Persona {
  archetype: PersonaArchetype;
  eraTitle: string;
  badge: string;
  roast: string;
  praise: string;
  superpower: string;
  kryptonite: string;
  spiritTool: string;
}

export type SlideType =
  | "intro"
  | "numbers"
  | "languages"
  | "circadian"
  | "repositories"
  | "persona"
  | "summary";

export interface SlideData {
  id: string;
  type: SlideType;
  title: string;
  subtitle?: string;
}

export interface GitWrappedData {
  user: GitHubUserProfile;
  metrics: ContributionMetrics;
  languages: LanguageBreakdown;
  circadian: CircadianRhythm;
  repositories: {
    mostStarred: RepositoryHighlight | null;
    mostActive: RepositoryHighlight | null;
    topOwned: RepositoryHighlight[];
  };
  persona: Persona;
  year: number;
  generatedAt: string;
  isMock?: boolean;
}
