//  !Factorial using a while loop or a decrementing loop

// * factorial holo 1 thake oi shonker gun
// function factorial(number) {
//   for (let i = number; i >= 1; i--) {
//     console.log(i);
//   }
// }

// factorial(9);

function factorial(number) {
  let fact = 1;
  for (let i = number; i >= 1; i--) {
    fact = fact * i;
    // console.log(i);
  }
  return fact;
}

const vhai = factorial(9);
// console.log(vhai);

// while looop

function factorial(number) {
  let num = 1;
  let result = 1;
  while (num <= number) {
    result = result * num;
    num++;
  }
  return result;
}
const vhai2 = factorial(8);
// console.log(vhai2);

// factorial while reverse way
function factorial(number) {
  let num = number;
  let result = 1;

  while (i >= 1) {
    result = result * i;
    i--;
  }
  return result;
}
const boro = factorial(7);
console.log(boro);
