"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const LS_KEY = "oneTimeCode";

export default function GetCodePage() {
  const [code, setCode] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );
  const [message, setMessage] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setStatus("loading");

      try {
        // Check for existing code in localStorage
        const existing = localStorage.getItem(LS_KEY);
        if (existing) {
          setCode(existing);
          setMessage(
            "Click the code below to copy it, then paste it inside the DressingSchool app to unlock your book. If you don’t have the app, download it from Play Store."
          );
          setStatus("done");
          return;
        }

        // Generate new code via secure API route
        const res = await fetch("/api/code", { method: "POST" });
        if (!res.ok) {
          const text = await res.text().catch(() => "");
          throw new Error(`Failed to create code (${res.status}) ${text}`);
        }
        const data = (await res.json()) as { code?: string; error?: string };
        if (!data?.code) throw new Error(data?.error || "No code returned");

        localStorage.setItem(LS_KEY, data.code);
        setCode(data.code);
        setMessage(
          "Your unique book unlock code is ready. Tap the code to copy it, then paste it inside the DressingSchool app. If you don’t have the app, download it from Play Store."
        );
        setStatus("done");
      } catch (e: any) {
        console.error("Get code error:", e);
        setMessage(
          e?.message || "Something went wrong while creating your code."
        );
        setStatus("error");
      }
    })();
  }, []);

  const handleCopyCode = async () => {
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setMessage(
        "✓ Code copied! Open the DressingSchool app and paste this code to unlock your book. If you don’t have the app, download it from Play Store."
      );

      setTimeout(() => {
        setCopied(false);
        setMessage(
          "Click the code again to copy it. Paste it inside the DressingSchool app to unlock your book. If you don’t have the app, download it from Play Store."
        );
      }, 2500);
    } catch (err) {
      console.error("Failed to copy:", err);
      setMessage(
        "Failed to copy code. Please try selecting and copying it manually, then paste it inside the DressingSchool app."
      );
    }
  };

  return (
    <main
      style={{
        fontFamily:
          "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        padding: 24,
        background: "linear-gradient(180deg,#ffffff,#f8fafc)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 520,
          background: "#fff",
          border: "1px solid #e2e8f0",
          borderRadius: 16,
          boxShadow: "0 10px 30px rgba(2,6,23,.06)",
          padding: 20,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            fontSize: 12,
            letterSpacing: 1,
            border: "1px solid #cbd5e1",
            padding: "6px 10px",
            borderRadius: 999,
            background: "#f8fafc",
            color: "#334155",
            marginBottom: 12,
            fontWeight: 600,
          }}
        >
          UNIQUE ACCESS CODE
        </div>

        <h1
          style={{
            margin: "6px 0 10px",
            fontSize: 24,
            color: "#0f172a",
          }}
        >
          Your Book Unlock Code
        </h1>

        {/* Short instruction explaining what to do */}
        <p
          style={{
            color: "#475569",
            fontSize: 14,
            marginBottom: 10,
          }}
        >
          1️⃣ Click the code to copy &nbsp;•&nbsp; 2️⃣ Open the DressingSchool
          app &nbsp;•&nbsp; 3️⃣ Paste the code to unlock your book.
        </p>

        {/* Play Store download hint */}
        <p
          style={{
            color: "#64748b",
            fontSize: 13,
            marginBottom: 14,
          }}
        >
          If you don&apos;t have the app, download it from Play Store:{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.dressingschool"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#0f172a", fontWeight: 600, textDecoration: "none" }}
          >
            Download DressingSchool
          </a>
        </p>

        {status === "loading" && (
          <p style={{ color: "#334155" }}>Generating your code…</p>
        )}

        {(status === "done" || status === "error") && (
          <>
            <p
              style={{
                color: status === "error" ? "#b91c1c" : "#1e293b",
                fontWeight: 500,
                marginBottom: 12,
              }}
            >
              {message}
            </p>

            {code ? (
              <>
                <button
                  onClick={handleCopyCode}
                  style={{
                    margin: "12px auto 10px",
                    padding: "12px 16px",
                    fontFamily:
                      "ui-monospace, SFMono-Regular, Menlo, monospace",
                    border: "2px dashed #94a3b8",
                    borderRadius: 12,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: 20,
                    fontWeight: 800,
                    letterSpacing: 2,
                    background: copied ? "#d1fae5" : "#f1f5f9",
                    cursor: "pointer",
                    color: "#0f172a",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span>{code}</span>
                  {copied ? (
                    <span
                      style={{
                        fontSize: 14,
                        color: "#059669",
                        fontWeight: 600,
                      }}
                    >
                      ✓ Copied!
                    </span>
                  ) : (
                    <span
                      style={{
                        fontSize: 14,
                        color: "#475569",
                        fontWeight: 500,
                      }}
                    >
                      Click to copy
                    </span>
                  )}
                </button>

                <p
                  style={{
                    color: "#334155",
                    fontSize: 13,
                    marginTop: 8,
                    fontWeight: 500,
                  }}
                >
                  Paste this code inside the DressingSchool app to unlock your
                  book.
                </p>

                <div style={{ marginTop: 12 }}>
                  <Link
                    href="/"
                    style={{
                      display: "inline-block",
                      border: "1px solid #0f172a",
                      color: "#0f172a",
                      padding: "10px 16px",
                      borderRadius: 10,
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    Go to Home
                  </Link>
                </div>
              </>
            ) : (
              <>
                <p style={{ color: "#b91c1c", fontWeight: 500 }}>
                  Couldn’t get a code. Please try again.
                </p>
                <button
                  onClick={() => location.reload()}
                  style={{
                    display: "inline-block",
                    border: "1px solid #0f172a",
                    color: "#0f172a",
                    padding: "10px 16px",
                    borderRadius: 10,
                    textDecoration: "none",
                    fontWeight: 600,
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  Retry
                </button>
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
}
