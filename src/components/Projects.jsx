import React from "react";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-[#10142c]  text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#784390]">
            Projects
          </p>
          <p className="py-4">Check out some of my recent projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Grid Items */}
          <ProjectItems
            title="SocialSparrow"
            image="SocialSparrow.png"
            skill="MERN Stack | Redux"
            description="SocialSparrow is a social media website built in MERN Stack framework for the base, Redux for state management, Material UI as front-end react component for UI. Features that already been completed such as authentication, authorization, likes, comment, friend list, and profile page."
            code="http://github.com/adhyaksasb/SocialSparrow"
          />
          <ProjectItems
            title="KeluargaBahagia"
            image="KeluargaBahagia.png"
            skill="Laravel | JQuery"
            description="KeluargaBahagia is a multi purpose genealogy website built in php with Laravel framework. This project is still in progress, as of now, features such as genealogy tree, admin panel, multiple users (admin, family member), gallery, biography and dark theme are already completed. Features including forum discussion, social media, voting system and many more will be implemented in the future."
            code="http://github.com/adhyaksasb/KeluargaBahagia"
          />
          <ProjectItems
            title="MyCommerce"
            image="myCommerce.png"
            skill="Laravel | JQuery"
            description="MyCommerce is a multi vendor e-commerce website built in php with Laravel framework. Dedicated features such as admin panel, multiple users (admin, vendor, customer), and many more. This project is still in progress, there will be many future features including SEO, implementing payment gateway api, and logistics api."
            code="http://github.com/adhyaksasb/myCommerce"
          />
          <ProjectItems
            title="Adhyaksasb Portfolio"
            image="portfolio.png"
            skill="React.js | TailwindCSS"
            description="My portfolio website that showcasing all the skills that I have and all the projects that I had created. This simple portfolio website built with React.js and TailwindCSS was my first React.js project that I had created."
            code="http://github.com/adhyaksasb/Portfolio"
          />
          <ProjectItems
            title="Performance Analytics Scrum Team"
            image="performanceAnalytics.png"
            skill="Javascript | GraphQL API"
            description="Performance Analytics Scrum Team built with plain javascript as the front-end and fetching real-time data from GitHub with GraphQL API as a back-end. This application serves to monitoring the issues in the GitHub repository and doing performance analytics of software development team using metric called lead time. This project was created for my college dissertation."
            code="http://github.com/adhyaksasb/TugasAkhir"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
