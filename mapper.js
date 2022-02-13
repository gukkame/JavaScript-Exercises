function map(arr, fnc) {
    let a = []
    for (let i = 0; i < arr.length; i++) {
        a.push(fnc(arr[i], i, arr))
    }
    return a
}
function flatMap(arr, fnc) {
    let a = []
    for (let i = 0; i < arr.length; i++) {
        a.push(fnc(arr[i], i, arr))
    }

    return a.reduce(
        function (previousValue, currentValue) {
            return previousValue.concat(currentValue)
        },
        []
    )


}