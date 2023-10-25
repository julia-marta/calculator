export const calculate = (val1, val2, operation) => {
  switch (operation) {
    case "addition":
      return val1 + val2;
    case "subtraction":
      return val1 - val2;
    case "multiplication":
      return val1 * val2;
    case "division":
      return val1 / val2;
    default:
      break;
  }
};
