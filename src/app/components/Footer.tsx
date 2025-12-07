// src/app/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        {/* Left: Brand + contact */}
        <div className="site-footer__brand">
          <h2 className="site-footer__logo">Dressingschool</h2>
          <p className="site-footer__tagline">
            Simple, practical style guides to help you look sharp every day.
          </p>

          <div className="site-footer__contact">
            <p>
              <strong>Phone / WhatsApp:</strong>{" "}
              <a href="tel:+918600574836">+91 8600574836</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:dressingschool@gmail.com">
                dressingschool@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Middle: Important pages */}
        <div className="site-footer__col">
          <h3 className="site-footer__heading">Important Links</h3>
          <ul className="site-footer__list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/zero-to-hero-ebook-for-mens-fashion">
                Zero to Classic Ebook
              </Link>
            </li>
            <li>
              <Link href="/dressingschool-app-mens-fashion">
                Dressingschool App
              </Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/hairstyle">Hairstyle Guide</Link>
            </li>
          </ul>
        </div>

        {/* Right: Legal links */}
        <div className="site-footer__col">
          <h3 className="site-footer__heading">Legal</h3>
          <ul className="site-footer__list">
            <li>
              <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/refunds-and-cancellations">
                Refunds &amp; Cancellations
              </Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© {year} Dressingschool. All rights reserved.</p>
      </div>
    </footer>
  );
}
