// src/app/api/code/route.ts
export const runtime = "nodejs";

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createUniqueCode } from "@/lib/code";

/**
 * POST /api/code
 * Generates a short code with a 15-min expiry.
 */
export async function POST(
  _req: NextRequest,
  _context: { params: Promise<{}> } // Next.js 16 expects Promise for params (empty for static routes)
) {
  try {
    const rec = await createUniqueCode(15);
    return NextResponse.json({ code: rec.code, expiresAt: rec.expiresAt });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Failed to create code" },
      { status: 500 }
    );
  }
}

/**
 * GET /api/code
 * Simple sanity ping (optional).
 */
export async function GET(
  _req: NextRequest,
  _context: { params: Promise<{}> }
) {
  try {
    return NextResponse.json({
      success: true,
      message: "API OK",
      at: new Date().toISOString(),
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Failed to fetch" },
      { status: 500 }
    );
  }
}
