import React, { Component, useState } from "react";
import "../styles/App.css";

let arr = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [relationship, setRelationship] = useState("");
  const [btnClicked, setBtnClicked] = useState(false);

  console.log(name1, name2);

  function calculateRelationship(e) {
    e.preventDefault();

    if (name1.trim() === "" || name2.trim() === "") {
      setRelationship("Please Enter valid input"); 
    }

    let str1 = name1;
    let str2 = name2;
    for (let t of str1) {
      if (name2.includes(t)) {
        str1 = str1.replace(t, "");
        str2 = str2.replace(t, "");
      }
    }
    setName1(str1);
    setName2(str2);
    setRelationship(arr[(name1.length + name2.length) % 6]);
    setBtnClicked(true);
  };

  const handleClear = () => {
    setName1("");
    setName2("");
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
          onChange={(e) => setName1(e.target.value)}
          value={name1}
          name="name1"
        />
        <input
          type="text"
          data-testid="input2"
          placeholder="Enter second name"
          onChange={(e) => setName2(e.target.value)}
          value={name2}
          name="name2"
        />
        <button
          data-testid="calculate_relationship"
          type="submit"
          onClick={calculateRelationship}
        >
          Calculate Relationship Future
        </button>
        <button data-testid="clear" type="reset" onClick={handleClear}>
          Clear
        </button>
      </form>
      <h3 data-testid="answer">{relationship}</h3>
    </div>
  );
}

export default App;
