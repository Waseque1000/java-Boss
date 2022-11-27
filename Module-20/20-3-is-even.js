function isEven(number) {
  const reminder = number % 2;

  //   console.log(reminder); // ! aita diye o number er ans jana jay
  if (reminder === 0) {
    // console.log("number is even ");
    return true;
  } else {
    // console.log("number id odd");
    return false;
  }
}
const munumber = isEven(20);
console.log(munumber);
const munumber2 = isEven(33);
console.log(munumber2);
