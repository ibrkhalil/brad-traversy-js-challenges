function countOccurrences(string, target) {
    const length = string.length
    let counter = 0;
    for (let i = 0; i < length; ++i) {
        if (string[i] == target) {
            counter++;
        }
      }
      return counter;
}

module.exports = countOccurrences;
