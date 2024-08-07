import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Forms from "./Forms";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div name="home" className="w-full h-screen bg-primary dark:bg-[#10142c]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <p className="text-[#784390]">Hello World, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-font2 dark:text-[#ccd6f6]">
            Adhyaksa Setiabudi
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-font1 dark:text-[#8892b0]">
            I'm a Full Stack Web Developer
          </h2>
          <p className="text-font1 dark:text-[#8892b0] py-4 max-w-[700px]">
            IT undergraduate and an aspiring full stack developer focused on web
            programming. In-depth knowledge of analysis, design, develop, and
            maintaining web services. Skilled in HTML, CSS, PHP, Javascript,
            JQuery, Bootstrap, Laravel, Reactjs, CodeIgniter, MySQL, PostgreSQL.
          </p>
          <div>
            <Link to="about" smooth={true} duration={500}>
              <button className="customButton group px-6 py-3 my-2 flex items-center">
                View More
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Forms />
    </>
  );
};

export default Home;
