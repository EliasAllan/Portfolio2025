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
            <a href="/stories"><button className="outline">View Client Projects</button></a>
          </div>
        </div>
        <div className="hero-image-bg"></div>
      </Motion.section>

      {/* Trust Section */}
      <Motion.section
        className="trust"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="trust-item">
          <h3>💪 Family-Owned & Operated</h3>
        </div>
        <div className="trust-item">
          <h3>🧠 Certified & Personalized Plans</h3>
        </div>
        <div className="trust-item">
          <h3>🧓 Age-Inclusive Training</h3>
        </div>
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
          <p>Certified Personal Trainer. Transformation Coach.</p>
        </div>
        <div className="bio-card">
          <img src="/images/marie-home.jpg" alt="Mom" />
          <h4>Marie Street</h4>
          <p>Strength & Wellness Mentor. Age-Friendly Fitness Expert.</p>
        </div>
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
        <a href="/book"><button>Schedule a Consultation</button></a>
      </Motion.section>
    </div>
  );
}
