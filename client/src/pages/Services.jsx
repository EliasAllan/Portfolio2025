import "../styles/about.css";
import "../styles/services.css";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="services-page">
      {/* Hero */}
      <header className="services-hero">
        <h1>Services</h1>
        <p>
          I build clean, modern websites that help small businesses look
          professional, work great on mobile, and make it easy for customers to
          contact you.
        </p>
      </header>

      {/* Services */}
      <section className="services-grid">
        {/* HERO SERVICE */}
        <div className="service-card featured">
          <h2>⚡ Launch Website</h2>
          <p className="service-tagline">
            A fast, professional website to get your business online quickly.
          </p>

          <ul>
            <li>Up to 5 pages (Home, About, Services, Contact, etc.)</li>
            <li>Mobile-friendly responsive layout</li>
            <li>Clear call-to-action (call, email, form, booking link)</li>
            <li>Basic SEO-ready structure (titles, headings, meta basics)</li>
            <li>Deployment included (Vercel or similar)</li>
          </ul>

          <p className="price">Starting at $700</p>

          <p className="service-note">
            👉 Best for local businesses, personal brands, and professionals.
          </p>
        </div>

        {/* GROWTH */}
        <div className="service-card">
          <h2>🚀 Growth Website</h2>
          <p className="service-tagline">
            For businesses that want content pages, lead capture, and room to grow.
          </p>

          <ul>
            <li>Everything included in the Launch Website</li>
            <li>Extra pages (FAQs, Gallery, Testimonials, etc.)</li>
            <li>Optional blog / updates section (if you want to post content)</li>
            <li>Tool integrations (Calendly, email capture, simple embeds)</li>
            <li>Speed best practices (optimized images + clean build)</li>
          </ul>

          <p className="price">Starting at $1,100</p>

          <p className="service-note">
            👉 Best for growing businesses that want a more complete website.
          </p>
        </div>

        {/* CUSTOM */}
        <div className="service-card">
          <h2>🛠️ Custom Web App</h2>
          <p className="service-tagline">
            Custom React apps for forms, dashboards, and business workflows.
          </p>

          <ul>
            <li>Custom UI built with React</li>
            <li>Dynamic features (forms, search, dashboards)</li>
            <li>User login (if needed)</li>
            <li>Basic database + API setup (project dependent)</li>
            <li>Deployment included</li>
          </ul>

          <p className="price">Projects starting at $1,800</p>

          <p className="service-note">
            👉 Best for teams that need functionality beyond a standard website.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="services-extra">
        <h2>How It Works</h2>
        <div className="extra-grid">
          <div className="extra-item">
            <h3>1. Quick Call</h3>
            <p>
              You tell me what you need, I ask a few questions, and we pick the
              right option.
            </p>
          </div>
          <div className="extra-item">
            <h3>2. Build</h3>
            <p>
              I design and develop the site, then send a preview link so you can
              review it.
            </p>
          </div>
          <div className="extra-item">
            <h3>3. Launch</h3>
            <p>
              Once approved, I publish the site and make sure everything works
              on desktop and mobile.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <h2>Not sure what you need?</h2>
        <p>
          Tell me what kind of business you have and what you want your website
          to do. I’ll recommend the best approach.
        </p>

        <Link to="/book" className="services-cta-button">
          Book a Free Consultation
        </Link>
      </section>
    </div>
  );
}
