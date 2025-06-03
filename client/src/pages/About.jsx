import { useEffect, useRef } from 'react';
import './About.css';

function About() {
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
    <section id="about" ref={sectionRef} className="about-section slide-left">
      <img src="https://via.placeholder.com/400x300" alt="About" />
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer who loves building modern web applications.
          This space will highlight my journey, skills and what I enjoy most
          about coding.
        </p>
      </div>
    </section>
  );
}

export default About;
