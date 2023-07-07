function findMax(numArray) {
    let max = numArray[0];
    for (let i = 1; i < numArray.length; i++) {
        if (max < numArray[i]) {
            max = numArray[i];
        }
    }
    return max;
}

const numbers = [1,2,3,4,5,6,7,8];
console.log(findMax(numbers));