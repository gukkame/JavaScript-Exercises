function fold(arr, fnc, n) {
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        n = fnc(n, arr[i])
    }
    // console.log(n);
    return n
}
function foldRight(arr, fnc, n) {
    // console.log(arr);
    for (let i = arr.length - 1; i >= 0; i--) {
        n = fnc(n, arr[i])
    }
    // console.log(n);
    return n

}
function reduce(arr, fnc) {
    let s = ""
    let n = 0
    if (n < 0) {
        throw Error
    }

    if (typeof arr[0] === 'number') {
        for (let i = 0; i < arr.length; i++) {
            n = fnc(n, arr[i])
            console.log(n);
        }
        return n
    }
    if (typeof arr[0] === 'object') {
        let a


        a = Object.assign(arr[0], arr[1], arr[2])

        return a
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            s += arr[i]
        }
        return s
    }
}
function reduceRight(arr, fnc) {
    console.log(arr);
    let s = ""
    let n = 0
    if (n < 0) {
        throw Error
    }

    if (typeof arr[0] === 'number') {
        for (let i = arr.length - 1; i >= 0; i--) {
            n = fnc(n, arr[i])
        }
        return n
    }
    if (typeof arr[0] === 'object') {
        let a
        a = Object.assign(arr[0], arr[1], arr[2])
        return a
    }
    else {
        for (let i = arr.length - 1; i >= 0; i--) {
            s += arr[i]
        }
        return s
    }
}