import { FiLinkedin } from "react-icons/fi";
import { VscGithub } from "react-icons/vsc";
import { PiGitlabLogo } from "react-icons/pi";

const About = () => {

    const profiles = [
        { id: 1, link: "https://github.com/isabelahyeda", icon: <VscGithub /> },
        { id: 2, link: "https://gitlab.com/isabelahyeda", icon: <PiGitlabLogo /> },
        { id: 3, link: "https://www.linkedin.com/in/isabelahyeda", icon: <FiLinkedin /> },
    ];

    return (
        <div className="pb-24">
            <div className="pb-24">
                <h1 className="font-semibold text-xl xl:text-3xl pb-4">ISABELA SCHURHAUS HYEDA BUITONI</h1>
                <h2 className="font-tech text-lawn-green text-lg xl:text-2xl pb-10 sm:pb-0">Desenvolvedora Front-end</h2>
                <ul className="flex self-center gap-10 text-lawn-green text-lg xl:text-2xl sm:hidden">
                    {
                        profiles.map((profile) => {
                            return (
                                <li key={profile.id}>
                                    <a href={profile.link}>
                                        {profile.icon}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="text-lg xl:text-2xl">
                <h1 className="sticky-title">SOBRE MIM</h1>
                <div className="leading-10 pt-10">
                    <p className="mb-7">
                        Iniciei em 2022 minha trajetória como Desenvolvedora Front-end,
                        participando da construção de sites e aplicações web.
                        Minhas principais experiências são em desenvolvimento front-end
                        com <span className="font-tech text-lawn-green">React.js/JavaScript</span>.
                        Desafios me motivam e busco sempre oportunidades de expandir meus conhecimentos.
                    </p>
                    <p>
                        Quando não estou programando gosto de estar em família, viajar com o meu marido, ficar pertinho da minha gata,
                        passear ao ar livre ou assistir a jogos de tênis.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About