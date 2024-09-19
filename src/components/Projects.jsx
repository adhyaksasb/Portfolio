import React from "react";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:min-h-screen bg-primary dark:bg-[#10142c] flex items-center text-font1 dark:text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full mt-24">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-[#784390]">
            Projects
          </p>
          <p className="py-3">Check out some of my recent projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Grid Items */}
          <ProjectItems
            title="DigiTS TelkomSchools"
            image="DigiTS.png"
            skill="Laravel | NuxtJS"
            description="One of the academic information system application with microservices architecture that I have made on my professional career. It is created with Laravel for the backend and NuxtJS for the frontend."
            code="#"
            isDeployed={true}
            website="https://digits.telkomschools.sch.id/"
          />
          <ProjectItems
            title="Adhyaksasb Card Tree"
            image="portfoliov2.png"
            skill="SvelteKit (Svelte 5) | GSAP"
            description="Adhyaksasb Card Tree is a website that show my simple portfolio (like a linktree). Made with SvelteKit and GSAP for the animation"
            code="https://github.com/adhyaksasb/portfolio-v2"
            isDeployed={true}
            website="https://adhyaksasb.vercel.app/"
          />
          <ProjectItems
            title="Employee Scheduler"
            image="EmployeeScheduler.png"
            skill="SvelteKit (Svelte 5)"
            description="An autonomous employee scheduler made with SvelteKit"
            code="https://github.com/adhyaksasb/employee-scheduler"
            isDeployed={true}
            website="https://generate-jadwal.vercel.app/"
          />
          <ProjectItems
            title="PyramidDBv2"
            image="pyramidbv2.png"
            skill="Golang | Svelte 5 | AWS"
            description="Brand new PyramidDB. Created using Golang for back-end and SvelteKit for front-end"
            code="https://github.com/adhyaksasb/pyramidb-fe"
            isDeployed={true}
            website="https://pyramidb-fe.vercel.app/"
          />
          <ProjectItems
            title="PyramidDB"
            image="PyramidDB.png"
            skill="TALL Stack"
            description="An essential tools and databases for Honkai: Star Rail. Made with TALL Stack"
            code="http://github.com/adhyaksasb/PyramidDB"
            isDeployed={true}
            website="https://pyramid-db.vercel.app/"
          />
          <ProjectItems
            title="CommuniChat"
            image="CommuniChat.png"
            skill="Next.js 13"
            description="CommuniChat is a messanger clone website built in Next.js 13 with additional library including pusher as a real-time websocket, cloudinary for image upload handling, MongoDB for database, PrismaDB as an ORM, and TailwindCSS for creating the UI."
            code="http://github.com/adhyaksasb/CommuniChat"
            isDeployed={true}
            website="https://communichat-sepia.vercel.app/"
          />
          <ProjectItems
            title="SocialSparrow"
            image="SocialSparrow.png"
            skill="MERN Stack | Redux"
            description="SocialSparrow is a social media website built in MERN Stack framework for the base, Redux for state management, Material UI as front-end react component for UI. Features that already been completed such as authentication, authorization, likes, comment, friend list, and profile page."
            code="http://github.com/adhyaksasb/SocialSparrow"
            isDeployed={false}
          />
          <ProjectItems
            title="KeluargaBahagia"
            image="KeluargaBahagia.png"
            skill="Laravel | JQuery"
            description="KeluargaBahagia is a multi purpose genealogy website built in php with Laravel framework. This project is still in progress, as of now, features such as genealogy tree, admin panel, multiple users (admin, family member), gallery, biography and dark theme are already completed. Features including forum discussion, social media, voting system and many more will be implemented in the future."
            code="http://github.com/adhyaksasb/KeluargaBahagia"
            isDeployed={false}
          />
          <ProjectItems
            title="MyCommerce"
            image="myCommerce.png"
            skill="Laravel | JQuery"
            description="MyCommerce is a multi vendor e-commerce website built in php with Laravel framework. Dedicated features such as admin panel, multiple users (admin, vendor, customer), and many more. This project is still in progress, there will be many future features including SEO, implementing payment gateway api, and logistics api."
            code="http://github.com/adhyaksasb/myCommerce"
            isDeployed={false}
          />
          <ProjectItems
            title="Adhyaksasb Portfolio"
            image="portfolio.png"
            skill="React.js | TailwindCSS"
            description="My portfolio website that showcasing all the skills that I have and all the projects that I had created. This simple portfolio website built with React.js and TailwindCSS was my first React.js project that I had created."
            code="http://github.com/adhyaksasb/Portfolio"
            isDeployed={true}
            website="https://adhyaksasb.netlify.app/"
          />
          <ProjectItems
            title="Performance Analytics Scrum Team"
            image="performanceAnalytics.png"
            skill="Javascript | GraphQL API"
            description="Performance Analytics Scrum Team built with plain javascript as the front-end and fetching real-time data from GitHub with GraphQL API as a back-end. This application serves to monitoring the issues in the GitHub repository and doing performance analytics of software development team using metric called lead time. This project was created for my college dissertation."
            code="http://github.com/adhyaksasb/TugasAkhir"
            isDeployed={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
