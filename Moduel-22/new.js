/* let vhai = [23.345, 34, 65, 87, 234, 67, 345];
console.log(vhai.includes(11));

console.log(Array.isArray(vhai));
// concat = 2 ta aray add korer jonno
let boss = [342, 34234, 12313, 1231234, 34234, 234, 67567];
console.log(vhai.concat(boss));
 */
/* 
const friends = [23, 34, 13, 09, 345, 57, 78, 24, 13, 23, 21];
// console.log(friends.slice(1, 3));
console.log(friends.splice(1, 3));
console.log(friends);
 */

const class10 = [
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
  const bakiPolaPain = [];

  for (let i = 0; i < class10.length; i++) {
    const element = class10[i];
    if (bakiPolaPain.includes(element) === false) {
      bakiPolaPain.push(element);
    }
  }
  return bakiPolaPain;
}

const eraBiraniPabe = removeDuplicate();
console.log(eraBiraniPabe);
