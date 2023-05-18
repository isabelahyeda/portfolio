import Header from "../components/Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

const Main = () => {
  return (
    <div className="flex text-body bg-midnight-gray text-off-white h-screen">
      <div>
        <Header />
      </div>
      <div className="text-center px-6 pt-16 overflow-y-auto">
        <div className="inline-block text-left sm:w-7/12">
          <div>
            <section id="about">
              <About />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="projects">
              <Projects />
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main