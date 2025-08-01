import { FiLinkedin } from "react-icons/fi";
import { VscGithub } from "react-icons/vsc";
import { PiGitlabLogo } from "react-icons/pi";
import ProfileImage from "../assets/images/portfolio.jpg";

const Header = () => {

    const profiles = [
        { id: 1, link: "https://github.com/isabelahyeda", icon: <VscGithub /> },
        { id: 2, link: "https://gitlab.com/isabelahyeda", icon: <PiGitlabLogo /> },
        { id: 3, link: "https://www.linkedin.com/in/isabelahyeda", icon: <FiLinkedin /> },
    ];

    return (
        <header className="text-3xl">
            <div className="hidden sm:block fixed top-16">
                <img className="rounded-full w-[152px] h-[200px] border-2 border-lawn-green mr-[9px] ml-[9px]" src={ProfileImage} alt="foto de perfil" />
            </div>
            <div className="pt-16 hidden sm:block fixed z-20 top-[258px]">
                <ul className="flex gap-10 text-lawn-green">
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
        </header>
    )
}

export default Header