import React, { useState } from "react";
import Calculator from "../Algorithms/Calculator2";

export const TermCalculator = () => {
  const [Term, setTerm] = useState("");
  const [Answer, setAnswer] = useState("");

  const OnChange = (e) => {
    setTerm(e.target.value);
    console.log(Term);
  };

  const CalculateTerm = () => {
    setAnswer(Calculator(Term));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50vw",
        margin: "auto",
      }}
    >
      <label htmlFor="number" name="number" style={{ textAlign: "center" }}>
        Enter Term Here:
      </label>
      <input type="text" onChange={OnChange} style={{ textAlign: "center" }} />
      <input type="submit" onClick={CalculateTerm} />
      <div
        style={{
          textAlign: "center",
          fontSize: "100px",
          height: "140px",
          overflow: "auto",
        }}
      >
        {Answer}
      </div>
    </div>
  );
};
