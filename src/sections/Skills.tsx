import { skills } from '../data/skills'

const Skills = () => {
  return (
    <section id="skills"  className="
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
      <p>02 / SKILLS</p>

      <h2>Technical Inventory</h2>

      <div>
        {skills.map((group) => (
          <div key={group.category}>
            <h3>{group.category}</h3>

            <ul>
              {group.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills