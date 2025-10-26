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

  useEffect(() => {
    (async () => {
      setStatus("loading");

      try {
        // 1) If a code already exists in this browser, reuse it.
        const existing = localStorage.getItem(LS_KEY);
        if (existing) {
          setCode(existing);
          setMessage("Copy and paste below unique code in app");
          setStatus("done");
          return;
        }

        // 2) Otherwise, create a new code via API (server handles uniqueness & Firestore push)
        const res = await fetch("/api/code", { method: "POST" });
        if (!res.ok) {
          const text = await res.text().catch(() => "");
          throw new Error(`Failed to create code (${res.status}) ${text}`);
        }
        const data = (await res.json()) as { code?: string; error?: string };
        if (!data?.code) throw new Error(data?.error || "No code returned");

        localStorage.setItem(LS_KEY, data.code);
        setCode(data.code);
        setMessage("Your unique code is ready.");
        setStatus("done");
      } catch (e: any) {
        console.error("Get code error:", e);
        setMessage(e?.message || "Something went wrong while creating your code.");
        setStatus("error");
      }
    })();
  }, []);

  return (
    <main
      style={{
        fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
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
            border: "1px solid #e2e8f0",
            padding: "6px 10px",
            borderRadius: 999,
            background: "#f1f5f9",
            marginBottom: 12,
          }}
        >
          UNIQUE ACCESS CODE
        </div>

        <h1 style={{ margin: "6px 0 10px", fontSize: 24 }}>Your EBook Code</h1>

        {status === "loading" && <p>Generating your code…</p>}

        {(status === "done" || status === "error") && (
          <>
            <p style={{ color: status === "error" ? "#b91c1c" : "#334155" }}>
              {message}
            </p>

            {code ? (
              <>
                <div
                  style={{
                    margin: "12px auto 10px",
                    padding: "12px 16px",
                    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                    border: "1px dashed #cbd5e1",
                    borderRadius: 12,
                    display: "inline-block",
                    fontSize: 20,
                    fontWeight: 800,
                    letterSpacing: 2,
                    background: "#f8fafc",
                  }}
                >
                  {code}
                </div>

                <div style={{ marginTop: 8 }}>
                  <Link
                    href={`/u/${code}`}
                    style={{
                      display: "inline-block",
                      background: "#111827",
                      color: "#fff",
                      padding: "10px 16px",
                      borderRadius: 10,
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    Use this link once
                  </Link>
                </div>

                <p style={{ color: "#64748b", fontSize: 12, marginTop: 8 }}>
                  This link will work exactly once. The same code is saved in this browser.
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
                <p style={{ color: "#b91c1c" }}>
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
