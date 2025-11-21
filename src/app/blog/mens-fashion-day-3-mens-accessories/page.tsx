import styles from "./landing.module.css";

export const runtime = "nodejs";

export const metadata = {
  title: "Day 3: Minimal Accessories – Watch, Shoes, Belt, Wallet | Dressingschool",
  description:
    "Day 3 of Style Transformation. Master the 'Big 4' accessories. Learn the leather matching rule and why a slim wallet matters.",
  openGraph: {
    title: "Day 3: Minimal Accessories Guide",
    description: "You don't need jewelry. You need these 4 items on point.",
    images: [
      "../wp-content/uploads/2025/10/basic-accessories.png",
    ],
  },
  twitter: { card: "summary_large_image" },
};

const HOME_URL = "https://dressingschool.com"; // Link to the ebook landing page

export default function DayThreeAccessories() {
  const year = new Date().getFullYear();

  return (
    <main className={styles.page}>
      {/* Theme scope */}
      <div className={styles.theme}>
        
        {/* Top badge */}
        <div className={styles.badgeWrap}>
          <span className={styles.badge}>DAY 3 • THE DETAILS</span>
        </div>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.h1}>Wear Minimal Accessories</h1>
            <p className={styles.sub}>
              You don't need gold chains or stacked rings to look expensive. 
              You just need to master the <strong>"Big 4"</strong>: Watch, Shoes, Belt, and Wallet.
              Keep them clean, minimal, and matched.
            </p>

            <div className={styles.priceRow}>
              <div className={styles.priceBox} aria-label="Comparison">
                <span className={styles.mrp} aria-hidden="true">
                  Flashy
                </span>
                <span className={styles.sale} aria-label="Bad">
                  Tacky
                </span>
              </div>
              <div className={styles.priceBox} aria-label="Comparison">
                <span className={styles.mrp} aria-hidden="true">
                  Minimal
                </span>
                <span className={styles.sale} aria-label="Good">
                  Classy
                </span>
                <span className={styles.tag}>Timeless</span>
              </div>
            </div>

            <ul className={styles.trustRow} aria-label="Highlights">
              <li>Match Leathers</li>
              <li>Slim Profile</li>
              <li>Zero Clutter</li>
            </ul>
          </div>

          <div className={styles.heroImgWrap}>
            <img
              src="../../wp-content/uploads/2025/10/basic-accessories.png"
              alt="Minimalist watch and leather accessories"
              className={styles.heroImg}
              loading="lazy"
            />
          </div>
        </section>

        {/* Section 1: The Big 4 Rules */}
        <section className={styles.grid} aria-label="The Big 4 Rules">
          {[
            ["1. The Watch", "Keep the dial simple. No massive sports watches with suits. A clean analog watch with a leather or steel strap is the ultimate sign of maturity."],
            ["2. The Shoes", "They are the first thing people notice. Keep them clean. White sneakers for casual, leather loafers/boots for smart-casual. Never run-down gym shoes."],
            ["3. The Belt", "It has one job: hold your pants. It shouldn't be a statement piece with a giant logo buckle. Keep the buckle slim and silver."],
            ["4. The Wallet", "The Bulge Killer. A thick wallet ruins the line of your pants (see Day 2 Fit). Switch to a slim cardholder or a bi-fold. Declutter your receipts."],
          ].map(([title, line]) => (
            <div key={title} className={styles.card}>
              <h3 className={styles.cardH}>{title}</h3>
              <p className={styles.cardP}>{line}</p>
            </div>
          ))}
        </section>

        {/* Section 2: The Matching Code */}
        <section className={styles.preview} aria-label="Matching Rules">
          <h2 className={styles.h2}>The Golden Rule: Match Your Leathers</h2>
          <p className={styles.note} style={{ color: 'var(--muted)', marginBottom: '12px' }}>
            This is the secret to looking "put together" without trying.
          </p>
          <ul className={styles.previewList}>
            <li>
              <strong style={{ color: '#fff' }}>Brown Shoes = Brown Belt:</strong> Never mix a black belt with brown shoes. It breaks your visual line.
            </li>
            <li>
              <strong style={{ color: '#fff' }}>Watch Strap Logic:</strong> If your watch has a leather strap, it should ideally match your belt and shoes. Brown strap goes with brown shoes.
            </li>
            <li>
              <strong style={{ color: '#fff' }}>Metal Matching (Advanced):</strong> Try to match the metal of your belt buckle to the metal of your watch case (Silver with Silver).
            </li>
             <li>
              <strong style={{ color: '#fff' }}>Sneaker Exception:</strong> If you are wearing white sneakers, you can wear a casual fabric belt or a black leather belt.
            </li>
          </ul>
        </section>

        {/* Section 3: FAQ */}
        <section className={styles.faq} aria-label="Common Questions">
          <h2 className={styles.h2} style={{ paddingLeft: 4, marginBottom: 12 }}>
            Accessory Questions
          </h2>
          
          <details className={styles.details}>
            <summary className={styles.summary}>
              Can I wear an Apple Watch?
            </summary>
            <p className={styles.answer}>
              Yes, but swap the rubber gym band for a leather or metal link strap when you are dressing up. It instantly upgrades the look from "tech" to "style".
            </p>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>
              Front pocket or back pocket wallet?
            </summary>
            <p className={styles.answer}>
              Front pocket is better for your posture (sitting on a wallet hurts your back) and it looks cleaner. This requires a slim wallet.
            </p>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>
                Should I buy Black or Brown leather first?
            </summary>
            <p className={styles.answer}>
              Black is safer and more formal. Brown is more stylish and versatile for day-to-day wear. Start with Black, then get Brown.
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
                Build the Full Wardrobe
              </h3>
              <p className={styles.cardP} style={{ fontSize: 14, marginBottom: 10 }}>
                Get the complete list of essentials. Which shoes, which watch, which colors. <br className="hidden md:block" />
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
              <span className={styles.mrpSmall}>Rule</span>
              <span className={styles.saleBig}>Match Leathers</span>
            </div>
            <a
              href={HOME_URL}
              className={styles.ctaFooter}
            >
              Master Style
            </a>
          </div>
          <p className={styles.legal}>© {year} Dressingschool • Day 3 Guide</p>
        </footer>

        {/* Sticky Bar */}
        <aside className={styles.stickyBar} role="region">
          <div className={styles.stickyInner}>
            <div className={styles.stickyText}>
              <span className={styles.soonFlag}>Task</span>
              <span style={{marginLeft: 8}}>
               Check if your Belt matches your Shoes
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
              headline: "Minimalist Accessories Guide for Men",
              description: "The 4 essential accessories: Watch, Shoes, Belt, and Wallet. How to match them.",
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