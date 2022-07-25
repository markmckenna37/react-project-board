import React from "react";

const Card = ({cardTitle}:any) => {
    return (
        <div className="card">
            <h3>{cardTitle}</h3>
            <div className="cardBtnContainer">
                <button onClick={() => {}}>Previous</button>
                <button onClick={() => {}}>Next</button>
            </div>
        </div>
    )
}

export default Card;