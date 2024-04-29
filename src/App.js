import React from "react";
import "./App.css";
import Transactions from "./BankInfo";


function App() {
  return (
    <div className="App">
      <header className="Appheader">
        <h1>The Royal Bank Of Flatiron</h1>
      </header>
      <Transactions />
    </div>
  );
}

export default App;
