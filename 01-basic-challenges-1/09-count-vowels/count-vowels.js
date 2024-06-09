function countVowels(str) {
    const vowels = ['a', 'e', 'o', 'i', 'u'];
    let counter = 0;
    let formattedString = str.toLowerCase()
    for (let index = 0; index < formattedString.length; index++) {
        if(formattedString[index] == vowels[0] ||
            formattedString[index] == vowels[1] ||
            formattedString[index] == vowels[2] ||
            formattedString[index] == vowels[3] ||
            formattedString[index] == vowels[4])
            counter++;
    }
    return counter;
}

module.exports = countVowels;
