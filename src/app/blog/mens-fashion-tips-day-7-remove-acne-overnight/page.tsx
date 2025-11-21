import styles from "./landing.module.css";

export const runtime = "nodejs";

export const metadata = {
  title: "Mens Fashion Tips Day 7: Reduce Acne Overnight – Acnestar Gel Review | Dressingschool",
  description:
    "Day 7 of Style Transformation. How to fix a pimple overnight without popping it. The Acnestar Gel spot treatment guide.",
  openGraph: {
    title: "Day 7: The Overnight Acne Fix",
    description: "Don't pop it. Dry it out. The emergency fix for sudden pimples.",
    images: [
      "../images/mens-fashion-tips/mens-fashion-tips-day-7-the-overnight-acne-fix.png",
    ],
  },
  twitter: { card: "summary_large_image" },
};

const AMAZON_URL = "https://amzn.to/43Du8YS";
const HOME_URL = "https://dressingschool.com";

export default function DaySevenAcne() {
  const year = new Date().getFullYear();

  return (
    <main className={styles.page}>
      {/* Theme scope */}
      <div className={styles.theme}>
        
        {/* Top badge */}
        <div className={styles.badgeWrap}>
          <span className={styles.badge}>DAY 7 • SKINCARE EMERGENCY</span>
        </div>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.h1}>Reduce Acne Overnight</h1>
            <p className={styles.sub}>
              Woke up with a pimple before a big event? <strong>Don't pop it.</strong> Popping leads to permanent scars. 
              Instead, use the "Spot Treatment" method to dry it out while you sleep.
            </p>

            <div className={styles.priceRow}>
              <div className={styles.priceBox} aria-label="Comparison">
                <span className={styles.mrp} aria-hidden="true">
                  Popping
                </span>
                <span className={styles.sale} aria-label="Bad">
                  Scars
                </span>
              </div>
              <div className={styles.priceBox} aria-label="Recommendation">
                <span className={styles.mrp} aria-hidden="true">
                  Acnestar Gel
                </span>
                <span className={styles.sale} aria-label="Good">
                  Clear
                </span>
                <span className={styles.tag}>Fast Action</span>
              </div>
            </div>

            <ul className={styles.trustRow} aria-label="Highlights">
              <li>Kills Bacteria</li>
              <li>Reduces Redness</li>
              <li>Prevents Marks</li>
            </ul>
          </div>

          <div className={styles.heroImgWrap}>
            <img
              src="../images/mens-fashion-tips/mens-fashion-tips-day-7-the-overnight-acne-fix.png"
              alt="Man applying skincare spot treatment"
              className={styles.heroImg}
              loading="lazy"
            />
          </div>
        </section>

        {/* Section 1: Why Acnestar Gel? */}
        <section className={styles.grid} aria-label="How it works">
          {[
            ["1. The Science", "Acnestar usually contains ingredients like Clindamycin (antibiotic) and Nicotinamide. This combo kills acne-causing bacteria and brings down swelling."],
            ["2. Targeted Action", "Unlike a face wash which goes everywhere, this is a concentrated gel. It attacks the specific pimple directly."],
            ["3. The Overnight Effect", "By applying it before sleep, you give the active ingredients 8 hours to penetrate the skin and dry out the infection."],
          ].map(([title, line]) => (
            <div key={title} className={styles.card}>
              <h3 className={styles.cardH}>{title}</h3>
              <p className={styles.cardP}>{line}</p>
            </div>
          ))}
        </section>

        {/* CTA for Product */}
        <div style={{ width: '100%', maxWidth: 1120, margin: '20px auto 0', padding: '0 20px' }}>
           <a href={AMAZON_URL} target="_blank" className={styles.cta} rel="noopener noreferrer">
             Check Acnestar on Amazon
           </a>
        </div>

        {/* Section 2: How to Apply (The Spot Method) */}
        <section className={styles.preview} aria-label="Application Guide">
          <h2 className={styles.h2}>The Spot Treatment Routine</h2>
          <p className={styles.note} style={{ color: 'var(--muted)', marginBottom: '12px' }}>
            Follow this exactly to avoid skin irritation.
          </p>
          <ul className={styles.previewList}>
            <li>
              <strong style={{ color: '#fff' }}>Step 1: Wash Face:</strong> Clean your face gently with water or a mild face wash. Pat dry with a clean towel.
            </li>
            <li>
              <strong style={{ color: '#fff' }}>Step 2: The Dot:</strong> Take a tiny amount of Acnestar Gel (size of a mustard seed) on your clean finger.
            </li>
            <li>
              <strong style={{ color: '#fff' }}>Step 3: Apply Precisely:</strong> Apply it <em>only</em> on the tip of the pimple. Do not rub it all over your face. It is potent.
            </li>
             <li>
              <strong style={{ color: '#fff' }}>Step 4: Sleep:</strong> Leave it overnight. In the morning, wash it off. The pimple should be significantly smaller and less red.
            </li>
          </ul>
        </section>

        {/* Section 3: FAQ */}
        <section className={styles.faq} aria-label="Skincare FAQ">
          <h2 className={styles.h2} style={{ paddingLeft: 4, marginBottom: 12 }}>
            Acne Questions
          </h2>
          
          <details className={styles.details}>
            <summary className={styles.summary}>
              Can I use it daily?
            </summary>
            <p className={styles.answer}>
              Use it only when you have active pimples. It is a treatment, not a moisturizer. Overuse can dry out your skin.
            </p>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>
              Does it remove dark spots?
            </summary>
            <p className={styles.answer}>
              It is primarily for active acne (red, painful bumps). For dark spots (scars), you need Vitamin C or Niacinamide serums later.
            </p>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>
               What if it burns?
            </summary>
            <p className={styles.answer}>
              A slight tingle is normal. If it burns or turns very red, wash it off immediately. Your skin might be sensitive to the ingredients.
            </p>
          </details>
        </section>

        {/* --- DISCLAIMER SECTION --- */}
        <section style={{ maxWidth: 1120, margin: '24px auto', padding: '0 20px' }}>
          <div style={{ 
            border: '1px dashed #ef4444', 
            backgroundColor: 'rgba(239, 68, 68, 0.1)', 
            padding: '16px', 
            borderRadius: '12px',
            color: '#fecaca',
            fontSize: '13px',
            lineHeight: '1.6'
          }}>
            <strong>⚠️ IMPORTANT DISCLAIMER:</strong> <br/>
            I am not a doctor. This is a product suggestion based on general grooming practices. 
            <strong>Always do a PATCH TEST before using.</strong> Apply a tiny amount behind your ear and wait 24 hours to check for allergic reactions. 
            If you have severe acne, please consult a dermatologist.
          </div>
        </section>
        {/* -------------------------- */}

        {/* --- UPSELL CARD: Zero to Classic --- */}
        <section style={{ maxWidth: 1120, margin: '0 auto 0', padding: '0 20px' }}>
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
                The 7-Day Transformation
              </h3>
              <p className={styles.cardP} style={{ fontSize: 14, marginBottom: 10 }}>
                You've completed the daily tips. Now get the full roadmap to reinventing yourself. <br className="hidden md:block" />
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
              <span className={styles.mrpSmall}>Pimples</span>
              <span className={styles.saleBig}>Gone</span>
            </div>
            <a
              href={AMAZON_URL}
              target="_blank"
              className={styles.ctaFooter}
              rel="noopener noreferrer"
            >
              Get Gel
            </a>
          </div>
          <p className={styles.legal}>© {year} Dressingschool • Day 7 Guide</p>
        </footer>

        {/* Sticky Bar */}
        <aside className={styles.stickyBar} role="region">
          <div className={styles.stickyInner}>
            <div className={styles.stickyText}>
              <span className={styles.soonFlag}>Task</span>
              <span style={{marginLeft: 8}}>
               Wash face + Apply Dot (Do Patch Test)
              </span>
            </div>
            <a
              href={AMAZON_URL}
              target="_blank"
              className={styles.stickyCta}
              rel="noopener noreferrer"
            >
              Buy Acnestar
            </a>
          </div>
        </aside>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Acnestar Gel",
              description: "Topical gel for acne prone skin.",
              image: "https://m.media-amazon.com/images/I/51Y+2+2X2+L._SL1000_.jpg", 
              offers: {
                "@type": "Offer",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      </div>
    </main>
  );
}