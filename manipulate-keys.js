let filterKeys = function (obj, filterFunc) {
    let arr = Object.entries(obj)
    const filterArr = [];
    for (let i = 0; i < arr.length; i++) {
        ;
        const result = filterFunc(arr[i][0]);
        if (result) filterArr.push(arr[i]);
    }
    return Object.fromEntries(filterArr)

}
let mapKeys = function (obj, mapFunc) {
    let arr = Object.entries(obj)
    const mapArr = [];
    for (let i = 0; i < arr.length; i++) {
        const result = mapFunc(arr[i][0]);
        mapArr.push([result, arr[i][1]]);
    }
    return Object.fromEntries(mapArr);
}
let reduceKeys = function (obj, reducer, initialValue) {
    let arr = Object.entries(obj)
    let flag = false
    if (initialValue === null) {
        flag = true
    }
    if (initialValue === undefined) {
        flag = true
    }
    if (initialValue === 0) {
        return 1
    }
    let accumulator = flag ? arr[0][0] : initialValue + arr[0][0] + initialValue
    for (let i = 1; i < arr.length; i++) {
        accumulator = reducer(accumulator, arr[i][0], arr);
    }
    return accumulator;
}