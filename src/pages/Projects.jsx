import { HiArrowUpRight } from "react-icons/hi2";

const Projects = () => {
  return (
    <div className="pb-24 text-lg xl:text-2xl">
      <h1 className="sticky-title">Projetos</h1>
      <div className="flex flex-wrap pt-10">
        <div className="card">
          <div className="content">
            <h1 className="title-card">SouJunior</h1>
            <p>
              Projeto open source com objetivo de preparar novos profissionais juniores
              para o mercado de trabalho, na área de tecnologia, através de experiências práticas.
              Participação como Desenvolvedora Front-end.
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
            <p>
              Aplicação tem objetivo de auxiliar o controle de saúde das pessoas que convivem com diabetes.
              Projeto formado por juniores e open source. Participação como Desenvolvedora Front-end.
            </p>
            <a className="link-card" href="https://github.com/DiaNote">
              <span className="mr-1">Projeto</span>
              <span><HiArrowUpRight /></span>
            </a>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h1 className="title-card">Calculadora de IMC</h1>
            <p>
              Foi meu primeiro projeto realizado em JavaScript, onde criei uma aplicação para o cálculo do Índice de Massa Corporal (IMC),
              retornando o resultado e a classificação do IMC segundo a OMS. 
            </p>
            <a className="link-card" href="https://github.com/isabelahyeda/calculo-imc">
              <span className="mr-1">Projeto</span>
              <span><HiArrowUpRight /></span>
            </a>
          </div>
        </div>
      </div>
      <p className="text-base font-tech text-lawn-green">Portfólio criado em JavaScript com React.js e Tailwind CSS. Publicado na Vercel. </p>
    </div>
  )
}

export default Projects