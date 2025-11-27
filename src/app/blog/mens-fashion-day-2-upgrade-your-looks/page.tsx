import styles from "./landing.module.css";

export const runtime = "nodejs";

export const metadata = {
  title: "Day 2: The Perfect Fit Guide – Stop Wearing Loose Clothes | Dressingschool",
  description:
    "Day 2 of Style Transformation. Why fit matters more than brands. Learn the 3 golden rules of perfect fit for men.",
  openGraph: {
    title: "Mens Fashion Tip Day 2: The Perfect Fit Guide",
    description: "A cheap fitted shirt looks better than an expensive baggy one.",
    images: [
      "../images/mens-fashion-tips/mens-fashion-tips-day-2-perfect-fit.png",
    ],
  },
  twitter: { card: "summary_large_image" },
};

const HOME_URL = "https://dressingschool.com"; // Link to the ebook landing page

export default function DayTwoFit() {
  const year = new Date().getFullYear();

  return (
    <main className={styles.page}>
      {/* Theme scope */}
      <div className={styles.theme}>
        
        {/* Top badge */}
        <div className={styles.badgeWrap}>
          <span className={styles.badge}>DAY 2 • STYLE FOUNDATIONS</span>
        </div>

        {/* Hero: The Problem */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.h1}>No More Loose Clothes</h1>
            <p className={styles.sub}>
              The biggest mistake men make is wearing clothes that are too big. 
              <strong> Fit is the #1 style hack.</strong> A ₹500 fitted shirt looks 
              premium; a ₹5,000 baggy shirt looks cheap.
            </p>

            <div className={styles.priceRow}>
              <div className={styles.priceBox} aria-label="Comparison">
                <span className={styles.mrp} aria-hidden="true">
                  Baggy Brand
                </span>
                <span className={styles.sale} aria-label="Bad">
                  Sloppy
                </span>
              </div>
              <div className={styles.priceBox} aria-label="Comparison">
                <span className={styles.mrp} aria-hidden="true">
                  Fitted Basic
                </span>
                <span className={styles.sale} aria-label="Good">
                  Sharp
                </span>
                <span className={styles.tag}>High Value</span>
              </div>
            </div>

            <ul className={styles.trustRow} aria-label="Highlights">
              <li>Look Taller</li>
              <li>Look Leaner</li>
              <li>Command Respect</li>
            </ul>
          </div>

          <div className={styles.heroImgWrap}>
            <img
              src="../images/mens-fashion-tips/mens-fashion-tips-day-2-perfect-fit-guide.png"
              alt="Man in perfectly fitted shirt"
              className={styles.heroImg}
              loading="lazy"
            />
          </div>
        </section>

        {/* Section 1: The 3 Golden Rules */}
        <section className={styles.grid} aria-label="The Golden Rules">
          {[
            ["1. The Shoulder Seam", "The most critical rule. The seam of your shirt must sit exactly where your shoulder ends. If it droops, the shirt is too big."],
            ["2. The Chest", "You should have 1-2 inches of extra fabric. No buttons popping (too tight) and no 'tenting' effect (too loose)."],
            ["3. The Sleeve Length", "Sleeves should end exactly at your wrist bone. If they cover your watch, they are too long. If they show forearm, they are too short."],
          ].map(([title, line]) => (
            <div key={title} className={styles.card}>
              <h3 className={styles.cardH}>{title}</h3>
              <p className={styles.cardP}>{line}</p>
            </div>
          ))}
        </section>

        {/* Section 2: How to Fix It (Action Plan) */}
        <section className={styles.preview} aria-label="Action Plan">
          <h2 className={styles.h2}>How to Get the Perfect Fit</h2>
          <p className={styles.note} style={{ color: 'var(--muted)', marginBottom: '12px' }}>
            You don't need a new wardrobe. You just need to adjust your approach.
          </p>
          <ul className={styles.previewList}>
            <li>
              <strong style={{ color: '#fff' }}>Size Down:</strong> Most men buy a "Large" because it feels comfortable, but they actually need a "Medium". Try one size smaller than usual next time.
            </li>
            <li>
              <strong style={{ color: '#fff' }}>The "Hug" Test:</strong> When you hug someone, your shirt should feel slightly snug but not restrictive. If you can hide a gym bag under your shirt, it's too loose.
            </li>
            <li>
              <strong style={{ color: '#fff' }}>Visit a Tailor (Darzi):</strong> This is the secret weapon. Buying a ready-made shirt and spending ₹200 to taper the sides makes it look like a custom-made designer piece.
            </li>
             <li>
              <strong style={{ color: '#fff' }}>Pants Break:</strong> Your trousers should just barely touch your shoes. No "accordion" bunching at the ankles.
            </li>
          </ul>
        </section>

        {/* Section 3: FAQ */}
        <section className={styles.faq} aria-label="Common Questions">
          <h2 className={styles.h2} style={{ paddingLeft: 4, marginBottom: 12 }}>
            Fit Questions
          </h2>
          
          <details className={styles.details}>
            <summary className={styles.summary}>
              Does "Fitted" mean "Tight"?
            </summary>
            <p className={styles.answer}>
              No. Tight clothes restrict movement and look desperate. Fitted clothes 
              skim your body lines without hugging them. There should always be a little air between you and the fabric.
            </p>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>
              I am skinny/heavy, what should I do?
            </summary>
            <p className={styles.answer}>
              If you are skinny, baggy clothes make you look smaller (like a child). 
              If you are heavy, baggy clothes make you look larger. 
              In both cases, a proper fit is the answer to looking proportional.
            </p>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>
                Can I fix my old clothes?
            </summary>
            <p className={styles.answer}>
              Yes. A tailor can shorten sleeves, taper baggy sides, and hem trousers. 
              It is much cheaper than buying new clothes.
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
                Want a Complete Makeover?
              </h3>
              <p className={styles.cardP} style={{ fontSize: 14, marginBottom: 10 }}>
                Fit is just the beginning. Master colors, essentials, and grooming. <br className="hidden md:block" />
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
              <span className={styles.mrpSmall}>Result</span>
              <span className={styles.saleBig}>Timeless</span>
            </div>
            <a
              href={HOME_URL}
              className={styles.ctaFooter}
            >
              Learn More
            </a>
          </div>
          <p className={styles.legal}>© {year} Dressingschool • Day 2 Guide</p>
        </footer>

        {/* Sticky Bar */}
        <aside className={styles.stickyBar} role="region">
          <div className={styles.stickyInner}>
            <div className={styles.stickyText}>
              <span className={styles.soonFlag}>Task</span>
              <span style={{marginLeft: 8}}>
               Check your shoulder seams today
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
              headline: "How to Find the Perfect Fit for Men's Clothes",
              description: "Why fit matters more than brand. A guide to shoulder seams, sleeve length, and sizing down.",
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