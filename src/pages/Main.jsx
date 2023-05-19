import Header from "../components/Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

const Main = () => {
  return (
    <div className="flex text-body bg-midnight-gray text-off-white justify-center overflow-y-auto h-screen">
      <div className="flex sm:mx-32 sm:w-[1000px]">
        <div className="sm:w-6/12">
          <div className="absolute">
            <Header />
          </div>
        </div>
        <div className="px-4 pt-16 sm:px-0 sm:w-6/12">
          <div className="inline-block text-left">
            <div className="flex flex-col">
              <section>
                <About />
              </section>
              <section>
                <Skills />
              </section>
              <section>
                <Projects />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main