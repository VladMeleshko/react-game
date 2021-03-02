import React, { Component } from 'react';
import Cell from './Cell.jsx';
import './Field.css';
import soundClick from '../audio/click.mp3';
import soundWin from '../audio/win.mp3'

const Gameinfo = ({ player, value, firstValue, result }) => {
    if (!result) {
        return <p className="info">{player} ({!value ? firstValue : value})</p>
    } else {
        return <p className="info">{result}</p>
    }
}

class Field extends Component {
    state = {
        player: 'Player 1',
        field: [[], [], []],
        result: '',
        value: '',
        gameover: false,
    }

    soundClick = () => {
        const audio = new Audio();
        audio.src = soundClick;
        audio.autoplay = true;
    }

    soundWin = () => {
        const audio = new Audio();
        audio.src = soundWin;
        audio.autoplay = true;
    }

    // computerPlay = (field) => {
    //     const row = Math.floor(Math.random() * 10) % 2;
    //     const column = Math.floor(Math.random() * 10) % 2;

    //     if (field[row][column]) {
    //         this.computerPlay(field);
    //     } else {
    //         return {
    //             row,
    //             column,
    //         }
    //     }
    // }

    gameOver = (field, audio, player) => {
        for (let i = 0; i < field.length; i++) {
            if ((field[i][0] === field[i][1] && field[i][0] === field[i][2] && field[i][0] !== undefined) ||
                (field[0][i] === field[1][i] && field[0][i] === field[2][i] && field[0][i] !== undefined) ||
                (field[0][0] === field[1][1] && field[1][1] === field[2][2] && field[0][0] !== undefined) ||
                (field[0][2] === field[1][1] && field[1][1] === field[2][0] && field[0][2] !== undefined)) {                
                    
                    this.setState({
                        result: `WINNER - ${player}`,
                        gameover: true,
                    })

                    if (audio) {
                        this.soundWin();
                    }
            }
        }
    }

    handleClick = (rowIndex, columnIndex) => {
        const { player, field, value, gameover } = this.state;
        const { audio } = this.props;
        let currentPlayer = player;
        const newField = field.slice();
        let currentValue;
        if (!value) {
            currentValue = this.props.value;
        } else {
            currentValue = value;
        }
        
        // const { row, column } = this.computerPlay(field);
        
        if (!gameover) {    
            if (!field[rowIndex][columnIndex]) {
                newField[rowIndex][columnIndex] = currentValue;

                if (currentPlayer === 'Player 1') {
                    currentPlayer = 'Player 2';
                } else {
                    currentPlayer = 'Player 1'
                }

                if (currentValue === 'X') {
                    currentValue = 'O';
                } else {
                    currentValue = 'X'
                }
            }

            this.setState({
                player: currentPlayer,
                field: newField,
                value: currentValue,
            })

            if (!audio) {
                this.soundClick();
            }
            
            this.gameOver(field, !audio, player);
        }
    }

    render() {
        return (
            <main className="main">
                <div className="game-info">
                    <Gameinfo 
                        result={this.state.result}
                        player={this.state.player}
                        value={this.state.value}
                        firstValue={this.props.value}
                    />
                </div>
                <table className={this.state.gameover ? "end" : "noend"}> {/* ?????? */}
                    <tbody>
                        {[0, 1, 2].map(rowIndex => (
                            <tr key={rowIndex}>
                                {[0, 1, 2].map(columnIndex => (
                                    <Cell
                                        key={`${rowIndex}${columnIndex}`}
                                        onClick={() => this.handleClick(rowIndex, columnIndex)} 
                                        value={this.state.field[rowIndex][columnIndex]}
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