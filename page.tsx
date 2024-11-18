'use client';
import React, { useState } from "react";
function Card() {
  const [validationResult, setValidationResult] = useState("");

  function inword(word: string) {
    const array = [];
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== " " && word[i] !== "-") {
        array.push(word[i]);
      }
    }

    const reversedArray = array.reverse();
    let localSumOdd = 0;
    let localSumEven = 0;

    for (let i = 0; i < reversedArray.length; i++) {
      if (i % 2 === 0) {
        localSumOdd += Number(reversedArray[i]);
      }
    }

    for (let j = 0; j < reversedArray.length; j++) {
      if (j === 2 || j % 2 === 0) {
        const trail = Number(reversedArray[j]) * 2;
        if (trail >= 10) {
          localSumEven += 1 + (trail % 10);
        } else {
          localSumEven += trail;
        }
      }
    }


    const total = localSumEven + localSumOdd;
    if (total % 10 == 0) {
      setValidationResult(" The Given Debit/Credit Card Number is VALID");
    } else {
      setValidationResult("The Given Debit/Credit Card Number is INVALID");
    }
  }

  return (
    <>
      <head>
        <title>Card Validation</title>
      </head>
      <body>
        <h1 className="head">Credit/Debit Card Validation</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div id="car1">
            Credit/Debit card number:
            <input id="in" type="text" placeholder="Enter Your Credit/Debit card number"/>
          </div>
          <div id="but">
            <button className="butt" onClick={(e) => {e.preventDefault();const input = document.getElementById("in") as HTMLInputElement;if (input) inword(input.value); }}>Validate</button>
          </div>
        </form>
        <div id="result">
          <h2 id="space">{validationResult}</h2>
        </div>
      </body>
    </>
  );
}

export default Card;
