const About = () => {
    return (
        <div className="pb-20">
            <div className="flex flex-col flex-wrap pb-20">
                <p className="font-tech text-lawn-green text-3xl">Olá, meu nome é</p>
                <h1 className="uppercase text-4xl font-semibold py-6">Isabela Schurhaus Hyeda Buitoni</h1>
                <p className="font-tech text-lawn-green text-3xl">e sou Desenvolvedor Front-end</p>
            </div>
            <div className="text-xl xl:text-3xl">
                <h1 className="uppercase font-semibold pb-6">Sobre</h1>
                <div className="leading-10">
                    <p className="mb-7">
                        Iniciei em 2022 minha trajetória como <span className="font-tech text-lawn-green">Desenvolvedor Front-end</span>,
                        participando da construção de sites e aplicações web.
                        Minhas principais experiências são em desenvolvimento front-end
                        com <span className="font-tech text-lawn-green">React.js/JavaScript</span>.
                        Desafios me motivam e busco sempre oportunidades de expandir meus conhecimentos.
                    </p>
                    <p>
                        Quando não estou programando, gosto de jogar com o meu marido, ficar pertinho da minha gata, passear
                        ao ar livre ou assistir a jogos de tênis.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About