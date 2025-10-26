export const runtime = "nodejs";

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createUniqueCode } from "@/lib/code";

/**
 * POST /u/[code]
 * If you don't need the [code] param here, you can ignore it.
 */
export async function POST(
  _req: NextRequest,
  context: { params: Promise<{ code: string }> } // Next 16: params is a Promise
) {
  try {
    // If you need it:
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
 * GET /u/[code]
 * Example lookup handler; remove if not needed.
 */
export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ code: string }> } // Next 16: params is a Promise
) {
  try {
    const { code } = await context.params; // await the params
    // Example:
    // const rec = await prisma.code.findUnique({ where: { code } });
    return NextResponse.json({
      success: true,
      code,
      // record: rec ?? null,
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Failed to fetch code" },
      { status: 500 }
    );
  }
}
