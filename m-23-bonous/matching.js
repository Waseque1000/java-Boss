// Find the matching product by searching products
const number = [45, 23, 54, 68, 34, 78];
// for (let i = 0; i < number.length; i++) {
//   const element = number[i];
//   console.log(element);
// }

// ? for of loop
for (const element of number) {
  // console.log(element);
}

const products = [
  { id: 1, name: "walton phone ", price: 19000 },
  { id: 2, name: "sansung  phone ", price: 20000 },
  { id: 3, name: "xiami ", price: 18000 },
  { id: 4, name: "iphone  ", price: 80000 },
  { id: 5, name: "nokia Phone  ", price: 24000 },
  { id: 6, name: "mac ", price: 200000 },
  { id: 7, name: "Dell ", price: 75000 },
  { id: 8, name: "cannon ", price: 200000 },
  { id: 9, name: "Hp ", price: 920000 },
  { id: 10, name: "htc  phone ", price: 18000 },
];

// for (const element of products) {
//   console.log(element);
// }

function matchProducts(products, search) {
  const matched = [];
  for (const element of products) {
    // console.log(element.name.includes(search));
    if (element.name.toLowerCase().includes(search.toLowerCase())) {
      //? .toLowerCase dawer karone aita capital r lower sob gulokai same kore fallam
      matched.push(element);
    }
  }
  return matched;
}

const result = matchProducts(products, "Phone");
console.log(result);
