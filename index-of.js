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
function lastIndexOf(array, value, index) {
    if (!index) {
        index = array.length - 1
    }

    for (let i = index; i >= 0; i--) {
        if (array[i] === value) {
            return i
        }
    }
    return -1
}

function includes(arr, c) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === c) {
            return true;
        }
    }
}
// console.log("YSSSS", lastIndexOf([0, 0, lastIndexOf, lastIndexOf], lastIndexOf))
// console.log("YSSSS", lastIndexOf([0, 0, lastIndexOf, lastIndexOf], lastIndexOf, 3))
// console.log("YSSSS", lastIndexOf([lastIndexOf, 0, 0, lastIndexOf], lastIndexOf, 2))