import './Home.css';

function Home() {
  return (
    <section id="header" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Allan</h1>
        <p className="tagline">Full stack developer crafting modern, performant web applications.</p>
        <p className="subtitle">I blend design sensibility with clean code to deliver polished digital experiences.</p>
        <div className="cta-group">
          <a href="#projects">
            <button className="cta">View Projects</button>
          </a>
          <a href="#footer">
            <button className="cta secondary">Get in Touch</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
