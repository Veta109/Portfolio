import React from 'react';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';
import { airPods, dBurger, food, todo, totembo, weather } from '../utils/imgs';

const Projects = () => {

  const { t } = useTranslation();
  const projects = [
    {
      image: airPods,
      title: "AirPods Pro",
      description: t("projects.cardDesc1"),
      link: "https://veta109.github.io/Air_Pods/",
      tools: ["HTML", "CSS"],
      github: "https://github.com/Veta109/Air_Pods",
    },
    {
      image: totembo,
      title: "Totembo",
      description:t("projects.cardDesc2"),
      link: "https://veta109.github.io/Totembo/",
      tools: ["HTML", "CSS"],
      github: "https://github.com/Veta109/Totembo",
    },
    {
      image: food,
      title: "Food100",
      description:t("projects.cardDesc3"),
      link: "https://veta109.github.io/food100/",
      tools: ["HTML", "CSS", "JS"],
      github: "https://github.com/Veta109/food100",
    },
    {
      image: dBurger,
      title: "dBurger",
      description:t("projects.cardDesc4"),
      link: "https://veta109.github.io/dBurger/",
      tools: ["HTML", "CSS", "JS"],
      github: "https://github.com/Veta109/dBurger",
    },
    {
      image: weather,
      title: "Погода",
      description:t("projects.cardDesc5"),
      link: "https://weather-kappa-sable.vercel.app/",
      tools: ["React", "JS", "SCSS", "reduxjs/toolkit", "axios", "API"],
      github: 'https://github.com/Veta109/weather',
    },
    {
      image: todo,
      title: "Todo",
      description:t("projects.cardDesc6"),
      link: "https://tstodo-two.vercel.app/",
      tools: ["React", "TypeScript", "SCSS", "i18next", "react-toastify", "uuid"],
      github: "https://github.com/Veta109/ToDo_ts",
    },
  ];

  return (
    <div id="project" className="projects">
      <div className="container">
        <h2 className="projects__title">{t("projects.title")}</h2>
        <p className="projects__desc">
          {t("projects.desc")}
        </p>

        <div className="projects__wrap">
          {projects.map(({ image, title, description, tools, link, github }) => (
            <ProjectCard
              key={title}
              image={image}
              title={title}
              description={description}
              tools={tools}
              link={link}
              github={github}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

