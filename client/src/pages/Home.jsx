import { motion as Motion } from "framer-motion";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <Motion.section
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="hero-text">
          <h1>Build with Heart. Transform Your Online Presence.</h1>
          <p>
            Web development that empowers businesses of every size — from
            startups to established brands.
          </p>
          <div className="hero-buttons">
            <a href="/book"><button>Schedule a Consultation</button></a>
            <a href="/stories"><button className="outline">View Projects</button></a>
          </div>
        </div>
        <div className="hero-image-bg"></div>
      </Motion.section>

      {/* Feature Pills */}
      <Motion.section
        className="features"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <a href="/services" className="feature-item">
          <h3>⚡ Blazing-fast Websites</h3>
        </a>
        <a href="/services" className="feature-item">
          <h3>📱 Responsive by Default</h3>
        </a>
        <a href="/services" className="feature-item">
          <h3>🔍 SEO Foundations</h3>
        </a>
        <a href="/services" className="feature-item">
          <h3>🛠️ Modern Stack (MERN)</h3>
        </a>
        <a href="/services" className="feature-item">
          <h3>🔒 Secure & Accessible</h3>
        </a>
        <a href="/services" className="feature-item">
          <h3>🚀 Deployed on Vercel</h3>
        </a>
      </Motion.section>

      {/* Bio Preview */}
      <Motion.section
        className="bio-preview"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="bio-card">
          <img src="/images/allan-home.jpg" alt="Allan" />
          <h4>Allan Elias</h4>
          <p className="bio-role">Lead Developer, UX-minded Frontend</p>
          <p className="bio-desc">
            Crafting fast, accessible interfaces for modern web apps.
          </p>
        </div>
        {/* <div className="bio-card">
          <img src="/images/marie-home.jpg" alt="Marie" />
          <h4>Marie Street</h4>
          <p className="bio-role">Partner & Advisor</p>
          <p className="bio-desc">
            Strategic insight and client empathy in every collaboration.
          </p>
        </div> */}
        <a href="/about" className="bio-link">Read More →</a>
      </Motion.section>

      {/* Testimonials */}
      {/* <Motion.section
        className="testimonials"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <h2>What Our Clients Say</h2>
        <blockquote>
          “Training with Allan and his mom has been one of the most inspiring
          things I’ve ever done. I feel stronger at 60 than I did at 30.”
        </blockquote>
        <cite>— Placeholder</cite>
      </Motion.section> */}

      {/* Footer CTA */}
      <Motion.section
        className="footer-cta"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <h2>Ready to build?</h2>
        <div className="footer-buttons">
          <a href="/book">
            <button>Schedule a Consultation</button>
          </a>
          <a href="/pricing">
            <button className="ghost">See Pricing</button>
          </a>
        </div>
        <p className="trust-line">
          Average 1–2 week delivery • Free homepage mockup
        </p>
      </Motion.section>
    </div>
  );
}
