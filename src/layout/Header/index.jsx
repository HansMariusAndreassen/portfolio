import { useTranslation } from "react-i18next";
import { spookyLogo } from "../../assets/logos/logoExports.js";
import LanguageSwitcher from "../../components/LanguageSwitch/index.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="text-2xl text-black">
      <nav className="w-full border-b-2">
        <div className="flex justify-center gap-3"></div>
        <div>
          <img
            className="m-auto opacity-5"
            style={{ height: "auto", maxWidth: "100%" }}
            src={spookyLogo}
            alt="Spooky Logo"
          />
          <h1 className="font-serif absolute -mt-24 left-2/4 -translate-x-1/2">
            Hans Marius Andreassen
          </h1>
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
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
