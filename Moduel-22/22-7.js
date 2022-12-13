// Calculate the total cost of the products in a shopping cart

const shopindCart = [
  { name: "shoe", price: 1200 },
  { name: "shirt", price: 2200 },
  { name: "pant", price: 3700 },
  { name: "belt", price: 700 },
];

function totalCost(products) {
  let sum = 0; // ! add er jonno aita norlam
  for (let i = 0; i < shopindCart.length; i++) {
    const element = shopindCart[i];
    sum = sum + element.price; // ! sum = sum + element.price ... karon amra element ta add kortasi na addd kortesi element er price
    // console.log(element);
  }
  return sum;
}

const expence = totalCost(shopindCart);
console.log(expence);
