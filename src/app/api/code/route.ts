export const runtime = "nodejs"; // ensure Node runtime for Admin SDK

import { NextResponse } from "next/server";
import { createUniqueCode } from "@/lib/code";
import { getDb } from "@/lib/firebaseAdmin";   // 👈 use getDb
import * as admin from "firebase-admin";

type Body = { ebookId?: string; minutesToExpire?: number };

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({} as Body));
    const ebookId = body.ebookId || "style-001";
    const minutesToExpire = body.minutesToExpire ?? 15;

    const db = getDb(); // 👈
    // generate unique 6-char code
    let attempts = 0, code = "";
    while (attempts++ < 5) {
      const { code: c, expiresAt } = await createUniqueCode(minutesToExpire);
      const docRef = db.collection("ebookCodes").doc(ebookId).collection("codes").doc(c);
      const snap = await docRef.get();
      if (snap.exists) continue;

      await docRef.set({
        code: c,
        status: "unused",
        source: "next-app",
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        expiresAt: admin.firestore.Timestamp.fromDate(expiresAt),
        usedAt: null,
        usedBy: null,
      });

      await db.collection("ebookCodes").doc(ebookId).set(
        { exists: true, updatedAt: admin.firestore.FieldValue.serverTimestamp() },
        { merge: true }
      );

      code = c;
      break;
    }

    if (!code) return NextResponse.json({ error: "Could not allocate code" }, { status: 500 });
    return NextResponse.json({ code });
  } catch (e: any) {
    console.error("Create code error:", e);
    return NextResponse.json({ error: e?.message || "Internal error" }, { status: 500 });
  }
}
