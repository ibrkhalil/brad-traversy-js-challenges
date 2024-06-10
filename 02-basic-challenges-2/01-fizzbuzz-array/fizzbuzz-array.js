function fizzBuzzArray(num) {
    const resArr = [];
    for (let index = 1; index <= num; index++) {
        if(index % 3 == 0 && index % 5 == 0) {
            resArr.push('FizzBuzz')
        } else if (index % 3 == 0) {
            resArr.push('Fizz');
        } else if (index % 5 == 0) {
            resArr.push('Buzz');
        } else
            resArr.push(index);        
    }
    return resArr;

}

module.exports = fizzBuzzArray;
