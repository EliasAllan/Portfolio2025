import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hey, I'm Allan</h1>
        <p>I craft bold, responsive web experiences with clean code and 🔥 design.</p>
        <Link to="/projects">
          <button className="cta">View My Work</button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
