// Find the max number in an array

function maxInArray(numbers) {
  let boss = numbers[0]; // ! aita loop er bahire ai maun  dite hbe
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element > boss) {
      boss = element;
    }
  } // `  return basically loop er bahire dite hbe
  return boss;
}
const heights = [167, 190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log("tallest person:", tallest);

// write a function to get  the lowwest number in an array
