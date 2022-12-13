//!  Handle unexpected function input parameter error
function add(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    // typeof jdi string hoy tahole akta error dibe oitai bola hoise aikhane
    return " Please enter a number";
  }

  return num1 + num2;
}

const result = add(12, 45);
// console.log(result);

function multiply(num1, num2) {
  return num1 * num2;
}
const output = multiply(10, 45);
console.log(output);
