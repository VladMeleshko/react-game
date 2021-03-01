import React, { Component } from 'react';
import Cell from './Cell.jsx';
import './Field.css';

class Field extends Component {
    state = {
        player: 'user',
        field: [[], [], []],
        result: '',
        gameover: false,
    }

    handleClick = (rowIndex, columnIndex) => {
        const { player, field, gameover } = this.state;
        let currentPlayer = player;
        const newField = field.slice();

        if (!gameover) {    
            if (!field[rowIndex][columnIndex]) {
                newField[rowIndex][columnIndex] = player;

                if (currentPlayer === 'user') {
                    currentPlayer = 'com';
                } else {
                    currentPlayer = 'user'
                }
            }

            this.setState({
                player: currentPlayer,
                field: newField, 
            })
        } else {
            this.setState( {
                gameover: true,
            })
        }
    }

    render() {
        return (
            <table className={this.state.gameover ? "end" : "noend"}>
                <tbody>
                    {[0, 1, 2].map(rowIndex => (
                        <tr key={rowIndex}>
                            {[0, 1, 2].map(columnIndex => (
                                <Cell key={columnIndex} onClick={() => this.handleClick(rowIndex, columnIndex)} />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Field;