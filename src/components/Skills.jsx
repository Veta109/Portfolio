import React from 'react';
import "../scss/App.scss";
import { useEffect, useRef, useState } from "react";
import SkillItem from './SkillItem';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  const skills = [
    {
      icon: <i className="fab fa-html5"></i>,
      name: "HTML",
      percent: 80,
    },
    {
      icon: <i className="fab fa-css3-alt"></i>,
      name: "CSS",
      percent: 75,
    },
    {
      icon: <i className="fab fa-sass"></i>,
      name: "SCSS",
      percent: 75,
    },
    {
      icon: <i className="fab fa-node-js"></i>,
      name: "JS",
      percent: 70,
    },
    {
      icon: <i className="fab fa-react"></i>,
      name: "React",
      percent: 70,
    },
    {
      icon: <i className="fas fa-code"></i>,
      name: "TypeScript",
      percent: 40,
    },
    {
      icon: <i className="fab fa-github"></i>,
      name: "GitHub",
      percent: 50,
    },
    {
      icon: <i className="fab fa-figma"></i>,
      name: "Figma",
      percent: 60,
    },
  ];

  const skillsRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="skills" ref={skillsRef} className={`skills ${animate ? "animate" : ""}`}>
      <h2 className="skills__title">{t("skillsTitle")}</h2>
      {skills.map(({ icon, name, percent }) => (
        <SkillItem
          key={name}
          icon={icon}
          name={name}
          percent={percent}
        />
      ))}
    </div>
  );
};

export default Skills;





