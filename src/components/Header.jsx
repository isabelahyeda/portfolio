import { FiLinkedin } from "react-icons/fi";
import { VscMail, VscGithub } from "react-icons/vsc";
import ProfileImage from "../assets/images/portfolio.jpg"

const Header = () => {

    const email = "isabelahyeda@gmail.com"
    
    return (
        <header className="sm:p-6 sm:w-80 h-full text-lawn-green font-tech text-3xl flex flex-col justify-between">
            <div className="flex flex-col h-full pt-5">
                <div className="hidden sm:block">
                    <div className="flex justify-center pb-14">
                        <img className="rounded-full w-[152px] h-[200px] border-2 border-lawn-green" src={ProfileImage} alt="foto de perfil" />
                    </div>
                    <div className="flex justify-center">
                        <ul className="flex flex-col gap-5 w-72">
                            <li>
                                <a href="#about" smooth={true}>
                                    <span className="menu-border" />
                                    <span className="menu-hover">Sobre</span>
                                </a>
                            </li>
                            <li>
                                <a href="#skills" smooth={true}>
                                    <span className="menu-border" />
                                    <span className="menu-hover">Habilidades</span>
                                </a>
                            </li>
                            <li>
                                <a href="#projects" smooth={true}>
                                    <span className="menu-border" />
                                    <span className="menu-hover">Projetos</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hidden sm:block pb-10">
                <ul className="flex justify-center gap-5">
                    <li>
                        <a href="https://github.com/isabelahyeda">
                            <VscGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/isabelahyeda">
                            <FiLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href={`mailto:${email}`}>
                            <VscMail />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header