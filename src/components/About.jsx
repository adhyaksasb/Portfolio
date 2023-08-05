import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#10142c] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#784390]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Adhy, nice to meet you. Please take a look around</p>
          </div>
          <div>
            Recent IT graduate with 2+ years experience focused on web
            programming. In-depth knowledge of analysis, design, develop, and
            maintaining web services. Skilled in HTML, CSS, PHP, Javascript,
            JQuery, Bootstrap, TailwindCSS, MySQL, PostgreSQL, Laravel, Reactjs,
            CodeIgniter.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
