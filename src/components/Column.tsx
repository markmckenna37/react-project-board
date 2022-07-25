import React from "react"
import Card from "./Card"

const Column = ({btnLabel, data, handleInputChange, columnIndex, handleAddCard, handleMove, firstColumn, lastColumn, handleDeleteCard}:any) => {
    return (
        <div className="column" style={{backgroundColor: data.backgroundColor}}>
            <h2 className="columnTitle">{btnLabel}</h2>
            {data.items.map((value:any, index:any):any => (
                <Card 
                    key={index}
                    cardTitle={value}
                    handleMove={handleMove}
                    index={index}
                    columnIndex={columnIndex}
                    firstColumn={firstColumn}
                    lastColumn={lastColumn}
                    handleDeleteCard={handleDeleteCard}
                />
            ))}
            <div className="columnInputContainer">
                <input 
                    onChange={(e:any) => handleInputChange(e.target.value, columnIndex)}
                    value={data.input}
                    placeholder="What do you want to do?"
                />
                <button onClick={() => handleAddCard(columnIndex)} className="addCardBtn">Add a task</button>

            </div>
        </div>
    )
}

export default Column;