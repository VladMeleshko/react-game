import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    render () {
        return (
            <header className="header">
                <h1 className="title">TIC TOC GAME</h1>
                <ul className="game-modes">
                    <li className="game-modes__button active">Player vs Computer</li>
                    <li className="game-modes__button">Player vs Player</li>
                </ul>
                <ul className="elements-types-list">
                    <li className="element-types active">X</li>
                    <li className="element-types">O</li>
                </ul>
                <button className="new-game">New game</button>
            </header>
        );
    }
}

export default Header;