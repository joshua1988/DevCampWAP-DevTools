var displayResult = function() {
  if (exceptionHandlers()) return;
  resultText.innerHTML = getNumber1() + " + " + getNumber2() + " = " + sumNumbers();
  return updateInput();
}
var sumNumbers = function() {
  return getNumber1() + getNumber2();
}
var getNumber1 = function() {
  return inputs[0].value;
}
var getNumber2 = function() {
  return inputs[1].value;
}
var updateInput = function() {
  inputs[0].value = '';
  inputs[1].value = '';
}
var exceptionHandlers = function() {
  if (getNumber1() === '' || getNumber2() === '') {
    resultText.innerHTML = "Put!! the numbers in input boxes.";
    return true;
  }
  return false;
}

var inputs = document.querySelectorAll('input');
var sumBtn = document.getElementById('sumBtn');
var resultText = document.querySelector('blockquote');
sumBtn.addEventListener('click', displayResult);
