import './Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-form">
        <h2>Contact Me</h2>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email" />
        <textarea rows="4" placeholder="Message" />
        <button className="cta">Send</button>
      </div>
    </section>
  );
}

export default Contact;
