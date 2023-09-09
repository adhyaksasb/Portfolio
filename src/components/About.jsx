import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-[#10142c] text-gray-300"
    >
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
            Aspiring to be a full stack web developer, I am a highly motivated
            and passionate individual seeking an opportunity to contribute my
            expertise to an IT world. With a solid foundation in front-end and
            back-end technologies, I am eager to create innovative and
            user-centric web applications.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
