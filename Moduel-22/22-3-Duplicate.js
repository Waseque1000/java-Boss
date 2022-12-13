// ! Remove duplicate items from an array
const names = [
  "abul",
  "balul",
  "kabul",
  "habul",
  "lulluul",
  "abul",
  "balul",
  "kabul",
  "lullu",
  "balul",
];

function removeDuplicate(names) {
  const unique = []; //  !blank  array declear korte hbe
  for (let i = 0; i < names.length; i++) {
    const element = names[i];
    if (unique.includes(element) === false) {
      // ? if er vitore blank array.include(element) === false
      unique.push(element); // blank array.push element
    }
  }
  return unique; // return blank array
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
