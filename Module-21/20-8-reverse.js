// ? Reverse a string and Reverse words in a sentence

function reverseString(text) {
  let boss = " "; // empty string dite hbe
  for (let i = text.length - 1; i >= 0; i--) {
    //? aikhane asol kahini holo length sob somoy besi thake r index length thake 1 kom thake
    // ? i = text.length-1 dite hb e
    const element = text[i];
    boss = boss + element; // ! empty string er variable + element
    console.log(element, boss);
  }
  return boss; // ! return empty string
}

const myString = "i am a good person";
// const reverse = reverseString(myString);
const boss = reverseString(myString); // ! function call
console.log(boss);

// const boss = " iam a good person";
// console.log(boss[1]);
// console.log(boss.length);
