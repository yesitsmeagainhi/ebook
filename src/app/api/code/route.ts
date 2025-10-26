export const runtime = "nodejs";

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createUniqueCode } from "@/lib/code";

/**
 * API route: POST /api/code
 * Generates a unique short code with optional expiry (15 min default)
 */
export async function POST(
  _req: NextRequest,
  _context: { params: Promise<{}> } // 👈 for /api routes there are no params
) {
  try {
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
 * API route: GET /api/code
 * Simple test handler (optional)
 */
export async function GET(
  _req: NextRequest,
  _context: { params: Promise<{}> } // 👈 empty params object
) {
  try {
    // Example demo response
    return NextResponse.json({
      success: true,
      message: "API working",
      timestamp: new Date().toISOString(),
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Failed to fetch code" },
      { status: 500 }
    );
  }
}
