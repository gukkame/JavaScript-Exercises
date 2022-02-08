function slice(arr, start, end) {
    let result = [];
    let from = Math.max(start, 0);
    let to = Math.min(end);

    if ((!end) || (end > arr.length)) {
        for (let i = from; i < arr.length; i++) {
            result.push(arr[i]);
        }
    } else {
        for (let i = from; i < to; i++) {
            result.push(arr[i]);
        }
    }
    return result.join("");
}
console.log(slice('abcdef', 2))