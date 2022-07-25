import React from 'react';
import Column from "./components/Column"
import './App.css';

const initState:any = [
  {
    title: "TODO",
    items: [],
    input: "",
    backgroundColor: "#e077d270"
  },
  {
    title: "IN PROGRESS",
    items: [],
    input: "",
    backgroundColor: "#31aaf0a8"
  },
  {
    title: "COMPLETE",
    items: [],
    input: "",
    backgroundColor: "#28fa6e70"
  }
]


function App() {

  const [column, setColumn] = React.useState(initState)

  //Method for handling input changes on add-card
  const handleInputChange = (value:any, columnIndex: any) => {
    const nextColumn = [...column];
    nextColumn[columnIndex].input = value;
    setColumn(nextColumn)
  }

  //Method for handling the addition of an add card

  const handleAddCard = (columnIndex:any) => {
    const nextColumn = [...column];
    nextColumn[columnIndex].items.push(nextColumn[columnIndex].input);
    nextColumn[columnIndex].input = ""
    setColumn(nextColumn)
  }

  //method for handling the card shifts between columns

  const handleMove = (cardIndex:any, fromColumn:any, toColumn:any) => {
    const nextColumn = [...column];
    const shiftingCard = nextColumn[fromColumn].items[cardIndex];
    nextColumn[fromColumn].items.splice(cardIndex, 1)
    nextColumn[toColumn].items.push(shiftingCard);
    setColumn(nextColumn)
  }

  //todo: handle delete item



  return (
    <div className="wrapper">
      <div className="mckello">
        <h1>McKello</h1>
        <div className="columnContainer">
          {column.map((value:any, index:any) => (
            <Column 
              columnIndex={index}
              handleInputChange={handleInputChange}
              data={value}
              key={index}
              handleAddCard={handleAddCard}
              handleMove={handleMove}
              firstColumn={index === 0}
              lastColumn={index === column.length -1}
              btnLabel={value.title}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;