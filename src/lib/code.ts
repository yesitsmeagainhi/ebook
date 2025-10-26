import { prisma } from "./prisma";
import { getDb } from "./firebaseAdmin";

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const CODE_LEN = 6;

export function generateCode(): string {
  let s = "";
  for (let i = 0; i < CODE_LEN; i++) {
    s += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }
  return s;
}

function codesCol(code?: string) {
  const db = getDb();
  return db
    .collection("ebookcodes")
    .doc("style-001")
    .collection("codes")
    .doc(code || undefined);
}

export async function createUniqueCode(minutesToExpire = 15) {
  const expiresAt = new Date(Date.now() + minutesToExpire * 60 * 1000);

  for (let i = 0; i < 5; i++) {
    const code = generateCode();
    try {
      const rec = await prisma.oneTimeCode.create({
        data: { code, expiresAt },
      });

      await codesCol(rec.code).set({
        code: rec.code,
        status: "unused",
        createdAt: new Date(),
        expiresAt,
        usedAt: null,
        source: "next-app",
      }, { merge: false });

      return rec;
    } catch (e: any) {
      if (e?.code === "P2002") continue;
      throw e;
    }
  }
  throw new Error("Could not create unique code; please retry.");
}

export async function consumeCode(code: string) {
  const now = new Date();
  const result = await prisma.$transaction(async (tx) => {
    const item = await tx.oneTimeCode.findUnique({ where: { code } });
    if (!item) return { ok: false as const, reason: "not_found" };
    if (item.used) return { ok: false as const, reason: "already_used" };
    if (item.expiresAt && item.expiresAt < now)
      return { ok: false as const, reason: "expired" };

    await tx.oneTimeCode.update({
      where: { code },
      data: { used: true, usedAt: now },
    });
    return { ok: true as const };
  });

  const ref = codesCol(code);
  if (result.ok) {
    await ref.set({ status: "used", usedAt: now }, { merge: true }).catch(() => {});
  } else if (result.reason === "expired") {
    await ref.set({ status: "expired" }, { merge: true }).catch(() => {});
  }

  return result;
}
