import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div className="footer__container">
                <div className="footer__links">
                    <div className="footer__link--wrapper">
                        <div className="footer__link--items">
                            <h2>About Us</h2>
                            <Link to="/sign__up">How it works</Link> <Link to="/">Testimonials</Link>
                            <Link to="/">Careers</Link> <Link to="/">Terms of Service</Link>
                        </div>
                        <div className="footer__link--items">
                            <h2>Contact Us</h2>
                            <Link to="/">Contact</Link> <Link to="/">Support</Link>
                            <Link to="/">Destinations</Link>
                        </div>
                    </div>
                    <div className="footer__link--wrapper">
                        <div className="footer__link--items">
                            <h2>Social Media</h2>
                            <Link to="/">Instagram</Link> <Link to="/">Facebook</Link>
                            <Link to="/">Youtube</Link> <Link to="/">Twitter</Link>
                        </div>
                    </div>
                </div>
                <section className="social__media">
                    <div className="social__media--wrap">
                        <p className="website__rights">© Hero Rider 2022. All rights reserved</p>
                    </div>
                </section>
            </div>

        </>
    );
};

export default Footer;