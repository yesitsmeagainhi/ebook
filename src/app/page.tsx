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

const BUY_URL = "https://rzp.io/rzp/vNOpnA9"; // your Razorpay link

export default function Landing() {
  return (
    <main className={styles.page}>
      {/* Top badge */}
      <div className={styles.badgeWrap}>
        <span className={styles.badge}>LAUNCH SALE – LIMITED TIME</span>
      </div>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.h1}>Zero to Classic: Transform Your Style</h1>
          <p className={styles.sub}>
            A simple, step-by-step guide to build timeless style — hair,
            skincare, fit, colors, essentials, accessories, and confidence.
          </p>

          <div className={styles.priceRow}>
            <div className={styles.priceBox}>
              <span className={styles.mrp}>₹299</span>
              <span className={styles.sale}>₹9</span>
              <span className={styles.tag}>Launch Price</span>
            </div>
            <a href={BUY_URL} className={styles.cta} rel="noopener noreferrer">
              Get the eBook for ₹9
            </a>
          </div>

          <ul className={styles.trustRow}>
            <li>✔ Instant access EBook</li>
            <li>✔ Phone-friendly</li>
            <li>✔ Simple & actionable</li>
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

      {/* Key value bullets */}
      <section className={styles.grid}>
        {[
          ["Start at the top", "Find your best haircut & beard plan."],
          ["Skincare made easy", "Soap-free basics + sunscreen routine."],
          ["Fit > fashion", "How to look premium with perfect fit."],
          ["Color confidence", "Pick shades that flatter your skin tone."],
          ["10 essential items", "A small wardrobe that works everywhere."],
          ["Finish strong", "Watches, shoes, scent—subtle & sharp."],
        ].map(([title, line]) => (
          <div key={title} className={styles.card}>
            <h3 className={styles.cardH}>{title}</h3>
            <p className={styles.cardP}>{line}</p>
          </div>
        ))}
      </section>

      {/* Tiny preview & reassurance */}
      <section className={styles.preview}>
        <h2 className={styles.h2}>What’s inside</h2>
        <ul className={styles.previewList}>
          <li>• Hair & face fundamentals (with face-shape tips)</li>
          <li>• Simple skincare (face-wash & sunscreen basics)</li>
          <li>• Fit & color guide (instant visual upgrade)</li>
          <li>• Starter wardrobe: 10 essentials</li>
          <li>• Accessories & confidence playbook</li>
        </ul>
        <p className={styles.note}>
          Designed for real life. No complicated rules, no big budget.
        </p>
        <a href={BUY_URL} className={styles.ctaSecondary} rel="noopener noreferrer">
          Unlock for ₹9
        </a>
      </section>

      {/* FAQ (super short) */}
      <section className={styles.faq}>
        <details className={styles.details}>
         <summary className={styles.summary}>How do I unlock the full book?</summary>
<p className={styles.answer}>
  To get full access, click the "Pay" or "Unlock" button located directly on the reading page. After completing the payment, you'll receive a one-time code. Enter this code when prompted to instantly unlock the rest of the ebook.
</p>
        </details>
        <details className={styles.details}>
          <summary className={styles.summary}>Is this beginner-friendly?</summary>
          <p className={styles.answer}>
            Yes—clear steps, visual cues, and a tiny wardrobe plan that works.
          </p>
        </details>
      </section>

      {/* Footer CTA */}
      <footer className={styles.footer}>
        <div className={styles.footerBox}>
          <div className={styles.footerPrice}>
            <span className={styles.mrpSmall}>₹299</span>
            <span className={styles.saleBig}>₹9</span>
          </div>
          <a href={BUY_URL} className={styles.ctaFooter} rel="noopener noreferrer">
            Get it now
          </a>
        </div>
        <p className={styles.legal}>© {new Date().getFullYear()} Dressingschool</p>
      </footer>

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
    </main>
  );
}
