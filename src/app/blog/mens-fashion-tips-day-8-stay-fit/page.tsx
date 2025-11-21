import styles from "./landing.module.css";

export const runtime = "nodejs";

export const metadata = {
  title: "Day 8: Hit the Gym – The Ultimate Style Hack | Dressingschool",
  description:
    "Day 8 of Style Transformation. A ₹500 t-shirt on a fit body looks better than a ₹50,000 suit on a bad frame. Build muscle, build confidence.",
  openGraph: {
    title: "Day 8: Hit the Gym",
    description: "Your body is the hanger. Improve the hanger, improve the outfit.",
    images: [
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  twitter: { card: "summary_large_image" },
};

const GYM_URL = "https://dressingschool.com"; // Link to gym guide or general site
const HOME_URL = "https://dressingschool.com";

export default function DayEightGym() {
  const year = new Date().getFullYear();

  return (
    <main className={styles.page}>
      {/* Theme scope */}
      <div className={styles.theme}>
        
        {/* Top badge */}
        <div className={styles.badgeWrap}>
          <span className={styles.badge}>DAY 8 • PHYSIQUE & HEALTH</span>
        </div>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1 className={styles.h1}>The Ultimate Style Hack</h1>
            <p className={styles.sub}>
              No outfit can fix a bad frame. A ₹500 T-shirt on a fit body looks better than a ₹50,000 suit on an out-of-shape body. 
              <strong> Don't be too skinny. Don't be overweight. Build Muscle.</strong>
            </p>

            <div className={styles.priceRow}>
              <div className={styles.priceBox} aria-label="Comparison">
                <span className={styles.mrp} aria-hidden="true">
                  Skinny/Fat
                </span>
                <span className={styles.sale} aria-label="Bad">
                  Weak
                </span>
              </div>
              <div className={styles.priceBox} aria-label="Recommendation">
                <span className={styles.mrp} aria-hidden="true">
                  Athletic
                </span>
                <span className={styles.sale} aria-label="Good">
                  Powerful
                </span>
                <span className={styles.tag}>Attractive</span>
              </div>
            </div>

            <ul className={styles.trustRow} aria-label="Highlights">
              <li>Clothes Fit Better</li>
              <li>Better Posture</li>
              <li>Mental Discipline</li>
            </ul>
          </div>

          <div className={styles.heroImgWrap}>
            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
              alt="Man working out in gym"
              className={styles.heroImg}
              loading="lazy"
            />
          </div>
        </section>

        {/* Section 1: The Logic */}
        <section className={styles.grid} aria-label="Why Gym Matters">
          {[
            ["1. The Hanger Effect", "Think of your body as the hanger. If the hanger is bent or weak, the clothes will droop. If the hanger is broad and strong, the clothes sit perfectly."],
            ["2. The V-Taper", "The goal isn't to look like a bodybuilder. The goal is broad shoulders and a tight waist (The V-Shape). This is universally attractive to women."],
            ["3. Face Gains", "Losing excess body fat sharpens your jawline. No amount of beard grooming can fix a face hidden by fat. The gym fixes your face too."],
          ].map(([title, line]) => (
            <div key={title} className={styles.card}>
              <h3 className={styles.cardH}>{title}</h3>
              <p className={styles.cardP}>{line}</p>
            </div>
          ))}
        </section>

        {/* Section 2: The Action Plan */}
        <section className={styles.preview} aria-label="Gym Routine">
          <h2 className={styles.h2}>How to Build the Aesthetic Body</h2>
          <p className={styles.note} style={{ color: 'var(--muted)', marginBottom: '12px' }}>
            You don't need to live in the gym. 45 minutes, 4 times a week.
          </p>
          <ul className={styles.previewList}>
            <li>
              <strong style={{ color: '#fff' }}>Lift Heavy (Compound Lifts):</strong> Focus on Squats, Deadlifts, Bench Press, and Overhead Press. These build the most muscle.
            </li>
            <li>
              <strong style={{ color: '#fff' }}>Eat Protein:</strong> You cannot build muscle from air. Aim for 1.5g to 2g of protein per kg of body weight daily. (Eggs, Chicken, Paneer, Whey).
            </li>
            <li>
              <strong style={{ color: '#fff' }}>Don't Ego Lift:</strong> Lifting weight you can't handle leads to injury, not muscle. Control the weight.
            </li>
             <li>
              <strong style={{ color: '#fff' }}>Consistency - Intensity:</strong> Going to the gym for 1 month and quitting is useless. It's a lifestyle, not a 30-day challenge.
            </li>
          </ul>
        </section>

        {/* Section 3: FAQ */}
        <section className={styles.faq} aria-label="Fitness FAQ">
          <h2 className={styles.h2} style={{ paddingLeft: 4, marginBottom: 12 }}>
            Fitness Questions
          </h2>
          
          <details className={styles.details}>
            <summary className={styles.summary}>
              I am very skinny, what to do?
            </summary>
            <p className={styles.answer}>
              You need a "Calorie Surplus". Eat more food than you burn. Focus on liquid calories (banana shakes, peanut butter) if you can't eat solid food. Lift heavy to turn that food into muscle, not fat.
            </p>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>
              I have a belly, should I run?
            </summary>
            <p className={styles.answer}>
              Running burns calories but doesn't shape the body. Lift weights to build metabolism. Combine lifting with a "Calorie Deficit" (eating slightly less) to lose the belly while keeping muscle.
            </p>
          </details>

          <details className={styles.details}>
            <summary className={styles.summary}>
               Can I just do home workouts?
            </summary>
            <p className={styles.answer}>
              Pushups are great, but eventually, your body weight isn't enough resistance. To look "built", you eventually need external weights (Gym).
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
                Complete Your Transformation
              </h3>
              <p className={styles.cardP} style={{ fontSize: 14, marginBottom: 10 }}>
                You have the body tips. Now get the Style, Grooming, and Confidence roadmap. <br className="hidden md:block" />
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
              <span className={styles.mrpSmall}>Physique</span>
              <span className={styles.saleBig}>Aesthetic</span>
            </div>
            <a
              href={GYM_URL}
              className={styles.ctaFooter}
            >
              Start Lifting
            </a>
          </div>
          <p className={styles.legal}>© {year} Dressingschool • Day 8 Guide</p>
        </footer>

        {/* Sticky Bar */}
        <aside className={styles.stickyBar} role="region">
          <div className={styles.stickyInner}>
            <div className={styles.stickyText}>
              <span className={styles.soonFlag}>Task</span>
              <span style={{marginLeft: 8}}>
               Do 50 Pushups Today
              </span>
            </div>
            <a
              href={GYM_URL}
              className={styles.stickyCta}
            >
              Let's Go
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
              headline: "Why Fitness is Key to Men's Style",
              description: "How building muscle improves your style. The connection between physique and fashion.",
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