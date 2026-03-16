import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { foto } from '../utils/imgs';

const About = () => {
    const { t } = useTranslation();
    const descriptionsRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <div className="container">
            <div id="about" className="about">
                <div ref={descriptionsRef} className={`about__left  ${visible ? "visible" : ""}`}>
                    <p className="about__left-p">{t("hi")}</p>
                    <h3 className="about__left-name">{t("name1")} <span className='name'>{t("name2")}</span></h3>
                    <p className="about__left-dir">{t("dir")}</p>
                    <p className="about__left-desc">
                        {t("desc1")}<br /><br /> {t("desc2")} <br /><br /> {t("desc3")} <br /><br /> {t("desc4")}
                    </p>
                </div>
                <div className="about__right">
                    <img src={foto} className="about__right-img" alt="photo" />
                </div>
            </div>
        </div>
    );
};

export default About;