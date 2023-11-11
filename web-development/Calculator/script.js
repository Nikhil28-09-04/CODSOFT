let displayValue = "";

function appendValue(val) {
  displayValue += val;
  document.getElementById("display").value = displayValue;
}

function appendOperator(operator) {
  if (displayValue !== "" && !isNaN(displayValue[displayValue.length - 1])) {
    displayValue += operator;
    document.getElementById("display").value = displayValue;
  }
}

function calculate() {
  if (displayValue !== "" && !isNaN(displayValue[displayValue.length - 1])) {
    let result = eval(displayValue);
    document.getElementById("display").value = result;
    displayValue = result.toString();
  }
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = "";
}
