function areAllCharactersUnique(str) {
  const strToCharArr = [];
  for (let index = 0; index < str.length; index++) {
    strToCharArr.push(str[index]);
  }
  const comparisonSet = new Set(strToCharArr);
  return comparisonSet.size === strToCharArr.length;
}

module.exports = areAllCharactersUnique;
