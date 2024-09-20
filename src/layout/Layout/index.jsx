import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";
import { useContext } from "react";
import ThemeContext from "../../Theme";
import RenderBackground from "../../components/Animate";

const Layout = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className="fixed inset-0 overflow-hidden z-0">
        <RenderBackground />
      </div>
      <div
        className={`relative z-10 min-h-screen flex flex-col ${theme === "light" ? "" : "text-white"}`}
      >
        <div className={`flex-grow ${theme === "light" ? "" : "dark"}`}>
          <Header />
          <Main />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
