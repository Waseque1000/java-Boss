const userName = "blackpink";
const userInput = "blackPink";
/* // ! basically kono password a case sencitive kora hoy ..
ai khne username r userinput er man same mone holeo same na tai if er vitore . toLowerCase use kore same kore hoise 
 toLowerCase aita 2 ta variable  ai dite hbe  */
console.log(userInput.toLowerCase());
console.log(userInput.toUpperCase());
console.log(userName.toLocaleLowerCase("tr-u-co-search")); //   kono des er sathe likher change hoite pare
if (userName.toLowerCase() === userInput.toLowerCase()) {
  console.log("valid user");
} else {
  console.log("invalide user");
}
