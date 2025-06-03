import './Home.css';
import { useEffect, useRef } from 'react';

function Home() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.target.classList.toggle('slide-in', entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" ref={sectionRef} className="hero slide-left">
      <div className="hero-content">
        <h1>Hi, I'm Allan</h1>
        <p className="tagline">Full stack developer crafting modern, performant web applications.</p>
        <p className="subtitle">I blend design sensibility with clean code to deliver polished digital experiences.</p>
        <div className="cta-group">
          <a href="#projects">
            <button className="cta">View Projects</button>
          </a>
          <a href="#contact">
            <button className="cta secondary">Get in Touch</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
