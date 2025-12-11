import "../styles/about.css";

import "../styles/services.css";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="services-page">
      {/* Intro */}
      <header className="services-hero">
        <h1>Services</h1>
        <p>
          Custom web development that helps your business look professional,
          load fast, and actually convert visitors into customers.
        </p>
      </header>

      {/* Core Services */}
      <section className="services-grid">
        <div className="service-card">
          <h2>⚡ Launch-Ready Website</h2>
          <p className="service-tagline">
            A clean, modern site for small businesses and personal brands.
          </p>
          <ul>
            <li>Up to 5 custom pages (Home, About, Services, Contact, etc.)</li>
            <li>Responsive layout for desktop, tablet, and mobile</li>
            <li>Contact form or call-to-action integration</li>
            <li>Basic on-page SEO setup (titles, meta, headings)</li>
            <li>Deployed and hosted for you</li>
          </ul>
          <p className="service-note">Best for: new businesses and solo professionals.</p>
        </div>

        <div className="service-card">
          <h2>🚀 Growth Website</h2>
          <p className="service-tagline">
            For businesses that need more than “just a site.”
          </p>
          <ul>
            <li>Everything in Launch-Ready Website</li>
            <li>Blog or resources section to attract organic traffic</li>
            <li>Advanced on-page SEO structure</li>
            <li>Integrations (Calendly, email marketing, booking tools, etc.)</li>
            <li>Performance optimization for faster load times</li>
          </ul>
          <p className="service-note">Best for: growing brands ready to level up.</p>
        </div>

        <div className="service-card">
          <h2>🛠️ Custom Web App</h2>
          <p className="service-tagline">
            React / MERN-based web apps tailored to your workflow.
          </p>
          <ul>
            <li>Custom dashboards, internal tools, or client portals</li>
            <li>API integrations and dynamic data</li>
            <li>User authentication and protected routes</li>
            <li>Modern frontend built with React</li>
            <li>Deployed to scalable cloud platforms</li>
          </ul>
          <p className="service-note">Best for: startups and teams needing custom logic.</p>
        </div>
      </section>

      {/* Tech & Process */}
      <section className="services-extra">
        <h2>How I Build</h2>
        <div className="extra-grid">
          <div className="extra-item">
            <h3>Modern Stack</h3>
            <p>
              React, Vite, and the MERN ecosystem for fast, maintainable
              frontends and scalable backends when needed.
            </p>
          </div>
          <div className="extra-item">
            <h3>Performance & SEO</h3>
            <p>
              Clean structure, semantic HTML, and optimization so your site
              loads quickly and is easier to find on search engines.
            </p>
          </div>
          <div className="extra-item">
            <h3>Deployed for You</h3>
            <p>
              Hosting and deployment handled (for example, on Vercel) so you
              don’t have to fight with servers or config files.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <h2>Not sure which option fits?</h2>
        <p>
          Tell me about your business and I’ll recommend the right approach in a
          quick consultation.
        </p>
        <Link to="/book" className="services-cta-button">
          Schedule a Consultation
        </Link>
      </section>
    </div>
  );
}

