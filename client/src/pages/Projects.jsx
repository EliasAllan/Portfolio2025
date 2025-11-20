import "../styles/projects.css";

const projects = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  name: `Website ${i + 1}`,
  image: `https://via.placeholder.com/200x150?text=Project+ ${i + 1}`,
}));

export default function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <img src={project.image} alt={project.name} />
            <p>{project.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
