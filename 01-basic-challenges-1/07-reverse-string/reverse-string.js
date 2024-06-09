function reverseString(str) {
    const length = str.length
    let newStr = '';
    for (let index = length - 1; index >= 0; --index) {
        newStr+=str[index];
    }
    return newStr
}

module.exports = reverseString;
