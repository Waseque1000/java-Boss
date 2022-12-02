let mobile = {
  modle: " Semsung",
  price: 20000,
  color: "red",
  pen: 2,
  Mouse: 1,
};

const keys = Object.keys[mobile];
const value = Object.values[mobile];
for (let key in mobile) {
  const boss = mobile[key];
  console.log(key, boss);
}
