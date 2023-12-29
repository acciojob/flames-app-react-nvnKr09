import React, { Component, useState } from "react";
import "../styles/App.css";

let arr = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"]

function App() {
  const [firstName, SetFirstName] = useState("");
  const [secondName, SetSecondName] = useState("");
  const [relationship, setRelationship] = useState("");

  console.log(firstName, secondName);

  const handleCalculate = () => {

    if (firstName == "" || secondName == "") {
      setRelationship("Please Enter valid input")
    }

    let str1 = firstName;
    let str2 = secondName;
    for (let t of str1) {
      if (secondName.includes(t)) {
        str1 = str1.replace(t, "");
        str2 = str2.replace(t, "");
      }
    }
    SetFirstName(str1);
    SetSecondName(str2);
    setRelationship(arr[(str1.length + str2.length) % 6])
  }

  const handleClear = () => {
    SetFirstName("");
    SetSecondName("");
    setRelationship("");
  };

  return (
    <div id="main">
      <input
        type="text"
        data-testid="input1"
        placeholder="Enter first name"
        onChange={(e) => SetFirstName(e.target.value)}
        value={firstName}
      />
      <input
        type="text"
        data-testid="input2"
        placeholder="Enter second name"
        onChange={(e) => SetSecondName(e.target.value)}
        value={secondName}
      />
      <button data-testid="calculate_relationship" onClick={handleCalculate}>
        Calculate Relationship Future
      </button>
      <button data-testid="clear" onClick={handleClear}>
        Clear
      </button>

      <h3>{relationship}</h3>
    </div>
  );
}

export default App;
