import React from 'react';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <div id="contacts" className="contacts">
      <div className="container contacts__wrap">
        <div>
          <h2 className="contacts__title">{t("contacts.title")}</h2>
          <p className="contacts__desc">
          {t("contacts.desc")}
          </p>
        </div>

        <ul className="contacts__list">
          <li className="contacts__item">
            <a href="mailto:tsoyveta@gmail.com" className="contacts__item-link">
              <span className="contacts__label">Email</span>
              <span className="contacts__value">tsoyveta@gmail.com</span>
            </a>
          </li>
          <li className="contacts__item">
            <a href="https://t.me/tsoy_veta_05" target="_blank" className="contacts__item-link">
              <span className="contacts__label">Telegram</span>
              <span className="contacts__value">@tsoy_veta_05</span>
            </a>
          </li>
          <li className="contacts__item">
            <a
              href="tel:+998977488472"
              className="contacts__item-link"
            >
              <span className="contacts__label">{t("contacts.phone")}</span>
              <span className="contacts__value">+998 97 748-84-72</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
