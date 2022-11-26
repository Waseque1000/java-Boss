var shoppingCart = {
  books: 3,
  sunglass: 2,
  kewboard: 1,
  pen: 10,
  mouse: 2,
};

//! when you know the  property name ,,, use dot notation to get the property value
var penCount = shoppingCart.pen;
console.log(penCount);
console.log(shoppingCart);

// * alternative system

var penCount2 = shoppingCart["pen"];
console.log(penCount2);
var properties = Object.keys(shoppingCart);

var propertiesValue = Object.values(shoppingCart);

console.log(properties);
console.log(propertiesValue);

//  kono preoperty r value ber korer way...akta variable diya ja property er man lagbe  oita dite hbe,,, tar por aro akta variable diya object er nam r 1st variable dite hbe ,,, tahole property r value ber kora jbe ..

var boss = "mouse";

var vhai = shoppingCart[boss];
console.log(boss, vhai);

// ! set property value
console.log(shoppingCart);
shoppingCart.mouse = 15; // ! system -1
console.log(shoppingCart);
shoppingCart["mouse"] = 20; // ! system -2
console.log(shoppingCart);
shoppingCart[boss] = 100; // ! system -3
console.log(shoppingCart);
