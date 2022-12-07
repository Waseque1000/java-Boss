// Swap variable, swap without temp, destructing

let first = 5;
let secound = 7;
console.log(first, secound);
// ! this is wrong approach
// 1st ta thik ase 2 nd ta man pai
// first = secound;
// secound = first;

// ` approach 01
//  ? temp  holo akter man jokhon onno akter sathe change kora lage tokhon temp use kora hoy,,,, prothome first er man  akta  variable er vitore rakhte hb e t tar por oita ke change korer somoy oi variable diye call kore use korte hbe
const temp = first;
first = secound;
secound = temp;
// console.log(first, secound);

//

// approach 02 ---- Disturcting

let num1 = 10;
let num2 = 20;
console.log(num1, num2);
[num1, num2] = [num2, num1];
console.log(num1, num2);
