function reverse(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {

        result.push(arr[i]);

    }
    if (Array.isArray(arr)) {
        return result
    } else {
        return result.join("");
    }
}
console.log(reverse([1, reverse, 3, reverse]));