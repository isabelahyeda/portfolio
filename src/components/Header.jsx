import { FiLinkedin } from "react-icons/fi";
import { VscMail, VscGithub } from "react-icons/vsc";
import ProfileImage from "../assets/images/portfolio.jpg"

const Header = () => {

    const email = "isabelahyeda@gmail.com"

    return (
        <header className="text-3xl">
            <div className="hidden sm:block fixed top-16">
                <img className="rounded-full w-[152px] h-[200px] border-2 border-lawn-green mr-[9px] ml-[9px]" src={ProfileImage} alt="foto de perfil" />
            </div>
            <div className="pt-16 hidden sm:block fixed z-20 top-[258px]">
                <ul className="flex gap-10 text-lawn-green">
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