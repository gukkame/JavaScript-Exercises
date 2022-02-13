function filter(arr, fnc) {
    let a = []
    for (let i = 0; i < arr.length; i++) {
        fnc(arr[i], i, arr) ? a.push(arr[i]) : 0
    }
    return a
}

//filter but opposite!!!
function reject(arr, fnc) {
    let a = []
    for (let i = 0; i < arr.length; i++) {
        fnc(arr[i], i, arr) ? 0 : a.push(arr[i])
    }
    return a
}

function partition(arr, fnc) {
    let a = []
    let b = []
    for (let i = 0; i < arr.length; i++) {
        fnc(arr[i], i, arr) ? b.push(arr[i]) : a.push(arr[i])
    }

    return [b, a]
}