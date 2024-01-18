import React, { Component, useState } from "react";
import "../styles/App.css";

let arr = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];

function App() {
  const [firstName, SetFirstName] = useState("");
  const [secondName, SetSecondName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [btnClicked, setBtnClicked] = useState(false);

  console.log(firstName, secondName);

  const handleCalculate = (e) => {
    e.preventDefault();

    if (firstName.trim() === "" || secondName.trim() === "") {
      setRelationship("Please Enter valid input");
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
    setRelationship(arr[(firstName.length + secondName.length) % 6]);
    setBtnClicked(true);
  };

  const handleClear = () => {
    SetFirstName("");
    SetSecondName("");
    setBtnClicked(false);
    setRelationship("");
  };

  return (
    <div id="main">
      <form>
        <input
          type="text"
          data-testid="input1"
          placeholder="Enter first name"
          onChange={(e) => SetFirstName(e.target.value)}
          value={firstName}
          name="name1"
        />
        <input
          type="text"
          data-testid="input2"
          placeholder="Enter second name"
          onChange={(e) => SetSecondName(e.target.value)}
          value={secondName}
          name="name2"
        />
        <button
          data-testid="calculate_relationship"
          type="submit"
          onClick={handleCalculate}
        >
          Calculate Relationship Future
        </button>
        <button data-testid="clear" type="reset" onClick={handleClear}>
          Clear
        </button>
      </form>
      <h3 data-testid="answer">{btnClicked && relationship}</h3>
    </div>
  );
}

export default App;
