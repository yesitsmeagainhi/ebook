export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { createUniqueCode } from "@/lib/code";

export async function POST() {
  try {
    const rec = await createUniqueCode(15); // 15-min expiry; change if needed
    return NextResponse.json({ code: rec.code });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Failed to create code" },
      { status: 500 }
    );
  }
}
