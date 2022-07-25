import React from "react";

const Card = ({cardTitle, handleMove, index, columnIndex, firstColumn, lastColumn}:any) => {
    return (
        <div className="card">
            <h3>{cardTitle}</h3>
            <div className="cardBtnContainer">
                {firstColumn ? null : (
                    <button onClick={() => {handleMove(index, columnIndex, columnIndex-1)}}>Previous</button>
                )}
                {lastColumn ? null : (
                    <button onClick={() => {handleMove(index, columnIndex, columnIndex+1)}}>Next</button>
                )}
            </div>
        </div>
    )
}

export default Card;