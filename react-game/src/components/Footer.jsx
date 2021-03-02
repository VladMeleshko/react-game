import React, { Component } from 'react';
import './Footer.css'
import logo from '../rs_school_js.svg';

class Footer extends Component {
    render () {
        return (
            <footer className="footer">
                <p className="autor">Directed by
                    <a className="author-link" href="https://github.com/VladMeleshko" target="_blank" rel="noreferrer noopener"> Vlad Meleshko</a>, 2021
                </p>
                <a className="school-logo" href="https://rs.school/js/" target="_blank" rel="noreferrer noopener">
                    <img src={logo} alt="school-logo" className="school-logo__img" />
                </a>
            </footer>
        );
    }
}

export default Footer;