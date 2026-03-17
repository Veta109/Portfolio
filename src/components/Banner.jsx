import React from 'react';
import "../assets/scss/App.scss";
import { Trans, useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();
  return (
    <section className="banner">
      <div className="container banner__wrap">
        <div className="banner__content">
          <p className="banner__tag">Frontend Developer · React · JS</p>
          <h1 className="banner__title">
            <Trans i18nKey="banner.title">
              {t("banner.title")}
            </Trans>
          </h1>
          <p className="banner__desc">
            {t("banner.desc")}
          </p>
          <div className="banner__btns">
            <a href="#project" className="banner__btn look">
              {t("banner.btnProject")}
            </a>
            <a href="#contacts" className="banner__btn connect">
              {t("banner.btnContact")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;


