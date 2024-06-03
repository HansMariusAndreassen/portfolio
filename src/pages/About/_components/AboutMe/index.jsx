import { useState } from "react";
import { useTranslation } from "react-i18next";
import Carousel from "../../../../components/Carousel";

const AboutMe = () => {
  const { t } = useTranslation();

  const splitTextIntoParagraphs = (text) => {
    return text.split("\n\n");
  };

  const aboutMeTexts = splitTextIntoParagraphs(t("aboutMeText"));
  const careerBackgroundTexts = splitTextIntoParagraphs(
    t("careerBackgroundText")
  );
  const educationSkillsTexts = splitTextIntoParagraphs(
    t("educationSkillsText")
  );
  const interestsHobbiesTexts = splitTextIntoParagraphs(
    t("interestsHobbiesText")
  );
  const personalityWorkStyleTexts = splitTextIntoParagraphs(
    t("personalityWorkStyleText")
  );
  const goalsAmbitionsTexts = splitTextIntoParagraphs(t("goalsAmbitionsText"));
  const mottoTexts = splitTextIntoParagraphs(t("mottoText"));

  const categories = {
    aboutMe: (
      <div>
        <h2 className="w-full bg-slateBlue text-white indent-4 mb-2 py-1">
          {t("aboutMe")}
        </h2>
        {aboutMeTexts.map((aboutMeText, index) => (
          <p key={index} className="px-3 mb-4">
            {aboutMeText}
          </p>
        ))}
      </div>
    ),
    careerBackground: (
      <div>
        <h2 className="w-full bg-slateBlue text-white indent-4 mb-2 py-1">
          {t("careerBackground")}
        </h2>
        {careerBackgroundTexts.map((careerText, index) => (
          <p key={index} className="px-3 mb-4">
            {careerText}
          </p>
        ))}
      </div>
    ),
    educationSkills: (
      <div>
        <h2 className="w-full bg-slateBlue text-white indent-4 mb-2 py-1">
          {t("educationSkills")}
        </h2>
        {educationSkillsTexts.map((educationSkillsText, index) => (
          <p key={index} className="px-3 mb-4">
            {educationSkillsText}
          </p>
        ))}{" "}
      </div>
    ),
    interestsHobbies: (
      <div>
        <h2 className="w-full bg-slateBlue text-white indent-4 mb-2 py-1">
          {t("interestsHobbies")}
        </h2>
        {interestsHobbiesTexts.map((interestsHobbiesText, index) => (
          <p key={index} className="px-3 mb-4">
            {interestsHobbiesText}
          </p>
        ))}{" "}
      </div>
    ),
    personalityWorkStyle: (
      <div>
        <h2 className="w-full bg-slateBlue text-white indent-4 mb-2 py-1">
          {t("personalityWorkStyle")}
        </h2>
        {personalityWorkStyleTexts.map((personalityWorkStyleText, index) => (
          <p key={index} className="px-3 mb-4">
            {personalityWorkStyleText}
          </p>
        ))}{" "}
      </div>
    ),
    goalsAmbitions: (
      <div>
        <h2 className="w-full bg-slateBlue text-white indent-4 mb-2 py-1">
          {t("goalsAmbitions")}
        </h2>
        {goalsAmbitionsTexts.map((goalsAmbitionsText, index) => (
          <p key={index} className="px-3 mb-4">
            {goalsAmbitionsText}
          </p>
        ))}{" "}
      </div>
    ),
    motto: (
      <div>
        <h2 className="w-full bg-slateBlue text-white indent-4 mb-2 py-1">
          {t("motto")}
        </h2>
        {mottoTexts.map((mottoText, index) => (
          <p key={index} className="px-3 mb-4">
            {mottoText}
          </p>
        ))}{" "}
      </div>
    ),
    gallery: (
      <div className="w-full flex justify-center">
        <Carousel />
      </div>
    ),
  };

  const [activeCategory, setActiveCategory] = useState("aboutMe");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCategoryChange = (category) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 border-none cursor-pointer transition-colors duration-100 ${
              activeCategory === category
                ? "bg-slateBlue text-white rotate-3"
                : "bg-slateBlue bg-opacity-10 dark:bg-opacity-30"
            } hover:bg-slateBlue hover:text-white`}
          >
            {t(category)}
          </button>
        ))}
      </div>
      <div
        className={
          activeCategory !== "gallery" && activeCategory !== "galleri"
            ? "flex items-start flex-wrap-reverse"
            : ""
        }
      >
        <div>
          <div
            className={`max-w-2xl text-left transition-opacity duration-200 grow ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            {categories[activeCategory]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
