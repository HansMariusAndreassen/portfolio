import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { spookyLogo } from "../../assets/logos/logoExports.js";
import LanguageSwitcher from "../../components/LanguageSwitch/index.jsx";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="text-black">
      <nav className="w-full border-b-2">
        <div className="flex flex-col items-center p-4 relative">
          <img
            className="fixed opacity-5 -z-10"
            style={{ height: "auto", maxWidth: "90vw" }}
            src={spookyLogo}
            alt="Spooky Logo"
          />
          <h1
            className="animate-float whitespace-nowrap text-gray-600 text-shadow-slateblue"
            style={{ fontSize: `6vw`, maxWidth: "100vw" }}
          >
            Hans Marius Andreassen
          </h1>
          <div className="absolute right-4 top-4 md:hidden">
            <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} />
          </div>
        </div>
        <div ref={menuRef} className={`md:flex ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row justify-around items-center w-full">
            <li className="px-3 py-2">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `block md:inline px-3 py-2 rounded transition ${
                    isActive ? "bg-slateBlue bg-opacity-15" : ""
                  } hover:bg-slateBlue hover:text-white`
                }
                onClick={handleLinkClick}
              >
                {t("Home")}
              </NavLink>
            </li>
            <li className="px-3 py-2">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block md:inline px-3 py-2 rounded transition ${
                    isActive ? "bg-slateBlue bg-opacity-15" : ""
                  } hover:bg-slateBlue hover:text-white`
                }
                onClick={handleLinkClick}
              >
                {t("About")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `block md:inline px-3 py-2 rounded transition ${
                    isActive ? "bg-slateBlue bg-opacity-15" : ""
                  } hover:bg-slateBlue hover:text-white`
                }
                onClick={handleLinkClick}
              >
                {t("Projects")}
              </NavLink>
            </li>
            <li className="px-3 py-2">
              <NavLink
                to="/connect"
                className={({ isActive }) =>
                  `block md:inline px-3 py-2 rounded transition ${
                    isActive ? "bg-slateBlue bg-opacity-15" : ""
                  } hover:bg-slateBlue hover:text-white`
                }
                onClick={handleLinkClick}
              >
                {t("Connect")}
              </NavLink>
            </li>
            <li className="px-3 py-2">
              <NavLink
                to="/stack"
                className={({ isActive }) =>
                  `block md:inline px-3 py-2 rounded transition ${
                    isActive ? "bg-slateBlue bg-opacity-15" : ""
                  } hover:bg-slateBlue hover:text-white`
                }
                onClick={handleLinkClick}
              >
                {t("Stack")}
              </NavLink>
            </li>
            <li className="px-3 py-2">
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
