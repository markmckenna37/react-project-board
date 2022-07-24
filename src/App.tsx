import React from 'react';
import Column from "./components/Column"
import './App.css';

const initState:any = [
  {
    title: "TODO",
    todos: [],
    input: ""
  },
  {
    title: "IN PROGRESS",
    todos: [],
    input: ""
  },
  {
    title: "COMPLETE",
    todos: [],
    input: ""
  }
]


function App() {

  const [col] = React.useState(initState)
  //TODO:
  //Method for handling input changes on add-card

  //Method for handling the addition of an add card

  //method for handling the card shifts between columns
  return (
    <div className="wrapper">
      <div className="mckello">
        <h1>McKello</h1>
        <div className="columnContainer">
          {col.map(() => (
            <Column 
              label={"todo"}
              btnLabel="Move to 'In Progress'"
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;