import React from "react"
import Card from "./Card"

const Column = ({btnLabel, data, handleInputChange, index, handleAddCard}:any) => {
    return (
        <div className="column">
            <h2 className="columnTitle">{btnLabel}</h2>
            {data.items.map((value:any, index:any):any => (
                <Card 
                    key={index}
                    cardTitle={value}
                />
            ))}
            <input 
                onChange={(e:any) => handleInputChange(e.target.value, index)}
                value={data.input}
                placeholder="What do you want to do?"
            />
            <button onClick={() => handleAddCard(index)} className="addCardBtn">Add a task</button>
        </div>
    )
}

export default Column;