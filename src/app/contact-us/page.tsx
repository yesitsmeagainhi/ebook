export const metadata = {
  title: "Contact Us | Dressingschool",
  description:
    "Get in touch with Dressingschool for support, payment queries, or feedback.",
};

export default function ContactUsPage() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "24px 16px" }}>
      <h1>Contact Us</h1>
      <p>
        We’re here to help with any questions about your purchase, access codes,
        app usage, or style-learning journey with Dressingschool.
      </p>

      <h2>Get in Touch</h2>
      <p>
        <strong>Phone / WhatsApp:</strong>
        <br />
        <a href="tel:+918600574836">+91 8600574836</a>
      </p>

      <p>
        <strong>Email:</strong>
        <br />
        <a href="mailto:dressingschool@gmail.com">dressingschool@gmail.com</a>
      </p>

      <h2>Support Hours</h2>
      <p>
        We usually respond to queries between 10:00 AM and 7:00 PM IST on working
        days. If you contact us outside these hours, please allow some extra time
        for a reply.
      </p>

      <h2>Common Reasons to Contact Us</h2>
      <ul>
        <li>Payment-related questions or issues.</li>
        <li>Problems with ebook access or unlock code.</li>
        <li>App-related support or feedback.</li>
        <li>Suggestions for new topics or improvements.</li>
      </ul>

      <p>
        We appreciate your trust in Dressingschool and are committed to giving you
        a smooth and helpful experience.
      </p>
    </main>
  );
}
