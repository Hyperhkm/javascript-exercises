const add = function(a, b) {
  return Number(a+b);
};

const subtract = function(a, b) {
	return Number(a-b);
};

const sum = function(arraySum) {
  return arraySum.reduce((a,b) => a+b,0);
};

const multiply = function(...multipliesNumbers) {
  return multipliesNumbers.reduce((a,b) => a*b,1);
};

const power = function(a, b) {
  return Number (a**b);
};

const factorial = function(factorialNumber) {
  if (factorialNumber == 0) {return 1;}
  let result = 1;
  for (let decrement = factorialNumber; decrement > 0; decrement--) {
    result *= decrement; 
  }
  return result;
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
