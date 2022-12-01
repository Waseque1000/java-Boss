// ! get sum from an array

// function getSumAddAray(vhai) {
//   let sum = 0;
//   for (let i = 0; i < vhai.length; i++) {
//     const chad = i;
//     const tara = vhai[chad];
//     sum = sum + tara;
//     console.log(chad, tara, sum);
//   }
//   return sum;
// }
// const neww = [32, 45, 234, 564, 132, 341, 354];
// getSumAddAray(neww);

// //! leap year

// function isLeapYear(year) {
//   const reminder = year % 4;
//   if (reminder === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const findYear = isLeapYear(2020);
// console.log(findYear);

//getodd numer of an aray and get odd sum

function getSumOfArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[i];
    console.log(index, element, sum);
    sum = sum + element;
  }
  return sum;
}

function getOddNumberOfANArray(vhai) {
  let oddnumber = [];
  for (let i = 0; i < vhai.length; i++) {
    const index = i;
    const element = vhai[i];
    if (element % 2 !== 0) {
      //   console.log(index, element);
      oddnumber.push(element);
    }
  }
  return oddnumber;
}

const value1 = [32, 435, 47, 235, 144, 97];
// getSumOfArray(value1);

const value2 = [34, 35, 47, 59, 40, 53, 60, 75, 97];
const oddnumber = getOddNumberOfANArray(value2);
console.log(oddnumber);
const boroBoss = getSumOfArray(oddnumber);
console.log(boroBoss);
