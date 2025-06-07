import SlideInSection from '../components/SlideInSection.jsx';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <SlideInSection>
        <div className="contact-form">
          <h2>Contact Me</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
          <textarea rows="4" placeholder="Message" />
          <button className="cta">Send</button>
        </div>
      </SlideInSection>
    </section>
  );
}

export default Contact;
