import styles from "./landing.module.css";

export const runtime = "nodejs";

export const metadata = {
  title: "Mens Fashion Tips Day 5: Wear Minimal – Essential Colors | Dressingschool",
  description:
    "Day 5 of Style Transformation. Stop walking like a billboard. The ultimate color guide for shirts and trousers.",
  openGraph: {
    title: "Day 5: Wear Minimal Guide",
    description: "The 'Old Money' aesthetic on a budget. Essential color palettes.",
    images: [
      "https://m.media-amazon.com/images/I/61l9nfy3RwL._SY741_.jpg",
    ],
  },
  twitter: { card: "summary_large_image" },
};

const APP_URL = "https://dressingschool.com"; // Update this if you have a specific app link
const HOME_URL = "https://dressingschool.com";

export default function DayFiveMinimal() {
  const year = new Date().getFullYear();

  return (
    <main className={styles.page}>
      {/* Theme scope */}
      <div className={styles.theme}>
        
        {/* Top badge */}
        <div className={styles.badgeWrap}>
          <span className={styles.badge}>DAY 5 • WARDROBE ESSENTIALS</span>
        </div>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.h1}>Day 5: Wear Minimal</h1>
            <p className={styles.sub}>
              True style is silent. Stop wearing big logos and neon prints. 
              Switch to <strong>Solid Colors</strong>. You are a man, not a billboard for a brand.
            </p>

            <div className={styles.priceRow}>
              <div className={styles.priceBox} aria-label="Comparison">
                <span className={styles.mrp} aria-hidden="true">
                  Big Logos
                </span>
                <span className={styles.sale} aria-label="Bad">
                  Cheap
                </span>
              </div>
              <div className={styles.priceBox} aria-label="Recommendation">
                <span className={styles.mrp} aria-hidden="true">
                  Solids
                </span>
                <span className={styles.sale} aria-label="Good">
                  Elite
                </span>
                <span className={styles.tag}>Versatile</span>
              </div>
            </div>

            <ul className={styles.trustRow} aria-label="Highlights">
              <li>Mix & Match</li>
              <li>Look Mature</li>
              <li>Never Out of Style</li>
            </ul>
          </div>

          <div className={styles.heroImgWrap}>
            <img
              src="https://m.media-amazon.com/images/I/61l9nfy3RwL._SY741_.jpg"
              alt="Minimalist Style"
              className={styles.heroImg}
              loading="lazy"
            />
          </div>
        </section>

        {/* Section 1: The Minimalist Rules */}
        <section className={styles.grid} aria-label="Minimalist Rules">
          {[
            ["1. The Billboard Rule", "If a brand wants you to advertise for them, they should pay you. Avoid shirts with giant text across the chest. Keep it plain."],
            ["2. The 3-Color Limit", "Don't wear more than 3 colors at once. A beige hoodie + black pants + white shoes = Perfect balance."],
            ["3. Texture > Print", "Instead of loud prints, look for interesting fabrics (like waffle knits, cotton blends, or ribbed textures). It looks expensive close-up."],
          ].map(([title, line]) => (
            <div key={title} className={styles.card}>
              <h3 className={styles.cardH}>{title}</h3>
              <p className={styles.cardP}>{line}</p>
            </div>
          ))}
        </section>

        {/* Section 2: The Color Guide (Replaced Images with Info) */}
        <section className={styles.preview} aria-label="Color Guide">
          <h2 className={styles.h2}>The Minimal Starter Pack: Colors</h2>
          <p className={styles.note} style={{ color: 'var(--muted)', marginBottom: '12px' }}>
            Build your wardrobe around these foundational colors.
          </p>
          
          <ul className={styles.previewList}>
            <li style={{ marginBottom: 16 }}>
              <strong style={{ color: '#fff', fontSize: 16, display: 'block', marginBottom: 4 }}>Essential Shirt Colors:</strong>
              Start with <strong>Crisp White</strong> (Formal), <strong>Navy Blue</strong> (Professional), and <strong>Black</strong> (Sleek). Once you have these, add Olive Green or Grey.
            </li>
            <li>
               <strong style={{ color: '#fff', fontSize: 16, display: 'block', marginBottom: 4 }}>Essential Trouser Colors:</strong>
               You only need <strong>Black Chinos</strong>, <strong>Grey Wool Trousers</strong>, and <strong>Dark Blue Jeans</strong>. Avoid bright reds or yellows for bottoms.
            </li>
          </ul>

          <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--line)' }}>
             <p className={styles.answer} style={{ marginBottom: 12 }}>
               Want the exact brand recommendations and shopping links?
             </p>
            <a
              href={APP_URL}
              className={styles.ctaSecondary}
            >
              For more info visit Dressingschool App
            </a>
          </div>
        </section>

        {/* Section 3: FAQ */}
        <section className={styles.faq} aria-label="Style FAQ">
          <h2 className={styles.h2} style={{ paddingLeft: 4, marginBottom: 12 }}>
            Minimalist Questions
          </h2>
          
          <details className={styles.details}>
            <summary className={styles.summary}>
              Isn't plain boring?
            </summary>
            <p className={styles.answer}>
              Not if the fit is right (Day 2). John Wick wears only black. James Bond wears solids. 
              Are they boring? No, they are iconic.
            </p>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>
              Which colors to buy first?
            </summary>
            <p className={styles.answer}>
              Start with the "Holy Trinity": Black, White, and Navy Blue. 
              These colors mix with everything, saving you time in the morning.
            </p>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>
               How to wash solid colors?
            </summary>
            <p className={styles.answer}>
              Wash blacks inside out with cold water to prevent fading. 
              Never mix your white tees with your black hoodie in the machine.
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
                The Full Capsule Wardrobe
              </h3>
              <p className={styles.cardP} style={{ fontSize: 14, marginBottom: 10 }}>
                Learn exactly which 10 items create 50+ different outfits. <br className="hidden md:block" />
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
              <span className={styles.mrpSmall}>Style</span>
              <span className={styles.saleBig}>Clean</span>
            </div>
            <a
              href={APP_URL}
              className={styles.ctaFooter}
            >
              Get the App
            </a>
          </div>
          <p className={styles.legal}>© {year} Dressingschool • Day 5 Guide</p>
        </footer>

        {/* Sticky Bar */}
        <aside className={styles.stickyBar} role="region">
          <div className={styles.stickyInner}>
            <div className={styles.stickyText}>
              <span className={styles.soonFlag}>Tip</span>
              <span style={{marginLeft: 8}}>
               Stick to Black, White, & Navy
              </span>
            </div>
            <a
              href={APP_URL}
              className={styles.stickyCta}
            >
              Get More Info
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
              headline: "Minimalist Wardrobe Colors for Men",
              description: "Essential shirt and trouser colors for a minimal wardrobe: White, Black, Navy, Grey.",
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