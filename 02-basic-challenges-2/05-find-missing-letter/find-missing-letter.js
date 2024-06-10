function findMissingLetter(array) {
  const lowerCased = array[0].toLowerCase() === array[0];
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = lowerCased
    ? "abcdefghijklmnopqrstuvwxyz"
    : "abcdefghijklmnopqrstuvwxyz".toUpperCase();

  const startIdx = lowerCased
    ? alphabet.indexOf(array[0].toLowerCase())
    : alphabet.indexOf(array[0].toUpperCase());
  const endIdx = lowerCased
    ? alphabet.indexOf(array[array.length - 1].toLowerCase())
    : alphabet.indexOf(array[array.length - 1].toUpperCase());
  const searchString = alphabet.substring(startIdx, endIdx + 1);
  for (let index = 0; index < searchString.length; index++) {
    if (!array.includes(searchString[index])) {
      return searchString[index];
    }
  }
}

module.exports = findMissingLetter;
