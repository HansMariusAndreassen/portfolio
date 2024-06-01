import { useTranslation } from "react-i18next";
import { spookyLogo } from "../../assets/logos/logoExports.js";
import LanguageSwitcher from "../../components/LanguageSwitch/index.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className=" text-black">
      <nav className="w-full border-b-2">
        <div className="flex justify-center gap-3"></div>
        <div>
          <img
            className="absolute left-2/4 -translate-x-2/4 top-0 opacity-5"
            style={{ height: "auto", maxWidth: "100%" }}
            src={spookyLogo}
            alt="Spooky Logo"
          />
          <div className="relative flex justify-center m-auto">
            <h1
              className="mt-8 animate-float whitespace-nowrap text-gray-600 text-shadow-slateblue"
              style={{ fontSize: `7vw`, maxWidth: "90vw" }}
            >
              Hans Marius Andreassen
            </h1>
          </div>
        </div>
        <div>
          <ul className="flex justify-around">
            <li className="">
              <Link to="/">{t("Home")}</Link>
            </li>
            <li>
              <Link to="/about">{t("About")}</Link>
            </li>
            <li>
              <Link to="/connect">{t("Connect")}</Link>
            </li>
            <li>
              <Link to="/stack">{t("Stack")}</Link>
            </li>
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
