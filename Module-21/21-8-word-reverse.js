function reverseWord(str) {
  const word = str.split(" ");
  const result = [];
  //   console.log(word);
  for (let i = word.length - 1; i >= 0; i--) {
    const element = word[i];
    result.push(element);
  }
  //   console.log(result);
  const boss = result.join(" "); // aita diye abr join kora hosse
  return boss;
}

const myString = "i am a good buy";
reverseWord(myString);
