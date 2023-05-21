import Header from "../components/Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import { useRef, useEffect } from "react";

const Main = () => {

  const mouseCursor = useRef();

  window.addEventListener("mousemove", (e) => {
    if (mouseCursor.current) {
      mouseCursor.current.style.top = e.pageY + "px";
      mouseCursor.current.style.left = e.pageX + "px";
      mouseCursor.current.style.display = "block"
    }
  });

  window.addEventListener("mouseout", (e) => {
    if (mouseCursor.current) {
      mouseCursor.current.style.display = "none"
    }
  });

  useEffect(() => {
    const links = document.getElementsByTagName("a");
    const arrayLinks = [...links];

    arrayLinks.forEach(link => {
      if (mouseCursor.current && arrayLinks.length > 0) {
        link.addEventListener("mouseover", () => {
          mouseCursor.current.classList.add("grow");
        });
        link.addEventListener("mouseleave", () => {
          mouseCursor.current.classList.remove("grow");
        });
      }
    });
  }, []);

  return (
    <div className="flex text-body bg-midnight-gray text-off-white justify-center overflow-y-auto h-screen">
      <div ref={mouseCursor} className="cursor"></div>
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