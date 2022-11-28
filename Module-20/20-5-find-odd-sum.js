// Calculate Sum of all numbers of an array
function getSumOfAnArray(number) {
  for (let i = 0; i < number.length; i++) {
    //const element = number[i]; //! aita likhle array vitorer element gua dekhabe
    const element1 = number[i];
    const element = i; // * r aita diye index dekhabe
    console.log(element, element1); //! aikhane 2 ta  variable er dawyer  jonno index r element ek sathe show korbe
  }
}

const myNumber = [12, 13, 14, 15, 16, 17, 18, 66, 53, 43];
// getSumOfAnArray(myNumber);

// 2 tai same

function getArraySum(vhai) {
  let sum = 0;

  for (let i = 0; i < vhai.length; i++) {
    const choto = i;
    const boro = vhai[choto];
    sum = sum + boro;
    console.log(choto, boro, sum);
  }
  return sum;
}

const boroChoto = [32, 45, 34, 67, 8754, 14, 980];
getArraySum(boroChoto);
