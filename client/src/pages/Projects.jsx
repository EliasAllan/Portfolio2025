import { useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Fitness Trainer Site',
    description: 'Personal trainer booking site with success stories and appointment scheduling.',
    img: '/images/fitness-site.png', // placeholder path
    tech: ['React', 'Express', 'MongoDB']
  },
  {
    title: 'Dumpster Fire App',
    description: 'Incident report system disguised as a joke — secret club status unlocked 🔥.',
    img: '/images/dumpster-app.png',
    tech: ['MERN', 'Auth', 'Custom Design']
  },
  // Add more as needed
];

function Projects() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        entry.target.classList.toggle('slide-in', entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) sectionObserver.observe(sectionRef.current);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('slide-in', entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="projects-page slide-right"
    >
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
