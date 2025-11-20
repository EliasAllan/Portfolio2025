import { motion as Motion } from "framer-motion";
import "../styles/about.css";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>

      {/* Allan Section */}
      <Motion.div
        className="about-section"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img src="/images/allan-home.jpg" alt="Allan" className="about-image" />
        <div className="about-text">
          <h2>Allan Elias</h2>
          {/* <p>Lead Developer, UX-minded Frontend.</p>
          <p>Building performant, accessible web apps with modern tools.</p> */}
          <p>I’m Allan Elias — a freelance web developer who helps small businesses turn ideas into clean, fast, modern websites.</p>
          <p>I specialize in building responsive interfaces, smooth user experiences, and simple systems that make your business look professional online.</p>
          <p>When I’m not coding, I’m a bartender  — which means I actually understand what real customers respond to. My goal is to combine design, psychology, and modern tools to help your brand stand out.</p>
        </div>
      </Motion.div>

      {/* Advisor Section */}
      {/* <Motion.div
        className="about-section reverse"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <img src="/images/marie-home.jpg" alt="Marie" className="about-image mom-image" />
        <div className="about-text">
          <h2>Marie Street</h2>
          <p>Partner & Advisor</p>
          <p>Supporting strategy and client success throughout projects.</p>
        </div>
      </Motion.div> */}
    </div>
  );
}
