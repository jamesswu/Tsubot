/**
 * Converts Celcius to Fahrenheit.
 * @param {number} x - The value to be converted.
 * @return {number} The converted value, in Fahrenheit.
 */
function celciusToFahrenheit(x) {
  return x * 9 / 5 + 32;
}

/**
 * Converts Fahrenheit to Celcius.
 * @param {number} x - The value to be converted.
 * @return {number} The converted value, in Celcius.
 */
function fahrenheitToCelcius(x) {
  return (x - 32) * 5 / 9;
}

module.exports = {
  celciusToFahrenheit,
  fahrenheitToCelcius,
};
