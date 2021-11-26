const AscendingNumbers = (number) => {
  // Translate number to string.
  number = number.toString();

  // Initialize loop variables.
  let j;
  let i;

  // Variable for storing if we want to break out of outer loop.
  let breakOuter = false;

  // Loop through each element of the number,
  for (i = 1; i < number.length && !breakOuter; i++) {
    // If we find an element where it is smaller than the previous,
    for (j = i + 1; j >= 0; j--) {
      // Break out of the loop.
      if (number[i] < number[j - 1]) {
        breakOuter = true;
        break;
      }
    }
  }

  // Save the number that will be taken from the original number.
  // E.g. if we have 67123, takeNum = 123.
  // E.g. if we have 12342, takeNum = 2.
  // Motive is to make 67123 equal to 67000, then minus 1.
  let takeNum = number.slice(j, number.length);
  return Number(number) - Number(takeNum) - 1;
};

// Funciton tests if number is ascending.
const TestAscending = (number) => {
  let i, j; // Initialize loop variables.
  let ordered = true; // Variable to flag if numbers are ordered.

  // Store number as string.
  let stringnum = number.toString();

  // Loop through and break out if previous number is smaller than current.
  for (i = 1; i < stringnum.length && ordered; i++) {
    for (j = i - 1; j >= 0; j--) {
      if (stringnum[i] < stringnum[j]) {
        // flag it.
        ordered = false;
        break;
      }
    }
  }
  return ordered;
};

// Function to loop through until Peter's number is found.
const PetersNumber = (number) => {
  let nums = Number(number);

  // Keep updating nums with AscendingNumbres() until Peter's number is found.
  while (!TestAscending(nums)) {
    nums = AscendingNumbers(nums);
  }
  return nums;
};

export default PetersNumber;
