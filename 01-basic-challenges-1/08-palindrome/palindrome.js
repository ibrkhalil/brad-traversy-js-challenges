// function isPalindrome(str) {
//     // Clean non alphanumeric
//     const formattedString = str.toLowerCase().replace(/[^a-z0-9]/g, '')
//     const reversedStr = formattedString.split('').reverse().join('')
//     if (reversedStr == formattedString)
//         return true
//     else
//     return false
// }

const ZERO_UNICODE = 48;
const NINE_UNICODE = 57;
const LOWERCASE_A_UNICODE = 97;
const LOWERCASE_Z_UNICODE = 122;

const isPalindrome = (str) => {
    const formattedString = removeNonAlphaNumeric(str.toLowerCase());
    const reversedString = reverseStr(formattedString);
    return reversedString == formattedString
}

const removeNonAlphaNumeric = (str) => {
    let formattedString = '';
    for (let index = 0; index < str.length; index++) {
        const char = str[index];
        if(isAlphaNumeric(char)) formattedString+=char
    }
    return formattedString
}

const isAlphaNumeric = (char) => {
    const charCode = char.charCodeAt(0)
    return (
        (charCode >= ZERO_UNICODE && charCode <= NINE_UNICODE) || // Digits
        (charCode >= LOWERCASE_A_UNICODE && charCode < LOWERCASE_Z_UNICODE) // Lowercase a->z
    )
}

const reverseStr = (str) => {
        let revStr = ''
        for (let index = str.length - 1; index >= 0; --index) revStr+=str[index];
        return revStr;
}


module.exports = isPalindrome;
