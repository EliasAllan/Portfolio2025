import SlideInSection from '../components/SlideInSection.jsx';
import './About.css';

function About() {
  return (
    <section className="about-section">
      <SlideInSection>
        <div className="about-text">
          <h2>About Me</h2>
          <p>I enjoy building user experiences that feel intuitive and responsive. Outside of coding I love exploring new tech and design trends.</p>
        </div>
      </SlideInSection>
    </section>
  );
}

export default About;
