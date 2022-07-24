import React from "react"
// import Card from "./Card"

const Column = ({btnLabel, data, handleInputChange, index}:any) => {
    return (
        <div className="column">
            <h2 className="columnTitle">{btnLabel}</h2>
            <input 
                onChange={(e:any) => handleInputChange(e.target.value, index)}
                value={data.input}
                placeholder="What do you want to do?"
            />
            <button className="addCardBtn">Add a card</button>
        </div>
    )
}
export default Column