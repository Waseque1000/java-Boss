// inche to feet

function incheToFeet(inche) {
  const feet = inche / 12;
  return feet;
}

const dadainche = 200;
const dadafeet = incheToFeet(dadainche);
console.log(dadafeet);
