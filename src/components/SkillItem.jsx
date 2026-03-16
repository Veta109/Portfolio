import React from 'react';

const SkillItem = ({icon, name, percent}) => {
    return (
        <div className="skills__card">
            <div className="skills__info">
                <div className="skills__icon">{icon}</div>
                <div className="skills__name">{name}</div>
                <div className="skills__percent">{percent}%</div>
            </div>

            <div className="skills__bar">
                <div
                    className="skills__progress"
                    style={{ "--progress": `${percent}%` }}
                />
            </div>
        </div>
    );
};

export default SkillItem;