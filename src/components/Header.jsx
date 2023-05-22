import { FiLinkedin } from "react-icons/fi";
import { VscMail, VscGithub } from "react-icons/vsc";
import ProfileImage from "../assets/images/portfolio.jpg"

const Header = () => {

    const email = "isabelahyeda@gmail.com"

    return (
        <header className="text-3xl flex flex-col fixed">
            <div className="pt-16 hidden sm:block">
                <div className="flex flex-col justify-between h-72">
                    <img className="rounded-full w-[152px] h-[200px] border-2 border-lawn-green self-center" src={ProfileImage} alt="foto de perfil" />
                    <ul className="flex self-center gap-10 text-lawn-green">
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
            </div>
        </header>
    )
}

export default Header