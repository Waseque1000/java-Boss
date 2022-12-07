// * How to split, slice, substr, substring, concat, join

const gaan =
  "tumi bondhu kala pakhi ami jno ki. bosonto kale tomay bolte pari ni. sada sada kaala kala ";
const parts = gaan.split(" "); // ! protita word ke alada kore shoe korbe and akta array vitore nia asbe
const sentence = gaan.split("."); // ! . dile sentence  akare show korbe
const charectere = gaan.split(""); // ! empty rakhle protita word ke alada alada rakhte hbe
// console.log(charectere);

const partial = gaan.slice(4, 7); // ! aita mane holo kono string thake index er man diye kono kisu kete nawya
// console.log(partial);

// ? substring  onek ta slice er mto kaj kore
const vhai = gaan.substring(5, 8);
console.log(vhai);

// ` .at = aita dile 5 no index a ke ase oita dekha jbe
const attt = gaan.at(5);
console.log(attt);

// concat = join kora
const a = "Hellow";
const b = "World";
const c = a + " " + b;
console.log(c);

// ? join = aita diye basically akta  array add kora jay

const line = [
  "tmi bondhu kala pakhi ami jno ki",
  "bosonto kale tomy bolte pari ni",
  "sada sada kaala kala ",
];

const newSong = line.join(" ");
console.log(newSong);

// * character access
const ner = "cat ";
console.log(ner.charAt(1)); // ? kono index diye string er letter / charecter ber kora jay
