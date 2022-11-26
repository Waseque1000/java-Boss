var shoppingCart = {
  books: 3,
  sunglass: 2,
  kewboard: 1,
  pen: 10,
  mouse: 2,
  shoes: 2,
  //   bottol: 4,
};

console.log();

const bhai = Object.keys(shoppingCart);
const boroBhai = Object.values(shoppingCart);
// console.log(bhai);
// console.log(boroBhai);

for (var i = 0; i < bhai.length; i++) {
  //   const element = array[i];
  //   console.log(bhai[i]);
  var vhaiName = bhai[i]; // normal akta variable  diya age const diya ja variable declear kora hoise oiter dite hbe [i],, dite hbe
  var vhaiValue = shoppingCart[vhaiName]; // akta variable niye object[1st variable dite heb ]
  //   console.log(vhaiName, vhaiValue); //! tahole property r value ek sathe dekha jbe
}
// for in
for (var lullu in shoppingCart) {
  const yoyo = shoppingCart[lullu];
  console.log(lullu, yoyo);
}
