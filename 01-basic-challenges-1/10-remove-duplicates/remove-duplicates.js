function removeDuplicates(arr) {
    const uniqueArr = new Set([...arr]);
    return Array.from(uniqueArr);
}

module.exports = removeDuplicates;
