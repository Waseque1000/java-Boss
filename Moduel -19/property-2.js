/* var shop = {
    Potato: 30,
    tomato: 40,
    bottle: 30,
    pen: 20,
    mobile: "samsung"

}



/* 

//* alternative system

var penCount2 = shoppingCart['pen'];
console.log(penCount2);
 var properties  = Object.keys(shoppingCart);
 
 var propertiesValue = Object.values(shoppingCart);
 
 console.log(properties);
 console.log(propertiesValue);
 */

/*

var new1 = shop.Potato ;
console.log(new1);

var boss12 = Object.keys(shop);
var vhai = Object.values(shop);
console.log(boss12);
console.log(vhai); */


var shoppingCart = {
    books: 3,
    sunglass:1,
    keyboard: 5,
    mouse:3,
    pen:25
}

// when you know the specific property name use dot notation  to get the property value
var penCount = shoppingCart.pen;

// ! alternati system 

var penCount2 = shoppingCart["pen"];  // * spaific akta property er man dekher jonno 
console.log(penCount2);


// * sob properties/ keyes dekher jonno  aita use kora hoy 
var properties = Object.keys(shoppingCart)
console.log(properties);


// * sob properties er value dekher jonnooo....
var propertiesValue = Object.values (shoppingCart);
console.log(propertiesValue);

//console.log(shoppingCart);



//  !  aita aktu vinno way,,,   aita dia kono property  er value ber kora jay...
var mobile = 'mouse';

var mobileName = shoppingCart[mobile];

console.log(mobileName);

//   * kono property er value change korer jonno

console.log(shoppingCart);
shoppingCart.mouse = 30;
console.log(shoppingCart); 
shoppingCart['mouse'] = 40;  // ! properter vinno way
console.log(shoppingCart);