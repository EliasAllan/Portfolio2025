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

  return (
    <section id="projects" className="projects-page">

      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
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
