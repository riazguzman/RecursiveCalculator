const Calculator = (equation) => {
  // Base case when function takes a singular number as input.
  // Simply return the number.
  if (Number(equation)) {
    return parseInt(equation);
  }

  // Strip brackets if entire equation is surrounded with brackets.
  if (equation[0] === "(" && equation[equation.length - 1] === ")") {
    equation = equation.slice(1, equation.length - 1);
  }

  let j = 0; // Initialize for loop variable.
  let pivotIndex = 0; // Variable stores index of first operator outside brackets.
  let pivotOperator = ""; // Variable to store the first operator outside brackets.
  let inBracket = false; // Variable to flag if loop is in a bracket or not.

  // Loop through the input string for "+" or "-".
  for (j = 0; j < equation.length; j++) {
    // Check if we are in or outside brackets.
    if (equation[j] === "(") {
      inBracket = true;
    }
    if (equation[j] === ")") {
      inBracket = false;
    }

    // If we aren ot in brackets,
    if (!inBracket) {
      // Check for the first "+" or "-".
      if (equation[j] === "-") {
        pivotOperator = "-";
        pivotIndex = j;
        break;
      } else if (equation[j] === "+") {
        pivotOperator = "+";
        pivotIndex = j;
        break;
      }
    }
  }

  // Loop through the input string for "*" or "/" if we don't find a "+" or "-".
  if (pivotOperator === "") {
    inBracket = false;
    for (j = 0; j < equation.length; j++) {
      if (equation[j] === "(") {
        inBracket = true;
      }
      if (equation[j] === ")") {
        inBracket = false;
      }

      // Check for the first "*" or "/".
      if (!inBracket) {
        if (equation[j] === "*") {
          pivotOperator = "*";
          pivotIndex = j;
        } else if (equation[j] === "/") {
          pivotOperator = "/";
          pivotIndex = j;
        }
      }
    }
  }
  // Now we have stored in pivotOperator and pivotIndex, the position at which the
  // input string splits.

  // Recursively solve the remainder of the function based on the pivoting Operator.
  // E.g. If the pivot operator is a "+", split the equation to left and right hand
  // sides of "+" and recursively solve each of them.
  if (pivotOperator === "+") {
    return (
      Calculator(equation.slice(0, pivotIndex)) +
      Calculator(equation.slice(pivotIndex + 1, equation.length))
    );
  } else if (pivotOperator === "-") {
    return (
      Calculator(equation.slice(0, pivotIndex)) -
      Calculator(equation.slice(pivotIndex + 1, equation.length))
    );
  } else if (pivotOperator === "/") {
    return (
      Calculator(equation.slice(0, pivotIndex)) /
      Calculator(equation.slice(pivotIndex + 1, equation.length))
    );
  } else if (pivotOperator === "*") {
    return (
      Calculator(equation.slice(0, pivotIndex)) *
      Calculator(equation.slice(pivotIndex + 1, equation.length))
    );
  }
};

export default Calculator;
