import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import useClickOutside from "../../hooks/HandleOutsideClick";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const dropDownRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const handleOutsideClick = () => {
    setIsOpen(false);
  };

  useClickOutside(dropDownRef, handleOutsideClick);

  return (
    <div className="relative inline-block text-left" ref={dropDownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium hover:bg-slateBlue hover:text-white focus:outline-none"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {t("Language")}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.292 7.292a1 1 0 011.414 0L10 10.586l3.293-3.294a1 1 0 011.414 1.415l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.415z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1 bg-white text-black" role="none">
            <button
              className="block px-4 py-2 text-sm hover:bg-slateBlue hover:text-white w-full text-right"
              role="menuitem"
              onClick={() => changeLanguage("en")}
            >
              English
            </button>
            <button
              className="block px-4 py-2 text-sm hover:bg-slateBlue hover:text-white w-full text-right"
              role="menuitem"
              onClick={() => changeLanguage("no")}
            >
              Norsk
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
