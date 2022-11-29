// function getOddNumberOfAnArray(number) {
//   const oddnumber = [];
//   for (let i = 0; i < number.length; i++) {
//     const findIndex = i;
//     const findEliment = number[i];
//     if (findEliment % 2 !== 0) {
//       console.log(findIndex, findEliment);
//       oddnumber.push(findEliment);
//     }
//   }
//   return oddnumber;
// }

// const numberFind = [24, 35, 15, 47, 69, 76, 345, 2321];
// const oddnumber = getOddNumberOfAnArray(numberFind);
// console.log(oddnumber);
// getOddNumberOfAnArray(oddnumber);
// const sum = getOddNumberOfAnArray(oddnumber);
// console.log(sum);

function getArraySum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    const choto = i;
    const boro = numbers[choto];
    sum = sum + boro;
    // console.log(choto, boro, sum);
  }
  return sum;
}
// !  Get Odd Numbers of an array and get odd Sum of an array
/* aita korer jonno age array  kivabe sum kora lage oitar function likhte hbe  tar por 
1.for loop likhte hbe same ager mto
2. if dite hb e and bolte hbe ja  = 
! (variable) % 2 !== 0  
tar por normaly log index r element er jonno 
! *** function er por akta new variable dita array likhte hbe 
! if er vitore sai khali array .push(element)
* then return array er variable 
array er man likhte hbe 
? tar por....  arrayVariable = function(array man)
* log(khaliu array )
*ar por holo asok kaj ... const sum = getArraySum (khaliVariable );   # getArraySum aita holo prothom function 
* log(sum)
*/
function getOddNumberOfAnArray(numbers) {
  const oddnumber = [];

  for (let i = 0; i < numbers.length; i++) {
    const indexFind = i;
    const elementFind = numbers[indexFind];
    if (elementFind % 2 !== 0) {
      console.log(indexFind, elementFind);
      oddnumber.push(elementFind);
    }
  }
  return oddnumber;
}

const boroChoto = [32, 45, 34, 67, 875, 141, 980];
const oddnumber = getOddNumberOfAnArray(boroChoto);
console.log(oddnumber);
const sum = getArraySum(oddnumber);
console.log(sum);
