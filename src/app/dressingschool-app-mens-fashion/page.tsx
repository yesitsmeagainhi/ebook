import type { Metadata } from "next";
import styles from "./dressingschool-app.module.css";

export const metadata: Metadata = {
  title: "Download Dressingschool App – Men’s Fashion & Styling Guide",
  description:
    "Get hairstyle ideas, outfit inspiration, outfit breakdowns with links, essentials checklist, budget shopping spots, daily tips and the Zero To Hero style ebook – all inside the Dressingschool app.",
};

const APP_URL =
  "https://play.google.com/store/apps/details?id=com.dressingschool";

export default function DressingschoolAppPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div>
          <span className={styles.badge}>
            MEN&apos;S STYLE • ANDROID APP
          </span>

          <h1 className={styles.title}>Download the Dressingschool App</h1>

          <p className={styles.subtitle}>
            Your pocket companion for men&apos;s fashion – hairstyle ideas,
            poses, everyday outfits, wedding looks, outfit breakdowns with
            links, budget shopping guides, daily tips and our{" "}
            <strong>Zero To Hero</strong> style transformation ebook.
          </p>

          <ul className={styles.heroList}>
            <li>✓ Hairstyle, pose & outfit ideas for real-life situations</li>
            <li>✓ Outfit breakdowns with where to buy each piece</li>
            <li>✓ Essentials checklist with links to all basics</li>
            <li>✓ Upload your photo and get a custom outfit breakdown</li>
          </ul>

          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            Download Dressingschool app on Google Play
          </a>

          <p className={styles.heroNote}>
            Free to download • Built for Indian men • Works great on your phone
          </p>
        </div>

        <div className={styles.heroImageWrap}>
          <img
            src="https://dressingschool.com/wp-content/uploads/2025/10/Transform-ZERO-TO-HERO.png"
            alt="Zero To Hero – Transform Your Style ebook cover"
            className={styles.heroImage}
            loading="lazy"
          />
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Everything you need to level up your style
        </h2>
        <p className={styles.sectionSub}>
          Dressingschool is built for guys who want clear, practical guidance –
          without wasting time on random YouTube videos and confusing advice.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Hairstyle &amp; Pose Ideas</h3>
            <p className={styles.cardText}>
              Discover hairstyle ideas that actually work for Indian faces and
              hair types, plus pose ideas so you don&apos;t look awkward in
              photos.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Outfit &amp; Wedding Looks</h3>
            <p className={styles.cardText}>
              Casual, college, office or wedding – swipe through ready-made
              outfit ideas that show you exactly how to pair colours and pieces.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              Outfit Breakdown (with links)
            </h3>
            <p className={styles.cardText}>
              For selected outfits, see a full breakdown – shirt, pants, shoes,
              watch and more – with suggestions on where to buy each piece
              online.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Essentials Section</h3>
            <p className={styles.cardText}>
              A dedicated essentials area with all the basics every guy should
              own – T-shirts, jeans, shoes, grooming tools – plus buying links.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              Upload Photo &amp; Get Breakdown
            </h3>
            <p className={styles.cardText}>
              Upload your own photo and we&apos;ll help you with an outfit
              breakdown – what&apos;s working, what to change, and what to add.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Budget-Friendly Markets</h3>
            <p className={styles.cardText}>
              Explore handpicked shops and markets for budget-friendly shopping
              so you can upgrade your style without burning your wallet.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              Best Fashion Accounts to Follow
            </h3>
            <p className={styles.cardText}>
              A curated list of the best fashion and grooming accounts to
              follow so your feed keeps you inspired instead of confused.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Daily Style Tips</h3>
            <p className={styles.cardText}>
              Quick, practical everyday tips – from colour combinations to
              small tweaks that instantly make you look sharper.
            </p>
          </div>
        </div>
      </section>

      {/* EBOOK SECTION */}
      <section className={styles.ebookSection}>
        <div>
          <h2 className={styles.ebookTitle}>
            The golden part of the app: Zero To Hero ebook
          </h2>
          <p className={styles.ebookText}>
            Inside the Dressingschool app, you get access to our ebook{" "}
            <strong>“Zero To Hero – Transform Your Style”</strong>. It covers
            everything required to change and transform yourself step by step:
          </p>
          <ul className={styles.ebookList}>
            <li>Clear grooming and skincare basics</li>
            <li>Hair, fit and colour rules that actually work</li>
            <li>Ready-made wardrobe plan with essentials</li>
            <li>Mindset, confidence and small daily actions</li>
          </ul>
          <p className={styles.ebookText}>
            Use the app + ebook together to go from confused to confident – with
            a clear plan instead of random trial and error.
          </p>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ebookCta}
          >
            Download the app &amp; start your transformation
          </a>
        </div>

        <div className={styles.ebookImageWrap}>
          <img
            src="https://dressingschool.com/wp-content/uploads/2025/10/Transform-ZERO-TO-HERO.png"
            alt="Zero To Hero – Transform Your Style ebook preview"
            className={styles.ebookImage}
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
