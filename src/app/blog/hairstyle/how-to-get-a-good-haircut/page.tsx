import styles from "./landing.module.css";

export const runtime = "nodejs";

export const metadata = {
  title: "How to Get Rid of Dandruff: Day 1 Guide (Product vs Home Remedies)",
  description:
    "Learn how to get rid of dandruff effectively. We compare the best anti-dandruff shampoo vs. free natural methods to remove dandruff at home.",
  openGraph: {
    title: "How to Get Rid of Dandruff: The Complete Guide",
    description: "Stop the itching today. Product solution vs. Zero-cost home habits.",
    images: [
      "https://i.pinimg.com/736x/78/b4/74/78b4746e3c0f2d4caee3dcff37a12128.jpg",
    ],
  },
  twitter: { card: "summary_large_image" },
};

const AMAZON_URL = "https://amzn.to/3LOGGq6";
const HOME_URL = "https://dressingschool.com"; // Link to the ebook landing page

export default function DayOneDandruff() {
  const year = new Date().getFullYear();

  return (
    <main className={styles.page}>
      {/* Theme scope */}
      <div className={styles.theme}>
        
        {/* Top badge */}
        <div className={styles.badgeWrap}>
          <span className={styles.badge}>DAY 1 • HAIR CARE BASICS</span>
        </div>

        {/* Hero: The Problem */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.h1}>How to Get Rid of Dandruff</h1>
            <p className={styles.sub}>
              Dandruff ruins a good outfit. In this guide, we tackle the white flakes using two proven methods: 
              <strong> The Product Route</strong> (Fast) and <strong>The Natural Route</strong> (Free).
            </p>

            <div className={styles.priceRow}>
              <div className={styles.priceBox} aria-label="Recommendation">
                <span className={styles.mrp} aria-hidden="true">
                  Method A
                </span>
                <span className={styles.sale} aria-label="Product">
                  Product
                </span>
              </div>
              <div className={styles.priceBox} aria-label="Recommendation">
                <span className={styles.mrp} aria-hidden="true">
                  Method B
                </span>
                <span className={styles.sale} aria-label="Habit">
                  Habits
                </span>
                <span className={styles.tag}>₹0 Cost</span>
              </div>
            </div>

            <ul className={styles.trustRow} aria-label="Highlights">
              <li>Stop Itching</li>
              <li>Remove Flakes</li>
              <li>Prevent Return</li>
            </ul>
          </div>

          <div className={styles.heroImgWrap}>
            <img
              src="https://i.pinimg.com/736x/78/b4/74/78b4746e3c0f2d4caee3dcff37a12128.jpg"
              alt="How to get rid of dandruff at home tools"
              className={styles.heroImg}
              loading="lazy"
            />
          </div>
        </section>

        {/* Section 1: The Product Solution */}
        <section className={styles.grid} aria-label="Product Solution">
          {[
            ["Method A: The Shampoo Solution", "To get rid of dandruff fast, I use Jovees Herbal Thyme & Tea Tree. It worked 99% for me."],
            ["Why Tea Tree Oil?", "It is a natural antifungal that kills the yeast causing the dandruff."],
            ["Why Lemon Extract?", "It cuts through the excess sebum (oil) that dandruff feeds on."],
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
             View Shampoo on Amazon
           </a>
        </div>

        {/* Section 2: The Zero-Cost Home Solution */}
        <section className={styles.preview} aria-label="Home Remedies">
          <h2 className={styles.h2}>Method B: How to Remove Dandruff Naturally (₹0)</h2>
          <p className={styles.note} style={{ color: 'var(--muted)', marginBottom: '12px' }}>
            Don't want to buy a product yet? Here is how to avoid dandruff using free home habits.
          </p>
          <ul className={styles.previewList}>
            <li>
              <strong style={{ color: '#fff' }}>Stop Oiling Dirty Hair:</strong> Dandruff is a fungus that feeds on oil. Adding oil to an itchy scalp feeds the infection. Only oil 1 hour before washing.
            </li>
            <li>
              <strong style={{ color: '#fff' }}>Sanitize Your Comb:</strong> If you cure your head but use a dirty comb, you put the fungus right back. Wash your comb with soap today.
            </li>
            <li>
              <strong style={{ color: '#fff' }}>Cold Water Rinse:</strong> Hot water dries the scalp, making it produce <em>more</em> oil to compensate. Always finish with a cool rinse.
            </li>
             <li>
              <strong style={{ color: '#fff' }}>Wash Pillowcases:</strong> You spend 8 hours lying in dead skin cells. Change pillow covers weekly to avoid re-infection.
            </li>
          </ul>
        </section>

        {/* Section 3: Prevention */}
        <section className={styles.faq} aria-label="Prevention Guide">
          <h2 className={styles.h2} style={{ paddingLeft: 4, marginBottom: 12 }}>
            Common Questions on Dandruff
          </h2>
          
          <details className={styles.details}>
            <summary className={styles.summary}>
              Does sugar cause dandruff?
            </summary>
            <p className={styles.answer}>
              Yes, high sugar intake can spike insulin, which triggers oil production. 
              Yeast (dandruff) loves sugar. Reducing sugar is a great way to get rid of dandruff naturally.
            </p>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>
              Is dandruff contagious?
            </summary>
            <p className={styles.answer}>
              The fungus is contagious via contact. Sharing a bike helmet or a cap with a friend 
              who has dandruff is the fastest way to catch it.
            </p>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>
                Can sweat cause dandruff?
            </summary>
            <p className={styles.answer}>
              Sweat creates a moist environment perfect for fungus. If you workout 
              or travel in heat, rinse your hair that same day to avoid buildup.
            </p>
          </details>
        </section>

        {/* --- NEW UPSELL CARD: Zero to Classic --- */}
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
                Don't stop at hair. Fix your skin, style, and colors. <br className="hidden md:block" />
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
              <span className={styles.mrpSmall}>Habits (₹0)</span>
              <span className={styles.saleBig}>+ Product</span>
            </div>
            <a
              href={AMAZON_URL}
              target="_blank"
              className={styles.ctaFooter}
              rel="noopener noreferrer"
            >
              Get the Shampoo
            </a>
          </div>
          <p className={styles.legal}>© {year} Dressingschool • Day 1 Guide</p>
        </footer>

        {/* Sticky Bar */}
        <aside className={styles.stickyBar} role="region">
          <div className={styles.stickyInner}>
            <div className={styles.stickyText}>
              <span className={styles.soonFlag}>Action</span>
              <span style={{marginLeft: 8}}>
               Wash comb + Check Jovees Shampoo
              </span>
            </div>
            <a
              href={AMAZON_URL}
              target="_blank"
              className={styles.stickyCta}
              rel="noopener noreferrer"
            >
              Buy Shampoo
            </a>
          </div>
        </aside>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How to get rid of dandruff naturally?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To remove dandruff naturally without money: Stop oiling dirty hair, wash your pillowcases weekly, sanitize your combs, and use cold water for your final rinse."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the best shampoo to get rid of dandruff?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Jovees Herbal Thyme & Tea Tree shampoo is highly effective because Tea Tree acts as a natural antifungal and Lemon extract controls oil production."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How to avoid getting dandruff again?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To avoid dandruff returning: Reduce sugar intake, wash hair after sweating, and never share helmets or caps with others."
                  }
                }
              ]
            }),
          }}
        />
      </div>
    </main>
  );
}