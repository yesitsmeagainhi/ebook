import styles from "./landing.module.css";

export const runtime = "nodejs";

export const metadata = {
  title: "Day 10: Do Not Use Soap on Face – Skincare 101 | Dressingschool",
  description:
    "Day 10 of Style Transformation. Why bar soap destroys your face skin. The pH balance rule and how to wash your face correctly.",
  openGraph: {
    title: "Day 10: Stop Using Soap on Your Face",
    description: "Soap is for your body. Face wash is for your face. Here is why.",
    images: [
      "../images/mens-fashion-tips/mens-fashion-tips-day-10-stop-using-soap-on-your-face.png",
    ],
  },
  twitter: { card: "summary_large_image" },
};

const HOME_URL = "https://dressingschool.com";

export default function DayTenSkincare() {
  const year = new Date().getFullYear();

  return (
    <main className={styles.page}>
      {/* Theme scope */}
      <div className={styles.theme}>
        
        {/* Top badge */}
        <div className={styles.badgeWrap}>
          <span className={styles.badge}>DAY 10 • SKIN HEALTH</span>
        </div>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.h1}>Stop Using Soap on Your Face</h1>
            <p className={styles.sub}>
              The skin on your face is different from the skin on your body. 
              Bar soaps are too harsh. They strip away natural oils, wreck your pH balance, and cause long-term damage.
              <strong> Switch to a Face Wash immediately.</strong>
            </p>

            <div className={styles.priceRow}>
              <div className={styles.priceBox} aria-label="Comparison">
                <span className={styles.mrp} aria-hidden="true">
                  Bar Soap
                </span>
                <span className={styles.sale} aria-label="Bad">
                  Harsh
                </span>
              </div>
              <div className={styles.priceBox} aria-label="Recommendation">
                <span className={styles.mrp} aria-hidden="true">
                  Face Wash
                </span>
                <span className={styles.sale} aria-label="Good">
                  Gentle
                </span>
                <span className={styles.tag}>pH Balanced</span>
              </div>
            </div>

            <ul className={styles.trustRow} aria-label="Highlights">
              <li>Preserve Moisture</li>
              <li>Prevent Aging</li>
              <li>Reduce Acne</li>
            </ul>
          </div>

          <div className={styles.heroImgWrap}>
            <img
              src="../images/mens-fashion-tips/mens-fashion-tips-day-10-stop-using-soap-on-your-face.png"
              alt="Man washing face correctly"
              className={styles.heroImg}
              loading="lazy"
            />
          </div>
        </section>

        {/* Section 1: The Science (Why Soap Fails) */}
        <section className={styles.grid} aria-label="Why Soap Fails">
          {[
            ["1. The pH Disaster", "Your skin is naturally acidic (pH 5.5). Bar soap is highly alkaline (pH 9-10). Using soap destroys your skin's protective acid mantle."],
            ["2. The Stripping Effect", "Soap cleans 'too well'. It removes all natural oils, making your face dry and tight. Your skin panics and produces *more* oil to compensate, leading to pimples."],
            ["3. Premature Aging", "Dry skin cracks and wrinkles faster. If you want to look young in your 30s and 40s, stop drying out your face with body soap today."],
          ].map(([title, line]) => (
            <div key={title} className={styles.card}>
              <h3 className={styles.cardH}>{title}</h3>
              <p className={styles.cardP}>{line}</p>
            </div>
          ))}
        </section>

        {/* Section 2: The Correct Routine */}
        <section className={styles.preview} aria-label="Face Wash Routine">
          <h2 className={styles.h2}>How to Wash Your Face</h2>
          <p className={styles.note} style={{ color: 'var(--muted)', marginBottom: '12px' }}>
            Treat your face like a premium fabric, not a floor mat.
          </p>
          <ul className={styles.previewList}>
            <li>
              <strong style={{ color: '#fff' }}>Twice a Day:</strong> Wash once in the morning (to remove night oils) and once at night (to remove pollution/dirt).
            </li>
            <li>
              <strong style={{ color: '#fff' }}>Lukewarm Water:</strong> Never use hot water on your face. It scalds the skin and causes redness. Use lukewarm or cool water.
            </li>
            <li>
              <strong style={{ color: '#fff' }}>Pat, Don't Rub:</strong> After washing, use a clean towel to gently <em>pat</em> your face dry. Rubbing aggressively damages the skin elasticity.
            </li>
             <li>
              <strong style={{ color: '#fff' }}>Moisturize:</strong> A face wash cleans; a moisturizer repairs. Apply a light moisturizer immediately while your skin is still slightly damp.
            </li>
          </ul>
        </section>

        {/* Section 3: FAQ */}
        <section className={styles.faq} aria-label="Skincare FAQ">
          <h2 className={styles.h2} style={{ paddingLeft: 4, marginBottom: 12 }}>
            Face Wash Questions
          </h2>
          
          <details className={styles.details}>
            <summary className={styles.summary}>
              Which Face Wash should I buy?
            </summary>
            <p className={styles.answer}>
              If you have oily skin, look for "Salicylic Acid" or "Oil Control". 
              If you have dry skin, look for "Hydrating" or "Cream Cleanser". 
              Any face wash is better than soap.
            </p>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>
              Does water alone work?
            </summary>
            <p className={styles.answer}>
              In the morning? Maybe. But at night, after being outside in pollution and sweat, water isn't enough to clean your pores. You need a cleanser.
            </p>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>
               Can I use body wash on my face?
            </summary>
            <p className={styles.answer}>
              No. Body skin is thicker and tougher. Facial skin is delicate. Keep your body products below the neck.
            </p>
          </details>
        </section>

        {/* --- UPSELL CARD: Zero to Classic --- */}
        <section style={{ maxWidth: 1120, margin: '40px auto 0', padding: '0 20px' }}>
          <div className={styles.card} style={{ 
            display: 'flex', 
            gap: 20, 
            alignItems: 'center', 
            borderColor: 'var(--accent)', 
            background: 'linear-gradient(to right, #0f0f10, #131c19)' 
          }}>
            <div style={{ flexShrink: 0 }}>
              <img 
                src="https://dressingschool.com/wp-content/uploads/2025/10/Transform-ZERO-TO-HERO.png" 
                alt="Zero to Classic Ebook Cover" 
                style={{ width: 80, borderRadius: 8, border: '1px solid var(--line)' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <h3 className={styles.cardH} style={{ fontSize: 18, marginBottom: 6 }}>
                You've Finished the 10 Days!
              </h3>
              <p className={styles.cardP} style={{ fontSize: 14, marginBottom: 10 }}>
                This was just the start. Get the complete blueprint for Hair, Skin, Style, and Confidence. <br className="hidden md:block" />
                Get the <strong>Zero to Classic</strong> guide.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 800, fontSize: 18 }}>₹9</span>
                <span style={{ textDecoration: 'line-through', color: 'var(--hint)', fontSize: 13 }}>₹299</span>
                <a 
                  href={HOME_URL} 
                  className={styles.ctaSecondary} 
                  style={{ padding: '8px 16px', fontSize: 13 }}
                >
                  Get the Offer
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* ---------------------------------------- */}

        {/* Spacer */}
        <div className={styles.stickySpacer} aria-hidden="true" />

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerBox}>
            <div className={styles.footerPrice}>
              <span className={styles.mrpSmall}>Face</span>
              <span className={styles.saleBig}>Safe</span>
            </div>
            <a
              href={HOME_URL}
              className={styles.ctaFooter}
            >
              Get Guide
            </a>
          </div>
          <p className={styles.legal}>© {year} Dressingschool • Day 10 Guide</p>
        </footer>

        {/* Sticky Bar */}
        <aside className={styles.stickyBar} role="region">
          <div className={styles.stickyInner}>
            <div className={styles.stickyText}>
              <span className={styles.soonFlag}>Task</span>
              <span style={{marginLeft: 8}}>
               Throw away the soap bar for face
              </span>
            </div>
            <a
              href={HOME_URL}
              className={styles.stickyCta}
            >
              Full Guide ₹9
            </a>
          </div>
        </aside>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Why You Should Not Use Soap on Your Face",
              description: "The dangers of using bar soap on facial skin. Understanding pH balance and proper skincare.",
              author: {
                "@type": "Organization",
                name: "Dressingschool"
              }
            }),
          }}
        />
      </div>
    </main>
  );
}