//! Unit Convert Inch to Feet

// const myInches = 12;
// const myfeet = myInches / 12;
// console.log(myfeet);

// const dadaInches = 144;
// const dadaFeed = dadaInches / 12;
// console.log("dada feet", dadaFeed);

// const dadiInches = 60;
// const dadiFeet = dadiInches / 12;
// console.log(dadiFeet);

// * ai  inch to feed korer jonno normal akta variable diya ber kora jay...'
// ! kintu ai ta function a ber korer jonno  function declear korre akta peramiter dite hbe ..tar por const akta variable diya peramiter / 12 dite hbe,,,,
// * return  const er variable

function inchToFeet(inches) {
  const feed = inches / 12;
  return feed;
}
const dadaInches = 144; // * aita diya akjon er man declear kora hoise
const dadaFeed = inchToFeet(dadaInches); // program call kora hoise
console.log(dadaFeed); //  ja variable declear kora hoise oite  log a dawya hoise

const nanaInc = 150;
const nanafeet = inchToFeet(nanaInc);
console.log(nanafeet);

const vhai = 120;
const bhai = inchToFeet(vhai);
console.log(bhai);

// !  miles to kilometer
// km = miles*1.60934

function milesToKilometer(miles) {
  const km = miles * 1.60934;
  return km;
}

const boroBhai = 300;
const boss = milesToKilometer(boroBhai);
console.log(boss);

// practise
// km = miles*1.60934
// inche to feet

f; /* unction inchToFeet(inche) {
  const feet = inche / 12;
  return feet;
}

const ratulInches = 144;
const ratulfeet = inchToFeet(ratulInches);
console.log(ratulfeet);

function kmToMiles(km) {
  const kilo = km * 1.60934;
  return kilo;
}
const dhakaToKhagrachhari = 265;
const dhakaToKhagrachhatiMiles = kmToMiles(dhakaToKhagrachhari);
console.log(dhakaToKhagrachhatiMiles);

const boroBhai = 300;
const boss = kmToMiles(boroBhai);
console.log(boss);
 */
