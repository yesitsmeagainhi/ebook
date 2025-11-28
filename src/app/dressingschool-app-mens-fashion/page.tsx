import React from 'react';
import styles from './landing.module.css';
import { 
  Download, 
  ShoppingBag, 
  Sparkles, 
  BookOpen, 
  ArrowRight
} from 'lucide-react';

export const runtime = "nodejs";

export const metadata = {
  title: "Dressingschool – Free App & Style Guide",
  description: "Download the free app. Unlock the Zero to Classic ebook for just ₹9.",
};

// Links
const PLAY_STORE_LINK = "https://play.google.com/store/apps/details?id=com.dressingschool";
const RAZORPAY_LINK = "https://rzp.io/rzp/zero-to-hero-ebooks";
// Updated Image
const EBOOK_THUMBNAIL = "https://dressingschool.com/wp-content/uploads/2025/10/Transform-ZERO-TO-HERO.png";

export default function Landing() {
  const year = new Date().getFullYear();

  return (
    <main className={styles.page}>
      
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.brand}>
          {/* Simple Text Brand for Mobile Cleanliness */}
          <span>Dressingschool</span>
        </div>
        <a 
          href={PLAY_STORE_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.navBtn}
        >
          <Download size={16} />
          <span>Free App</span>
        </a>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        
        {/* Left: Text Content */}
        <div className={styles.heroContent}>
          <h1 className={styles.h1}>
            Your Style, <br />
            <span className={styles.highlight}>Simplified.</span>
          </h1>
          <p className={styles.sub}>
            The <strong>App is Free</strong> to download. Shop essentials and generate outfit ideas with AI. 
            <br /><br />
            Want to master the basics? <br/>
            Unlock the <strong>Zero to Classic Ebook</strong> below.
          </p>

          {/* Primary CTA for App (Free) */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <a href={PLAY_STORE_LINK} className={styles.navBtn} style={{ background: '#fff', color: '#000', padding: '0.75rem 1.5rem' }}>
              <Download size={18} /> Download App (Free)
            </a>
          </div>
        </div>

        {/* Right: The Paid Offer Card */}
        <div className={styles.offerCard}>
          <div className={styles.glow} />
          
          {/* Ebook Thumbnail - Prominently Placed */}
          <div className={styles.bookCoverWrap}>
            <img 
              src={EBOOK_THUMBNAIL} 
              alt="Zero to Classic Ebook Cover" 
              className={styles.bookCover} 
            />
          </div>

          <div className={styles.priceBlock}>
            <div className={styles.priceRow}>
              <span className={styles.currentPrice}>₹9</span>
              <span className={styles.oldPrice}>₹299</span>
            </div>
            <span className={styles.launchTag}>Ebook Launch Offer</span>
          </div>

          <div className={styles.featureList}>
            <FeatureItem 
              icon={<BookOpen size={18} color="#a78bfa" />}
              title="Full Ebook Included"
              sub="Unlock 'Zero to Classic' Guide"
            />
            <FeatureItem 
              icon={<ShoppingBag size={18} color="#34d399" />}
              title="Marketplace Access"
              sub="Shop curated essentials (Free)"
            />
            <FeatureItem 
              icon={<Sparkles size={18} color="#facc15" />}
              title="AI Style Prompts"
              sub="Generate image ideas (Free)"
            />
          </div>

          <a 
            href={RAZORPAY_LINK}
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.buyBtn}
          >
            Unlock Ebook Now <ArrowRight size={18} />
          </a>
          <div className={styles.secureNote}>Secure payment via Razorpay</div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© {year} Dressingschool. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', opacity: 0.7 }}>
          The Dressingschool App is free to use. The ₹9 fee is exclusively for the Ebook content.
        </p>
      </footer>
    </main>
  );
}

// Helper Component for the Card List
function FeatureItem({ icon, title, sub }: { icon: React.ReactNode, title: string, sub: string }) {
  return (
    <div className={styles.featureItem}>
      <div className={styles.iconBox}>
        {icon}
      </div>
      <div className={styles.featureText}>
        <h4>{title}</h4>
        <p>{sub}</p>
      </div>
    </div>
  );
}