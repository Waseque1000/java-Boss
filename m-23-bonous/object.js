const friends = {
  name: "Sakib Khan ",
  id: 121,
  adress: "24/545kc",
  isSingle: true,
  friends: ["apu", "sakib", "salman", "amir"],
  movie: [
    { name: "hero 1", year: 2015 },
    { name: "boss", year: 2013 },
  ],
  act: function () {
    console.log("acting like sakib khan ");
  },
  car: {
    brand: "tasla",
    price: 50000000,
    made: 2025,
    manuFacture: {
      name: "tasla",
      ceo: "Elon Mask",
    },
  },
};

console.log(friends);
