import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";
import { useContext } from "react";
import ThemeContext from "../../Theme";

const Layout = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme === "light" ? "" : "bg-[#1D1D1D] bg-opacity-20 text-white"}`}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
