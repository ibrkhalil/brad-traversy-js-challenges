function arrayIntersection(arr1, arr2) {
    let intersection = []
    for (let index = 0; index < arr1.length; index++) {
        const element = arr1[index];
        for (let j = 0; j < arr2.length; j++) {
            if(element === arr2[j])
                intersection.push(element);
        }
    }
    const resSet = new Set(intersection);
    return Array.from(resSet);
}

module.exports = arrayIntersection;
