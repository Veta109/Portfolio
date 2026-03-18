import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [theme, setTheme] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (theme == 'light') {
      body.classList.add('light');
    } else {
      body.classList.remove('light');
    }
  }, [theme]);

  const changeLanguage = () => {
    let currentLang = language == "ru" ? "en" : "ru";
    setLanguage(currentLang);
    i18n.changeLanguage(currentLang);
  }

  const changeTheme = () => {
    setTheme(prev => prev == 'light' ? '' : 'light');
  }
  return (
    <>
      <nav className="navbar">
        <a href="#" className="navbar__logo">
          <p>
            <span className="neon" style={{ color: '#d4fc13' }}>&lt;</span>
            <span style={{ color: '#8afc30' }}>\</span>
            <span style={{ color: '#eaff4f' }}>/</span>
            <span style={{ color: '#8afc30' }}>e</span>
            <span style={{ color: '#eaff4f' }}>ta</span>
            <span className="neon" style={{ color: '#8afc30' }}>&gt;</span>
          </p>
        </a>
        <ul className={`navbar__list ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
          <li className="navbar__list-item">
            <a href="#about" className="navbar__list-item_link">{t("about")}</a>
          </li>
          <li className="navbar__list-item">
            <a href="#skills" className="navbar__list-item_link">{t("skills")}</a>
          </li>
          <li className="navbar__list-item">
            <a href="#project" className="navbar__list-item_link">{t("project")}</a>
          </li>
          <li className="navbar__list-item">
            <a href="#contacts" className="navbar__list-item_link">{t("contact")}</a>
          </li>
        </ul>
        <div className={`navbar__menuBtn ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navbar__wrap-btn">
          <button
            className="navbar__btn"
            onClick={changeLanguage}
          >
            {language}
          </button>
          <button
            className='navbar__btn navbar__btn--theme'
            onClick={changeTheme}
          >
            {theme == 'light' ? <i className="far fa-moon" style={{ color: "#58a000" }}></i> : <i className="fas fa-sun" style={{ color: "#050801" }}></i>}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;