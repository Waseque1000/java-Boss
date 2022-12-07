// ` Apply Search includes, indexOf, startswith, endswith
const lyrics =
  "tmi bondhu kala pakhi ami jno kki ,,, bosonto kale to re bolte pri nai ";
// const serchString = "kaLa";
// const doesExist = lyrics.includes("Kala");
// const lyricsLowercase = lyrics.toLowerCase();
// const doesExist = lyricsLowercase.includes("kala");
// const serchStringlower = serchString.toLowerCase();
// const doesExist = lyricsLowercase.includes(serchString);
const doesExistOneline = lyrics.toLowerCase().includes("kaLa".toLowerCase()); // ! one line er mojaaaaaaa
// console.log(doesExist);
// console.log(doesExistOneline);

//  # indexof
console.log(lyrics.indexOf("kala"));
console.log(lyrics.indexOf("tmi"));

// `
if (lyrics.indexOf("sada") !== -1) {
  console.log("exists inside the strin ");
} else {
  console.log(" cannot find ");
}

// * startsWith
// lyrics.startsWith("tmi");
console.log(lyrics.startsWith("tmi"));

//# endsWith
const fileName = "muboidat.pdf";
const other = "dksakdnmk.png";
console.log(fileName.endsWith(".pdd"));
