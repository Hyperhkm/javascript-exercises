const convertToCelsius = function(fahrenheit) {     
  let convertedTemperature = (fahrenheit -32)/1.8;
  return Math.round (convertedTemperature*10)/10;
};

const convertToFahrenheit = function(celsius) {
  let convertedTemperature = (celsius*1.8) + 32
  return Math.round(convertedTemperature*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
