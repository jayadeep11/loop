import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BasicsMotion from "./BasicsMotion";
import Hero from "./Hero";
import Installation from "./installation";

const Neovim = () => {
  const [activeSection, setActiveSection] = useState("");
  const [sectionProgress, setSectionProgress] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["installation", "basics", "editing", "plugins"];
      const progress = {};
      let newActiveSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const sectionTop = rect.top + window.scrollY;
          const sectionHeight = rect.height;
          const scrollTop = window.scrollY;
          const scrollBottom = scrollTop + windowHeight;

          if (
            scrollBottom > sectionTop &&
            scrollTop < sectionTop + sectionHeight
          ) {
            const visibleHeight =
              Math.min(scrollBottom, sectionTop + sectionHeight) -
              Math.max(scrollTop, sectionTop);
            const progressPercentage = (visibleHeight / sectionHeight) * 100;
            progress[section] = progressPercentage;

            // Set the current section as active
            newActiveSection = section;
          } else {
            progress[section] = 0;
          }
        }
      });

      setSectionProgress(progress);
      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger it initially in case of already scrolled content

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <Hero />
    </div>
  );
};

export default Neovim;
