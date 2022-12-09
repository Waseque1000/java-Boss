/* const gaan = "tomare dakhiber mone chay dekha daw amay ";
console.log(gaan);
console.log(gaan.indexOf("tomare "));
console.log(gaan.indexOf("mone"));

if (gaan.indexOf("daws") !== -1) {
  console.log(true);
} else {
  console.log(false);
}

//# endsWith
const fileName = "muboidat.pdf";
const other = "dksakdnmk.png";
// console.log(fileName.endsWith(".pdd"));

// # starts end
gaan.startsWith("tomareqq");
console.log(gaan.startsWith("tomare"));

// * ends with
const bossName = "wasequ.wab";
const adress = "lalbag ";
console.log(bossName.endsWith("wab"));
 */

// let num1 = 10;
// let num2 = 20;
// console.log(num1, num2);
// [num1, num2] = [num2, num1];
// console.log(num1, num2);

//? string reverse
function reverseString(text) {
  let boss = " ";
  for (let i = text.length - 1; i >= 0; i--) {
    const element = text[i];
    boss = boss + element;
  }
  return boss;
}

// const myString = "i am a good boy ";
// const neww = reverseString(myString);

// console.log(neww);

// ` word reverse

function reverseWorde(boss) {
  const word = boss.split(" ");
  const result = [];
  for (let i = word.length - 1; i >= 0; i--) {
    const element = word[i];
    result.push(element);
  }
  // console.log(result);
  const reverse = result.join(" ");
  return reverse;
}

const myString = "i am a good boy";
reverseWorde(myString);
// console.log(reverseWorde(myString));

// fibonacci

const fibo = [1, 2];
for (let i = 2; i <= 10; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);
