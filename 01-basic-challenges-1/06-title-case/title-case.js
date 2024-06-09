function titleCase(str) {
    const wordArr = str.split(' ');
    for(let i = 0; i < wordArr.length; ++i) {
        wordArr[i] = wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
    }
    return wordArr.join(' ');
    
}

module.exports = titleCase;
