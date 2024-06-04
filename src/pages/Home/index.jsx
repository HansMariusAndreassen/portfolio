import { useTranslation } from "react-i18next";
import profileImage from "../../assets/profile/selfie_cv.jpg";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center  p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">{t("welcome")}</h1>
        <p className=" max-w-xl mx-auto mb-6">{t("welcomeText")}</p>
      </div>
      <img
        src={profileImage}
        alt="Profile"
        className="mb-8 rounded-sm border-slateBlue border-t-4 border-l-4 shadow-lg"
        style={{ height: "300", width: "300px" }}
      />
      <div className="text-center p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-2">{t("thankYou")}</h1>
      </div>
    </div>
  );
};

export default Home;
