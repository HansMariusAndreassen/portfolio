import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import projects from "./projects.js";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const projectList = projects(t);

  return (
    <div className="w-full">
      <h1 className="text-xl text-center w-full mb-10">{t("Projects")}</h1>
      <div className="max-w-screen flex">
        <div className="flex flex-wrap gap-10">
          {projectList.reverse().map((project, index) => (
            <div
              key={index}
              className="bg-slateBlue bg-opacity-5 shadow-lg rounded-md p-4 min-w-[320px] max-w-[400px] flex-wrap"
            >
              <h2 className="text-lg font-semibold mb-4">{project.title}</h2>
              <p>{project.description}</p>
              <div>
                <img src={project.image} alt={project.title} className="my-4" />
              </div>
              <div>
                <h2>{t("builtWith")}:</h2>
                <div className="flex justify-center gap-5 flex-wrap">
                  {project.builtWith.map((icon, index) => (
                    <div key={index} className="my-4">
                      <img src={icon.src} className="h-10 w-10" />
                      <p className="text-center">{icon.title}</p>
                    </div>
                  ))}
                </div>
                <h3>{t("links")}:</h3>
                <div className="flex justify-center m-4">
                  <div className="p-2 rounded shadow-lg hover:bg-slateBlue hover:text-white hover:rotate-6 transition ease-in-out duration-200">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <FaGithub size={24} />
                      <p>Repository</p>
                    </a>
                  </div>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slateBlue shadow-lg p-2 rounded hover:bg-slateBlue hover:text-white hover:rotate-6 transition ease-in-out duration-200"
                    >
                      <FaExternalLinkAlt size={24} /> Demo
                    </a>
                  )}
                </div>
                {project.demo && (
                  <p className="text-sm text-center">{t(project.demoNotes)}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
