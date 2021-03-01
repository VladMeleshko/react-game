import React from 'react';
import './Cell.css';

const Cell = ({ onClick, value }) => {
    return <td onClick={onClick}>{value}</td>;
}

export default Cell;