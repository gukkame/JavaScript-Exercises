function slice(arr, start, end) {
    let result = [];
    if (typeof end === "undefined") {
        end = arr.length
    }
    if (start < 0) {
        start = arr.length + start
    }
    if (end < 0) {
        end = arr.length + end
    }
    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }

    if (Array.isArray(arr)) {
        return result
    } else {
        return result.join("");
    }
}
console.log(slice([1, 2, 3, 4, 5, 6], 2))
console.log(slice('abcdef', 0, 2))
console.log(slice('abcdef', 0, -2))
console.log(slice('abcdef', -3, -1))