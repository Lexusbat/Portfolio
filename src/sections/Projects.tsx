import { projects } from '../data/projects'

const Projects = () => {
  return (
    <section id="projects"  className="
        relative
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
        overflow-hidden
        bg-[#161C30]
      ">
      <p>03 / PROJECTS</p>

      <h2>Selected Work</h2>

      <div>
        {projects.map((project) => (
          <article key={project.title}>
            <p>{project.status}</p>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <ul>
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects