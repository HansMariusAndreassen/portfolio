import { useState } from "react";
import "./aboutMe.css";
import { useTranslation } from "react-i18next";

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
  };

  const [activeCategory, setActiveCategory] = useState("aboutMe");

  return (
    <div className="about-container">
      <div className="categories">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={activeCategory === category ? "active" : ""}
          >
            {t(category)}
          </button>
        ))}
      </div>
      <div className="content">{categories[activeCategory]}</div>
    </div>
  );
};

export default AboutMe;
