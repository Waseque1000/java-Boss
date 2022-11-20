// var shoppingCart = {
//     books : 3 ,
//     sunglass: 2 ,
//     kewboard : 1,
//     pen : 10 ,
//     mouse : 2,
//     shoes: 2,

// }

// aray r property er differnt holo array te kono value likha jay na... r object  holo  property r value 2 tai likha jay 
var shoppingItems = ['books', ' pen','mouse','shors', 'keybords']


var shoppingCart = {
    books : 3 ,
    sunglass: 2 ,
    kewboard : 1,
    pen : 10 ,
    mouse : 2,
    shoes: 2,
  //   bottol: 4,

}
// console.log(shoppingCart);

// !  akta object er keys r valus dekher jonno ai 2 ta line likhte hbe 
const keys = Object.keys(shoppingCart);
 //console.log(keys); // * aita diye object er  property  show korano jbe ...

const value = Object.values(shoppingCart);
//console.log(value); // * r aita diya akta property er value show kora jbe 


// for(var i = 0; boss.length; i++  ){
    //     console.log(boss[i]);
    // }
    
    
// ! for in loop 

for ( var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    // console.log(propertyName, value);
    
}

for(var i = 0; i < keys.length; i++){
    //console.log(keys[i]);
    var propertyName = keys[i];
    var propertyValue  = shoppingCart[propertyName]
     console.log(propertyName, propertyValue);
}