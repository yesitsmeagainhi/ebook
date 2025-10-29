// src/lib/code.ts

/**
 * Generate a random code (A–Z, 2–9) of given length.
 * (No 0/1/I/O to avoid confusion)
 */
function randomCode(len = 6) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

/**
 * Create a unique code with an expiry timestamp.
 */
export async function createUniqueCode(minutesToExpire = 15) {
  const code = randomCode(6); // 👈 six characters
  const expiresAt = new Date(Date.now() + minutesToExpire * 60_000);
  return { code, expiresAt };
}
