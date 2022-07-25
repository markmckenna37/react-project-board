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
  const handleInputChange = (value:string, columnIndex: number) => {
    const columns = [...column];
    columns[columnIndex].input = value;
    setColumn(columns)
  }

  //Method for handling the addition of an add card

  const handleAddCard = (columnIndex:any) => {
    const columns = [...column];
    columns[columnIndex].items.push(columns[columnIndex].input);
    columns[columnIndex].input = ""
    setColumn(columns)
  }

  //method for handling the card shifts between columns

  const handleMove = (cardIndex:number, fromColumn:number, toColumn:number) => {
    const nextColumn = [...column];
    const shiftingCard = nextColumn[fromColumn].items[cardIndex];
    nextColumn[fromColumn].items.splice(cardIndex, 1)
    nextColumn[toColumn].items.push(shiftingCard);
    setColumn(nextColumn)
  }

  const handleDeleteCard = (cardIndex:number, columnIndex:number) => {
    const columns = [...column];
    columns[columnIndex].items.splice(cardIndex, 1)
    setColumn(columns)
  }



  return (
    <div className="wrapper">
      <div className="mckello">
        <h1>McKello</h1>
        <div className="columnContainer">
          {column.map((value:any, index:number) => (
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
              handleDeleteCard={handleDeleteCard}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;