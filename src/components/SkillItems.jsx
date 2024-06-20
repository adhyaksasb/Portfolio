import React from "react";

const SkillItems = ({ image, text }) => {
  return (
    <div className="shadow-md dark:shadow-[#040c16] hover:scale-110 duration-500">
      <img
        src={require(`../assets/${image}`)}
        alt="HTML Icon"
        className="w-20 h-20 mx-auto"
      />
      <p className="my-4">{text}</p>
    </div>
  );
};

export default SkillItems;
