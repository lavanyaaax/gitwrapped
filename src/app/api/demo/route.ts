import { NextRequest, NextResponse } from "next/server";
import { getMockWrappedData, mockProfiles } from "@/lib/mock-data";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const profileParam = searchParams.get("profile") || "balanced";

    const data = getMockWrappedData(profileParam);

    return NextResponse.json(
      {
        success: true,
        data,
        availableProfiles: Object.keys(mockProfiles),
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, max-age=3600, s-maxage=3600",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to load demo data",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
