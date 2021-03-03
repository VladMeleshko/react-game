import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    state = {
        sound: true,
    }

    toggleSounds = () => {
        if (this.state.sound) {
            this.setState({
                sound: false,
            })
        } else {
            this.setState({
                sound: true,
            })
        }

        this.props.switchAudio(!this.state.sound);
    }

    changeActiveParam = (e, elementsSelector, activeClass, param) => {
        const elemArr = document.querySelectorAll(elementsSelector);
        elemArr.forEach(elem => elem.classList.remove(activeClass));
        e.target.classList.add(activeClass);
        if (param === 'PvC' || param === 'PvP') {
            this.props.changeMode(param);
        } else if (param ===  'X' || param === 'O') {
            this.props.changeValue(param);
        }
    }

    render () {
        return (
            <header className="header">
                <h1 className="title">TIC TAC TOE</h1>
                <button className="sound-switcher" onClick={this.toggleSounds}>Sound: {this.state.sound ? 'ON' : "OFF"}</button>
                <div className="game-modes">
                    <h2 className="game-modes__title">Choose mode:</h2>
                    <ul className="game-modes__list">
                        <li className="game-modes__button" onClick={(e) => this.changeActiveParam(e, ".game-modes__button", "active", "PvC")}>Player vs Computer</li>
                        <li className="game-modes__button active" onClick={(e) => this.changeActiveParam(e, ".game-modes__button", "active", "PvP")}>Player vs Player</li>
                    </ul>
                </div>
                <div className="elements-types">
                    <h2 className="elements-types__title">Choose your Champion:</h2>
                    <ul className="elements-types__list">
                        <li className="element-types active" onClick={(e) => this.changeActiveParam(e, ".element-types", "active", "X")}>X</li>
                        <li className="element-types" onClick={(e) => this.changeActiveParam(e, ".element-types", "active", "O")}>O</li>
                    </ul>
                </div>
                <button className="new-game" onClick={() => this.props.startNewGame(true)}>New game</button>
            </header>
        );
    }
}

export default Header;