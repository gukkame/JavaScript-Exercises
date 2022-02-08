function slice(arr, start, end) {
    let result = [];
    // let from = Math.max(start, 0);
    // let to = Math.min(end);
    // console.log(end)
    if (typeof end === "undefined") {
        end = arr.length
    }
    if (start < 0) {
        start = arr.length + start
    }
    if (end < 0) {
        end = arr.length + end
    }

    // if ((!end) || (end > arr.length)) {
    //     for (let i = from; i < arr.length; i++) {
    //         result.push(arr[i]);
    //     }
    // } else {
    // console.log(end)
    // console.log(start)
    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }

    return result.join("");
}
console.log(slice('abcdef', -2))
console.log(slice('abcdef', 0, 2))
console.log(slice('abcdef', 0, -2))
console.log(slice('abcdef', -3, -1))