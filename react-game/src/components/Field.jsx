import React, { Component } from 'react';
import Cell from './Cell.jsx';
import './Field.css';

class Field extends Component {
    state = {
        player: 'user',
        field: [[], [], []],
        result: '',
        element: '',
        gameover: false,
    }

    handleClick = (e, rowIndex, columnIndex) => {
        const { player, field, element, gameover } = this.state;
        console.log(e.target);
        e.target.innerText = `${element}`;
        let currentPlayer = player;
        let currentElement = element;
        const newField = field.slice();

        if (!gameover) {    
            if (!field[rowIndex][columnIndex]) {
                newField[rowIndex][columnIndex] = player;

                if (currentPlayer === 'user') {
                    currentPlayer = 'com';
                } else {
                    currentPlayer = 'user'
                }

                if (currentElement === 'X') {
                    currentElement = 'O';
                } else {
                    currentElement = 'X'
                }

                if (currentElement === '') {
                    currentElement = 'X'
                }
            }

            this.setState({
                player: currentPlayer,
                field: newField,
                element: currentElement,
            })
        }
    }

    render() {
        return (
            <main className="main">
                <div className="game-info">Win</div>
                <table className={this.state.gameover ? "end" : "noend"}>
                    <tbody>
                        {[0, 1, 2].map(rowIndex => (
                            <tr key={rowIndex}>
                                {[0, 1, 2].map(columnIndex => (
                                    <Cell
                                        key={`${rowIndex}${columnIndex}`}
                                        onClick={(e) => this.handleClick(e, rowIndex, columnIndex)} 
                                        value={this.state.element}
                                    />
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        );
    }
}

export default Field;