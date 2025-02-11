import React from 'react';
import Navigation from '../components/Navigation';
import { portfolioData } from '../data/portfolioData';

const Portfolio = () => {
    return (
        <div className='portfolio'>
            <Navigation />
            
            <div className='portfolioContent'>
                <div className='content'>
                    <h2>Mes Projets</h2>
                    <div className='projects'>
                        {portfolioData.map((project) => (
                            <div key={project.id} className='project'>
                                <img src={project.picture} alt={project.name} className='project-img' />
                                <h3>{project.name}</h3>
                                <p>{project.info}</p>
                                <ul className='languages'>
                                    {project.languages.map((lang, index) => (
                                        <li key={index} className='lang-item'>
                                            <i className={project.languagesIcons[index]}></i> {lang}
                                        </li>
                                    ))}
                                </ul>
                                <a href={project.source} target='_blank' rel='noopener noreferrer' className='source-link'>Voir le code</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
