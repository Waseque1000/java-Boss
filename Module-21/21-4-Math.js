// ` Math, abs, pow, round, ceil, floor, and random number

const result = Math.pow(2, 2); // ! to di woder ber korer jonno
// console.log(result);

// ? math.abs() = aiter mane = tmi sudhu man ta niba kintu aita ki positive naki negative oita niba na ..
const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);
if (gap < 5) {
  console.log(" you guys can be friends ");
} else {
  console.log(" you guys stay Apart");
}

//` ---------------Math.round() = aita holo  kono dosomik songkha ke purno sonkha korer jonno aita use kora hoy .... **** condition holo . 5 er kon holo ager man e thakbe r . 5 er besi holo pore man hbe
const number = 2.545236;
const fullNumber = Math.round(number);
console.log(fullNumber);

// ? ceiling = Math.ceil = dosomik hole oita upore uthe jbe .. uporerr purnno songkha hbe
const Nnumber = 2.3535;
const NFullNumber = Math.ceil(Nnumber);
console.log(NFullNumber);

// ? floor = Math.floor holo kono dosomik songkha hole oita same songkha hbe upoer uthe jbe na
const floor = 2.9;
const fullFloor = Math.floor(floor);
console.log(fullFloor);

// ` random

console.log(Math.random()); // * aita hole just rendom number dibe
const random = Math.round(Math.random() * 100); // ` math.random jdi round e vitore likhi tahole aita purnno songkha hbe
console.log(random);

// random using for
for (let i = 0; i < 20; i++) {
  const boss = Math.round(Math.random() * 6);
  console.log(boss);
}
