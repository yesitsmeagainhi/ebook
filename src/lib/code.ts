// src/lib/code.ts

/**
 * Generate a random code (A–Z, 0–9) of given length.
 */
function randomCode(len = 8) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no confusing chars
  let out = "";
  for (let i = 0; i < len; i++) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
}

/**
 * Create a unique code with an expiry timestamp.
 * No external dependencies (works on Netlify/Vercel out of the box).
 */
export async function createUniqueCode(minutesToExpire = 15) {
  const code = randomCode(8);
  const expiresAt = new Date(Date.now() + minutesToExpire * 60_000);
  return { code, expiresAt };
}
