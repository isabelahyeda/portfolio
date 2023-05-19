import { HiArrowUpRight } from "react-icons/hi2";

const Projects = () => {
  return (
    <div className="pb-20 text-lg xl:text-2xl">
      <h1 className="font-semibold pb-10">Projetos</h1>
      <div className="flex flex-wrap">
        <div className="card">
          <div className="content">
            <h1 className="title-card">SouJunior</h1>
            <p>Projeto open source com objetivo de preparar novos profissionais juniores
              para o mercado de trabalho na área de tecnologia através de experiências práticas.
              Participo como Desenvolvedora Front-end.
            </p>
            <a className="link-card" href="https://github.com/SouJunior/vagas-frontend">
              <span className="mr-1">Projeto</span>
              <span><HiArrowUpRight /></span>
            </a>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h1 className="title-card">DiaNote</h1>
            <p>Aplicação tem objetivo de auxiliar o controle de saúde das pessoas que convivem com diabetes.
              Projeto formado por juniores e open source. Participação como Desenvolvedora Front-end.
            </p>
            <a className="link-card" href="https://github.com/DiaNote">
              <span className="mr-1">Projeto</span>
              <span><HiArrowUpRight /></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects