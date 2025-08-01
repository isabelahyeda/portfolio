import { DiHtml5, DiCss3, DiReact, DiBootstrap, DiJavascript1 } from "react-icons/di";
import { SiTypescript, SiTailwindcss, SiStyledcomponents, SiMui } from "react-icons/si";

const Skills = () => {

  const skills = [
    { id: 1, name: "HTML", icon: <DiHtml5 /> },
    { id: 2, name: "CSS", icon: <DiCss3 /> },
    { id: 3, name: "Bootstrap", icon: <DiBootstrap /> },
    { id: 4, name: "Tailwind", icon: <SiTailwindcss /> },
    { id: 5, name: "Styled-components", icon: <SiStyledcomponents /> },
    { id: 6, name: "Material UI", icon: <SiMui /> },
    { id: 7, name: "React", icon: <DiReact /> },
    { id: 8, name: "JavaScript", icon: <DiJavascript1 /> },
    { id: 9, name: "TypeScript", icon: <SiTypescript /> },
  ];

  return (
    <div className="pb-24">
      <h1 className="text-lg xl:text-2xl sticky-title">HABILIDADES</h1>
      <p className="text-lg xl:text-2xl pt-10 pb-24">Tecnologias com as quais já trabalhei:</p>
      <div className="inline-block">
        <ul className="flex flex-wrap justify-center text-md sm:text-lg font-tech text-lawn-green font-semibold">
          {
            skills.map((skill) => {
              return (
                <li className="list" key={skill.id}>
                  <span className="item-list">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Skills