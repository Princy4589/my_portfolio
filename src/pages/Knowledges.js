import React from 'react';
import Navigation from '../components/Navigation';

const Knowledges = () => {
    return (
        <div className='knowledges'>
            <Navigation/>
           
            <div className="knowledgesContent">
                <div className='content'>
                    <h2>Langages et Frameworks</h2>
                    <ul>
                        <li>- HTML/CSS</li>
                        <li>- JavaScript, React, Angular, Node, Express, NestJS</li>
                        <li>- PHP, Laravel, Codeigniter</li>
                        <li>- Python, Django</li>
                    </ul>    
                    <h2>Bases de données</h2>  
                    <ul>     
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>Sqlite</li>
                    </ul>
                    <h2>Autres outils</h2>  
                    <ul>     
                        <li>Trello, GitHub, Gitlab, Slack</li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Knowledges;