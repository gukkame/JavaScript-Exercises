let filterValues = function (obj, filterFunc) {
    let arr = Object.entries(obj)
    const filterArr = [];
    for (let i = 0; i < arr.length; i++) {
        const result = filterFunc(arr[i][1]);
        if (result) filterArr.push(arr[i]);
    }
    return Object.fromEntries(filterArr)

}
let mapValues = function (obj, mapFunc) {
    let arr = Object.entries(obj)
    const mapArr = [];
    for (let i = 0; i < arr.length; i++) {
        const result = mapFunc(arr[i][1]);
        mapArr.push([arr[i][0], result]);
    }
    return Object.fromEntries(mapArr);
}
let reduceValues = function (obj, reducer, initialValue) {
    let arr = Object.values(obj)
    let accumulator = initialValue === undefined ? 0 : initialValue
    for (let i = 0; i < arr.length; i++) {
        accumulator = reducer(accumulator, arr[i], i, arr);
    }
    return accumulator;
}