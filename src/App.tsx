import React from 'react';
import Column from "./components/Column"
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="mckello">
        <h1>McKello</h1>
        <div className="columnContainer">
          <Column 
            label="To Do"
            btnLabel="Move to 'In Progress'"
          />
          <Column 
            label="In Progress"
            btnLabel="Move to 'doing'"
          />
          <Column 
            label="Done"
            
          />

        </div>
      </div>
    </div>
  );
}

export default App;
