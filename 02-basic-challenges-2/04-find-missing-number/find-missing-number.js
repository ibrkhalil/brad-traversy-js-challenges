function findMissingNumber(array) {
  const max = array.reduce((a, b) => { return Math.max(a, b) });
  for (let index = 1; index <= max; index++) {
    if(!array.includes(index))
        return index
  } 
}

module.exports = findMissingNumber;
