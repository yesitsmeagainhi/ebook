export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { consumeCode } from "@/lib/code";

export async function GET(
  _req: NextRequest,
  { params }: { params: { code: string } }
) {
  const code = params.code?.toUpperCase?.() || "";
  const result = await consumeCode(code);

  if (result.ok) {
    return new NextResponse(
      `
        <html><body style="font-family:system-ui;padding:24px">
          <h1>Success 🎉</h1>
          <p>Code <b>${code}</b> consumed. This link can no longer be used.</p>
          <a href="/">Back</a>
        </body></html>
      `,
      { status: 200, headers: { "content-type": "text/html" } }
    );
  }

  const reasonMap: Record<string, string> = {
    not_found: "Invalid code.",
    already_used: "This code has already been used.",
    expired: "This code has expired.",
  };

  return new NextResponse(
    `
      <html><body style="font-family:system-ui;padding:24px">
        <h1>Link Unavailable</h1>
        <p>${reasonMap[result.reason] ?? "Unavailable."}</p>
        <a href="/">Get a new code (on a fresh browser)</a>
      </body></html>
    `,
    { status: 410, headers: { "content-type": "text/html" } }
  );
}
