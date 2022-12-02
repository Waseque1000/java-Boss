let brazil = {
  player1: "Naymer",
  player2: "Antoni",
  player3: "Vini ",
  player4: "Casmiro",
  player5: "Danilo",
  player6: "Rafinha",
  player7: "Silva",
  player8: "Alison",
};

const keys = Object.keys[brazil];
const value = Object.values[brazil];
for (let key in brazil) {
  const boss = brazil[key];
  console.log(key, "=", boss);
}
