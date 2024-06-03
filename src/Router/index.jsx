import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Connect from "../pages/Connect";
import Layout from "../layout/Layout";
import Stack from "../pages/Stack";
import Projects from "../pages/Projects";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="connect" element={<Connect />} />
        <Route path="stack" element={<Stack />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
};

export default Router;
