var shoppingCart = {
    books : 3 ,
    sunglass: 2 ,
    kewboard : 1,
    pen : 10 ,
    mouse : 2,

}

//! when you know the  property name ,,, use dot notation to get the property value 
var penCount = shoppingCart.pen;
console.log(penCount);
console.log(shoppingCart);

// * alternative system

var penCount2 = shoppingCart['pen'];
console.log(penCount2);
 var properties  = Object.keys(shoppingCart);
 
 var propertiesValue = Object.values(shoppingCart);
 
 console.log(properties);
 console.log(propertiesValue);


 // ? new variable declear kore man bera jay,,,property name a akta variable dite heb .. tar por puro object ar jono aka variable diya 1st variable dite hb
 

 var boss    = 'mouse';

 var vhai = shoppingCart[boss];
 console.log( boss, vhai);




 // ! set property value
 console.log(shoppingCart); 
  shoppingCart.mouse = 15 ;
  console.log(shoppingCart);
  shoppingCart['mouse'] = 20;
  console.log(shoppingCart);