import "../styles/projects.css";

const projects = [
  {
    id: 1,
    name: "Cocktail Findifier App",
    image: "/images/CocktailFindifierLanding.png",
    link: "https://chocochip287.github.io/cocktail-recipes/",
  },
  {
    id: 2,
    name: "NevesFit (Personal trainer website)",
    image: "/images/NevesFitLanding.png",
    link: "https://personal-trainer-liard.vercel.app/",
  },
  {
    id: 3,
    name: "Dumpster Fire Newsletter",
    image: "/images/DumpsterFireLanding.png",
    link: "https://dfnewsletter.vercel.app/",
  },
  {
    id: 4,
    name: "Level Up Legally",
    image: "/images/LevelUpLanding.png",
    link: "https://www.levelup-legally.com/",
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      {/* <h2 className="projects-title">Projects</h2> */}

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            
            {/* DIRECT IMG SRC */}
            <img src={project.image} alt={project.name} />

            <p>{project.name}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
