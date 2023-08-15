import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Modal from "../components/Modal";

const ProjectItems = ({ title, image, skill, description, code }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => setShowModal(false);
  return (
    <>
      <div className="group container rounded-md flex flex-col gap-y-1 mx-auto projects-div hover:cursor-pointer">
        <p
          className="text-gray-300 font-bold m-1"
          onClick={() => setShowModal(true)}
        >
          {title}
        </p>
        <img
          src={require(`../assets/${image}`)}
          className="rounded-md border border-[#784390]"
          onClick={() => setShowModal(true)}
        />
        <div>
          <p className="text-gray-400 text-xs m-1 float-left">{skill}</p>
          <a href={code}>
            <FaGithub className="m-1 float-right" size={15} />
          </a>
        </div>
      </div>
      <Modal
        visible={showModal}
        onClose={handleOnClose}
        title={title}
        image={image}
        description={description}
        skill={skill}
        code={code}
      />
    </>
  );
};

export default ProjectItems;
