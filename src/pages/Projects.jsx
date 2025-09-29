import { HiArrowUpRight } from "react-icons/hi2";

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "SouJunior",
      link: "https://github.com/SouJunior/vagas-frontend",
      description: "Projeto open source com objetivo de preparar novos profissionais juniores para o mercado de trabalho, na área de tecnologia, através de experiências práticas. Participação como Desenvolvedora Front-end."
    },
  ];

  return (
    <div className="pb-24 text-lg xl:text-2xl">
      <h1 className="sticky-title">PROJETOS</h1>
      <div className="flex flex-wrap pt-10">
        {
          projects.map((project) => {
            return (
              <div className="card" key={project.id}>
                <div className="content">
                  <h1 className="title-card">{project.title}</h1>
                  <p>{project.description}</p>
                  <a className="link-card" href={project.link}>
                    <span className="mr-1">Projeto</span>
                    <span><HiArrowUpRight /></span>
                  </a>
                </div>
              </div>
            )
          })
        }
      </div>
      <p className="text-base font-tech text-lawn-green">Portfólio criado em JavaScript com React.js e Tailwind CSS. Publicado na Vercel. </p>
    </div>
  )
}

export default Projects