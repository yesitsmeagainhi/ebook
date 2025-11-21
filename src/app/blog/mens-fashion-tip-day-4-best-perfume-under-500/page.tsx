import styles from "./landing.module.css";

export const runtime = "nodejs";

export const metadata = {
  title: "Mens Fashion Tip Day 4: Smell Good – Fogg Impressio Review | Dressingschool",
  description:
    "Day 4 of Style Transformation. Why you need an Eau De Parfum, not just a deodorant. Fogg Impressio review and how to apply fragrance correctly.",
  openGraph: {
    title: "Day 4: Smell Good Guide",
    description: "Smelling expensive doesn't have to cost ₹5,000. The budget king of perfumes.",
    images: [
      "../images/mens-fashion-tips/mens-fashion-tips-day-4-best-perfume-under-500.png",
    ],
  },
  twitter: { card: "summary_large_image" },
};

const AMAZON_URL = "https://amzn.to/487Eph0";
const HOME_URL = "https://dressingschool.com"; 

export default function DayFourScent() {
  const year = new Date().getFullYear();

  return (
    <main className={styles.page}>
      {/* Theme scope */}
      <div className={styles.theme}>
        
        {/* Top badge */}
        <div className={styles.badgeWrap}>
          <span className={styles.badge}>DAY 4 • GROOMING & AURA</span>
        </div>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.h1}>Day 4: Smell Good</h1>
            <p className={styles.sub}>
              Style is visual, but attraction is about scent. You can look amazing, 
              but if you smell like sweat (or nothing at all), you lose. 
              Upgrade from "Gas Deos" to a proper <strong>Eau De Parfum</strong>.
            </p>

            <div className={styles.priceRow}>
              <div className={styles.priceBox} aria-label="Comparison">
                <span className={styles.mrp} aria-hidden="true">
                  Body Odor
                </span>
                <span className={styles.sale} aria-label="Bad">
                  0/10
                </span>
              </div>
              <div className={styles.priceBox} aria-label="Recommendation">
                <span className={styles.mrp} aria-hidden="true">
                  Fogg Impressio
                </span>
                <span className={styles.sale} aria-label="Good">
                  10/10
                </span>
                <span className={styles.tag}>Long Lasting</span>
              </div>
            </div>

            <ul className={styles.trustRow} aria-label="Highlights">
              <li>Fresh & Powerful</li>
              <li>1000 Sprays</li>
              <li>No Gas</li>
            </ul>
          </div>

          <div className={styles.heroImgWrap}>
            <img
              src="https://m.media-amazon.com/images/I/71dUvB1dxBL._SL1500_.jpg"
              alt="Fogg Scent Impressio Perfume for Men"
              className={styles.heroImg}
              loading="lazy"
            />
          </div>
        </section>

        {/* Section 1: Why This Perfume? */}
        <section className={styles.grid} aria-label="Product Review">
          {[
            ["1. It is Eau De Parfum (EDP)", "Most cheap sprays are just gas. This is liquid perfume. It has a higher concentration of fragrance oil, meaning it lasts 5x longer than a standard deo."],
            ["2. The Scent Profile", "Impressio has a fresh, masculine opening that settles into a warm, woody base. It smells 'expensive' and professional, perfect for office or dates."],
            ["3. The Value", "Designer perfumes cost ₹5,000+. This gives you 100ml of quality juice for a fraction of the price. It is the best 'Blind Buy' for beginners."],
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
             Check Price on Amazon
           </a>
        </div>

        {/* Section 2: How to Apply (The Ritual) */}
        <section className={styles.preview} aria-label="Application Guide">
          <h2 className={styles.h2}>The 3-Spray Rule</h2>
          <p className={styles.note} style={{ color: 'var(--muted)', marginBottom: '12px' }}>
            Don't bathe in it. Less is more.
          </p>
          <ul className={styles.previewList}>
            <li>
              <strong style={{ color: '#fff' }}>Pulse Points:</strong> Heat activates scent. Spray 1x on the left side of your neck, 1x on the right side.
            </li>
            <li>
              <strong style={{ color: '#fff' }}>The Wrist Trick:</strong> Spray 1x on one wrist and tap (don't rub) it against the other. Rubbing destroys the scent molecules.
            </li>
            <li>
              <strong style={{ color: '#fff' }}>Timing Matters:</strong> Apply right after a shower when your pores are open. A moisturized skin holds perfume longer than dry skin.
            </li>
             <li>
              <strong style={{ color: '#fff' }}>Clothes vs Skin:</strong> Spraying on clothes lasts longer, but spraying on skin projects better. Do a mix of both.
            </li>
          </ul>
        </section>

        {/* Section 3: FAQ */}
        <section className={styles.faq} aria-label="Scent FAQ">
          <h2 className={styles.h2} style={{ paddingLeft: 4, marginBottom: 12 }}>
            Fragrance Questions
          </h2>
          
          <details className={styles.details}>
            <summary className={styles.summary}>
              Deodorant vs Perfume?
            </summary>
            <p className={styles.answer}>
              <strong>Deodorant</strong> kills bacteria in your armpits to stop bad smell. 
              <strong>Perfume</strong> (like Fogg Impressio) adds a good smell to your aura. You need both.
            </p>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>
              Will this last all day?
            </summary>
            <p className={styles.answer}>
              On clothes, yes. On skin, expect 6-8 hours. This is excellent performance for this price range.
            </p>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>
               Is it too strong for summer?
            </summary>
            <p className={styles.answer}>
              It is potent. In high heat, reduce to 2 sprays. In winter or AC environments, 4 sprays are fine.
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
                Smell Good, Look Better
              </h3>
              <p className={styles.cardP} style={{ fontSize: 14, marginBottom: 10 }}>
                Now that you smell great, let's fix your hair, skin, and wardrobe. <br className="hidden md:block" />
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
              <span className={styles.mrpSmall}>Scent</span>
              <span className={styles.saleBig}>Impressio</span>
            </div>
            <a
              href={AMAZON_URL}
              target="_blank"
              className={styles.ctaFooter}
              rel="noopener noreferrer"
            >
              Buy on Amazon
            </a>
          </div>
          <p className={styles.legal}>© {year} Dressingschool • Day 4 Guide</p>
        </footer>

        {/* Sticky Bar */}
        <aside className={styles.stickyBar} role="region">
          <div className={styles.stickyInner}>
            <div className={styles.stickyText}>
              <span className={styles.soonFlag}>Action</span>
              <span style={{marginLeft: 8}}>
               Apply Fogg Impressio correctly
              </span>
            </div>
            <a
              href={AMAZON_URL}
              target="_blank"
              className={styles.stickyCta}
              rel="noopener noreferrer"
            >
              Get Perfume
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
              name: "Fogg Scent Impressio Perfume for Men",
              description: "Long-lasting Eau De Parfum with fresh and powerful fragrance.",
              image: "https://m.media-amazon.com/images/I/71dUvB1dxBL._SL1500_.jpg",
              brand: {
                "@type": "Brand",
                name: "Fogg"
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.2",
                reviewCount: "15000"
              }
            }),
          }}
        />
      </div>
    </main>
  );
}