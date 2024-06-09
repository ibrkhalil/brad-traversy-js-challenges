function calculator(x, y, op) {
  switch (op) {
    case "+":
      return x + y;
      break;
    case "-":
      return x - y;
      break;
    case "*":
      return x * y;
      break;
    case "/":
      return x / y;
      break;
    default:
      throw new Error("Invalid operator");
  }
}

module.exports = calculator;
