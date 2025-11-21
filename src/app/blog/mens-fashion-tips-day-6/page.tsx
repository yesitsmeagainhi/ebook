import styles from "./landing.module.css";

export const runtime = "nodejs";

export const metadata = {
  title: "Mens Fashion Tips Day 6: The Ironing Rule – Avoid Wrinkled Clothes | Dressingschool",
  description:
    "Day 6 of Style Transformation. A ₹5,000 wrinkled shirt looks cheap. A ₹500 ironed shirt looks premium. The guide to crisp clothing.",
  openGraph: {
    title: "Day 6: The Ironing Rule",
    description: "Stop ruining your outfits with wrinkles. The simple hack to looking expensive.",
    images: [
      "../images/mens-fashion-tips/mens-fashion-tips-day-6-the-ironing-rule.png",
    ],
  },
  twitter: { card: "summary_large_image" },
};

const HOME_URL = "https://dressingschool.com";

export default function DaySixIroning() {
  const year = new Date().getFullYear();

  return (
    <main className={styles.page}>
      {/* Theme scope */}
      <div className={styles.theme}>
        
        {/* Top badge */}
        <div className={styles.badgeWrap}>
          <span className={styles.badge}>DAY 6 • DISCIPLINE</span>
        </div>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.h1}>Respect the Fabric</h1>
            <p className={styles.sub}>
              Wrinkles signal laziness. It doesn't matter if your shirt is Gucci or street market—if it's crumpled, you look sloppy. 
              <strong> Ironing is the cheapest way to upgrade your style.</strong>
            </p>

            <div className={styles.priceRow}>
              <div className={styles.priceBox} aria-label="Comparison">
                <span className={styles.mrp} aria-hidden="true">
                  Wrinkled
                </span>
                <span className={styles.sale} aria-label="Bad">
                  Sloppy
                </span>
              </div>
              <div className={styles.priceBox} aria-label="Recommendation">
                <span className={styles.mrp} aria-hidden="true">
                  Crisp
                </span>
                <span className={styles.sale} aria-label="Good">
                  Sharp
                </span>
                <span className={styles.tag}>Free Upgrade</span>
              </div>
            </div>

            <ul className={styles.trustRow} aria-label="Highlights">
              <li>Look Professional</li>
              <li>Show Discipline</li>
              <li>Fix Collars</li>
            </ul>
          </div>

          <div className={styles.heroImgWrap}>
            <img
              src="../images/mens-fashion-tips/mens-fashion-tips-day-6-the-ironing-rule.png"
              alt="Crisp Ironed Shirts"
              className={styles.heroImg}
              loading="lazy"
            />
          </div>
        </section>

        {/* Section 1: The Physics of Style */}
        <section className={styles.grid} aria-label="Ironing Rules">
          {[
            ["1. The Value Paradox", "A ₹5,000 wrinkled shirt looks like ₹50. A ₹500 ironed shirt looks like ₹5,000. Ironing creates value out of thin air."],
            ["2. The Collar Check", "The collar frames your face. If it is flattened or curled up, it ruins your portrait. Always iron the collar flat first."],
            ["3. The T-Shirt Rule", "Yes, you must iron T-shirts too. Especially the sleeves and the hem. A crisp tee looks intentional; a crumpled one looks like pyjamas."],
          ].map(([title, line]) => (
            <div key={title} className={styles.card}>
              <h3 className={styles.cardH}>{title}</h3>
              <p className={styles.cardP}>{line}</p>
            </div>
          ))}
        </section>

        {/* Section 2: The Routine */}
        <section className={styles.preview} aria-label="How to Iron">
          <h2 className={styles.h2}>The 5-Minute Routine</h2>
          <p className={styles.note} style={{ color: 'var(--muted)', marginBottom: '12px' }}>
            Do this the night before, not 5 minutes before leaving.
          </p>
          
          <ul className={styles.previewList}>
            <li>
              <strong style={{ color: '#fff' }}>The Water Spray:</strong> Dry heat damages fabric. Always use a spray bottle or a steam iron. The moisture relaxes the fibers instantly.
            </li>
            <li>
              <strong style={{ color: '#fff' }}>Inside Out:</strong> For dark clothes (Black/Navy), iron inside out. This prevents that shiny "burn" mark that cheap irons leave on fabric.
            </li>
             <li>
              <strong style={{ color: '#fff' }}>Hang Immediately:</strong> Gravity is your friend. Once ironed, put it on a hanger while it is still warm. If you fold it warm, the creases will return.
            </li>
            <li>
              <strong style={{ color: '#fff' }}>Trouser Crease:</strong> For formal pants, align the side seams and iron a sharp center crease. It creates a vertical line that makes your legs look longer.
            </li>
          </ul>
        </section>

        {/* Section 3: FAQ */}
        <section className={styles.faq} aria-label="Style FAQ">
          <h2 className={styles.h2} style={{ paddingLeft: 4, marginBottom: 12 }}>
            Ironing Questions
          </h2>
          
          <details className={styles.details}>
            <summary className={styles.summary}>
              Iron vs. Steamer?
            </summary>
            <p className={styles.answer}>
              <strong>Steamer</strong> is faster and safer for delicate fabrics, but it won't give you crisp lines. 
              <strong>Iron</strong> is better for collars and dress shirts where you want sharpness.
            </p>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>
              What about "Wrinkle-Free" shirts?
            </summary>
            <p className={styles.answer}>
              They are chemically treated to resist creases, but they still need a quick press to look 100%. Don't rely on them completely.
            </p>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>
               How to fix wrinkles without an iron?
            </summary>
            <p className={styles.answer}>
              In an emergency (like a hotel), hang your shirt in the bathroom while you take a hot shower. The steam will release the worst wrinkles.
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
                Master Every Detail
              </h3>
              <p className={styles.cardP} style={{ fontSize: 14, marginBottom: 10 }}>
                Ironing is just one step. Master fabric care, shoe maintenance, and more. <br className="hidden md:block" />
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
              <span className={styles.mrpSmall}>Wrinkles</span>
              <span className={styles.saleBig}>Gone</span>
            </div>
            <a
              href={HOME_URL}
              className={styles.ctaFooter}
            >
              Level Up
            </a>
          </div>
          <p className={styles.legal}>© {year} Dressingschool • Day 6 Guide</p>
        </footer>

        {/* Sticky Bar */}
        <aside className={styles.stickyBar} role="region">
          <div className={styles.stickyInner}>
            <div className={styles.stickyText}>
              <span className={styles.soonFlag}>Task</span>
              <span style={{marginLeft: 8}}>
               Iron your outfit for tomorrow tonight
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
              headline: "Why Ironing Clothes is Essential for Men's Style",
              description: "A guide to ironing shirts and trousers. Why wrinkled clothes ruin your look.",
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