import React from 'react';
import Navigation from '../components/Navigation';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            
            <div className="contactContent">
                <div className="header">
                    <h1>Contact</h1>
                    <h2>Prenons contact</h2>
                </div>

                <div className="contactContainer">
                    <div className="contactBox">
                        <div className="contactInfo">
                            <div className="infoItem">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="content">
                                    <h3>Localisation</h3>
                                    <p>Antananarivo, Madagascar</p>
                                </div>
                            </div>
                            <div className="infoItem">
                                <i className="fas fa-mobile-alt"></i>
                                <div className="content">
                                    <h3>Téléphone</h3>
                                    <p>034 47 270 12</p>
                                </div>
                            </div>
                            <div className="infoItem">
                                <i className="fas fa-envelope"></i>
                                <div className="content">
                                    <h3>Email</h3>
                                    <p>princyandrianantenaina@yahoo.com</p>
                                </div>
                            </div>
                        </div>

                        <form className="contactForm">
                            <div className="formGroup">
                                <input type="text" required placeholder="Nom" />
                            </div>
                            <div className="formGroup">
                                <input type="email" required placeholder="Email" />
                            </div>
                            <div className="formGroup">
                                <input type="text" required placeholder="Sujet" />
                            </div>
                            <div className="formGroup">
                                <textarea required placeholder="Message"></textarea>
                            </div>
                            <button type="submit">
                                Envoyer <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>

                    <div className="socialLinks">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;