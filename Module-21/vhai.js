// Write a function  that will take 3 number will return the max number
// ? write a function that will take 3 paramiter and will return the min number

// condition
// 1 if - else
// math.max /.math.min
// ! if else
// function getMax(num1, num2, num3) {
//   if (num1 > num2 && num1 > num3) {
//     console.log("Number 1 is makhon :", num1);
//   } else if (num2 > num1 && num2 > num3) {
//     console.log("Number 2 is great :", num2);
//   } else {
//     console.log("Number 3 is big", num3);
//   }
// }

// ! MAth.max ... Math.min

function getMax(num1, num2, num3) {
  const result = Math.max(num1, num2, num3);
  const result1 = Math.min(num1, num2, num3);
  console.log(result, result1);
}

getMax(78, 98, 134);
