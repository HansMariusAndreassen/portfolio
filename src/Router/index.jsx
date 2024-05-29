import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import About from "../pages/About";
import Connect from "../pages/Connect";
import Layout from "../layout/Layout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="about" element={<About />} />
        <Route path="connect" element={<Connect />} />
      </Route>
    </Routes>
  );
};

export default Router;
