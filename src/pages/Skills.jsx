import { DiHtml5, DiCss3, DiReact, DiBootstrap, DiJavascript1 } from "react-icons/di";
import { SiTypescript, SiTailwindcss, SiStyledcomponents } from "react-icons/si";


const Skills = () => {
  return (
    <div className="pb-20">
      <div className="pb-14 text-lg xl:text-2xl">
        <h1 className="font-semibold pb-10">Habilidades</h1>
        <p>Tecnologias com as quais já trabalhei:</p>
      </div>
      <div className="inline-block">
        <ul className="flex flex-wrap justify-center text-md sm:text-lg font-tech text-lawn-green font-semibold">
          <li className="list">
            <span className="item-list"><DiHtml5 /></span>
            <span>HTML</span>
          </li>
          <li className="list">
            <span className="item-list"><DiCss3 /></span>
            <span>CSS</span>
          </li>
          <li className="list">
            <span className="item-list"><DiBootstrap /></span>
            <span>Bootstrap</span>
          </li>
          <li className="list">
            <span className="item-list"><SiTailwindcss /></span>
            <span>Tailwind</span>
          </li>
          <li className="list">
            <span className="item-list"><SiStyledcomponents /></span>
            <span>Styled-components</span>
          </li>
          <li className="list">
            <span className="item-list"><DiReact /></span>
            <span>React</span>
          </li>
          <li className="list">
            <span className="item-list"><DiJavascript1 /></span>
            <span>JavaScript</span>
          </li>
          <li className="list">
            <span className="item-list"><SiTypescript /></span>
            <span>TypeScript</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Skills