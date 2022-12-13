// quantity card
// Calculate the total cost of the products in a shopping cart

const shopindCart = [
  { name: "shoe", price: 1200, quantity: 2 },
  { name: "shirt", price: 2200, quantity: 5 },
  { name: "pant", price: 3700, quantity: 4 },
  { name: "belt", price: 700, quantity: 3 },
];

function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < shopindCart.length; i++) {
    const element = shopindCart[i];
    const productTotal = element.price * element.quantity;
    sum = sum + productTotal;
    // b.log(element);
  }
  return sum;
}

const expence = totalCost(shopindCart);
console.log(expence);
