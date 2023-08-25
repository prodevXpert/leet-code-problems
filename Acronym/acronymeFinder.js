function findAcronyme(words, s) {
  let wordsAcronym = "";
  words.map((word) => {
    return wordsAcronym += word[0];
  });
  console.log(wordsAcronym);
  return wordsAcronym === s ? true : false;
}

let array = ["an", "apple"];
const result = findAcronyme(array, "a");
console.log(result);
