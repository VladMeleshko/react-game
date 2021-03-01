import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render () {
        return (
            <footer className="footer">
                <p className="autor">Directed by 
                    <a className="author-link" href="https://github.com/VladMeleshko" target="_blank" rel="noreferrer noopener"> Vlad Meleshko </a>
                </p>
            </footer>
        );
    }
}

export default Footer;