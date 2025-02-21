import React from 'react';
import Navigation from '../components/Navigation';

const Knowledges = () => {
    return (
        <div className='knowledges'>
            <Navigation/>
           
            <div className="knowledgesContent">
                <div className='content'>
                    <h1>Compétences</h1>
                    
                    <div className="knowledge-section">
                        <h2>Langages et Frameworks</h2>
                        <div className="skills-grid">
                            <div className="skill-item">
                                <i className="fab fa-html5"></i>
                                <span>HTML/CSS</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-js"></i>
                                <span>JavaScript, React, Angular</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-node"></i>
                                <span>Node, Express, NestJS</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-php"></i>
                                <span>PHP, Laravel, Codeigniter</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-python"></i>
                                <span>Python, Django</span>
                            </div>
                        </div>
                    </div>

                    <div className="knowledge-section">
                        <h2>Bases de données</h2>
                        <div className="skills-grid">
                            <div className="skill-item">
                                <i className="fas fa-database"></i>
                                <span>MongoDB</span>
                            </div>
                            <div className="skill-item">
                                <i className="fas fa-database"></i>
                                <span>MySQL</span>
                            </div>
                            <div className="skill-item">
                                <i className="fas fa-database"></i>
                                <span>SQLite</span>
                            </div>
                        </div>
                    </div>

                    <div className="knowledge-section">
                        <h2>Outils & Environnements</h2>
                        <div className="skills-grid">
                            <div className="skill-item">
                                <i className="fab fa-github"></i>
                                <span>Git/GitHub</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-gitlab"></i>
                                <span>GitLab</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-trello"></i>
                                <span>Trello</span>
                            </div>
                            <div className="skill-item">
                                <i className="fab fa-slack"></i>
                                <span>Slack</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Knowledges;