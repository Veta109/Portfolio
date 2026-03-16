import React from 'react';
import { useTranslation } from 'react-i18next';


const ProjectCard = ({ image, title, description, tools, link, github }) => {
  const {t} = useTranslation();
  return (
    <div className="projects__card">
      <img src={image} alt={title} className="projects__card-image" />
      <h3 className="projects__card-title">{title}</h3>
      <p className="projects__card-desc">{description}</p>
      <div className="projects__tools">
        {tools?.map((item) => (
          <div key={item} className="projects__tools-item">
            {item}
          </div>
        ))}
      </div>

      {(github || link) && (
        <div className="projects__links">
          {link && (
            <a href={link} target="_blank" className="projects__link">
              {t("view")}
            </a>
          )}
          {github && (
            <a href={github} target="_blank" className="projects__link projects__link-gitHub">
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;

