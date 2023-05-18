import { DiHtml5, DiCss3, DiReact, DiBootstrap, DiJavascript1 } from "react-icons/di";
import { SiTypescript, SiTailwindcss, SiStyledcomponents } from "react-icons/si";


const Skills = () => {
  return (
    <div className="pb-20">
      <div className="pb-14 text-xl xl:text-3xl">
        <h1 className="uppercase font-semibold pb-6">Habilidades</h1>
        <p>Tecnologias com as quais já trabalhei:</p>
      </div>
      <div className="text-center">
        <div className="inline-block">
          <ul className="flex flex-wrap text-md font-tech font-semibold justify-center gap-y-8 xl:gap-20">
            <li className="list">
              <span className="mr-2"><DiHtml5 /></span>
              <span>HTML</span>
            </li>
            <li className="list">
              <span className="mr-2"><DiCss3 /></span>
              <span>CSS</span>
            </li>
            <li className="list">
              <span className="mr-2"><DiBootstrap /></span>
              <span>Bootstrap</span>
            </li>
            <li className="list">
              <span className="mr-2"><SiTailwindcss /></span>
              <span>Tailwind</span>
            </li>
            <li className="list">
              <span className="mr-2"><SiStyledcomponents /></span>
              <span>Styled Components</span>
            </li>
            <li className="list">
              <span className="mr-2"><DiReact /></span>
              <span>React</span>
            </li>
            <li className="list">
              <span className="mr-2"><DiJavascript1 /></span>
              <span>JavaScript</span>
            </li>
            <li className="list">
              <span className="mr-2"><SiTypescript /></span>
              <span>TypeScript</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills