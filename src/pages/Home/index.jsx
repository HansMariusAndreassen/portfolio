import { useTranslation } from "react-i18next";
import profileImage from "../../assets/profile/portrait.jpeg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/about");
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 -mt-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl text-center font-bold mb-2">{t("welcome")}</h1>
        <p className=" max-w-xl mx-auto mb-6">{t("welcomeText")}</p>
      </div>
      <div>
        <img
          src={profileImage}
          alt="Profile"
          className="mb-8 border-slateBlue border-t-4 border-l-4 shadow-lg w-[250px] h-auto"
        />
      </div>
      <button
        onClick={handleExplore}
        className="px-3 py-1 bg-slateBlue rounded-md text-white shadow-md dark:shadow-white hover:shadow-lg hover:bg-opacity-80 hover:rotate-3 transition ease-in-out duration-200 mt-8"
      >
        {t("explore")}
      </button>
    </div>
  );
};

export default Home;
