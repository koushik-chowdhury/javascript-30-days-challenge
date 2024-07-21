function findTwoGreatest(arr) {
    if (arr.length < 2) {
        return "Array must contain at least two elements.";
    }

    let firstGreatest = -Infinity;
    let secondGreatest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstGreatest) {
            secondGreatest = firstGreatest;
            firstGreatest = arr[i];
        } else if (arr[i] > secondGreatest && arr[i] !== firstGreatest) {
            secondGreatest = arr[i];
        }
    }

    return [firstGreatest, secondGreatest];
}

// Example usage:
const array = [3, 5, 1, 8, 7, 2];
const result = findTwoGreatest(array);
console.log(result); // Output: [8, 7]
