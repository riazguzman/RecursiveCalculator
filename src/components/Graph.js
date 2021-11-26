import React, { useEffect, useState } from "react";
import Calculator from "../Algorithms/Calculator2";

export const Graph = () => {
  const [array, setArray] = useState([]);
  const [term, setTerm] = useState("");
  const [shift, setShift] = useState(10);
  const [shiftY, setShiftY] = useState(1);

  const translator = (input, x) => {
    let translated = input;
    translated = translated.replace(/\s+/g, "");
    if (translated[0] === "y") {
      translated = translated.slice(2, translated.length);
    }
    for (let i = 0; i < translated.length; i++) {
      if (translated[i] === "x" && !isNaN(translated[i - 1])) {
        translated = translated.slice(0, i) + "*" + translated.slice(i);
      }
    }
    translated = translated.replaceAll("x", x);
    return translated;
  };

  const ZoomInX = () => {
    setShift(shift + 10);
  };
  const ZoomOutX = () => {
    if (shift > 10) {
      setShift(shift - 10);
    }
  };

  const ZoomInY = () => {
    setShiftY(shiftY + 1);
  };
  const ZoomOutY = () => {
    if (shiftY > 2) {
      setShiftY(shiftY - 1);
    }
  };

  const OnChange = (e) => {
    setTerm(e.target.value);
    console.log(term);
  };

  const CalculateTerm = () => {
    console.log(term);
    let arr = [];
    for (let x = 1; x < 100; x++) {
      if (Calculator(translator(term, x)) < 300) {
        arr.push(Calculator(translator(term, x)));
      }
    }
    setArray(arr);
  };

  useEffect(() => {}, []);

  return (
    <div style={{ padding: "10px" }}>
      <div style={{ margin: "15px", boxSizing: "border-box", display: "fex" }}>
        <div>Enter Equation Here: </div>
        <input type="text" onChange={OnChange} />
        <input type="submit" onClick={CalculateTerm} />
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "10px", marginRight: "5px" }}>x</div>
        <div
          style={{
            border: "1px solid black",
            height: "300px",
            position: "relative",
            overflow: "auto",
            width: "100%",
          }}
        >
          {array.map((val, i) => {
            return (
              <div>
                <div
                  style={{
                    position: "absolute",
                    bottom: `${val * shiftY}px`,
                    left: `${shift * i}px`,
                    fontSize: "6px",
                  }}
                >
                  {val}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ textAlign: "end" }}>y</div>

      <div>
        <button type="button" title="shift to left" onClick={ZoomOutX}>
          Zoom Out X Axis
        </button>
        <button type="button" title="shift to right" onClick={ZoomInX}>
          Zoom In X Axis
        </button>
        <button type="button" title="shift to left" onClick={ZoomOutY}>
          Zoom Out Y Axis
        </button>
        <button type="button" title="shift to right" onClick={ZoomInY}>
          Zoom In Y Axis
        </button>
      </div>
    </div>
  );
};
