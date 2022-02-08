function indexOf(arr, c, start) {
    let s = 0
    if (start != undefined) {
        s = start
    }

    for (let i = s; i < arr.length; i++) {
        if (arr[i] === c) {
            return i;
        }
    }

    return -1;
}
function lastIndexOf(arr, c, start) {
    let s = 0
    if (start != undefined) {
        s = start
    }
    for (let i = arr.length; i > 0; i--) {
        if (arr[i] === c) {
            return i;
        }
    }
    return -1;
}
function includes(arr, c) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === c) {
            return true;
        }
    }
}
// console.log(lastIndexOf([0, 0, lastIndexOf, lastIndexOf], lastIndexOf, 2))