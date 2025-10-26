export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { createUniqueCode } from "@/lib/code";

/**
 * Creates a new unique code record.
 * (POST /u/[code]) — 15 min expiry by default
 */
export async function POST(
  _req: NextRequest,
  context: { params: Promise<{ code: string }> }
) {
  try {
    // If you need the URL param, await it:
    // const { code } = await context.params;

    const rec = await createUniqueCode(15); // 15-min expiry
    return NextResponse.json({ code: rec.code });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Failed to create code" },
      { status: 500 }
    );
  }
}

/**
 * Fetches info about a specific code.
 * (GET /u/[code])
 */
export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ code: string }> }
) {
  try {
    const { code } = await context.params; // 👈 await the Promise
    // Example lookup — replace with real query if needed:
    // const rec = await prisma.codes.findUnique({ where: { code } });

    return NextResponse.json({
      success: true,
      message: "Code lookup successful",
      code,
      // record: rec || null,
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Failed to fetch code" },
      { status: 500 }
    );
  }
}
