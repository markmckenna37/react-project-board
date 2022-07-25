import React from "react";

const Card = ({cardTitle, handleMove, index, columnIndex, firstColumn, lastColumn, handleDeleteCard}:any) => {
    return (
        <div className="card">
            <button className="exitBtn" onClick={() => {handleDeleteCard(index, columnIndex)}}>X</button>
            {!lastColumn ? <h3>{cardTitle}</h3> : <h3 style={{textDecoration:"line-through"}}>{cardTitle}</h3> }
            <div className="cardBtnContainer">
                {firstColumn ? null : (
                   <button className="moveBtn" onClick={() => {handleMove(index, columnIndex, columnIndex-1)}}>Previous</button>
                )}
                {lastColumn ? null : (
                <button className="moveBtn" onClick={() => {handleMove(index, columnIndex, columnIndex+1)}}>Next</button>
                )}
            </div>
        </div>
    )
}

export default Card;