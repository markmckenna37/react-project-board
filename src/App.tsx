import React from 'react';
import Column from "./components/Column"
import './App.css';

const initState:any = [
  {
    title: "TODO",
    items: ["testing", "testing"],
    input: ""
  },
  {
    title: "IN PROGRESS",
    items: ["testing", "testing"],
    input: ""
  },
  {
    title: "COMPLETE",
    items: ["testing", "testing"],
    input: ""
  }
]


function App() {

  const [column, setColumn] = React.useState(initState)
  //TODO:
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
  return (
    <div className="wrapper">
      <div className="mckello">
        <h1>McKello</h1>
        <div className="columnContainer">
          {column.map((value:any, index:any) => (
            <Column 
              index={index}
              handleInputChange={handleInputChange}
              data={value}
              key={index}
              handleAddCard={handleAddCard}
              btnLabel="todo"
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;