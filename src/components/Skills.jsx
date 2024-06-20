import SkillItems from "./SkillItems";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-primary dark:bg-[#10142c] flex items-center text-font1 dark:text-gray-300 disableCaret"
    >
      {/* { Container } */}
      <div className="max-w-[1000px] mx-auto my-24 p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#784390]">
            Skills
          </p>
          <p className="py-4">These are the technologies I've used</p>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-4 text-center py-8">
          <SkillItems image="html.png" text="HTML" />
          <SkillItems image="css.png" text="CSS" />
          <SkillItems image="javascript.png" text="Javascript" />
          <SkillItems image="jquery.png" text="Jquery" />
          <SkillItems image="react.png" text="ReactJS" />
          <SkillItems image="vue.png" text="VueJS" />
          <SkillItems image="nextjs-13.svg" text="NextJS" />
          <SkillItems image="nuxt.png" text="NuxtJS" />
          <SkillItems image="php.png" text="PHP" />
          <SkillItems image="laravel.png" text="Laravel" />
          <SkillItems image="codeigniter.png" text="CodeIgniter" />
          <SkillItems image="mysql.png" text="MySQL" />
          <SkillItems image="postgre.png" text="PostgreSQL" />
          <SkillItems image="tailwind.png" text="TailwindCSS" />
          <SkillItems image="bootstrap.svg" text="Bootstrap" />
          <SkillItems image="node.png" text="NodeJS" />
          <SkillItems image="mongo.png" text="MongoDB" />
          <SkillItems image="expressjs.svg" text="ExpressJS" />
          <SkillItems image="redux.svg" text="Redux" />
          <SkillItems image="docker.png" text="Docker" />
          <SkillItems image="prisma.svg" text="Prisma" />
          <SkillItems image="pusher.svg" text="Pusher" />
          <SkillItems image="cloudinary.svg" text="Cloudinary" />
          <SkillItems image="aws.png" text="AWS" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
