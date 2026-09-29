import { Metadata } from "next";
import { getMockWrappedData, mockProfiles } from "@/lib/mock-data";
import { GitWrappedData } from "@/types/wrapped";
import { StorySkeleton } from "@/components/story/StorySkeleton";

interface WrappedPageProps {
  params: Promise<{ username: string }>;
  searchParams?: Promise<{ profile?: string }>;
}

export async function generateMetadata({
  params,
}: WrappedPageProps): Promise<Metadata> {
  const { username } = await params;
  return {
    title: `${username}'s 2026 GitWrapped — Coding Era`,
    description: `Explore ${username}'s personalized 2026 GitHub coding era, top languages, commit habits, and developer persona.`,
  };
}

export default async function WrappedPage({
  params,
  searchParams,
}: WrappedPageProps) {
  // Next.js 15: params and searchParams are asynchronous Promises
  const { username } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const requestedProfile = resolvedSearchParams?.profile;

  // Determine profile: query param > username match > default "balanced"
  const normalizedUsername = decodeURIComponent(username).toLowerCase().trim();
  const matchedKey =
    requestedProfile ||
    (mockProfiles[normalizedUsername] ? normalizedUsername : "balanced");

  const baseData = getMockWrappedData(matchedKey);

  // If visiting an arbitrary username, adopt the username for personalization
  const wrappedData: GitWrappedData = {
    ...baseData,
    user: {
      ...baseData.user,
      login: username,
      name:
        mockProfiles[normalizedUsername] !== undefined
          ? baseData.user.name
          : username,
    },
  };

  return (
    <main className="min-h-screen bg-[#09090b] text-[#fafafa] flex flex-col items-center justify-center p-4 sm:p-6">
      <StorySkeleton data={wrappedData} />
    </main>
  );
}
