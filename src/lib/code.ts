import { firestore } from "@/lib/firebase"; // adjust this import if you use a different firebase instance

/**
 * Get a Firestore document reference safely.
 */
function getCodeRef(code?: string) {
  const base = firestore
    .collection("ebooks")
    .doc("style-001")
    .collection("codes");

  // ✅ Always pass a string to .doc()
  if (code) return base.doc(code);
  return base.doc(); // auto-generates an ID
}

/**
 * Create a unique code with expiry.
 */
export async function createUniqueCode(minutesToExpire = 15) {
  // create new doc with auto-ID
  const ref = getCodeRef();
  const code = ref.id;

  const expiresAt = new Date(Date.now() + minutesToExpire * 60_000);
  await ref.set({
    code,
    expiresAt,
    used: false,
    createdAt: new Date(),
  });

  return { code, expiresAt };
}
