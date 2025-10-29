// This file is for SERVER-SIDE use only (e.g., Cloud Functions, Next.js API routes, Express server)
// DO NOT import this into your client-side React Native code.

import { getApps, initializeApp, cert, App } from "firebase-admin/app";
// Import the admin SDK's getFirestore and alias it to avoid a name conflict
import { getFirestore as getAdminFirestore, Firestore } from "firebase-admin/firestore";

// This module-level cache ensures we only initialize the app once.
let app: App | null = null;
let db: Firestore | null = null;

/**
 * Gets a singleton instance of the Firebase Admin app.
 * Initializes the app if it's not already initialized.
 */
function getAdminApp(): App {
  if (app) {
    return app;
  }

  // Check if it's already initialized (e.g., by another part of the admin SDK)
  const existingApp = getApps()[0];
  if (existingApp) {
    app = existingApp;
    return app;
  }

  // Read environment variables
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  // Replace newlines (common issue when storing keys in env vars)
  const privateKey = (process.env.FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n");

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error("Missing Firebase Admin environment variables (FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY)");
  }

  // Initialize the app
  app = initializeApp({
    credential: cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });

  return app;
}

/**
 * Gets a singleton instance of the Admin Firestore database.
 */
export function getDb(): Firestore {
  if (db) {
    return db;
  }

  // Get the app (initializes if needed) and then get Firestore from it
  const adminApp = getAdminApp();
  // Use the aliased import here
  db = getAdminFirestore(adminApp);
  return db;
}

// 👇 Alias so `import { getFirestore }` also works, just like the client SDK
// This is now safe because the imported function is named 'getAdminFirestore'
export const getFirestore = getDb;

