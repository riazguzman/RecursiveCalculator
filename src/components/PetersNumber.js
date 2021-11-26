import React, { useState } from "react";
import AscendingNumber from "../Algorithms/AscendingNumbers";

export const PetersNumber = () => {
  const [Term, setTerm] = useState("");
  const [Answer, setAnswer] = useState("");

  const OnChange = (e) => {
    setTerm(e.target.value);
    console.log(Term);
  };

  const CalculateTerm = () => {
    setAnswer(AscendingNumber(Term));
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
        Search For Peter's Number Here:
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
