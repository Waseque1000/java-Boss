// ?  Find the cheapest phone from an array of phone objects

const phones = [
  {
    name: "samsung",
    camera: 12,
    storage: "64gb",
    price: 36000,
    color: "silver",
  },
  {
    name: "walton",
    camera: 10,
    storage: "32gb",
    price: 22000,
    color: "silver",
  },
  {
    name: "Iphone",
    camera: 10,
    storage: "32gb",
    price: 82000,
    color: "silver",
  },
  {
    name: "Xoami",
    camera: 10,
    storage: "32gb",
    price: 53000,
    color: "silver",
  },
  {
    name: "Oppo",
    camera: 10,
    storage: "32gb",
    price: 30000,
    color: "silver",
  },
  {
    name: "Nokai",
    camera: 10,
    storage: "32gb",
    price: 100000,
    color: "silver",
  },
];

function cheapestPhone(phones) {
  let cheapest = phones[0]; // ? akta  array likhte hbe and ai array kaj holo 1st index er sathe baki gula compair kora
  for (let i = 0; i < phones.length; i++) {
    const element = phones[i];
    if (element.price < cheapest.price) {
      // ! if er vitore element er price r new array compair korte hbe
      cheapest = element; // ! new variable = element
    }
  }
  return cheapest; // ! return new variable
}

const myselection = cheapestPhone(phones);
console.log(myselection);
