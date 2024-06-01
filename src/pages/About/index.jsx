import { useState } from "react";
import AboutMe from "./_components/AboutMe";

const About = () => {
  const [activeCategory, setActiveCategory] = useState("Om Meg");

  return (
    <div>
      <AboutMe
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </div>
  );
};

export default About;
