import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import projects from "./projects.js";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const projectList = projects(t);

  return (
    <div className="w-full">
      <div className="max-w-4xl">
        <div className="flex flex-col flex-wrap gap-10">
          {projectList.reverse().map((project, index) => (
            <div
              key={index}
              className="bg-slateBlue bg-opacity-5 dark:bg-opacity-20 dark:shadow-white shadow-sm rounded-md p-4 max-w-screen flex-wrap"
            >
              <h1 className="text-xl uppercase font-semibold mb-4 tracking-wide">
                {project.title}
              </h1>
              <p className="tracking-wide">{project.description}</p>
              <h3 className="mt-6 mb-1 tracking-wide">
                {t("keyFeaturesHeader")}:
              </h3>
              <ul className="list-disc list-inside tracking-wide">
                {project.keyFeatures.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="my-4 rounded-md shadow-md dark:shadow-md dark:shadow-white"
                  style={{ height: "auto", width: "600px" }}
                />
              </div>
              <div>
                <h2>{t("builtWith")}:</h2>
                <div className="flex flex-wrap gap-3">
                  {project.builtWith.map((icon, index) => (
                    <div key={index} className="my-4">
                      <img
                        src={icon.src}
                        alt={icon.alt}
                        className="h-8 w-8 mb-1"
                      />
                      <p className="text-center text-sm tracking-widest">
                        {icon.title}
                      </p>
                    </div>
                  ))}
                </div>
                <h3>{t("links")}:</h3>
                <div className="flex justify-center m-4">
                  <div className="p-2 rounded shadow-md hover:bg-slateBlue hover:text-white dark:shadow-gray-500 hover:shadow-lg hover:rotate-6 transition ease-in-out duration-200">
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
                      className="shadow-md p-2 rounded hover:bg-slateBlue dark:shadow-gray-500 hover:shadow-lg hover:text-white hover:rotate-6 transition ease-in-out duration-200"
                    >
                      <FaExternalLinkAlt size={24} /> Demo
                    </a>
                  )}
                </div>
                {project.demoNotes && (
                  <p className="text-sm text-center mt-10">
                    {t(project.demoNotes)}
                  </p>
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
