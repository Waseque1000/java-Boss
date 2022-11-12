var fruits = [ 'Apple', 'Banana', "Orange"];
var bananaIndex = fruits.indexOf('Banana');  /// ! find Banana index......
fruits[1] = 'Mango';  // ! or  fruits[bananaindex] = 'Mango';
console.log(fruits);
fruits.pop() ; // ? kono kisu remove korer jonno 
console.log(fruits);
fruits.push('watermalon');  // ! kono kisu ad korer jonno
console.log(fruits);