import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Reactjs from "../assets/react.png";
import php from "../assets/php.png";
import mysql from "../assets/mysql.png";
import postgre from "../assets/postgre.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/Bootstrap.png";
import laravel from "../assets/laravel.png";
import codeigniter from "../assets/codeigniter.png";
import jquery from "../assets/jquery.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-[#10142c]  text-gray-300 disableCaret"
    >
      {/* { Container } */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#784390]">
            Skills
          </p>
          <p className="py-4">These are the technologies I've used</p>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={HTML} alt="HTML Icon" className="w-20 h-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={CSS} alt="CSS Icon" className="w-20 h-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={Javascript}
              alt="Javascript Icon"
              className="w-20 h-20 mx-auto"
            />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={Reactjs}
              alt="Reactjs Icon"
              className="w-20 h-20 mx-auto"
            />
            <p className="my-4">Reactjs</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={php} alt="php Icon" className="w-20 h-20 mx-auto" />
            <p className="my-4">php</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={mysql} alt="MySQL Icon" className="w-20 h-20 mx-auto" />
            <p className="my-4">MySQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={postgre}
              alt="PostgreSQL Icon"
              className="w-20 h-20 mx-auto"
            />
            <p className="my-4">PostgreSQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={tailwind}
              alt="Tailwind Icon"
              className="w-20 h-20 mx-auto"
            />
            <p className="my-4">TailwindCSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={bootstrap} alt="BS Icon" className="w-20 h-20 mx-auto" />
            <p className="my-4">Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={laravel}
              alt="laravel Icon"
              className="w-20 h-20 mx-auto"
            />
            <p className="my-4">Laravel</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={codeigniter}
              alt="CI Icon"
              className="w-20 h-20 mx-auto"
            />
            <p className="my-4">CodeIgniter</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={jquery} alt="Jquery Icon" className="w-20 h-20 mx-auto" />
            <p className="my-4">Jquery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
