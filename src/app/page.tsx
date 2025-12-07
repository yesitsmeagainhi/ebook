export const runtime = "nodejs";

export const metadata = {
  title: "Zero to Classic – Launch Offer ₹9 | Dressingschool",
  description:
    "A simple, step-by-step guide to transform your style. Launch offer ₹9 for a limited time. MRP ₹299.",
  openGraph: {
    title: "Zero to Classic – Launch Offer ₹9",
    description:
      "A simple, step-by-step guide to transform your style. Launch offer ₹9 for a limited time.",
    images: [
      "https://dressingschool.com/wp-content/uploads/2025/10/Transform-ZERO-TO-HERO.png",
    ],
  },
  twitter: { card: "summary_large_image" },
};

import styles from "./landing.module.css";

const BUY_URL = "https://rzp.io/rzp/zero-to-hero-ebook"; // Razorpay link
const APP_URL =
  "https://play.google.com/store/apps/details?id=com.dressingschool"; // Play Store link

export default function Landing() {
  const year = new Date().getFullYear();

  return (
    <main className={styles.page}>
      {/* Theme scope (sets CSS vars) */}
      <div className={styles.theme}>
        {/* Top badge */}
        <div className={styles.badgeWrap}>
          <span className={styles.badge}>LAUNCH SALE — LIMITED TIME</span>
        </div>

        {/* App download button just below badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 8,
            marginBottom: 18,
          }}
        >
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: 999,
              background:
                "linear-gradient(90deg, rgba(15,23,42,0.96), rgba(37,99,235,0.96))",
              color: "#f9fafb",
              fontSize: 13,
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 6px 18px rgba(15,23,42,0.25)",
            }}
          >
            <span>Download Dressingschool app</span>
          </a>
        </div>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.h1}>Zero to Classic</h1>
            <p className={styles.sub}>
              A simple, step-by-step guide to build a timeless look — hair,
              skincare, fit, colors, essentials, accessories, and confidence.
            </p>

            <div className={styles.priceRow}>
              <div className={styles.priceBox} aria-label="Price">
                <span className={styles.mrp} aria-hidden="true">
                  ₹299
                </span>
                <span className={styles.sale} aria-label="Sale price">
                  ₹9
                </span>
                <span className={styles.tag}>Launch Price</span>
              </div>
              <a
                href={BUY_URL}
                className={styles.cta}
                rel="noopener noreferrer"
              >
                Get the ebook for ₹9
              </a>
            </div>

            <ul className={styles.trustRow} aria-label="Highlights">
              <li>Instant access</li>
              <li>Phone-friendly</li>
              <li>Simple & actionable</li>
            </ul>
          </div>

          <div className={styles.heroImgWrap}>
            <img
              src="https://dressingschool.com/wp-content/uploads/2025/10/Transform-ZERO-TO-HERO.png"
              alt="Zero to Classic ebook cover"
              className={styles.heroImg}
              loading="lazy"
            />
          </div>
        </section>

        {/* Value grid */}
        <section className={styles.grid} aria-label="What you learn">
          {[
            ["Start at the top", "Find your best haircut & beard plan."],
            ["Skincare made easy", "Soap-free basics + sunscreen routine."],
            ["Fit > fashion", "Look premium with perfect fit."],
            ["Color confidence", "Pick shades that flatter your skin tone."],
            ["10 essentials", "A small wardrobe that works everywhere."],
            ["Finish strong", "Watches, shoes, scent — subtle & sharp."],
          ].map(([title, line]) => (
            <div key={title} className={styles.card}>
              <h3 className={styles.cardH}>{title}</h3>
              <p className={styles.cardP}>{line}</p>
            </div>
          ))}
        </section>

        {/* Preview */}
        <section className={styles.preview} aria-label="Inside the ebook">
          <h2 className={styles.h2}>What’s inside</h2>
          <ul className={styles.previewList}>
            <li>Hair & face fundamentals (with face-shape tips)</li>
            <li>Simple skincare (face-wash & sunscreen basics)</li>
            <li>Fit & color guide (instant visual upgrade)</li>
            <li>Starter wardrobe: 10 essentials</li>
            <li>Accessories & confidence playbook</li>
          </ul>
          <p className={styles.note}>
            Designed for real life. No complicated rules, no big budget.
          </p>
          <a
            href={BUY_URL}
            className={styles.ctaSecondary}
            rel="noopener noreferrer"
          >
            Unlock for ₹9
          </a>
        </section>

        {/* FAQ */}
        <section className={styles.faq} aria-label="FAQ">
          <details className={styles.details}>
            <summary className={styles.summary}>
              How do I unlock the full book?
            </summary>
            <p className={styles.answer}>
              Click “Pay” or “Unlock” on the reading page. After payment,
              you’ll receive a one-time code; enter it to unlock the rest of
              the ebook instantly.
            </p>
          </details>
          <details className={styles.details}>
            <summary className={styles.summary}>Is this beginner-friendly?</summary>
            <p className={styles.answer}>
              Yes — clear steps, visual cues, and a tiny wardrobe plan that
              just works.
            </p>
          </details>
        </section>

        {/* Spacer so footer doesn't hide behind the sticky bar */}
        <div className={styles.stickySpacer} aria-hidden="true" />

        {/* Footer CTA */}
        <footer className={styles.footer}>
          <div className={styles.footerBox}>
            <div className={styles.footerPrice}>
              <span className={styles.mrpSmall}>₹299</span>
              <span className={styles.saleBig}>₹9</span>
            </div>
            <a
              href={BUY_URL}
              className={styles.ctaFooter}
              rel="noopener noreferrer"
            >
              Get it now
            </a>
          </div>
          <p className={styles.legal}>© {year} Dressingschool</p>
        </footer>

        {/* Fixed Launch Offer Bar (bottom) */}
        <aside
          className={styles.stickyBar}
          role="region"
          aria-label="Launch offer bar"
        >
          <div className={styles.stickyInner}>
            <div className={styles.stickyText}>
              <span className={styles.soonFlag}>Limited Time</span>{" "}
              <span>
                Soon the ebook will be{" "}
                <strong className={styles.soonPrice}>₹299</strong>. Unlock it
                now for <strong className={styles.nowPrice}>₹9</strong>.
              </span>
            </div>
            <a
              href={BUY_URL}
              className={styles.stickyCta}
              rel="noopener noreferrer"
            >
              Unlock for ₹9
            </a>
          </div>
        </aside>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Zero to Classic: Transform Your Style",
              image:
                "https://dressingschool.com/wp-content/uploads/2025/10/Transform-ZERO-TO-HERO.png",
              description:
                "A simple, step-by-step guide to transform your style. Launch offer ₹9 for a limited time.",
              brand: { "@type": "Brand", name: "Dressingschool" },
              offers: {
                "@type": "Offer",
                url: "https://dressingschool.com",
                priceCurrency: "INR",
                price: "9",
                priceValidUntil: "2025-12-31",
                availability: "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
              },
            }),
          }}
        />
      </div>
    </main>
  );
}
