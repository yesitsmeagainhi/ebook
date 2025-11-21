import styles from "./landing.module.css";

export const runtime = "nodejs";

export const metadata = {
  title: "Day 9: Stay Hygienic & Smell Good | Dressingschool",
  description:
    "Day 9 of Style Transformation. The invisible foundation of style. Why you must look clean and smell fresh before wearing nice clothes.",
  openGraph: {
    title: "Day 9: Hygiene & Scent Guide",
    description: "Bad breath or body odor kills the best outfit instantly. Master the basics.",
    images: [
      "https://images.unsplash.com/photo-1621786032758-9491608d5c0d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  twitter: { card: "summary_large_image" },
};

const HOME_URL = "https://dressingschool.com";

export default function DayNineHygiene() {
  const year = new Date().getFullYear();

  return (
    <main className={styles.page}>
      {/* Theme scope */}
      <div className={styles.theme}>
        
        {/* Top badge */}
        <div className={styles.badgeWrap}>
          <span className={styles.badge}>DAY 9 • THE FOUNDATION</span>
        </div>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.h1}>Stay Hygienic & Smell Good</h1>
            <p className={styles.sub}>
              Hygiene is the invisible foundation. You can wear a ₹50,000 suit, but if you have dirty nails or body odor, 
              <strong> your value drops to zero.</strong> People shouldn't just see your style; they should feel your freshness.
            </p>

            <div className={styles.priceRow}>
              <div className={styles.priceBox} aria-label="Comparison">
                <span className={styles.mrp} aria-hidden="true">
                  Sweat & Dirt
                </span>
                <span className={styles.sale} aria-label="Bad">
                  Repulsive
                </span>
              </div>
              <div className={styles.priceBox} aria-label="Recommendation">
                <span className={styles.mrp} aria-hidden="true">
                  Fresh & Clean
                </span>
                <span className={styles.sale} aria-label="Good">
                  Magnetic
                </span>
                <span className={styles.tag}>Essential</span>
              </div>
            </div>

            <ul className={styles.trustRow} aria-label="Highlights">
              <li>Clean Nails</li>
              <li>Scrub Daily</li>
              <li>Zero Odor</li>
            </ul>
          </div>

          <div className={styles.heroImgWrap}>
            {/* Updated image representing a clean, groomed man */}
            <img
              src="https://i.pinimg.com/736x/f1/c0/00/f1c00095b956de9a48ad3461e1df824a.jpg"
              alt="Clean and well-groomed man looking fresh"
              className={styles.heroImg}
              loading="lazy"
            />
          </div>
        </section>

        {/* Section 1: The Hygiene Pillars */}
        <section className={styles.grid} aria-label="Hygiene Rules">
          {[
            ["1. The Double Scrub", "Water running down your body isn't a shower. You must actively scrub sweat zones (armpits, groin, feet) with soap. Do it twice if it's hot outside."],
            ["2. The Breath Audit", "90% of bad breath is on your tongue. A toothbrush can't fix it. Use a metal tongue scraper every single morning before brushing. It's life-changing."],
            ["3. The Smell Check", "Deodorant is for skin (to stop sweat smell). Perfume is for aura (Day 4). Never use perfume to cover up sweat; the mixture smells worse than BO alone. Be clean first."],
          ].map(([title, line]) => (
            <div key={title} className={styles.card}>
              <h3 className={styles.cardH}>{title}</h3>
              <p className={styles.cardP}>{line}</p>
            </div>
          ))}
        </section>

        {/* Section 2: The Daily Protocol */}
        <section className={styles.preview} aria-label="Routine">
          <h2 className={styles.h2}>The "Clean Man" Protocol</h2>
          <p className={styles.note} style={{ color: 'var(--muted)', marginBottom: '12px' }}>
            Non-negotiable daily habits.
          </p>
          <ul className={styles.previewList}>
            <li>
              <strong style={{ color: '#fff' }}>Nail Check:</strong> Look at your hands now. Are your nails long or dirty? Clip them weekly. Scrub underneath them daily. Women notice hands immediately.
            </li>
            <li>
              <strong style={{ color: '#fff' }}>Fresh Socks Only:</strong> Never wear the same pair twice. Feet bacteria builds up fast and ruins your shoes permanently.
            </li>
             <li>
              <strong style={{ color: '#fff' }}>Ear Hygiene:</strong> Visible yellow wax is a major turn-off. Clean the outer ear gently with a towel corner after showering.
            </li>
            <li>
              <strong style={{ color: '#fff' }}>Manscaping:</strong> Trim armpit and body hair. Excess hair traps heat, sweat, and bacteria, which creates stronger body odor.
            </li>
          </ul>
        </section>

        {/* Section 3: FAQ */}
        <section className={styles.faq} aria-label="Hygiene FAQ">
          <h2 className={styles.h2} style={{ paddingLeft: 4, marginBottom: 12 }}>
            Hygiene Questions
          </h2>
          
          <details className={styles.details}>
            <summary className={styles.summary}>
              Deodorant roll-on or spray?
            </summary>
            <p className={styles.answer}>
              Roll-ons (antiperspirants) are better at actually stopping sweat on the skin. Sprays are usually just fragrance. Use a roll-on for function, perfume for style.
            </p>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>
              How often to wash jeans?
            </summary>
            <p className={styles.answer}>
              Unlike underwear, you don't need to wash jeans after every wear unless you got sweaty. Every 4-5 wears is fine to preserve the denim.
            </p>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>
               My shoes smell bad, what to do?
            </summary>
            <p className={styles.answer}>
              The smell is bacteria living in moisture. Rotate shoes (don't wear the same pair daily). Let them air dry. Use anti-bacterial foot powder.
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
                The Complete Grooming Guide
              </h3>
              <p className={styles.cardP} style={{ fontSize: 14, marginBottom: 10 }}>
                Master skincare, haircare, beard maintenance, and total body grooming. <br className="hidden md:block" />
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
              <span className={styles.mrpSmall}>Hygiene</span>
              <span className={styles.saleBig}>100%</span>
            </div>
            <a
              href={HOME_URL}
              className={styles.ctaFooter}
            >
              Stay Fresh
            </a>
          </div>
          <p className={styles.legal}>© {year} Dressingschool • Day 9 Guide</p>
        </footer>

        {/* Sticky Bar */}
        <aside className={styles.stickyBar} role="region">
          <div className={styles.stickyInner}>
            <div className={styles.stickyText}>
              <span className={styles.soonFlag}>Task</span>
              <span style={{marginLeft: 8}}>
               Clip Nails + Buy Tongue Scraper
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
              headline: "Men's Hygiene and Scent Guide",
              description: "The foundational guide to staying clean, grooming nails, and smelling fresh.",
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