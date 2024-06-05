import { useState, useEffect } from "react";
import {
  reactLogo,
  tailwindLogo,
  viteLogo,
} from "../../assets/logos/logoExports";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className={`fixed bottom-0 left-2/4 -translate-x-1/2 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full flex justify-between gap-10 items-center whitespace-nowrap">
        <div>
          <p>Copyright&copy; HMA - 2024</p>
        </div>
        <div className="hidden sm:block">
          <span className="flex items-center whitespace-nowrap">
            Built with:
            <img src={reactLogo} alt="React logo" className="h-5 w-5" />
            <img
              src={tailwindLogo}
              alt="Tailwind CSS logo"
              className="h-5 w-5"
            />
            <img src={viteLogo} alt="Vite logo" className="h-5 w-5" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
