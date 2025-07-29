class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
}

// Vytvoření objektu Calculator
const calculator = new Calculator();

// Testování metod a výpis výsledků do konzole
console.log("Sečíst 14 + 41:", calculator.add(14, 41));
console.log("Odečíst 174 - 32:", calculator.subtract(174, 32));
console.log("Násobit 47 * 50:", calculator.multiply(47, 50));
console.log("Dělit 125 / 7:", calculator.divide(125, 7)); 