// # Array, includes, concat
const country = " Bangladesh ";
const age = 52;
const isIndependent = true;
const student = { id: 121, class: 11, namee: "agun" };
const friends = [13, 24, 15, 26, 71];

// ? typeOf find
function add(num1, num2) {
  return num1 + num2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friends)); // array cheak korer jonno
console.log(Array.isArray(age));
console.log(typeof add);

//` -------------------
// ! Array.includes()  array vitore kono kisu asekina ta dakher jonno .include use kora hoy
// console.log(friends.includes(15));
if (friends.indexOf(71) !== -1) {
  console.log(true);
} else {
  console.log(false);
}

// ! concat : =  2 ta array add korer jonno ai concat use kora hoy...
const newFriendsAge = [12, 13, 14, 15, 16];
const allFriends = newFriendsAge.concat(friends); // ! new kta variable declear kore .concat ager variable
console.log(allFriends);
